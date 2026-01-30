"use client";

import { motion } from "framer-motion";

const stats = [
    "50,000+ Products Synced",
    "500+ Active Sellers",
    "99% Success Rate",
    "24/7 Support",
    "€2M+ Revenue Generated",
    "1000+ Orders Daily",
];

export function MarqueeBanner() {
    return (
        <section className="py-4 bg-gradient-to-r from-[#6366F1]/10 via-[#22D3EE]/10 to-[#6366F1]/10 border-y border-[#1E293B] overflow-hidden">
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

                {/* Marquee Container */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex shrink-0 gap-8 items-center"
                        animate={{ x: [0, -1920] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {/* First set */}
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center gap-4 shrink-0">
                                <span className="text-sm font-semibold text-[#F8FAFC] whitespace-nowrap">
                                    {stat}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {stats.map((stat, index) => (
                            <div key={`dup-${index}`} className="flex items-center gap-4 shrink-0">
                                <span className="text-sm font-semibold text-[#F8FAFC] whitespace-nowrap">
                                    {stat}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
                            </div>
                        ))}
                        {/* Third set for smooth looping */}
                        {stats.map((stat, index) => (
                            <div key={`tri-${index}`} className="flex items-center gap-4 shrink-0">
                                <span className="text-sm font-semibold text-[#F8FAFC] whitespace-nowrap">
                                    {stat}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
