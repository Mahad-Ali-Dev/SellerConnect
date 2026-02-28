"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { TrendingUp, Package, Star, ShoppingCart, ArrowUpRight } from "lucide-react";
import Image from "next/image";

function AnimatedCounter({
    value,
    prefix = "",
    suffix = "",
}: {
    value: number;
    prefix?: string;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {prefix}
            {count.toLocaleString("nl-NL")}
            {suffix}
        </span>
    );
}

const clientStores = [
    {
        name: "TechStore NL",
        category: "Elektronica & Gadgets",
        products: 2847,
        revenue: 127400,
        conversionRate: 38,
        growth: 156,
        color: "#6366F1",
        glowColor: "rgba(99,102,241,0.14)",
        borderColor: "rgba(99,102,241,0.35)",
        imageSrc: "/Screenshot 2026-02-27 062214.png",
        chartPath: "M0,55 Q30,48 60,38 T110,22 T160,12 T200,4",
    },
    {
        name: "Fashion Forward",
        category: "Mode & Kleding",
        products: 1523,
        revenue: 89200,
        conversionRate: 42,
        growth: 203,
        color: "#22D3EE",
        glowColor: "rgba(34,211,238,0.12)",
        borderColor: "rgba(34,211,238,0.35)",
        imageSrc: "/Screenshot 2026-02-27 062247.png",
        chartPath: "M0,55 Q40,44 80,30 T140,16 T200,4",
    },
    {
        name: "HomeGoods Plus",
        category: "Wonen & Tuin",
        products: 3621,
        revenue: 215800,
        conversionRate: 35,
        growth: 189,
        color: "#A78BFA",
        glowColor: "rgba(167,139,250,0.12)",
        borderColor: "rgba(167,139,250,0.35)",
        imageSrc: "/Screenshot 2026-02-27 062312.png",
        chartPath: "M0,52 Q35,42 70,32 T130,18 T200,5",
    },
];

const globalStats = [
    { label: "Actieve Winkels", value: 500, suffix: "+", icon: ShoppingCart },
    { label: "Producten Beheerd", value: 50000, suffix: "+", icon: Package },
    { label: "Gemiddelde Groei", value: 178, suffix: "%", icon: TrendingUp },
    { label: "Klanttevredenheid", value: 49, suffix: "/5", icon: Star, display: "4.9/5" },
];

export function ClientStoreStatsSection() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            <div className="absolute inset-0 animated-grid opacity-30" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-full px-4 py-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                        <span className="text-[#22D3EE] text-sm font-medium">Live Winkel Statistieken</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Bewezen Resultaten bij Onze Klanten
                    </h2>
                    <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
                        Realtime prestaties van Bol.com winkels die SellerConnect gebruiken
                    </p>
                </motion.div>

                {/* Global Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
                    {globalStats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-5 border border-[#1E293B] text-center hover:border-[#6366F1]/30 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-lg bg-[#6366F1]/10 flex items-center justify-center mx-auto mb-3">
                                <stat.icon className="w-5 h-5 text-[#6366F1]" />
                            </div>
                            <p className="text-[#22D3EE] text-2xl font-bold">
                                {stat.display ? (
                                    stat.display
                                ) : (
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                )}
                            </p>
                            <p className="text-[#64748B] text-xs mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Client Store Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                    {clientStores.map((store, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-[#0F172A]/60 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden hover:border-[#6366F1]/40 transition-all duration-300 group"
                        >
                            {/* Card Header */}
                            <div
                                className="px-6 pt-5 pb-4"
                                style={{ borderBottom: `1px solid ${store.color}25` }}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-[#F8FAFC] font-bold text-lg">{store.name}</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div
                                            className="w-2 h-2 rounded-full animate-pulse"
                                            style={{ backgroundColor: store.color }}
                                        />
                                        <span className="text-xs font-medium" style={{ color: store.color }}>
                                            Live
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[#64748B] text-sm">{store.category}</span>
                            </div>

                            {/* Metrics */}
                            <div className="p-6 space-y-5">
                                {/* Revenue */}
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[#64748B] text-xs uppercase tracking-wide">
                                            Maandelijkse Omzet
                                        </span>
                                        <span
                                            className="text-xs font-semibold flex items-center gap-0.5"
                                            style={{ color: store.color }}
                                        >
                                            <ArrowUpRight className="w-3 h-3" />
                                            +{store.growth}% YoY
                                        </span>
                                    </div>
                                    <p className="text-[#F8FAFC] text-2xl font-bold">
                                        €<AnimatedCounter value={store.revenue} />
                                    </p>
                                </div>

                                {/* Products */}
                                <div>
                                    <span className="text-[#64748B] text-xs uppercase tracking-wide block mb-2">
                                        Actieve Producten
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <p className="text-[#F8FAFC] text-xl font-semibold">
                                            <AnimatedCounter value={store.products} />
                                        </p>
                                        <div className="flex-1 h-1.5 bg-[#1E293B] rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: store.color }}
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${Math.min((store.products / 4000) * 100, 100)}%`,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Conversion Rate */}
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[#64748B] text-xs uppercase tracking-wide">
                                            Conversie Rate
                                        </span>
                                        <span className="text-[#F8FAFC] text-sm font-semibold">
                                            {store.conversionRate}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-[#1E293B] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{
                                                background: `linear-gradient(90deg, ${store.color}, #22D3EE)`,
                                            }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${store.conversionRate}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.7 }}
                                        />
                                    </div>
                                </div>

                                {/* Mini trend chart */}
                                <div className="pt-2">
                                    <span className="text-[#64748B] text-xs uppercase tracking-wide block mb-2">
                                        Groei Trend
                                    </span>
                                    <svg
                                        className="w-full h-14"
                                        viewBox="0 0 200 60"
                                        preserveAspectRatio="none"
                                    >
                                        <defs>
                                            <linearGradient
                                                id={`grad-${i}`}
                                                x1="0%"
                                                y1="0%"
                                                x2="0%"
                                                y2="100%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor={store.color}
                                                    stopOpacity="0.35"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor={store.color}
                                                    stopOpacity="0"
                                                />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d={store.chartPath}
                                            fill="none"
                                            stroke={store.color}
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d={`${store.chartPath} L200,60 L0,60 Z`}
                                            fill={`url(#grad-${i})`}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Screenshot Reports */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h3 className="text-[#F8FAFC] text-2xl font-bold text-center mb-2">
                        Klant Resultaat Rapporten
                    </h3>
                    <p className="text-[#64748B] text-center text-sm mb-8">
                        Gedetailleerde prestatierapporten van onze topklanten
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {clientStores.map((store, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
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
                                        <p className="text-[#F8FAFC] text-sm font-semibold">{store.name}</p>
                                        <p className="text-[#475569] text-xs mt-0.5">{store.category}</p>
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
                                        +{store.growth}% groei
                                    </div>
                                </div>

                                {/* Screenshot with browser chrome */}
                                <div className="mx-4 rounded-xl overflow-hidden border border-[#1E293B]">
                                    {/* Browser chrome */}
                                    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0D1424] border-b border-[#1E293B]">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/55" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/55" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/55" />
                                        <div className="ml-2 flex-1 bg-[#1E293B] rounded px-2 py-0.5 text-[10px] text-[#475569] truncate">
                                            bol.com › Verkopersplatform › Verkoop­overzicht
                                        </div>
                                    </div>

                                    {/* Screenshot */}
                                    <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                                        <Image
                                            src={store.imageSrc}
                                            alt={`${store.name} dashboard`}
                                            fill
                                            className="object-cover object-top"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div
                                            className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
                                            style={{ background: "linear-gradient(to top, #0D1424 10%, transparent)" }}
                                        />
                                    </div>
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
                </motion.div>
            </div>
        </section>
    );
}
