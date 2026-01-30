"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    "Bol Product Importer",
    "Woocommerce Product Importer",
    "Bol Order Management",
    "Bol Facturatiesoftware",
    "Bol Stock Controle",
    "Delivery Management with DHL",
    "Physical & Digital Product",
    "Multiple Theme Option",
    "Multiple Language Option",
    "Country & Tax Management",
    "Coupon Management",
    "Refund Management",
    "User Management",
    "Page Management",
    "Blog Management",
    "Testimonial Management"
];

export function AllInOne() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm mb-6">
                        <span>Alles-in-één</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        We Make It Very Simple & Easy To <br /> Build Your Online Shop
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We have developed for you more than what is required for an online shop.
                        Import your products in a short time and start selling quickly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                        >
                            <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-success" />
                            </div>
                            <span className="font-medium text-foreground text-sm">{feature}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
