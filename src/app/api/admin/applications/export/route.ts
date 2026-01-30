import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import * as XLSX from "xlsx";
import dbConnect from "@/lib/db";
import Application from "@/models/Application";
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

        const applications = await Application.find({}).sort({ createdAt: -1 });

        // Prepare data for Excel
        const data = applications.map((app) => ({
            ID: app._id.toString(),
            Voornaam: app.firstName,
            Achternaam: app.lastName,
            Email: app.email,
            Telefoon: app.phone,
            Bedrijf: app.company || "",
            Winkelnaam: app.storeName || "",
            "Winkel URL": app.storeUrl || "",
            "Aantal Producten": app.productCount,
            Diensten: app.services.join(", "),
            Bericht: app.message || "",
            Status: app.status,
            Datum: app.createdAt.toISOString(),
        }));

        // Create workbook
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Aanvragen");

        // Generate buffer
        const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

        return new NextResponse(buf, {
            headers: {
                "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "Content-Disposition": `attachment; filename="aanvragen_${new Date().toISOString().split("T")[0]}.xlsx"`,
            },
        });
    } catch (error) {
        console.error("Error exporting applications:", error);
        return NextResponse.json(
            { error: "Error exporting applications" },
            { status: 500 }
        );
    }
}
