"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Users, Mail, FileText, ArrowRight, TrendingUp, Clock } from "lucide-react";

interface Stats {
    users: number;
    contacts: { total: number; new: number };
    applications: { total: number; pending: number };
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            try {
                const [usersRes, contactsRes, applicationsRes] = await Promise.all([
                    fetch("/api/admin/users"),
                    fetch("/api/admin/contacts"),
                    fetch("/api/admin/applications"),
                ]);

                const users = await usersRes.json();
                const contacts = await contactsRes.json();
                const applications = await applicationsRes.json();

                setStats({
                    users: users.users?.length || 0,
                    contacts: {
                        total: contacts.contacts?.length || 0,
                        new: contacts.contacts?.filter((c: { status: string }) => c.status === "new").length || 0,
                    },
                    applications: {
                        total: applications.applications?.length || 0,
                        pending: applications.applications?.filter((a: { status: string }) => a.status === "pending").length || 0,
                    },
                });
            } catch (error) {
                console.error("Error fetching stats:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    const statCards = [
        {
            title: "Geregistreerde Gebruikers",
            value: stats?.users || 0,
            icon: Users,
            href: "/admin/users",
            color: "from-[#6366F1] to-[#818CF8]",
        },
        {
            title: "Contact Berichten",
            value: stats?.contacts.total || 0,
            subValue: `${stats?.contacts.new || 0} nieuw`,
            icon: Mail,
            href: "/admin/contacts",
            color: "from-[#22C55E] to-[#4ADE80]",
        },
        {
            title: "Aanvragen",
            value: stats?.applications.total || 0,
            subValue: `${stats?.applications.pending || 0} in behandeling`,
            icon: FileText,
            href: "/admin/applications",
            color: "from-[#F59E0B] to-[#FBBF24]",
        },
    ];

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#F8FAFC] mb-2">Dashboard</h1>
                <p className="text-[#94A3B8]">Overzicht van je SellerConnect admin panel</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {statCards.map((card) => (
                    <Link key={card.href} href={card.href}>
                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] p-6 hover:border-[#6366F1]/30 transition-all hover:-translate-y-1">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                                    <card.icon className="w-6 h-6 text-white" />
                                </div>
                                <ArrowRight className="w-5 h-5 text-[#475569]" />
                            </div>
                            <div className="text-3xl font-bold text-[#F8FAFC] mb-1">
                                {loading ? "-" : card.value}
                            </div>
                            <div className="text-sm text-[#94A3B8]">{card.title}</div>
                            {card.subValue && !loading && (
                                <div className="text-xs text-[#6366F1] mt-2">{card.subValue}</div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-5 h-5 text-[#6366F1]" />
                        <h3 className="font-semibold text-[#F8FAFC]">Snelle Acties</h3>
                    </div>
                    <div className="space-y-3">
                        <Link
                            href="/admin/applications"
                            className="flex items-center justify-between p-3 rounded-xl bg-[#020617] border border-[#1E293B] hover:border-[#6366F1]/30 transition-colors"
                        >
                            <span className="text-sm text-[#94A3B8]">Bekijk nieuwe aanvragen</span>
                            <ArrowRight className="w-4 h-4 text-[#475569]" />
                        </Link>
                        <Link
                            href="/admin/contacts"
                            className="flex items-center justify-between p-3 rounded-xl bg-[#020617] border border-[#1E293B] hover:border-[#6366F1]/30 transition-colors"
                        >
                            <span className="text-sm text-[#94A3B8]">Beantwoord contactberichten</span>
                            <ArrowRight className="w-4 h-4 text-[#475569]" />
                        </Link>
                        <Link
                            href="/api/admin/applications/export"
                            className="flex items-center justify-between p-3 rounded-xl bg-[#020617] border border-[#1E293B] hover:border-[#6366F1]/30 transition-colors"
                        >
                            <span className="text-sm text-[#94A3B8]">Exporteer aanvragen naar Excel</span>
                            <ArrowRight className="w-4 h-4 text-[#475569]" />
                        </Link>
                    </div>
                </div>

                <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Clock className="w-5 h-5 text-[#6366F1]" />
                        <h3 className="font-semibold text-[#F8FAFC]">Status</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-[#94A3B8]">Database status</span>
                            <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-400 text-xs">Online</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-[#94A3B8]">API status</span>
                            <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-400 text-xs">Actief</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-[#94A3B8]">Laatste update</span>
                            <span className="text-xs text-[#64748B]">{new Date().toLocaleString("nl-NL")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
