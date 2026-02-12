"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Lock, User, Building2, Phone, ArrowRight, Check, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        company: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const supabase = createClient();

        try {
            // Sign up with Supabase Auth
            const { data, error: signUpError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        name: formData.name,
                        phone: formData.phone,
                        company: formData.company,
                    },
                },
            });

            if (signUpError) {
                throw signUpError;
            }

            // Also store user data in profiles table
            if (data.user) {
                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert({
                        id: data.user.id,
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        company: formData.company,
                    });

                if (profileError) {
                    console.error("Profile creation error:", profileError);
                    // Continue anyway - auth worked
                }
            }

            setSuccess(true);
            setTimeout(() => {
                router.push("/auth/login");
            }, 2000);
        } catch (err: any) {
            console.error("Registration full error:", err);
            setError(err.message || "Er is een fout opgetreden bij het registreren");
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
                        Maak een account aan
                    </h1>
                    <p className="text-[#94A3B8]">
                        Start je 14-dagen gratis proefperiode
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B]">
                    {success ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-4">
                                <Check className="w-8 h-8 text-[#22C55E]" />
                            </div>
                            <h2 className="text-xl font-semibold text-[#F8FAFC] mb-2">
                                Account aangemaakt!
                            </h2>
                            <p className="text-[#94A3B8] text-sm">
                                Check je email voor verificatie. Je wordt doorgestuurd...
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
                                    {error}
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                    Volledige naam *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-[#020617]/50 border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]/50 transition-colors"
                                        placeholder="Je naam"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                    E-mailadres *
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
                                    Wachtwoord *
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                                    <input
                                        type="password"
                                        required
                                        minLength={6}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-[#020617]/50 border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]/50 transition-colors"
                                        placeholder="Minimaal 6 karakters"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                        Telefoon
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full pl-12 pr-4 py-3 bg-[#020617]/50 border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]/50 transition-colors"
                                            placeholder="+31..."
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                        Bedrijf
                                    </label>
                                    <div className="relative">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full pl-12 pr-4 py-3 bg-[#020617]/50 border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]/50 transition-colors"
                                            placeholder="Bedrijfsnaam"
                                        />
                                    </div>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-12 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white font-medium shadow-lg shadow-[#6366F1]/25"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Registreren...
                                    </>
                                ) : (
                                    <>
                                        Gratis Account Aanmaken
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </>
                                )}
                            </Button>
                        </form>
                    )}
                </div>

                {/* Footer */}
                <p className="text-center text-[#64748B] text-sm mt-6">
                    Heb je al een account?{" "}
                    <Link href="/auth/login" className="text-[#6366F1] hover:underline">
                        Inloggen
                    </Link>
                </p>

                {/* Development Notice */}
                <div className="mt-6 p-4 bg-[#0F172A]/50 backdrop-blur-sm rounded-xl border border-[#F59E0B]/30 text-center">
                    <p className="text-[#F59E0B] text-sm font-medium mb-2">
                        🚧 Onder Ontwikkeling
                    </p>
                    <p className="text-[#94A3B8] text-xs mb-3">
                        Bedankt voor je geduld! Neem contact met ons op via WhatsApp.
                    </p>
                    <a
                        href="https://wa.me/+31854012968?text=Hallo%20SellerConnect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp Contact
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
