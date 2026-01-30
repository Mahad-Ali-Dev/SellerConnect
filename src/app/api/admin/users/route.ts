import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Check if user is admin
async function isAdmin() {
    const session = await getServerSession(authOptions);
    return session?.user?.role === "admin";
}

// GET - List all users
export async function GET() {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        const users = await User.find({})
            .select("-password")
            .sort({ createdAt: -1 });

        return NextResponse.json({ users });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Error fetching users" },
            { status: 500 }
        );
    }
}
