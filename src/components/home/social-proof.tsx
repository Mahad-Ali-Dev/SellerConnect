"use client";

import { motion } from "framer-motion";
import { Star, Users, Zap, Check } from "lucide-react";

const stats = [
    { label: "Active Sellers", value: "2,000+", icon: Users },
    { label: "Products Listed", value: "1.5M+", icon: Zap },
    { label: "Customer Rating", value: "4.9/5", icon: Star },
];

export function SocialProofSection() {
    return (
        <section className="py-12 bg-white/5 border-b border-white/5">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-center gap-4"
                        >
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
