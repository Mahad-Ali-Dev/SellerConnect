"use client";

import { useEffect, useState } from "react";
import { Mail, Download, Trash2, Search, Loader2, Eye, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Contact {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    status: "new" | "read" | "replied";
    createdAt: string;
}

export default function AdminContactsPage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [updating, setUpdating] = useState<string | null>(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    async function fetchContacts() {
        try {
            const res = await fetch("/api/admin/contacts");
            const data = await res.json();
            setContacts(data.contacts || []);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        } finally {
            setLoading(false);
        }
    }

    async function updateStatus(id: string, status: string) {
        setUpdating(id);
        try {
            await fetch(`/api/admin/contacts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }),
            });
            setContacts(contacts.map((c) => (c._id === id ? { ...c, status: status as Contact["status"] } : c)));
        } catch (error) {
            console.error("Error updating contact:", error);
        } finally {
            setUpdating(null);
        }
    }

    async function deleteContact(id: string) {
        if (!confirm("Weet je zeker dat je dit bericht wilt verwijderen?")) return;

        try {
            await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
            setContacts(contacts.filter((c) => c._id !== id));
            setSelectedContact(null);
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    }

    const filteredContacts = contacts.filter((contact) => {
        const matchesSearch =
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || contact.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const statusColors = {
        new: "bg-green-500/10 text-green-400",
        read: "bg-blue-500/10 text-blue-400",
        replied: "bg-purple-500/10 text-purple-400",
    };

    const statusLabels = {
        new: "Nieuw",
        read: "Gelezen",
        replied: "Beantwoord",
    };

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-[#F8FAFC] mb-2">Contact Berichten</h1>
                    <p className="text-[#94A3B8]">{contacts.length} berichten totaal</p>
                </div>
                <a href="/api/admin/contacts/export">
                    <Button className="bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Exporteer naar Excel
                    </Button>
                </a>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#475569]" />
                    <input
                        type="text"
                        placeholder="Zoek op naam, email of onderwerp..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-[#0F172A] border border-[#1E293B] text-[#F8FAFC] placeholder:text-[#475569] focus:border-[#6366F1] outline-none"
                    />
                </div>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="h-12 px-4 rounded-xl bg-[#0F172A] border border-[#1E293B] text-[#F8FAFC] focus:border-[#6366F1] outline-none"
                >
                    <option value="all">Alle statussen</option>
                    <option value="new">Nieuw</option>
                    <option value="read">Gelezen</option>
                    <option value="replied">Beantwoord</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden">
                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-[#6366F1] animate-spin" />
                    </div>
                ) : filteredContacts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-[#94A3B8]">
                        <Mail className="w-12 h-12 mb-4 opacity-50" />
                        <p>Geen berichten gevonden</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#1E293B]">
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Naam</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Email</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Onderwerp</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Status</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Datum</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Acties</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredContacts.map((contact) => (
                                    <tr key={contact._id} className="border-b border-[#1E293B] last:border-b-0 hover:bg-[#1E293B]/30">
                                        <td className="py-4 px-6 text-[#F8FAFC]">{contact.name}</td>
                                        <td className="py-4 px-6 text-[#94A3B8]">{contact.email}</td>
                                        <td className="py-4 px-6 text-[#94A3B8] max-w-[200px] truncate">{contact.subject}</td>
                                        <td className="py-4 px-6">
                                            <span className={`px-2 py-1 rounded-full text-xs ${statusColors[contact.status]}`}>
                                                {statusLabels[contact.status]}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-[#94A3B8] text-sm">
                                            {new Date(contact.createdAt).toLocaleDateString("nl-NL")}
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => setSelectedContact(contact)}
                                                    className="p-2 rounded-lg text-[#6366F1] hover:bg-[#6366F1]/10 transition-colors"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                {contact.status === "new" && (
                                                    <button
                                                        onClick={() => updateStatus(contact._id, "read")}
                                                        disabled={updating === contact._id}
                                                        className="p-2 rounded-lg text-blue-400 hover:bg-blue-500/10 transition-colors"
                                                    >
                                                        {updating === contact._id ? (
                                                            <Loader2 className="w-4 h-4 animate-spin" />
                                                        ) : (
                                                            <CheckCircle className="w-4 h-4" />
                                                        )}
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => deleteContact(contact._id)}
                                                    className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {selectedContact && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#0F172A] rounded-2xl border border-[#1E293B] p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-[#F8FAFC]">Bericht Details</h3>
                            <button
                                onClick={() => setSelectedContact(null)}
                                className="text-[#94A3B8] hover:text-[#F8FAFC]"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="text-sm text-[#64748B]">Naam</div>
                                <div className="text-[#F8FAFC]">{selectedContact.name}</div>
                            </div>
                            <div>
                                <div className="text-sm text-[#64748B]">Email</div>
                                <div className="text-[#F8FAFC]">{selectedContact.email}</div>
                            </div>
                            <div>
                                <div className="text-sm text-[#64748B]">Onderwerp</div>
                                <div className="text-[#F8FAFC]">{selectedContact.subject}</div>
                            </div>
                            <div>
                                <div className="text-sm text-[#64748B]">Bericht</div>
                                <div className="text-[#F8FAFC] whitespace-pre-wrap">{selectedContact.message}</div>
                            </div>
                            <div>
                                <div className="text-sm text-[#64748B]">Datum</div>
                                <div className="text-[#F8FAFC]">
                                    {new Date(selectedContact.createdAt).toLocaleString("nl-NL")}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <Button
                                onClick={() => updateStatus(selectedContact._id, "replied")}
                                className="bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white"
                            >
                                Markeer als beantwoord
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setSelectedContact(null)}
                                className="border-[#334155] text-[#94A3B8]"
                            >
                                Sluiten
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
