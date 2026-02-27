"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ShieldCheck, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const stores = [
    {
        image: "/Screenshot 2026-02-27 062214.png",
        period: "Vandaag",
        country: "Nederland & België",
        color: "#6366F1",
        glowColor: "rgba(99,102,241,0.14)",
        borderColor: "rgba(99,102,241,0.35)",
        metrics: [
            { label: "Bestellingen", value: "276", change: "-10%", up: false },
            { label: "Omzet", value: "€10.840", change: "+6%", up: true, highlight: true },
            { label: "Verkopen", value: "300", change: "-7%", up: false },
        ],
    },
    {
        image: "/Screenshot 2026-02-27 062247.png",
        period: "Afgelopen 28 dagen",
        country: "Nederland & België",
        color: "#22D3EE",
        glowColor: "rgba(34,211,238,0.12)",
        borderColor: "rgba(34,211,238,0.35)",
        metrics: [
            { label: "Bestellingen", value: "253", change: "+130%", up: true },
            { label: "Omzet", value: "€10.957", change: "+137%", up: true, highlight: true },
            { label: "Verkopen", value: "267", change: "+141%", up: true },
        ],
    },
    {
        image: "/Screenshot 2026-02-27 062312.png",
        period: "Afgelopen 28 dagen",
        country: "Nederland & België",
        color: "#A78BFA",
        glowColor: "rgba(167,139,250,0.12)",
        borderColor: "rgba(167,139,250,0.35)",
        metrics: [
            { label: "Bestellingen", value: "232", change: "+5%", up: true },
            { label: "Omzet", value: "€9.886", change: "+14%", up: true, highlight: true },
            { label: "Verkopen", value: "267", change: "+14%", up: true },
        ],
    },
];

export function ClientResultsShowcase() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 animated-grid opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-gradient-to-b from-[#6366F1]/8 to-transparent rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#22D3EE]/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/25 rounded-full px-4 py-2 mb-6">
                        <ShieldCheck className="w-4 h-4 text-[#22D3EE]" />
                        <span className="text-[#22D3EE] text-sm font-medium">
                            Live Bol.com Verkoper Dashboards
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Echte Winkels. Echte Resultaten.
                    </h2>
                    <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
                        Hieronder zie je de werkelijke Bol.com dashboards van onze klanten —{" "}
                        <span className="text-[#F8FAFC] font-medium">
                            ongefilterd, direct uit het verkopers­portaal.
                        </span>
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {stores.map((store, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 44 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.13, ease: "easeOut" }}
                            className="flex flex-col rounded-2xl overflow-hidden"
                            style={{
                                background: `linear-gradient(155deg, ${store.glowColor} 0%, rgba(15,23,42,0.6) 60%)`,
                                border: `1px solid ${store.borderColor}`,
                                boxShadow: `0 0 48px ${store.glowColor}, 0 1px 0 ${store.borderColor}`,
                            }}
                        >
                            {/* Top label */}
                            <div className="flex items-center justify-between px-5 pt-4 pb-3">
                                <div>
                                    <p className="text-[#F8FAFC] text-sm font-semibold">Klant #{i + 1}</p>
                                    <p className="text-[#475569] text-xs mt-0.5">{store.period} · {store.country}</p>
                                </div>
                                <div
                                    className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                                    style={{
                                        color: store.color,
                                        background: `${store.color}18`,
                                        border: `1px solid ${store.color}30`,
                                    }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: store.color }} />
                                    Live data
                                </div>
                            </div>

                            {/* Screenshot */}
                            <div className="mx-4 rounded-xl overflow-hidden border border-[#1E293B] relative">
                                {/* Browser chrome */}
                                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0D1424] border-b border-[#1E293B]">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/55" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/55" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/55" />
                                    <div className="ml-2 flex-1 bg-[#1E293B] rounded px-2 py-0.5 text-[10px] text-[#475569] truncate">
                                        bol.com › Verkopersplatform › Verkoop­overzicht
                                    </div>
                                </div>

                                {/* Actual screenshot */}
                                <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                                    <Image
                                        src={store.image}
                                        alt={`Bol.com dashboard klant ${i + 1}`}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    {/* Bottom fade */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
                                        style={{ background: "linear-gradient(to top, #0D1424 10%, transparent)" }}
                                    />
                                </div>
                            </div>

                            {/* Metrics row */}
                            <div className="grid grid-cols-3 mx-4 mt-3 rounded-xl overflow-hidden border border-[#1E293B]">
                                {store.metrics.map((m, j) => (
                                    <div
                                        key={j}
                                        className={`px-2 py-3 flex flex-col items-center gap-1 ${j < 2 ? "border-r border-[#1E293B]" : ""}`}
                                        style={{ background: m.highlight ? `${store.color}10` : "transparent" }}
                                    >
                                        <span
                                            className="text-sm font-bold leading-none"
                                            style={{ color: m.highlight ? store.color : "#F8FAFC" }}
                                        >
                                            {m.value}
                                        </span>
                                        <div className={`flex items-center gap-0.5 text-[10px] font-semibold ${m.up ? "text-[#22C55E]" : "text-[#EF4444]"}`}>
                                            {m.up
                                                ? <TrendingUp className="w-2.5 h-2.5" />
                                                : <TrendingDown className="w-2.5 h-2.5" />
                                            }
                                            {m.change}
                                        </div>
                                        <span className="text-[#475569] text-[9px] leading-none text-center">{m.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between px-5 py-4 mt-auto">
                                <span className="text-[#475569] text-xs">Geverifieerd via Bol.com portaal</span>
                                <span
                                    className="flex items-center gap-1 text-xs font-semibold"
                                    style={{ color: store.color }}
                                >
                                    Bekijk details <ArrowUpRight className="w-3 h-3" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-[#374151] text-sm mt-10"
                >
                    Alle dashboards zijn afkomstig van echte SellerConnect-klanten · Data rechtstreeks uit het Bol.com Verkopersplatform
                </motion.p>
            </div>
        </section>
    );
}
