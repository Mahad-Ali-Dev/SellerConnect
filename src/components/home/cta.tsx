"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Animated Gradient Background */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #22D3EE 100%)",
                        "linear-gradient(135deg, #8B5CF6 0%, #22D3EE 50%, #6366F1 100%)",
                        "linear-gradient(135deg, #22D3EE 0%, #6366F1 50%, #8B5CF6 100%)",
                        "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #22D3EE 100%)",
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Animated Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute -top-32 -right-32 w-96 h-96 bg-white rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    className="absolute -bottom-32 -left-32 w-96 h-96 bg-white rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        Start Je 14 Dagen Gratis Proefperiode
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Klaar om je Bol.com
                        <br />
                        business te schalen?
                    </motion.h2>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/80 mb-8 max-w-xl mx-auto"
                    >
                        Sluit je aan bij 500+ succesvolle verkopers en ontdek hoe SellerConnect je kan helpen groeien.
                    </motion.p>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-6 mb-10"
                    >
                        {["14-dagen gratis proefperiode", "Geen creditcard nodig", "Op elk moment opzeggen"].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2 text-white/90 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-white" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/auth/register">
                            <Button
                                size="lg"
                                className="h-14 px-8 text-base bg-white text-[#6366F1] hover:bg-white/90 rounded-xl shadow-xl shadow-black/20 font-semibold"
                            >
                                Maak Gratis Account Aan
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-14 px-8 text-base bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-xl"
                            >
                                Neem Contact Op
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
