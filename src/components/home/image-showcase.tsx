"use client";

import { motion } from "framer-motion";
import { Package, BarChart3, Truck, ImageIcon } from "lucide-react";

const showcaseItems = [
    {
        icon: Package,
        title: "Product Management",
        description: "Beheer al je producten vanuit één dashboard",
        image: "/assets/img/Product_management.png",
    },
    {
        icon: BarChart3,
        title: "Analytics & Inzichten",
        description: "Real-time statistieken en verkooprapporten",
        image: "/assets/img/dk.png",
    },
    {
        icon: Truck,
        title: "Fulfillment Overzicht",
        description: "Volg al je zendingen en retouren",
        image: "/assets/img/fulfilment.png",
    },
];

export function ImageShowcase() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 animated-grid opacity-30" />
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <ImageIcon className="w-4 h-4" />
                        Platform Overzicht
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Krachtige <span className="gradient-text">tools</span> voor jouw succes
                    </h2>
                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        Ontdek de functies die jouw Bol.com winkel naar het volgende niveau tillen
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {showcaseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Feature Image */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl border border-[#1E293B] overflow-hidden mb-4 group-hover:border-[#6366F1]/30 transition-colors">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{item.title}</h3>
                            <p className="text-[#94A3B8] text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
