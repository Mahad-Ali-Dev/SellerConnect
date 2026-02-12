export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET - List all contact submissions
export async function GET() {
    try {
        const supabase = await createClient();

        // Auth Check
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
        if (profile?.role !== 'admin') return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        // Fetch
        const { data: contacts, error } = await supabase
            .from('contact_submissions')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        // Map
        const mappedContacts = contacts.map(contact => ({
            _id: contact.id,
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            message: contact.message,
            status: contact.status,
            createdAt: contact.created_at
        }));

        return NextResponse.json({ contacts: mappedContacts });
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return NextResponse.json(
            { error: "Error fetching contacts" },
            { status: 500 }
        );
    }
}
