"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    LayoutDashboard,
    Users,
    Mail,
    FileText,
    LogOut,
    Shield,
} from "lucide-react";

const navItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/users", icon: Users, label: "Gebruikers" },
    { href: "/admin/contacts", icon: Mail, label: "Contacten" },
    { href: "/admin/applications", icon: FileText, label: "Aanvragen" },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const checkUser = async () => {
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                router.push("/auth/login");
                return;
            }

            const { data: profile } = await supabase
                .from('profiles')
                .select('role, email') // fetching email too for display
                .eq('id', user.id)
                .single();

            if (profile?.role !== 'admin') {
                router.push("/");
                return;
            }

            setUser({ ...user, ...profile }); // Merge profile data
            setIsLoading(false);
        };

        checkUser();
    }, [router]);

    const handleSignOut = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.push("/auth/login");
        router.refresh();
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#020617] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6366F1]"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020617] flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#0F172A] border-r border-[#1E293B] flex flex-col">
                {/* Logo */}
                <div className="p-6 border-b border-[#1E293B]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center">
                            <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <div className="font-bold text-[#F8FAFC]">Admin Panel</div>
                            <div className="text-xs text-[#64748B]">SellerConnect</div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B] transition-colors"
                                >
                                    <item.icon className="w-5 h-5" />
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* User & Logout */}
                <div className="p-4 border-t border-[#1E293B]">
                    <div className="text-sm text-[#94A3B8] mb-3 px-4 truncate">
                        Ingelogd als: <span className="text-[#F8FAFC]">{user?.email}</span>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors w-full"
                    >
                        <LogOut className="w-5 h-5" />
                        Uitloggen
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
