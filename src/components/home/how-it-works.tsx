"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, Upload, Rocket } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: UserPlus,
        title: "Create Account",
        description: "Register in seconds and get instant access to our platform.",
    },
    {
        number: "02",
        icon: Settings,
        title: "Configure Settings",
        description: "Connect your Bol.com account and set your preferences.",
    },
    {
        number: "03",
        icon: Upload,
        title: "Upload Products",
        description: "Upload your product data or let us automatically add products.",
    },
    {
        number: "04",
        icon: Rocket,
        title: "Start Selling",
        description: "Your products are live! Track sales in real-time.",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-[#020817] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                        How it works
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Get started in{" "}
                        <span className="gradient-text">4 simple steps</span>
                    </h2>
                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        Start selling on Bol.com today with our simple onboarding process
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connection Line - Desktop */}
                    <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#6366F1] via-[#22D3EE] to-[#6366F1] opacity-30" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative text-center"
                            >
                                {/* Step Number */}
                                <div className="text-6xl font-bold text-[#1E293B] mb-4">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#6366F1]/20"
                                >
                                    <step.icon className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-[#94A3B8] text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
