"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Tag } from "lucide-react";

export function IntegrationSection() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            <div className="absolute inset-0 animated-grid opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Side - 2 Minute Integration */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-bold text-[#F8FAFC] mb-2">2 minuten</h2>
                        <p className="text-[#94A3B8] text-lg mb-8">Integratie</p>

                        {/* Flow visualization */}
                        <div className="relative py-8">
                            {/* Line */}
                            <div className="absolute top-1/2 left-16 right-16 h-px bg-[#1E293B]" />

                            {/* Start Icon */}
                            <div className="flex items-center justify-between relative">
                                <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 border border-[#6366F1] flex items-center justify-center z-10">
                                    <Zap className="w-6 h-6 text-[#6366F1]" />
                                </div>

                                {/* Middle indicator */}
                                <div className="flex gap-0.5 z-10">
                                    <div className="w-3 h-6 bg-[#6366F1] rounded-sm" />
                                    <div className="w-3 h-6 bg-[#22D3EE] rounded-sm" />
                                </div>

                                {/* End Icon */}
                                <div className="w-12 h-12 rounded-xl bg-[#1E293B] flex items-center justify-center z-10">
                                    <ArrowRight className="w-6 h-6 text-[#64748B]" />
                                </div>
                            </div>
                        </div>

                        <p className="text-[#94A3B8] text-sm mt-8">
                            Je tools, <span className="text-[#6366F1]">versterkt</span>. Wij verbeteren wat je al gebruikt, we vervangen het niet.
                        </p>
                    </motion.div>

                    {/* Right Side - Workflow Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[#94A3B8] text-sm mb-4">Uren bespaard per maand</p>

                        <div className="space-y-4">
                            {/* Trigger Card */}
                            <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-4 border border-[#1E293B]">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#6366F1]/10 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-[#6366F1]" />
                                    </div>
                                    <div>
                                        <p className="text-[#F8FAFC] font-medium">PRODUCT_UPLOADED</p>
                                        <p className="text-[#64748B] text-sm">Trigger</p>
                                    </div>
                                </div>
                            </div>

                            {/* Connection line */}
                            <div className="flex justify-center">
                                <div className="w-px h-8 bg-[#1E293B]" />
                            </div>

                            {/* Action Card */}
                            <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-4 border border-[#1E293B]">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center">
                                        <Tag className="w-5 h-5 text-[#64748B]" />
                                    </div>
                                    <div>
                                        <p className="text-[#F8FAFC] font-medium">Voeg Label Toe</p>
                                        <p className="text-[#64748B] text-sm">Taak</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
