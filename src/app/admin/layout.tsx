"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import {
    LayoutDashboard,
    Users,
    Mail,
    FileText,
    LogOut,
    Shield,
} from "lucide-react";
import { signOut } from "next-auth/react";

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
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;

        if (!session) {
            router.push("/auth/login");
            return;
        }

        if (session.user?.role !== "admin") {
            router.push("/");
            return;
        }
    }, [session, status, router]);

    if (status === "loading") {
        return (
            <div className="min-h-screen bg-[#020617] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6366F1]"></div>
            </div>
        );
    }

    if (!session || session.user?.role !== "admin") {
        return null;
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
                    <div className="text-sm text-[#94A3B8] mb-3 px-4">
                        Ingelogd als: <span className="text-[#F8FAFC]">{session.user?.name}</span>
                    </div>
                    <button
                        onClick={() => signOut({ callbackUrl: "/" })}
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
