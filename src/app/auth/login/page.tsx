"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const supabase = createClient();

        try {
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });

            if (signInError) {
                throw signInError;
            }

            if (data.user) {
                router.push("/admin");
                router.refresh();
            }
        } catch (err: any) {
            console.error("Login Error:", err);
            if (err.message === "Invalid login credentials") {
                setError("Ongeldige e-mail of wachtwoord");
            } else {
                setError(err.message || "Er is een fout opgetreden bij het inloggen");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#020617] min-h-screen flex items-center justify-center px-4 py-12">
            {/* Background */}
            <div className="absolute inset-0 animated-grid opacity-30" />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-[128px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6">
                        <div className="flex gap-0.5">
                            <div className="w-3 h-6 bg-[#6366F1] rounded-l" />
                            <div className="w-3 h-6 bg-[#22D3EE] rounded-r" />
                        </div>
                        <span className="text-xl font-bold text-[#F8FAFC]">SellerConnect</span>
                    </Link>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-2">
                        Welkom terug
                    </h1>
                    <p className="text-[#94A3B8]">
                        Log in op je account
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B]">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                E-mailadres
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 bg-[#020617]/50 border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]/50 transition-colors"
                                    placeholder="je@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                Wachtwoord
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                                <input
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 bg-[#020617]/50 border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]/50 transition-colors"
                                    placeholder="Je wachtwoord"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-[#334155] bg-[#020617] text-[#6366F1] focus:ring-[#6366F1]/50" />
                                <span className="text-sm text-[#94A3B8]">Onthoud mij</span>
                            </label>
                            <Link href="/auth/forgot-password" className="text-sm text-[#6366F1] hover:underline">
                                Wachtwoord vergeten?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white font-medium shadow-lg shadow-[#6366F1]/25"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Inloggen...
                                </>
                            ) : (
                                <>
                                    Inloggen
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </>
                            )}
                        </Button>
                    </form>
                </div>

            </motion.div>
        </div>
    );
}
