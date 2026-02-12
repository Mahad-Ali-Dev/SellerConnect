export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET - List all applications
export async function GET() {
    try {
        const supabase = await createClient();

        // Authorization check
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single();

        if (profile?.role !== 'admin') {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Fetch Data
        const { data: applications, error } = await supabase
            .from('applications')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        // Map snake_case (DB) to camelCase (Frontend)
        const mappedApplications = applications.map(app => ({
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
        }));

        return NextResponse.json({ applications: mappedApplications });
    } catch (error) {
        console.error("Error fetching applications:", error);
        return NextResponse.json(
            { error: "Error fetching applications" },
            { status: 500 }
        );
    }
}
