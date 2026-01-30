"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const messages = [
    {
        type: "user",
        name: "Klant",
        text: "Dat zou geweldig zijn! Ik ben geïnteresseerd in meer informatie, kunnen we een gesprek inplannen voor vrijdag?",
    },
    {
        type: "bot",
        name: "AI Agent",
        text: "Natuurlijk! Ik heb een paar vrije slots om 11 uur of later in de middag om 14 of 15 uur - werkt een van deze tijden voor je?",
    },
    {
        type: "user",
        name: "Klant",
        text: "11 uur is perfect, laten we daarvoor gaan",
    },
    {
        type: "bot",
        name: "AI Agent",
        text: "Top! Dat is voor je ingeboekt - ik kijk ernaar uit om dan te spreken!",
    },
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

                    {/* Right - Chat Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] p-4">
                            <div className="space-y-4">
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.2 }}
                                        className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className={`max-w-[80%] ${msg.type === "user" ? "order-1" : ""}`}>
                                            <div className={`flex items-center gap-2 mb-1 ${msg.type === "user" ? "justify-end" : ""}`}>
                                                <span className="text-xs text-[#64748B]">{msg.name}</span>
                                                {msg.type === "user" ? (
                                                    <div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center">
                                                        <User className="w-3 h-3 text-white" />
                                                    </div>
                                                ) : (
                                                    <div className="w-6 h-6 rounded-full bg-[#1E293B] flex items-center justify-center order-first">
                                                        <Bot className="w-3 h-3 text-[#22D3EE]" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className={`rounded-xl px-4 py-2 text-sm ${msg.type === "user"
                                                    ? "bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white"
                                                    : "bg-[#1E293B] text-[#E5E7EB]"
                                                }`}>
                                                {msg.text}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Input field */}
                            <div className="mt-4 flex items-center gap-2 bg-[#1E293B] rounded-lg px-4 py-3">
                                <input
                                    type="text"
                                    placeholder="Type een bericht..."
                                    className="flex-1 bg-transparent text-[#F8FAFC] text-sm outline-none"
                                    disabled
                                />
                                <ArrowRight className="w-4 h-4 text-[#64748B]" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Section 3: Integrate with platforms */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Platform Icons */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative w-72 h-72">
                            {/* Center circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#0F172A]/50 backdrop-blur-sm border border-[#1E293B] flex items-center justify-center">
                                <div className="flex gap-0.5">
                                    <div className="w-4 h-8 bg-[#6366F1] rounded-l" />
                                    <div className="w-4 h-8 bg-[#22D3EE] rounded-r" />
                                </div>
                            </div>

                            {/* Orbiting icons */}
                            {[
                                { icon: "🟢", label: "WhatsApp", angle: 0 },
                                { icon: "📘", label: "Messenger", angle: 72 },
                                { icon: "📸", label: "Instagram", angle: 144 },
                                { icon: "🛒", label: "Bol.com", angle: 216 },
                                { icon: "📦", label: "Amazon", angle: 288 },
                            ].map((platform, i) => {
                                const radius = 100;
                                const x = Math.cos((platform.angle * Math.PI) / 180) * radius;
                                const y = Math.sin((platform.angle * Math.PI) / 180) * radius;
                                return (
                                    <motion.div
                                        key={i}
                                        className="absolute w-14 h-14 rounded-2xl bg-[#0F172A]/50 backdrop-blur-sm border border-[#1E293B] flex items-center justify-center text-2xl"
                                        style={{
                                            top: `calc(50% + ${y}px - 28px)`,
                                            left: `calc(50% + ${x}px - 28px)`,
                                        }}
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                                    >
                                        {platform.icon}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                            Integreer met alle grote verkoopplatforms
                        </h2>

                        <ul className="space-y-4 mb-8">
                            {[
                                { bold: "Elk kanaal verbonden.", text: "Bol.com, Amazon, en je eigen webshop op één plek." },
                                { bold: "Directe integratie.", text: "Native verbinding betekent setup in minuten, niet uren." },
                                { bold: "Nieuwe integraties binnenkort.", text: "Verdere platform integraties komen zeer binnenkort." },
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
