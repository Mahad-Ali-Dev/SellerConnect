export const dynamic = "force-dynamic";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Alle velden zijn verplicht" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Ongeldig e-mailadres" },
                { status: 400 }
            );
        }

        // Use Admin Client to bypass RLS for public submissions
        const supabaseAdmin = createAdminClient();

        // Insert contact submission into Supabase
        const { data, error } = await supabaseAdmin
            .from('contact_submissions')
            .insert({
                name,
                email,
                subject,
                message,
                status: 'new',
            })
            .select()
            .single();

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json(
                { error: error.message || "Fout bij het opslaan van je bericht" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            message: "Bedankt! Je bericht is verzonden. We nemen zo snel mogelijk contact met je op.",
            id: data.id
        });
    } catch (error: any) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: error.message || "Er is een fout opgetreden" },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    try {
        const supabase = await createClient();

        // Check if user is authenticated (for admin)
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json(
                { error: "Niet geautoriseerd" },
                { status: 401 }
            );
        }

        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single();

        if (profile?.role !== 'admin') {
            return NextResponse.json(
                { error: "Niet geautoriseerd" },
                { status: 401 }
            );
        }

        const { data, error } = await supabase
            .from('contact_submissions')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            throw error;
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return NextResponse.json(
            { error: "Fout bij het ophalen van berichten" },
            { status: 500 }
        );
    }
}
