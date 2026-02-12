export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET - Get single application
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const supabase = await createClient();

        // Auth Check
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
        if (profile?.role !== 'admin') return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        // Fetch
        const { data: app, error } = await supabase
            .from('applications')
            .select('*')
            .eq('id', params.id)
            .single();

        if (error || !app) {
            return NextResponse.json({ error: "Application not found" }, { status: 404 });
        }

        // Map
        const application = {
            _id: app.id,
            firstName: app.first_name,
            lastName: app.last_name,
            email: app.email,
            phone: app.phone,
            company: app.company,
            storeName: app.store_name,
            storeUrl: app.store_url,
            productCount: app.product_count,
            services: app.services || [],
            message: app.message,
            status: app.status,
            createdAt: app.created_at
        };

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
        const supabase = await createClient();

        // Auth Check
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
        if (profile?.role !== 'admin') return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const data = await request.json();

        // Update
        const { data: app, error } = await supabase
            .from('applications')
            .update({ status: data.status })
            .eq('id', params.id)
            .select()
            .single();

        if (error || !app) {
            return NextResponse.json({ error: "Application not found" }, { status: 404 });
        }

        const application = {
            _id: app.id,
            firstName: app.first_name,
            lastName: app.last_name,
            email: app.email,
            phone: app.phone,
            company: app.company,
            storeName: app.store_name,
            storeUrl: app.store_url,
            productCount: app.product_count,
            services: app.services || [],
            message: app.message,
            status: app.status,
            createdAt: app.created_at
        };

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
        const supabase = await createClient();

        // Auth Check
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
        if (profile?.role !== 'admin') return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { error } = await supabase
            .from('applications')
            .delete()
            .eq('id', params.id);

        if (error) {
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
