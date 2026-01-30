"use client";

import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import MagicWrapper from "@/components/client/MagicWrapper";
import {
    Package,
    BarChart3,
    Truck,
    Shield,
    Zap,
    Headphones,
    ArrowRight,
    TrendingUp,
    Clock,
    Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Package,
        title: "Product Uploads",
        description: "Easily add thousands of products to Bol.com with our automated tools.",
        href: "/bol/producten-toevoegen",
        size: "large",
        gradient: "from-[#6366F1] to-[#8B5CF6]",
    },
    {
        icon: BarChart3,
        title: "Stock Management",
        description: "Real-time inventory sync prevents overselling.",
        href: "/bol/voorraad-beheer",
        size: "small",
        gradient: "from-[#22D3EE] to-[#06B6D4]",
    },
    {
        icon: Shield,
        title: "100% Buy Box",
        description: "Win the Buy Box with proven strategies.",
        href: "/software",
        size: "small",
        gradient: "from-[#22C55E] to-[#10B981]",
    },
    {
        icon: Truck,
        title: "Fulfillment Services",
        description: "We handle logistics so you can focus on growth and scaling your business.",
        href: "/bol/fulfillment",
        size: "large",
        gradient: "from-[#F59E0B] to-[#EAB308]",
    },
    {
        icon: Zap,
        title: "Automation",
        description: "Save time with automated workflows.",
        href: "/how-it-works",
        size: "small",
        gradient: "from-[#EC4899] to-[#F43F5E]",
    },
    {
        icon: TrendingUp,
        title: "Analytics",
        description: "Deep insights into your performance.",
        href: "/software",
        size: "small",
        gradient: "from-[#8B5CF6] to-[#A855F7]",
    },
    {
        icon: Globe,
        title: "Multi-Channel",
        description: "Connect all your sales channels in one dashboard. Sync across platforms seamlessly.",
        href: "/integrations",
        size: "large",
        gradient: "from-[#14B8A6] to-[#22D3EE]",
    },
    {
        icon: Clock,
        title: "24/7 Sync",
        description: "Round-the-clock synchronization.",
        href: "/software",
        size: "small",
        gradient: "from-[#6366F1] to-[#22D3EE]",
    },
    {
        icon: Headphones,
        title: "Support",
        description: "Expert assistance when you need it.",
        href: "/support",
        size: "small",
        gradient: "from-[#F43F5E] to-[#EC4899]",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 animated-grid opacity-30" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#22D3EE]/5 rounded-full blur-[128px]" />

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
                        Why Choose SellerConnect
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Everything you need to{" "}
                        <span className="gradient-text">grow</span>
                    </h2>
                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        From product uploads to fulfillment, we provide a complete solution for your Bol.com sales
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`group ${feature.size === "large" ? "lg:col-span-2" : ""}`}
                        >
                            <Link href={feature.href}>
                                <div className={`h-full bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-all duration-300 hover:-translate-y-1 ${feature.size === "large" ? "min-h-[180px]" : "min-h-[160px]"}`}>
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                                        {feature.description}
                                    </p>

                                    {/* Link */}
                                    <span className="inline-flex items-center gap-2 text-[#6366F1] font-medium text-sm group-hover:gap-3 transition-all">
                                        Learn more
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link href="/pricing">
                        <MagicWrapper>
                            <ShimmerButton className="shadow-2xl h-12 px-6 rounded-xl">
                                View all pricing
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </ShimmerButton>
                        </MagicWrapper>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
