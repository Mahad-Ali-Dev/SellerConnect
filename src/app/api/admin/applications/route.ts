import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/db";
import Application from "@/models/Application";
import { authOptions } from "@/lib/auth";

async function isAdmin() {
    const session = await getServerSession(authOptions);
    return session?.user?.role === "admin";
}

// GET - List all applications
export async function GET() {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        const applications = await Application.find({}).sort({ createdAt: -1 });

        return NextResponse.json({ applications });
    } catch (error) {
        console.error("Error fetching applications:", error);
        return NextResponse.json(
            { error: "Error fetching applications" },
            { status: 500 }
        );
    }
}
