export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

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

        const supabase = await createClient();
        const supabaseAdmin = createAdminClient();

        // Get session to link user if logged in (optional)
        const { data: { user } } = await supabase.auth.getUser();

        // Create application using Admin Client to bypass RLS
        const { data: application, error } = await supabaseAdmin
            .from('applications')
            .insert({
                first_name: firstName,
                last_name: lastName,
                email: email.toLowerCase(),
                phone,
                company: company || null,
                store_name: storeName || null,
                store_url: storeUrl || null,
                product_count: productCount,
                services: services || [],
                message: message || null,
                status: "pending",
                user_id: user?.id || null,
            })
            .select()
            .single();

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json(
                { error: error.message || "Fout bij het opslaan van aanvraag" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message: "Aanvraag succesvol ingediend! We nemen binnen 1-2 werkdagen contact met je op.",
                id: data.id,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Application submission error:", error);
        return NextResponse.json(
            { error: error.message || "Er is een fout opgetreden bij het indienen van je aanvraag" },
            { status: 500 }
        );
    }
}
