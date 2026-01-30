"use client";

import { useEffect, useState } from "react";
import { FileText, Download, Trash2, Search, Loader2, Eye, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Application {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    storeName?: string;
    storeUrl?: string;
    productCount: string;
    services: string[];
    message?: string;
    status: "pending" | "approved" | "rejected";
    createdAt: string;
}

export default function AdminApplicationsPage() {
    const [applications, setApplications] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [selectedApp, setSelectedApp] = useState<Application | null>(null);
    const [updating, setUpdating] = useState<string | null>(null);

    useEffect(() => {
        fetchApplications();
    }, []);

    async function fetchApplications() {
        try {
            const res = await fetch("/api/admin/applications");
            const data = await res.json();
            setApplications(data.applications || []);
        } catch (error) {
            console.error("Error fetching applications:", error);
        } finally {
            setLoading(false);
        }
    }

    async function updateStatus(id: string, status: string) {
        setUpdating(id);
        try {
            await fetch(`/api/admin/applications/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }),
            });
            setApplications(applications.map((a) => (a._id === id ? { ...a, status: status as Application["status"] } : a)));
        } catch (error) {
            console.error("Error updating application:", error);
        } finally {
            setUpdating(null);
        }
    }

    async function deleteApplication(id: string) {
        if (!confirm("Weet je zeker dat je deze aanvraag wilt verwijderen?")) return;

        try {
            await fetch(`/api/admin/applications/${id}`, { method: "DELETE" });
            setApplications(applications.filter((a) => a._id !== id));
            setSelectedApp(null);
        } catch (error) {
            console.error("Error deleting application:", error);
        }
    }

    const filteredApplications = applications.filter((app) => {
        const matchesSearch =
            app.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || app.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const statusColors = {
        pending: "bg-yellow-500/10 text-yellow-400",
        approved: "bg-green-500/10 text-green-400",
        rejected: "bg-red-500/10 text-red-400",
    };

    const statusLabels = {
        pending: "In behandeling",
        approved: "Goedgekeurd",
        rejected: "Afgewezen",
    };

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-[#F8FAFC] mb-2">Aanvragen</h1>
                    <p className="text-[#94A3B8]">{applications.length} aanvragen totaal</p>
                </div>
                <a href="/api/admin/applications/export">
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
                        placeholder="Zoek op naam of email..."
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
                    <option value="pending">In behandeling</option>
                    <option value="approved">Goedgekeurd</option>
                    <option value="rejected">Afgewezen</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden">
                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-[#6366F1] animate-spin" />
                    </div>
                ) : filteredApplications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-[#94A3B8]">
                        <FileText className="w-12 h-12 mb-4 opacity-50" />
                        <p>Geen aanvragen gevonden</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#1E293B]">
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Naam</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Email</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Producten</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Diensten</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Status</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Datum</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-[#94A3B8]">Acties</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredApplications.map((app) => (
                                    <tr key={app._id} className="border-b border-[#1E293B] last:border-b-0 hover:bg-[#1E293B]/30">
                                        <td className="py-4 px-6 text-[#F8FAFC]">{app.firstName} {app.lastName}</td>
                                        <td className="py-4 px-6 text-[#94A3B8]">{app.email}</td>
                                        <td className="py-4 px-6 text-[#94A3B8]">{app.productCount}</td>
                                        <td className="py-4 px-6 text-[#94A3B8] text-sm">{app.services.join(", ") || "-"}</td>
                                        <td className="py-4 px-6">
                                            <span className={`px-2 py-1 rounded-full text-xs ${statusColors[app.status]}`}>
                                                {statusLabels[app.status]}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-[#94A3B8] text-sm">
                                            {new Date(app.createdAt).toLocaleDateString("nl-NL")}
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1">
                                                <button
                                                    onClick={() => setSelectedApp(app)}
                                                    className="p-2 rounded-lg text-[#6366F1] hover:bg-[#6366F1]/10 transition-colors"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                {app.status === "pending" && (
                                                    <>
                                                        <button
                                                            onClick={() => updateStatus(app._id, "approved")}
                                                            disabled={updating === app._id}
                                                            className="p-2 rounded-lg text-green-400 hover:bg-green-500/10 transition-colors"
                                                        >
                                                            {updating === app._id ? (
                                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                            ) : (
                                                                <Check className="w-4 h-4" />
                                                            )}
                                                        </button>
                                                        <button
                                                            onClick={() => updateStatus(app._id, "rejected")}
                                                            disabled={updating === app._id}
                                                            className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </>
                                                )}
                                                <button
                                                    onClick={() => deleteApplication(app._id)}
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
            {selectedApp && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#0F172A] rounded-2xl border border-[#1E293B] p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-[#F8FAFC]">Aanvraag Details</h3>
                            <button
                                onClick={() => setSelectedApp(null)}
                                className="text-[#94A3B8] hover:text-[#F8FAFC]"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="space-y-4 text-sm">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-[#64748B]">Voornaam</div>
                                    <div className="text-[#F8FAFC]">{selectedApp.firstName}</div>
                                </div>
                                <div>
                                    <div className="text-[#64748B]">Achternaam</div>
                                    <div className="text-[#F8FAFC]">{selectedApp.lastName}</div>
                                </div>
                            </div>
                            <div>
                                <div className="text-[#64748B]">Email</div>
                                <div className="text-[#F8FAFC]">{selectedApp.email}</div>
                            </div>
                            <div>
                                <div className="text-[#64748B]">Telefoon</div>
                                <div className="text-[#F8FAFC]">{selectedApp.phone}</div>
                            </div>
                            {selectedApp.company && (
                                <div>
                                    <div className="text-[#64748B]">Bedrijf</div>
                                    <div className="text-[#F8FAFC]">{selectedApp.company}</div>
                                </div>
                            )}
                            {selectedApp.storeName && (
                                <div>
                                    <div className="text-[#64748B]">Winkelnaam</div>
                                    <div className="text-[#F8FAFC]">{selectedApp.storeName}</div>
                                </div>
                            )}
                            <div>
                                <div className="text-[#64748B]">Aantal producten</div>
                                <div className="text-[#F8FAFC]">{selectedApp.productCount}</div>
                            </div>
                            <div>
                                <div className="text-[#64748B]">Gekozen diensten</div>
                                <div className="text-[#F8FAFC]">
                                    {selectedApp.services.length > 0 ? selectedApp.services.join(", ") : "-"}
                                </div>
                            </div>
                            {selectedApp.message && (
                                <div>
                                    <div className="text-[#64748B]">Bericht</div>
                                    <div className="text-[#F8FAFC] whitespace-pre-wrap">{selectedApp.message}</div>
                                </div>
                            )}
                            <div>
                                <div className="text-[#64748B]">Status</div>
                                <span className={`px-2 py-1 rounded-full text-xs ${statusColors[selectedApp.status]}`}>
                                    {statusLabels[selectedApp.status]}
                                </span>
                            </div>
                            <div>
                                <div className="text-[#64748B]">Datum</div>
                                <div className="text-[#F8FAFC]">
                                    {new Date(selectedApp.createdAt).toLocaleString("nl-NL")}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-6">
                            {selectedApp.status === "pending" && (
                                <>
                                    <Button
                                        onClick={() => {
                                            updateStatus(selectedApp._id, "approved");
                                            setSelectedApp({ ...selectedApp, status: "approved" });
                                        }}
                                        className="bg-green-600 hover:bg-green-700 text-white"
                                    >
                                        <Check className="w-4 h-4 mr-2" />
                                        Goedkeuren
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            updateStatus(selectedApp._id, "rejected");
                                            setSelectedApp({ ...selectedApp, status: "rejected" });
                                        }}
                                        variant="outline"
                                        className="border-red-500 text-red-400 hover:bg-red-500/10"
                                    >
                                        <X className="w-4 h-4 mr-2" />
                                        Afwijzen
                                    </Button>
                                </>
                            )}
                            <Button
                                variant="outline"
                                onClick={() => setSelectedApp(null)}
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
