"use client";

import { motion } from "framer-motion";
import { Package, Truck, ShoppingCart, Store, Layers, Database, Globe, Zap } from "lucide-react";

const partners = [
    { name: "Bol.com", icon: ShoppingCart },
    { name: "PostNL", icon: Truck },
    { name: "DHL", icon: Package },
    { name: "Sendcloud", icon: Globe },
    { name: "Channable", icon: Layers },
    { name: "Lightspeed", icon: Zap },
    { name: "Shopify", icon: Store },
    { name: "WooCommerce", icon: Database },
];

export function Partners() {
    return (
        <section className="py-16 bg-[#020817] border-y border-[#1E293B]/50 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <p className="text-[#64748B] text-sm font-medium uppercase tracking-wider">
                        Trusted integrations with leading platforms
                    </p>
                </motion.div>

                {/* Scrolling Logos */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020817] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020817] to-transparent z-10" />

                    {/* Scrolling Container */}
                    <motion.div
                        animate={{ x: [0, -1536] }}
                        transition={{
                            repeat: Infinity,
                            duration: 25,
                            ease: "linear",
                        }}
                        className="flex gap-6"
                    >
                        {/* Duplicate the partners array for seamless loop */}
                        {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-44 h-20 bg-[#0F172A]/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#1E293B] hover:border-[#6366F1]/30 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1]/10 group-hover:text-[#22D3EE] transition-all">
                                        <partner.icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-[#94A3B8] group-hover:text-[#F8FAFC] transition-colors">{partner.name}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Integration Count */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <p className="text-[#64748B]">
                        And <span className="text-[#6366F1] font-semibold">50+ more integrations</span> available
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
