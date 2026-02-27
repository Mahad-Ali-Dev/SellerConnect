"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, CheckCircle2, Package, Tag, BarChart2, Star, TrendingUp, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const bolCategories = [
    { icon: "💻", label: "Elektronica", angle: 0 },
    { icon: "👗", label: "Mode", angle: 60 },
    { icon: "🏠", label: "Wonen", angle: 120 },
    { icon: "🧸", label: "Speelgoed", angle: 180 },
    { icon: "📚", label: "Boeken", angle: 240 },
    { icon: "🌿", label: "Tuin", angle: 300 },
];

const uploadSteps = [
    { icon: Package, label: "EAN Invoeren", status: "done", value: "8710755123456" },
    { icon: Tag, label: "Categorie & Titel", status: "done", value: "Elektronica › Smartphones" },
    { icon: BarChart2, label: "Prijs & Voorraad", status: "done", value: "€ 249,99  ·  50 stuks" },
    { icon: CheckCircle2, label: "Live op Bol.com", status: "active", value: "Gepubliceerd ✓" },
];

export function NurtureSection() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            <div className="absolute inset-0 animated-grid opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section 1: Nurture and qualify leads */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    {/* Left - Toggle Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            {/* Toggle Track */}
                            <div className="w-64 h-16 bg-[#0F172A]/50 backdrop-blur-sm rounded-full border border-[#1E293B] flex items-center justify-between px-4">
                                <div className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[#64748B]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </div>

                                {/* Toggle Button */}
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE] flex items-center justify-center shadow-lg shadow-[#6366F1]/30"
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                >
                                    <div className="w-6 h-6 rounded-full bg-white" />
                                </motion.div>

                                <div className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[#22D3EE]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                            Verwerk en kwalificeer leads binnen seconden.
                        </h2>
                        <p className="text-[#94A3B8] mb-6">
                            Directe reacties via elk kanaal. Geen leads verloren.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                { bold: "Verwerk leads binnen seconden.", text: "Stop met afhankelijk zijn van werkuren, en start 24/7 te reageren." },
                                { bold: "Verkoop intelligentie ingebouwd.", text: "Ontdekt pijnpunten en handelt bezwaren natuurlijk af." },
                                { bold: "Jouw regels, geautomatiseerd.", text: "Kwalificeert leads met jouw exacte criteria. Geen tijdverspillers." },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded bg-[#6366F1] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <p className="text-[#94A3B8]">
                                        <span className="text-[#F8FAFC] font-medium">{item.bold}</span> {item.text}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link href="/auth/register">
                            <Button className="h-11 px-6 bg-transparent border border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1]/10 rounded-xl">
                                Start gratis proefperiode
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Section 2: Book directly + Chat */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                            Upload direct naar je catalogus met AI
                        </h2>
                        <p className="text-[#94A3B8] mb-6">
                            Zeg vaarwel tegen handmatig uploaden, en hallo tegen geautomatiseerde uploads:
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                { bold: "Mensachtige verwerking.", text: "AI begeleidt producten natuurlijk door het upload proces." },
                                { bold: "Real-time catalogus sync.", text: "Kent je voorraad en bevestigt direct." },
                                { bold: "Geen wrijving uploaden.", text: "Van 'EAN code' naar 'live product' in één actie." },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded bg-[#6366F1] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <p className="text-[#94A3B8]">
                                        <span className="text-[#F8FAFC] font-medium">{item.bold}</span> {item.text}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link href="/auth/register">
                            <Button className="h-11 px-6 bg-transparent border border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1]/10 rounded-xl">
                                Start gratis proefperiode
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Right - Bol.com Product Upload Workflow */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden">
                            {/* Mock browser bar */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0F1E] border-b border-[#1E293B]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#EF4444]/70" />
                                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]/70" />
                                    <div className="w-3 h-3 rounded-full bg-[#22C55E]/70" />
                                </div>
                                <div className="flex-1 bg-[#1E293B] rounded px-3 py-1 text-xs text-[#64748B] ml-2">
                                    bol.com › Verkopersplatform › Product Toevoegen
                                </div>
                            </div>

                            {/* Upload steps */}
                            <div className="p-5 space-y-3">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[#F8FAFC] text-sm font-semibold">AI Product Upload</span>
                                    <span className="text-xs text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded-full">Automatisch</span>
                                </div>

                                {uploadSteps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                        className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${
                                            step.status === "active"
                                                ? "border-[#6366F1]/50 bg-[#6366F1]/10"
                                                : "border-[#1E293B] bg-[#0F172A]/40"
                                        }`}
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                                step.status === "active"
                                                    ? "bg-gradient-to-br from-[#6366F1] to-[#22D3EE]"
                                                    : "bg-[#1E293B]"
                                            }`}
                                        >
                                            <step.icon
                                                className={`w-4 h-4 ${
                                                    step.status === "active" ? "text-white" : "text-[#22D3EE]"
                                                }`}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[#64748B] text-xs mb-0.5">{step.label}</p>
                                            <p
                                                className={`text-sm font-medium truncate ${
                                                    step.status === "active" ? "text-[#22D3EE]" : "text-[#F8FAFC]"
                                                }`}
                                            >
                                                {step.value}
                                            </p>
                                        </div>
                                        {step.status === "done" && (
                                            <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                        )}
                                        {step.status === "active" && (
                                            <motion.div
                                                className="w-4 h-4 rounded-full border-2 border-[#6366F1] border-t-transparent flex-shrink-0"
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                            />
                                        )}
                                    </motion.div>
                                ))}

                                {/* Result bar */}
                                <div className="mt-4 flex items-center justify-between bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-xl px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                                        <span className="text-[#22C55E] text-sm font-medium">Product live op Bol.com</span>
                                    </div>
                                    <span className="text-[#64748B] text-xs">~12 sec</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Section 3: Bol.com Seller Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Bol.com categories orbit */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative w-80 h-80">
                            {/* Outer orbit ring */}
                            <div className="absolute inset-0 rounded-full border border-dashed border-[#6366F1]/20" />
                            <div className="absolute inset-8 rounded-full border border-dashed border-[#22D3EE]/15" />

                            {/* Center - Bol.com logo */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-[#0F172A]/70 backdrop-blur-sm border border-[#1E293B] flex flex-col items-center justify-center shadow-lg shadow-[#6366F1]/10 z-10">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center mb-1">
                                    <ShoppingBag className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-[#F8FAFC] text-xs font-bold">bol.com</span>
                            </div>

                            {/* Orbiting category icons */}
                            {bolCategories.map((cat, i) => {
                                const radius = 120;
                                const x = Math.cos(((cat.angle - 90) * Math.PI) / 180) * radius;
                                const y = Math.sin(((cat.angle - 90) * Math.PI) / 180) * radius;
                                return (
                                    <motion.div
                                        key={i}
                                        className="absolute w-14 h-14 rounded-2xl bg-[#0F172A]/80 backdrop-blur-sm border border-[#1E293B] flex flex-col items-center justify-center gap-0.5 hover:border-[#6366F1]/40 transition-colors"
                                        style={{
                                            top: `calc(50% + ${y}px - 28px)`,
                                            left: `calc(50% + ${x}px - 28px)`,
                                        }}
                                        animate={{ scale: [1, 1.08, 1], y: [0, -3, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2.5,
                                            delay: i * 0.3,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <span className="text-xl">{cat.icon}</span>
                                        <span className="text-[8px] text-[#64748B] leading-none">{cat.label}</span>
                                    </motion.div>
                                );
                            })}

                            {/* Animated connecting lines */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                                {bolCategories.map((cat, i) => {
                                    const radius = 120;
                                    const x = 160 + Math.cos(((cat.angle - 90) * Math.PI) / 180) * radius;
                                    const y = 160 + Math.sin(((cat.angle - 90) * Math.PI) / 180) * radius;
                                    return (
                                        <motion.line
                                            key={i}
                                            x1="160"
                                            y1="160"
                                            x2={x}
                                            y2={y}
                                            stroke="url(#lineGrad)"
                                            strokeWidth="1"
                                            strokeDasharray="4 4"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 2,
                                                delay: i * 0.3,
                                            }}
                                        />
                                    );
                                })}
                                <defs>
                                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.6" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Live stats badge */}
                            <motion.div
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0F172A] border border-[#22D3EE]/30 rounded-full px-3 py-1.5 flex items-center gap-2 whitespace-nowrap shadow-lg"
                                animate={{ y: [0, -4, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                                <span className="text-[#22D3EE] text-xs font-medium">
                                    <TrendingUp className="w-3 h-3 inline mr-1" />
                                    +30% conversie via AI
                                </span>
                            </motion.div>

                            {/* Rating badge */}
                            <motion.div
                                className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#0F172A] border border-[#F59E0B]/30 rounded-full px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap shadow-lg"
                                animate={{ y: [0, -4, 0] }}
                                transition={{ repeat: Infinity, duration: 3, delay: 1.5, ease: "easeInOut" }}
                            >
                                <Star className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />
                                <span className="text-[#F8FAFC] text-xs font-medium">4.9/5 Bol.com rating</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                            Domineer elke categorie op Bol.com
                        </h2>

                        <ul className="space-y-4 mb-8">
                            {[
                                { bold: "Alle Bol.com categorieën.", text: "Van elektronica tot mode — wij beheren elk producttype met AI-precisie." },
                                { bold: "Geoptimaliseerde producttitels.", text: "AI schrijft titels en beschrijvingen die hoog scoren in Bol.com zoekresultaten." },
                                { bold: "Slimme voorraadkoppeling.", text: "Directe synchronisatie met je EAN-database voor foutloze listings." },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded bg-[#6366F1] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <p className="text-[#94A3B8]">
                                        <span className="text-[#F8FAFC] font-medium">{item.bold}</span> {item.text}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link href="/auth/register">
                            <Button className="h-11 px-6 bg-transparent border border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1]/10 rounded-xl">
                                Start gratis proefperiode
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
