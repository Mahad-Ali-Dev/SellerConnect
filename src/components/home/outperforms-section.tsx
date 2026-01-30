"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
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
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}

export function OutperformsSection() {
    const [monthlyProducts, setMonthlyProducts] = useState(1000);
    const [currentWorkers, setCurrentWorkers] = useState(1);
    const [avgOrderValue, setAvgOrderValue] = useState(5000);

    // Calculate savings based on inputs
    const annualSavings = Math.round(currentWorkers * 2000 * 12 - 297 * 12);
    const extraProducts = Math.round(monthlyProducts * 0.25);
    const additionalRevenue = Math.round(extraProducts * avgOrderValue * 0.1);

    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background */}
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
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Presteert beter dan handmatig werk.
                    </h2>
                    <p className="text-[#94A3B8] text-lg">Wij zullen:</p>
                </motion.div>

                {/* Three Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-5xl mx-auto">
                    {/* Card 1 - Increase Conversions */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B]"
                    >
                        <h3 className="text-[#6366F1] font-semibold mb-6">
                            <span className="text-xl">01.</span> Verhoog conversies
                        </h3>

                        {/* Chart visualization */}
                        <div className="h-32 flex items-end gap-4 mb-6">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gradient-to-t from-[#EF4444] to-[#F87171] rounded-t" />
                                <span className="text-xs text-[#64748B] mt-2">HANDMATIG</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-28 bg-gradient-to-t from-[#6366F1] to-[#22D3EE] rounded-t" />
                                <span className="text-xs text-[#64748B] mt-2">AI</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-[#64748B] text-sm">Handmatig gemiddeld:</p>
                            <p className="text-[#EF4444] text-2xl font-bold">10-20%</p>
                            <p className="text-[#64748B] text-sm">AI gemiddeld:</p>
                            <p className="text-[#22D3EE] text-2xl font-bold">30-40%</p>
                        </div>
                    </motion.div>

                    {/* Card 2 - Reduce Expenses */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B]"
                    >
                        <h3 className="text-[#6366F1] font-semibold mb-6">
                            <span className="text-xl">02.</span> Verminder kosten
                        </h3>

                        {/* Expense visualization */}
                        <div className="h-32 relative mb-6">
                            <div className="absolute top-0 left-0 right-0">
                                <div className="bg-[#1E293B] rounded px-3 py-1 inline-block text-xs text-[#94A3B8]">
                                    HANDMATIGE KOSTEN
                                </div>
                                <svg className="w-full h-16 mt-2" viewBox="0 0 200 60">
                                    <path
                                        d="M0,50 Q50,40 100,30 T200,10"
                                        fill="none"
                                        stroke="#EF4444"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0">
                                <div className="bg-[#6366F1]/20 rounded px-3 py-1 inline-block text-xs text-[#6366F1]">
                                    AI KOSTEN
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-[#64748B] text-sm">1 medewerker:</p>
                            <p className="text-[#EF4444] text-2xl font-bold">€2000<span className="text-sm font-normal">/maand</span></p>
                            <p className="text-[#64748B] text-sm">Onbeperkt AI:</p>
                            <p className="text-[#22D3EE] text-2xl font-bold">€297<span className="text-sm font-normal">/maand</span></p>
                        </div>
                    </motion.div>

                    {/* Card 3 - Maximize Capacity */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B]"
                    >
                        <h3 className="text-[#6366F1] font-semibold mb-6">
                            <span className="text-xl">03.</span> Maximaliseer capaciteit
                        </h3>

                        {/* Globe visualization */}
                        <div className="h-32 flex items-center justify-center mb-6">
                            <div className="w-24 h-24 rounded-full border-2 border-[#6366F1]/30 relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6366F1]/10 to-transparent" />
                                <div className="absolute inset-2 rounded-full border border-dashed border-[#22D3EE]/20" />
                                <div className="absolute top-1/2 left-0 right-0 h-px bg-[#6366F1]/20" />
                                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#6366F1]/20" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-[#64748B] text-sm">Handmatige capaciteit:</p>
                            <p className="text-[#EF4444] text-2xl font-bold">150<span className="text-sm font-normal text-[#64748B]"> producten per dag</span></p>
                            <p className="text-[#64748B] text-sm">AI capaciteit:</p>
                            <p className="text-[#22D3EE] text-2xl font-bold">10,000+<span className="text-sm font-normal text-[#64748B]"> producten per dag</span></p>
                        </div>
                    </motion.div>
                </div>

                {/* Calculator Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Input Sliders */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-4 border border-[#1E293B]">
                            <label className="text-[#64748B] text-sm block mb-2">Maandelijkse Producten</label>
                            <input
                                type="number"
                                value={monthlyProducts}
                                onChange={(e) => setMonthlyProducts(Number(e.target.value))}
                                className="w-full bg-transparent text-[#F8FAFC] text-2xl font-bold outline-none"
                            />
                        </div>
                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-4 border border-[#1E293B]">
                            <label className="text-[#64748B] text-sm block mb-2">Huidige Medewerkers</label>
                            <input
                                type="number"
                                value={currentWorkers}
                                onChange={(e) => setCurrentWorkers(Number(e.target.value))}
                                className="w-full bg-transparent text-[#F8FAFC] text-2xl font-bold outline-none"
                            />
                        </div>
                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-4 border border-[#1E293B]">
                            <label className="text-[#64748B] text-sm block mb-2">Gemiddelde Orderwaarde</label>
                            <input
                                type="number"
                                value={avgOrderValue}
                                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                                className="w-full bg-transparent text-[#F8FAFC] text-2xl font-bold outline-none"
                            />
                        </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-6 border border-[#1E293B] text-center">
                            <p className="text-[#64748B] text-sm mb-2">Jaarlijkse Besparing</p>
                            <p className="text-[#22D3EE] text-4xl font-bold">
                                <AnimatedCounter value={annualSavings > 0 ? annualSavings : 20436} prefix="€" />
                            </p>
                            <p className="text-[#64748B] text-xs mt-1">bespaard per jaar</p>
                        </div>
                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-6 border border-[#1E293B] text-center">
                            <p className="text-[#64748B] text-sm mb-2">Extra Producten/Maand</p>
                            <p className="text-[#F8FAFC] text-4xl font-bold">
                                +<AnimatedCounter value={extraProducts > 0 ? extraProducts : 250} />
                            </p>
                            <p className="text-[#64748B] text-xs mt-1">meer uploads</p>
                        </div>
                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-6 border border-[#1E293B] text-center">
                            <p className="text-[#64748B] text-sm mb-2">Extra Omzet/Maand</p>
                            <p className="text-[#22D3EE] text-4xl font-bold">
                                <AnimatedCounter value={additionalRevenue > 0 ? additionalRevenue : 312500} prefix="€" />
                            </p>
                            <p className="text-[#64748B] text-xs mt-1">extra omzet</p>
                        </div>
                    </div>

                    {/* Comparison Bars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-6 border border-[#1E293B]">
                            <h4 className="text-[#F8FAFC] font-semibold mb-4">Handmatig Werk</h4>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-[#64748B]">Conversie Rate</span>
                                        <span className="text-[#EF4444]">15%</span>
                                    </div>
                                    <div className="h-2 bg-[#1E293B] rounded-full">
                                        <div className="h-full w-[15%] bg-[#EF4444] rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-[#64748B]">Maandelijkse Kosten</span>
                                        <span className="text-[#EF4444]">€2000</span>
                                    </div>
                                    <div className="h-2 bg-[#1E293B] rounded-full">
                                        <div className="h-full w-[85%] bg-[#EF4444] rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-6 border border-[#6366F1]/30">
                            <h4 className="text-[#F8FAFC] font-semibold mb-4">SellerConnect AI</h4>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-[#64748B]">Conversie Rate</span>
                                        <span className="text-[#22D3EE]">40%</span>
                                    </div>
                                    <div className="h-2 bg-[#1E293B] rounded-full">
                                        <div className="h-full w-[40%] bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-[#64748B]">Maandelijkse Kosten</span>
                                        <span className="text-[#22D3EE]">€297</span>
                                    </div>
                                    <div className="h-2 bg-[#1E293B] rounded-full">
                                        <div className="h-full w-[15%] bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <p className="text-[#F8FAFC] text-2xl font-bold mb-4">
                            Klaar om €{annualSavings > 0 ? annualSavings.toLocaleString() : '20,436'}/jaar te besparen?
                        </p>
                        <p className="text-[#94A3B8] mb-6">
                            Start je 14-dagen gratis proefperiode en ervaar de resultaten zelf
                        </p>
                        <Link href="/auth/register">
                            <Button className="h-12 px-8 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white rounded-xl font-medium shadow-lg shadow-[#6366F1]/25">
                                Start Gratis Proefperiode
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
