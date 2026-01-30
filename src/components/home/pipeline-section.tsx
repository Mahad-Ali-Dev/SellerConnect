"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, BarChart3, GitBranch, Bot, RefreshCw, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
    {
        icon: BarChart3,
        title: "Geavanceerde analytics",
        description: "Krijg direct bruikbare data en inzichten.",
    },
    {
        icon: GitBranch,
        title: "A/B split testing",
        description: "Split test en optimaliseer AI Agents voor maximale conversie.",
    },
    {
        icon: Bot,
        title: "Geautomatiseerde AI uploads",
        description: "Stroomlijn je workflow door direct via AI te uploaden.",
    },
    {
        icon: RefreshCw,
        title: "Ingebouwd follow-up systeem",
        description: "Win producten terug en beheer ze zonder een vinger te hoeven uitsteken.",
    },
    {
        icon: Users,
        title: "Onbeperkte Sub-Accounts",
        description: "Beheer en creëer AI's voor meerdere klanten met gemak.",
    },
    {
        icon: Globe,
        title: "Multi-Platform Support",
        description: "Werk naadloos op 17+ platforms. Geen extern personeel nodig.",
    },
];

export function PipelineSection() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            <div className="absolute inset-0 animated-grid opacity-30" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC]">
                        Zet Je Pipeline op Autopilot
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-w-6xl mx-auto">
                    {/* Card 1 - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] row-span-2"
                    >
                        <h3 className="text-[#6366F1] font-semibold text-lg mb-2">
                            De €23.000 Jaarlijkse Verhoging
                        </h3>
                        <p className="text-[#94A3B8] text-sm mb-6">
                            Vervang je €2.000/maand medewerker met onze €97-297/maand AI. Dat is geld terug in je zak om te investeren in groei, niet overhead.
                        </p>
                        {/* Chart Visual */}
                        <div className="h-48 relative">
                            <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,80 Q30,70 60,50 T120,30 T200,10"
                                    fill="none"
                                    stroke="url(#strokeGradient)"
                                    strokeWidth="2"
                                />
                                <defs>
                                    <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#6366F1" />
                                        <stop offset="100%" stopColor="#22D3EE" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,80 Q30,70 60,50 T120,30 T200,10"
                                    fill="none"
                                    stroke="url(#strokeGradient)"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M0,80 Q30,70 60,50 T120,30 T200,10 L200,100 L0,100 Z"
                                    fill="url(#chartGradient)"
                                />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Card 2 - Small */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B]"
                    >
                        <h3 className="text-[#F8FAFC] font-semibold mb-2">Stop met Kansen Missen</h3>
                        <p className="text-[#94A3B8] text-sm mb-4">
                            Word wakker met een volle catalogus in plaats van een inbox vol gemiste producten.
                        </p>
                        {/* Grid Visual */}
                        <div className="grid grid-cols-5 gap-1">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE]"
                                    initial={{ opacity: 0.2 }}
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ delay: i * 0.05, repeat: Infinity, duration: 2 }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 3 - Small */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B]"
                    >
                        <h3 className="text-[#F8FAFC] font-semibold mb-2">Context Bewuste Agents</h3>
                        <p className="text-[#94A3B8] text-sm mb-4">
                            Je AI agents werken als een team, delen context om perfect gecoördineerde acties te leveren.
                        </p>
                        {/* Agents Visual */}
                        <div className="flex justify-center gap-2">
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-10 h-10 rounded-full bg-[#6366F1]/20 border border-[#6366F1] flex items-center justify-center"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ delay: i * 0.2, repeat: Infinity, duration: 1.5 }}
                                >
                                    <Bot className="w-5 h-5 text-[#6366F1]" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 4 - Large with Lightning */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] md:col-span-2 flex items-center gap-6"
                    >
                        <div className="flex-1">
                            <h3 className="text-[#F8FAFC] font-semibold mb-2">Bliksemsnelle Support</h3>
                            <p className="text-[#94A3B8] text-sm">
                                Krijg 24/7 dedicated support van een team dat oprecht geeft om je succes.
                            </p>
                        </div>
                        {/* Lightning Bolt */}
                        <div className="relative">
                            <motion.div
                                className="w-32 h-48"
                                animate={{ opacity: [0.8, 1, 0.8] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <svg viewBox="0 0 100 150" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#6366F1" />
                                            <stop offset="100%" stopColor="#22D3EE" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M60,0 L20,65 L45,65 L35,150 L80,70 L55,70 L60,0"
                                        fill="url(#boltGradient)"
                                    />
                                </svg>
                            </motion.div>
                            {/* Glow effect */}
                            <div className="absolute inset-0 blur-xl bg-[#6366F1]/30" />
                        </div>
                    </motion.div>
                </div>

                {/* Why SellerConnect Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC]">
                        Waarom SellerConnect Dé Keuze Is Voor Automatisering
                    </h2>
                    <Link href="/auth/register">
                        <Button className="h-11 px-6 bg-transparent border border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1]/10 rounded-xl whitespace-nowrap">
                            Start gratis proefperiode
                        </Button>
                    </Link>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-5 border border-[#1E293B] hover:border-[#6366F1]/30 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-lg bg-[#6366F1]/10 flex items-center justify-center mb-4">
                                <feature.icon className="w-5 h-5 text-[#6366F1]" />
                            </div>
                            <h3 className="text-[#F8FAFC] font-semibold mb-1">{feature.title}</h3>
                            <p className="text-[#94A3B8] text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
