export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import * as XLSX from "xlsx";
import dbConnect from "@/lib/db";
import ContactSubmission from "@/models/ContactSubmission";
import { authOptions } from "@/lib/auth";

async function isAdmin() {
    const session = await getServerSession(authOptions);
    return session?.user?.role === "admin";
}

export async function GET() {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        const contacts = await ContactSubmission.find({}).sort({ createdAt: -1 });

        // Prepare data for Excel
        const data = contacts.map((contact) => ({
            ID: contact._id.toString(),
            Naam: contact.name,
            Email: contact.email,
            Onderwerp: contact.subject,
            Bericht: contact.message,
            Status: contact.status,
            Datum: contact.createdAt.toISOString(),
        }));

        // Create workbook
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Contacten");

        // Generate buffer
        const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

        return new NextResponse(buf, {
            headers: {
                "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "Content-Disposition": `attachment; filename="contacten_${new Date().toISOString().split("T")[0]}.xlsx"`,
            },
        });
    } catch (error) {
        console.error("Error exporting contacts:", error);
        return NextResponse.json(
            { error: "Error exporting contacts" },
            { status: 500 }
        );
    }
}
