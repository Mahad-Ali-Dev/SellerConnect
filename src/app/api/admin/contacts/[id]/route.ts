import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/db";
import ContactSubmission from "@/models/ContactSubmission";
import { authOptions } from "@/lib/auth";

async function isAdmin() {
    const session = await getServerSession(authOptions);
    return session?.user?.role === "admin";
}

// GET - Get single contact
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        const contact = await ContactSubmission.findById(params.id);

        if (!contact) {
            return NextResponse.json({ error: "Contact not found" }, { status: 404 });
        }

        return NextResponse.json({ contact });
    } catch (error) {
        console.error("Error fetching contact:", error);
        return NextResponse.json(
            { error: "Error fetching contact" },
            { status: 500 }
        );
    }
}

// PUT - Update contact status
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

        const contact = await ContactSubmission.findByIdAndUpdate(
            params.id,
            { $set: data },
            { new: true }
        );

        if (!contact) {
            return NextResponse.json({ error: "Contact not found" }, { status: 404 });
        }

        return NextResponse.json({ contact, message: "Contact updated successfully" });
    } catch (error) {
        console.error("Error updating contact:", error);
        return NextResponse.json(
            { error: "Error updating contact" },
            { status: 500 }
        );
    }
}

// DELETE - Delete contact
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        const contact = await ContactSubmission.findByIdAndDelete(params.id);

        if (!contact) {
            return NextResponse.json({ error: "Contact not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.error("Error deleting contact:", error);
        return NextResponse.json(
            { error: "Error deleting contact" },
            { status: 500 }
        );
    }
}
