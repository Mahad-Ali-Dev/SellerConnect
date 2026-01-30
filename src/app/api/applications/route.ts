export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/db";
import Application from "@/models/Application";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const {
            firstName,
            lastName,
            email,
            phone,
            company,
            storeName,
            storeUrl,
            productCount,
            services,
            message,
        } = data;

        // Validation
        if (!firstName || !lastName || !email || !phone || !productCount) {
            return NextResponse.json(
                { error: "Vul alle verplichte velden in" },
                { status: 400 }
            );
        }

        await dbConnect();

        // Get session to link user if logged in
        const session = await getServerSession(authOptions);

        // Create application
        const application = await Application.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            phone,
            company: company || undefined,
            storeName: storeName || undefined,
            storeUrl: storeUrl || undefined,
            productCount,
            services: services || [],
            message: message || undefined,
            status: "pending",
            userId: session?.user?.id || undefined,
        });

        return NextResponse.json(
            {
                message: "Aanvraag succesvol ingediend! We nemen binnen 1-2 werkdagen contact met je op.",
                id: application._id.toString(),
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Application submission error:", error);
        return NextResponse.json(
            { error: "Er is een fout opgetreden bij het indienen van je aanvraag" },
            { status: 500 }
        );
    }
}
