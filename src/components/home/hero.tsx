"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import MagicWrapper from "@/components/client/MagicWrapper";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { BusinessGrowthAnimation } from "./business-growth-animation";
import { Typewriter } from "./typewriter";

const services = [
    "Product Listings",
    "Fulfillment Services",
    "Stock Management",
    "Order Automation",
    "Analytics & Insights",
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
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-6"
                            >
                                <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                                <span>Trusted by 500+ sellers</span>
                            </motion.div>

                            {/* Main Heading */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                Connect Sellers.
                                <br />
                                <span className="gradient-text">
                                    <Typewriter words={services} />
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-lg">
                                Automate your Bol.com operations with our enterprise-grade platform.
                                Sync inventory, process orders, and scale faster.
                            </p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link href="/auth/register">
                                    <MagicWrapper>
                                        <ShimmerButton className="h-14 px-8 text-base font-medium rounded-xl">
                                            Get Started Free
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </ShimmerButton>
                                    </MagicWrapper>
                                </Link>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50 hover:border-[#475569]"
                                    onClick={() => {
                                        const videoSection = document.getElementById('video-section');
                                        if (videoSection) {
                                            videoSection.scrollIntoView({ behavior: 'smooth' });
                                            setTimeout(() => {
                                                const video = videoSection.querySelector('video');
                                                if (video) video.play();
                                            }, 800);
                                        }
                                    }}
                                >
                                    <Play className="w-5 h-5 mr-2 fill-current" />
                                    Watch Demo
                                </Button>
                            </motion.div>

                            {/* Trust Indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex items-center gap-8 mt-10 pt-10 border-t border-[#1E293B]"
                            >
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#F8FAFC]">50K+</div>
                                    <div className="text-sm text-[#64748B]">Products Synced</div>
                                </div>
                                <div className="w-px h-10 bg-[#1E293B]" />
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#F8FAFC]">99.9%</div>
                                    <div className="text-sm text-[#64748B]">Uptime</div>
                                </div>
                                <div className="w-px h-10 bg-[#1E293B]" />
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#F8FAFC]">24/7</div>
                                    <div className="text-sm text-[#64748B]">Support</div>
                                </div>
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
