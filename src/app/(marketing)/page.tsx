"use client";

import { HeroSection } from "@/components/home/hero-section";
import { ServicesGrid } from "@/components/home/service-grid";
import { SocialProofSection } from "@/components/home/social-proof";
import { motion } from "framer-motion";
import { Globe, Laptop } from "lucide-react";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import MagicWrapper from "@/components/client/MagicWrapper";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0B1120]">
            <HeroSection />
            <SocialProofSection />
            <ServicesGrid />

            {/* Trust / Carriers Section */}
            <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="container px-4 text-center">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
                        Official Logistics Partners
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {["PostNL", "DHL", "DHL Express", "DPD", "UPS", "FedEx"].map((carrier) => (
                            <span key={carrier} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default">
                                {carrier}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Highlight: E-Commerce */}
            <section className="py-24 relative overflow-hidden">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                                <Laptop className="w-4 h-4 mr-2" />
                                Wholesale & Webshop
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Your Brand, <br />
                                <span className="text-primary">Global Reach.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Launch a professional B2B webshop or consumer storefront that stays perfectly in sync with your marketplace inventory.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {["Multi-Language Support (NL, DE, EN, FR)", "Multi-Currency Options", "Automatic Stock Sync with Bol/Amazon", "Wholesale Portal Functionality"].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-cyan-400 mr-4 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/services/ecommerce">
                                <MagicWrapper>
                                    <ShimmerButton className="h-12 px-8">Start Webshop</ShimmerButton>
                                </MagicWrapper>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square md:aspect-video rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl overflow-hidden relative">
                                {/* Mockup UI Elements */}
                                <div className="absolute inset-0 bg-grid-white/[0.05]" />
                                <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="absolute inset-12 top-24 bg-white/5 rounded-xl border border-white/5 p-6 flex flex-col gap-4">
                                    <div className="w-1/3 h-8 bg-white/10 rounded-lg animate-pulse" />
                                    <div className="flex gap-4">
                                        <div className="w-2/3 h-32 bg-primary/10 rounded-lg border border-primary/20" />
                                        <div className="w-1/3 h-32 bg-white/5 rounded-lg" />
                                    </div>
                                    <div className="w-full h-4 bg-white/5 rounded-full" />
                                    <div className="w-3/4 h-4 bg-white/5 rounded-full" />
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-[#0B1120] border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">Live Sync</div>
                                    <div className="text-xs text-muted-foreground">Bol.com ↔ Webshop</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20" />
                <div className="container relative text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to scale your business?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join hundreds of sellers who have automated their operations with ConnectSeller.
                    </p>
                    <Link href="/auth/register">
                        <MagicWrapper>
                            <ShimmerButton className="h-14 px-10 text-lg shadow-2xl shadow-primary/20">Direct Starten</ShimmerButton>
                        </MagicWrapper>
                    </Link>
                </div>
            </section>

        </main>
    );
}
