"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Clock, Users, Zap, Target } from "lucide-react";

const comparisons = [
    {
        title: "Setup Time",
        manual: "2-3 weeks",
        automated: "24 hours",
        manualIcon: Clock,
        improvement: "95% faster",
    },
    {
        title: "Daily Capacity",
        manual: "50 products",
        automated: "5,000+ products",
        manualIcon: Users,
        improvement: "100x more",
    },
    {
        title: "Error Rate",
        manual: "5-10%",
        automated: "< 0.1%",
        manualIcon: Target,
        improvement: "99% reduction",
    },
];

export function ComparisonSection() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#EF4444]/5 rounded-full blur-[128px]" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Zap className="w-4 h-4" />
                        Why Automate?
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Manual vs{" "}
                        <span className="gradient-text">Automated</span>
                    </h2>
                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        See why 500+ sellers have switched to automated operations
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <div className="max-w-4xl mx-auto">
                    {/* Header Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-4 mb-6"
                    >
                        <div className="text-[#64748B] text-sm font-medium">Metric</div>
                        <div className="text-center">
                            <span className="inline-flex items-center gap-2 text-[#EF4444] text-sm font-medium">
                                <TrendingDown className="w-4 h-4" />
                                Manual Process
                            </span>
                        </div>
                        <div className="text-center">
                            <span className="inline-flex items-center gap-2 text-[#22C55E] text-sm font-medium">
                                <TrendingUp className="w-4 h-4" />
                                With SellerConnect
                            </span>
                        </div>
                    </motion.div>

                    {/* Comparison Rows */}
                    {comparisons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="grid grid-cols-3 gap-4 items-center py-6 border-b border-[#1E293B] last:border-b-0"
                        >
                            {/* Metric Name */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center">
                                    <item.manualIcon className="w-5 h-5 text-[#6366F1]" />
                                </div>
                                <span className="text-[#F8FAFC] font-medium">{item.title}</span>
                            </div>

                            {/* Manual Value */}
                            <div className="text-center">
                                <div className="inline-block bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg px-4 py-2">
                                    <span className="text-[#EF4444] font-semibold">{item.manual}</span>
                                </div>
                            </div>

                            {/* Automated Value */}
                            <div className="text-center relative">
                                <div className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-lg px-4 py-2">
                                    <span className="text-[#22C55E] font-semibold">{item.automated}</span>
                                </div>
                                {/* Improvement Badge */}
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                    className="absolute -top-2 -right-2 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white text-xs font-medium px-2 py-0.5 rounded-full"
                                >
                                    {item.improvement}
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
                >
                    {[
                        { value: "€20K+", label: "Annual Savings", color: "from-[#22C55E] to-[#10B981]" },
                        { value: "40+", label: "Hours Saved/Month", color: "from-[#6366F1] to-[#8B5CF6]" },
                        { value: "3x", label: "Revenue Growth", color: "from-[#22D3EE] to-[#06B6D4]" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="text-center p-6 bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B]"
                        >
                            <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                {stat.value}
                            </div>
                            <div className="text-[#94A3B8] text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
