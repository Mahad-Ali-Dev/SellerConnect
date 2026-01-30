"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, RotateCcw, Package, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Truck,
        title: "Fast Shipping",
        description: "Same-day dispatch for orders received before 2 PM.",
    },
    {
        icon: RotateCcw,
        title: "Return Handling",
        description: "We process all returns quickly for fast refunds.",
    },
    {
        icon: Package,
        title: "Warehousing",
        description: "Secure storage with real-time inventory tracking.",
    },
    {
        icon: Clock,
        title: "24/7 Operations",
        description: "Round-the-clock fulfillment to meet demand.",
    },
];

export function Fulfillment() {
    return (
        <section className="py-24 bg-[#020817] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#22D3EE]/5 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Features Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-[#0F172A]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#1E293B] hover:border-[#6366F1]/30 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 flex items-center justify-center text-[#6366F1] mb-4">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{feature.title}</h3>
                                    <p className="text-[#94A3B8] text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-6">
                                Fulfillment Center
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] leading-tight mb-6">
                                Focus on growth,
                                <br />
                                <span className="gradient-text">we handle logistics</span>
                            </h2>

                            <p className="text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-lg">
                                Ship your products to our fulfillment center. We handle storage, packing, and shipping so you can focus on scaling your business.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/fulfillment">
                                    <Button className="h-12 px-6 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white shadow-lg shadow-[#6366F1]/25">
                                        Learn More
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <Link href="/pricing">
                                    <Button
                                        variant="outline"
                                        className="h-12 px-6 rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50"
                                    >
                                        View Pricing
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
