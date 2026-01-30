import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import * as XLSX from "xlsx";
import dbConnect from "@/lib/db";
import User from "@/models/User";
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

        const users = await User.find({})
            .select("-password")
            .sort({ createdAt: -1 });

        // Prepare data for Excel
        const data = users.map((user) => ({
            ID: user._id.toString(),
            Naam: user.name,
            Email: user.email,
            Telefoon: user.phone || "",
            Bedrijf: user.company || "",
            Rol: user.role,
            Aangemaakt: user.createdAt.toISOString(),
        }));

        // Create workbook
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Gebruikers");

        // Generate buffer
        const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

        return new NextResponse(buf, {
            headers: {
                "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "Content-Disposition": `attachment; filename="gebruikers_${new Date().toISOString().split("T")[0]}.xlsx"`,
            },
        });
    } catch (error) {
        console.error("Error exporting users:", error);
        return NextResponse.json(
            { error: "Error exporting users" },
            { status: 500 }
        );
    }
}
