"use client";

import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import MagicWrapper from "@/components/client/MagicWrapper";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { BusinessGrowthAnimation } from "./business-growth-animation";
import { Typewriter } from "./typewriter";

const services = [
    "Product Listings",
    "Fulfillment Services",
    "Voorraadbeheer",
    "Order Automatisering",
    "Analytics & Inzichten",
];

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#020617] overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 animated-grid opacity-50" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-[128px]" />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Main Heading */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                Verbind Verkopers.
                                <br />
                                <span className="gradient-text">
                                    <Typewriter words={services} />
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-lg">
                                Automatiseer je Bol.com operaties met ons enterprise-grade platform.
                                Synchroniseer voorraad, verwerk bestellingen en schaal sneller.
                            </p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link href="/contact">
                                    <MagicWrapper>
                                        <ShimmerButton className="h-14 px-8 text-base font-medium rounded-xl">
                                            Neem Contact Op
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </ShimmerButton>
                                    </MagicWrapper>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Animation */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <BusinessGrowthAnimation />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
