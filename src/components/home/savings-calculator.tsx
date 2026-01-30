"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Calculator, Euro, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SavingsCalculator() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Animated counter
    const [annualSavings, setAnnualSavings] = useState(0);
    const [hoursSaved, setHoursSaved] = useState(0);
    const [revenueIncrease, setRevenueIncrease] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;

        // Animate annual savings to 20,436
        const savingsIncrement = 20436 / steps;
        let savingsCount = 0;

        // Animate hours saved to 160
        const hoursIncrement = 160 / steps;
        let hoursCount = 0;

        // Animate revenue increase to 45
        const revenueIncrement = 45 / steps;
        let revenueCount = 0;

        const timer = setInterval(() => {
            savingsCount += savingsIncrement;
            hoursCount += hoursIncrement;
            revenueCount += revenueIncrement;

            if (savingsCount >= 20436) {
                setAnnualSavings(20436);
                setHoursSaved(160);
                setRevenueIncrease(45);
                clearInterval(timer);
            } else {
                setAnnualSavings(Math.floor(savingsCount));
                setHoursSaved(Math.floor(hoursCount));
                setRevenueIncrease(Math.floor(revenueCount));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible]);

    return (
        <section ref={ref} className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 animated-grid opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366F1]/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Calculator className="w-4 h-4" />
                            Calculate Your Savings
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Ready to Save{" "}
                            <span className="gradient-text">€{annualSavings.toLocaleString()}</span>/year?
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Start your 14-day free trial and see the results for yourself
                        </p>
                    </motion.div>

                    {/* Metrics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {/* Annual Savings */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E] to-[#10B981] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
                            <div className="relative bg-[#0F172A]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#22C55E]/20 text-center">
                                <div className="w-14 h-14 rounded-xl bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-4">
                                    <Euro className="w-7 h-7 text-[#22C55E]" />
                                </div>
                                <div className="text-5xl font-bold text-[#22C55E] mb-2">
                                    €{annualSavings.toLocaleString()}
                                </div>
                                <div className="text-[#94A3B8]">Annual Savings</div>
                            </div>
                        </motion.div>

                        {/* Hours Saved */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
                            <div className="relative bg-[#0F172A]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#6366F1]/20 text-center">
                                <div className="w-14 h-14 rounded-xl bg-[#6366F1]/10 flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-7 h-7 text-[#6366F1]" />
                                </div>
                                <div className="text-5xl font-bold text-[#6366F1] mb-2">
                                    {hoursSaved}+
                                </div>
                                <div className="text-[#94A3B8]">Hours Saved/Month</div>
                            </div>
                        </motion.div>

                        {/* Revenue Increase */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE] to-[#06B6D4] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
                            <div className="relative bg-[#0F172A]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#22D3EE]/20 text-center">
                                <div className="w-14 h-14 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-7 h-7 text-[#22D3EE]" />
                                </div>
                                <div className="text-5xl font-bold text-[#22D3EE] mb-2">
                                    {revenueIncrease}%
                                </div>
                                <div className="text-[#94A3B8]">Revenue Increase</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <Link href="/auth/register">
                            <Button
                                size="lg"
                                className="h-14 px-8 text-base font-medium rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 transition-all text-white shadow-lg shadow-[#6366F1]/25"
                            >
                                Start Your Free Trial
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <p className="text-[#64748B] text-sm mt-4">
                            No credit card required • Cancel anytime
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
