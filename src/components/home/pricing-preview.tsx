"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Zap, Crown, Rocket, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        description: "Perfect for beginners",
        monthlyPrice: "99",
        yearlyPrice: "79",
        icon: Zap,
        popular: false,
        features: [
            "Up to 1,000 products",
            "Basic stock control",
            "Email support",
            "Dashboard access",
            "API access",
        ],
        cta: "Start Nu",
        ctaLink: "/contact",
    },
    {
        name: "Premium",
        description: "For growing businesses",
        monthlyPrice: "299",
        yearlyPrice: "239",
        icon: Crown,
        popular: true,
        features: [
            "Up to 5,000 products",
            "Advanced stock control",
            "Priority support",
            "Analytics dashboard",
            "Full API integration",
            "Multi-channel sync",
        ],
        cta: "Start Nu",
        ctaLink: "/contact",
    },
    {
        name: "Business",
        description: "For large organizations",
        monthlyPrice: "Custom",
        yearlyPrice: "Custom",
        icon: Rocket,
        popular: false,
        features: [
            "Unlimited products",
            "Enterprise stock control",
            "24/7 premium support",
            "Custom analytics",
            "Full API access",
            "Dedicated manager",
            "Custom integrations",
        ],
        cta: "Neem Contact Op",
        ctaLink: "/contact",
    },
];

export function PricingPreview() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden" id="pricing">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#22D3EE]/5 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        Pricing Options
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Simple,{" "}
                        <span className="gradient-text">transparent</span> pricing
                    </h2>
                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        Choose the subscription plan that suits your needs. No hidden fees.
                    </p>
                </motion.div>

                {/* Billing Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-4 mb-12"
                >
                    <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-[#F8FAFC]' : 'text-[#64748B]'}`}>
                        Monthly
                    </span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-[#6366F1]' : 'bg-[#1E293B]'}`}
                    >
                        <motion.div
                            className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
                            animate={{ left: isYearly ? '32px' : '4px' }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    </button>
                    <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-[#F8FAFC]' : 'text-[#64748B]'}`}>
                        Yearly
                    </span>
                    {isYearly && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-[#22C55E] text-white text-xs font-medium px-2 py-1 rounded-full"
                        >
                            Save 20%
                        </motion.span>
                    )}
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg shadow-[#6366F1]/30">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className={`h-full bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${plan.popular
                                ? 'border-[#6366F1]/50 shadow-xl shadow-[#6366F1]/10'
                                : 'border-[#1E293B] hover:border-[#6366F1]/30'
                                }`}>
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg ${plan.popular
                                    ? 'bg-gradient-to-br from-[#6366F1] to-[#22D3EE] shadow-[#6366F1]/30'
                                    : 'bg-[#1E293B]'
                                    }`}>
                                    <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-white' : 'text-[#6366F1]'}`} />
                                </div>

                                {/* Plan Info */}
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">{plan.name}</h3>
                                <p className="text-[#64748B] text-sm mb-5">{plan.description}</p>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className="text-5xl font-bold text-[#F8FAFC]">
                                        {plan.monthlyPrice === "Custom" ? "" : "€"}
                                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                    </span>
                                    {plan.monthlyPrice !== "Custom" && (
                                        <span className="text-[#64748B]">/month</span>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular
                                                ? 'bg-[#6366F1]/20'
                                                : 'bg-[#22C55E]/10'
                                                }`}>
                                                <Check className={`w-3 h-3 ${plan.popular ? 'text-[#6366F1]' : 'text-[#22C55E]'}`} />
                                            </div>
                                            <span className="text-[#94A3B8]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <Link href={plan.monthlyPrice === "Custom" ? "/contact" : "/auth/register"} className="block">
                                    <Button
                                        className={`w-full h-12 rounded-xl font-medium transition-all ${plan.popular
                                            ? 'bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white shadow-lg shadow-[#6366F1]/25'
                                            : 'bg-transparent border border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50 hover:border-[#6366F1]/30'
                                            }`}
                                    >
                                        {plan.monthlyPrice === "Custom" ? "Contact Sales" : "Start Free Trial"}
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-[#64748B]">
                        All prices exclude VAT.{" "}
                        <Link href="/pricing" className="text-[#6366F1] hover:underline font-medium">
                            View full comparison
                        </Link>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
