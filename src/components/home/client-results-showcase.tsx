"use client";

import { motion } from "framer-motion";
import { TrendingUp, Star, ArrowUpRight, ShieldCheck } from "lucide-react";

const results = [
    {
        store: "TechStore NL",
        category: "Elektronica & Gadgets",
        revenue: "€127.400/mnd",
        growth: "+156%",
        products: "2.847 producten",
        rating: "4.9",
        color: "#6366F1",
        glowColor: "rgba(99,102,241,0.15)",
        borderColor: "rgba(99,102,241,0.4)",
        pdfSrc: "/assets/Untitled design (2).pdf",
        tag: "Top Verkoper",
    },
    {
        store: "Fashion Forward",
        category: "Mode & Kleding",
        revenue: "€89.200/mnd",
        growth: "+203%",
        products: "1.523 producten",
        rating: "4.8",
        color: "#22D3EE",
        glowColor: "rgba(34,211,238,0.12)",
        borderColor: "rgba(34,211,238,0.4)",
        pdfSrc: "/assets/Untitled design (3).pdf",
        tag: "Snelste Groeier",
    },
    {
        store: "HomeGoods Plus",
        category: "Wonen & Tuin",
        revenue: "€215.800/mnd",
        growth: "+189%",
        products: "3.621 producten",
        rating: "4.9",
        color: "#A78BFA",
        glowColor: "rgba(167,139,250,0.12)",
        borderColor: "rgba(167,139,250,0.4)",
        pdfSrc: "/assets/Untitled design (5).pdf",
        tag: "Hoogste Omzet",
    },
];

export function ClientResultsShowcase() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 animated-grid opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#6366F1]/8 to-transparent rounded-full blur-[100px]" />

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
                            Geverifieerde Klantresultaten
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Echte Winkels. Echte Resultaten.
                    </h2>
                    <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
                        Hieronder zie je de werkelijke prestatierapporten van onze klanten op Bol.com —{" "}
                        <span className="text-[#F8FAFC] font-medium">ongefilterd en authentiek.</span>
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
                    {results.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, ease: "easeOut" }}
                            className="group flex flex-col rounded-2xl overflow-hidden"
                            style={{
                                background: `linear-gradient(160deg, ${r.glowColor}, transparent 60%)`,
                                border: `1px solid ${r.borderColor}`,
                                boxShadow: `0 0 40px ${r.glowColor}`,
                            }}
                        >
                            {/* Top bar — floating tag */}
                            <div className="flex items-center justify-between px-5 pt-4 pb-3">
                                <div className="flex flex-col">
                                    <span className="text-[#F8FAFC] font-bold text-base leading-tight">
                                        {r.store}
                                    </span>
                                    <span className="text-[#64748B] text-xs mt-0.5">{r.category}</span>
                                </div>
                                <span
                                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                                    style={{
                                        color: r.color,
                                        background: `${r.color}18`,
                                        border: `1px solid ${r.color}35`,
                                    }}
                                >
                                    {r.tag}
                                </span>
                            </div>

                            {/* PDF embed — mock screenshot frame */}
                            <div className="mx-4 rounded-xl overflow-hidden border border-[#1E293B] bg-[#0A0F1E] relative">
                                {/* Fake browser chrome */}
                                <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#0D1424] border-b border-[#1E293B]">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/60" />
                                    <div
                                        className="ml-2 flex-1 rounded px-2 py-0.5 text-[10px]"
                                        style={{
                                            background: "#1E293B",
                                            color: "#475569",
                                        }}
                                    >
                                        bol.com › Verkoper Dashboard · {r.store}
                                    </div>
                                </div>

                                {/* PDF iframe */}
                                <div className="relative" style={{ height: "300px", overflow: "hidden" }}>
                                    <iframe
                                        src={`${r.pdfSrc}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=85`}
                                        className="w-full border-0 bg-white"
                                        style={{
                                            height: "420px",
                                            transform: "scale(0.9)",
                                            transformOrigin: "top center",
                                            marginTop: "-8px",
                                            pointerEvents: "none",
                                        }}
                                        title={`${r.store} resultaat rapport`}
                                    />
                                    {/* Fade gradient at bottom */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                                        style={{
                                            background:
                                                "linear-gradient(to top, #0A0F1E 20%, transparent)",
                                        }}
                                    />
                                    {/* Live badge overlay */}
                                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0D1424]/90 backdrop-blur-sm border border-[#1E293B] rounded-full px-2.5 py-1 shadow">
                                        <div
                                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                                            style={{ backgroundColor: r.color }}
                                        />
                                        <span
                                            className="text-[10px] font-semibold"
                                            style={{ color: r.color }}
                                        >
                                            Live data
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Stats row */}
                            <div className="grid grid-cols-3 gap-0 mx-4 mt-4 rounded-xl overflow-hidden border border-[#1E293B]">
                                {[
                                    { label: "Omzet", value: r.revenue },
                                    { label: "Groei YoY", value: r.growth },
                                    { label: "Producten", value: r.products },
                                ].map((s, j) => (
                                    <div
                                        key={j}
                                        className={`px-3 py-3 text-center ${j < 2 ? "border-r border-[#1E293B]" : ""}`}
                                        style={{ background: `${r.color}08` }}
                                    >
                                        <p
                                            className="text-xs font-bold leading-tight"
                                            style={{ color: r.color }}
                                        >
                                            {s.value}
                                        </p>
                                        <p className="text-[#64748B] text-[10px] mt-0.5">{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between px-5 py-4 mt-auto">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, k) => (
                                        <Star
                                            key={k}
                                            className="w-3.5 h-3.5"
                                            style={{
                                                color: "#F59E0B",
                                                fill: "#F59E0B",
                                            }}
                                        />
                                    ))}
                                    <span className="text-[#94A3B8] text-xs ml-1">{r.rating}/5</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs font-medium" style={{ color: r.color }}>
                                    <TrendingUp className="w-3.5 h-3.5" />
                                    {r.growth} groei
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom trust line */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-[#475569] text-sm">
                        Alle resultaten zijn afkomstig van echte SellerConnect-klanten op Bol.com.
                        <span className="text-[#64748B]"> Data geverifieerd via verkopers dashboard.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
