import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function isAdmin() {
    const session = await getServerSession(authOptions);
    return session?.user?.role === "admin";
}

// GET - Get single user
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        const user = await User.findById(params.id).select("-password");

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json(
            { error: "Error fetching user" },
            { status: 500 }
        );
    }
}

// PUT - Update user
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

        const user = await User.findByIdAndUpdate(
            params.id,
            { $set: data },
            { new: true }
        ).select("-password");

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user, message: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json(
            { error: "Error updating user" },
            { status: 500 }
        );
    }
}

// DELETE - Delete user
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        const user = await User.findByIdAndDelete(params.id);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json(
            { error: "Error deleting user" },
            { status: 500 }
        );
    }
}
