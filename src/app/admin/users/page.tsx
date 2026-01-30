"use client";

import { useEffect, useState } from "react";
import { Users, Download, Trash2, Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface User {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    role: string;
    createdAt: string;
}

export default function AdminUsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [deleting, setDeleting] = useState<string | null>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const res = await fetch("/api/admin/users");
            const data = await res.json();
            setUsers(data.users || []);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    }

    async function deleteUser(id: string) {
        if (!confirm("Weet je zeker dat je deze gebruiker wilt verwijderen?")) return;

        setDeleting(id);
        try {
            await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
            setUsers(users.filter((u) => u._id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
        } finally {
            setDeleting(null);
        }
    }

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-[#F8FAFC] mb-2">Gebruikers</h1>
                    <p className="text-[#94A3B8]">{users.length} geregistreerde gebruikers</p>
                </div>
                <a href="/api/admin/users/export">
                    <Button className="bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Exporteer naar Excel
                    </Button>
                </a>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#475569]" />
                <input
                    type="text"
                    placeholder="Zoek op naam of email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full h-12 pl-12 pr-4 rounded-xl bg-[#0F172A] border border-[#1E293B] text-[#F8FAFC] placeholder:text-[#475569] focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] outline-none transition-colors"
                />
            </div>

            {/* Table */}
            <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden">
                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-[#6366F1] animate-spin" />
                    </div>
                ) : filteredUsers.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-[#94A3B8]">
                        <Users className="w-12 h-12 mb-4 opacity-50" />
                        <p>Geen gebruikers gevonden</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#1E293B]">
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Naam</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Email</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Telefoon</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Rol</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Aangemaakt</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Acties</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user._id} className="border-b border-[#1E293B] last:border-b-0 hover:bg-[#1E293B]/30">
                                        <td className="py-4 px-6 text-[#F8FAFC]">{user.name}</td>
                                        <td className="py-4 px-6 text-[#94A3B8]">{user.email}</td>
                                        <td className="py-4 px-6 text-[#94A3B8]">{user.phone || "-"}</td>
                                        <td className="py-4 px-6">
                                            <span className={`px-2 py-1 rounded-full text-xs ${user.role === "admin"
                                                    ? "bg-purple-500/10 text-purple-400"
                                                    : "bg-blue-500/10 text-blue-400"
                                                }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-[#94A3B8] text-sm">
                                            {new Date(user.createdAt).toLocaleDateString("nl-NL")}
                                        </td>
                                        <td className="py-4 px-6">
                                            <button
                                                onClick={() => deleteUser(user._id)}
                                                disabled={deleting === user._id}
                                                className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50"
                                            >
                                                {deleting === user._id ? (
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                ) : (
                                                    <Trash2 className="w-4 h-4" />
                                                )}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
