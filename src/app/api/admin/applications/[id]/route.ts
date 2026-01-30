export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/db";
import Application from "@/models/Application";
import { authOptions } from "@/lib/auth";

async function isAdmin() {
    const session = await getServerSession(authOptions);
    return session?.user?.role === "admin";
}

// GET - Get single application
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        const application = await Application.findById(params.id);

        if (!application) {
            return NextResponse.json({ error: "Application not found" }, { status: 404 });
        }

        return NextResponse.json({ application });
    } catch (error) {
        console.error("Error fetching application:", error);
        return NextResponse.json(
            { error: "Error fetching application" },
            { status: 500 }
        );
    }
}

// PUT - Update application status
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const data = await request.json();

        await dbConnect();

        const application = await Application.findByIdAndUpdate(
            params.id,
            { $set: data },
            { new: true }
        );

        if (!application) {
            return NextResponse.json({ error: "Application not found" }, { status: 404 });
        }

        return NextResponse.json({ application, message: "Application updated successfully" });
    } catch (error) {
        console.error("Error updating application:", error);
        return NextResponse.json(
            { error: "Error updating application" },
            { status: 500 }
        );
    }
}

// DELETE - Delete application
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        const application = await Application.findByIdAndDelete(params.id);

        if (!application) {
            return NextResponse.json({ error: "Application not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Application deleted successfully" });
    } catch (error) {
        console.error("Error deleting application:", error);
        return NextResponse.json(
            { error: "Error deleting application" },
            { status: 500 }
        );
    }
}
