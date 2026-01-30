"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = {
    agency: [
        {
            name: "Pro",
            tag: "Best voor Agencies & Coaches",
            price: "297",
            billing: "Maandelijks gefactureerd",
            features: [
                "Onbeperkte Sub-Accounts",
                "Onbeperkte AI Agents",
                "Test Omgeving Toegang",
                "Campagne Split Testing voor Betere Conversies",
                "Omzet-tracking Analytics",
                "1-op-1 WhatsApp Support",
                "Lead Conversatie Dashboard",
                "24/7 Support",
            ],
            cta: "Start 14-Dagen Gratis Proefperiode",
            ctaLink: "/auth/register",
            popular: true,
        },
        {
            name: "Enterprise",
            tag: null,
            price: "Custom",
            billing: "Maandelijks gefactureerd",
            features: [
                "Geavanceerd Advies",
                "Done-For-You Setup",
                "Account Manager",
                "Extra Agents",
                "Alleen Interne Licentie (Geen Reselling)",
            ],
            cta: "Boek een Gesprek",
            ctaLink: "/contact",
            popular: false,
        },
    ],
    business: [
        {
            name: "Starter",
            tag: "Best voor Beginners",
            price: "99",
            billing: "Maandelijks gefactureerd",
            features: [
                "Tot 1.000 producten",
                "Basis voorraad beheer",
                "Email support",
                "Dashboard toegang",
                "API toegang",
            ],
            cta: "Start 14-Dagen Gratis Proefperiode",
            ctaLink: "/auth/register",
            popular: false,
        },
        {
            name: "Premium",
            tag: "Best voor Groeiende Bedrijven",
            price: "199",
            billing: "Maandelijks gefactureerd",
            features: [
                "Tot 5.000 producten",
                "Geavanceerd voorraad beheer",
                "Priority support",
                "Analytics dashboard",
                "Volledige API integratie",
                "Multi-channel sync",
            ],
            cta: "Start 14-Dagen Gratis Proefperiode",
            ctaLink: "/auth/register",
            popular: true,
        },
    ],
};

export function PricingSection() {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
    const [planType, setPlanType] = useState<"agency" | "business">("agency");

    const currentPlans = plans[planType];

    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden" id="pricing">
            <div className="absolute inset-0 animated-grid opacity-30" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Prijsopties
                    </h2>
                    <p className="text-[#94A3B8] text-lg">
                        Kies het abonnement dat bij je past
                    </p>
                </motion.div>

                {/* Billing Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex bg-[#0F172A]/50 backdrop-blur-sm rounded-lg p-1 border border-[#1E293B]">
                        <button
                            onClick={() => setBillingPeriod("monthly")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingPeriod === "monthly"
                                    ? "bg-[#1E293B] text-[#F8FAFC]"
                                    : "text-[#64748B] hover:text-[#F8FAFC]"
                                }`}
                        >
                            Maandelijks
                        </button>
                        <button
                            onClick={() => setBillingPeriod("yearly")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingPeriod === "yearly"
                                    ? "bg-[#1E293B] text-[#F8FAFC]"
                                    : "text-[#64748B] hover:text-[#F8FAFC]"
                                }`}
                        >
                            Jaarlijks
                        </button>
                    </div>
                </motion.div>

                {/* Plan Type Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <div className="grid grid-cols-2 gap-4 max-w-md w-full">
                        <button
                            onClick={() => setPlanType("agency")}
                            className={`py-3 px-6 rounded-lg font-medium transition-all ${planType === "agency"
                                    ? "bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white"
                                    : "bg-[#0F172A]/50 backdrop-blur-sm text-[#64748B] border border-[#1E293B] hover:text-[#F8FAFC]"
                                }`}
                        >
                            Agency
                        </button>
                        <button
                            onClick={() => setPlanType("business")}
                            className={`py-3 px-6 rounded-lg font-medium transition-all ${planType === "business"
                                    ? "bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white"
                                    : "bg-[#0F172A]/50 backdrop-blur-sm text-[#64748B] border border-[#1E293B] hover:text-[#F8FAFC]"
                                }`}
                        >
                            Business Owner
                        </button>
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {currentPlans.map((plan, index) => (
                        <motion.div
                            key={`${planType}-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-2xl p-6 ${plan.popular
                                    ? "bg-gradient-to-b from-[#6366F1]/20 to-[#22D3EE]/5 border border-[#6366F1]/50"
                                    : "bg-[#0F172A]/50 backdrop-blur-sm border border-[#1E293B]"
                                }`}
                        >
                            {/* Tag */}
                            {plan.tag && (
                                <p className={`text-sm mb-4 ${plan.popular ? "text-[#6366F1]" : "text-[#64748B]"
                                    }`}>
                                    {plan.tag}
                                </p>
                            )}

                            {/* Plan Name */}
                            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-1">{plan.name}</h3>

                            {/* Price */}
                            <div className="mb-1">
                                <span className="text-4xl font-bold text-[#F8FAFC]">
                                    {plan.price === "Custom" ? "" : "€"}
                                    {plan.price === "Custom"
                                        ? plan.price
                                        : billingPeriod === "yearly"
                                            ? Math.round(parseInt(plan.price) * 0.8)
                                            : plan.price
                                    }
                                </span>
                            </div>
                            <p className="text-[#64748B] text-sm mb-6">{plan.billing}</p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular
                                                ? "bg-[#6366F1]/20"
                                                : "bg-[#1E293B]"
                                            }`}>
                                            <Check className={`w-3 h-3 ${plan.popular ? "text-[#6366F1]" : "text-[#64748B]"
                                                }`} />
                                        </div>
                                        <span className="text-[#94A3B8] text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link href={plan.ctaLink} className="block">
                                <Button
                                    className={`w-full h-12 rounded-xl font-medium ${plan.popular
                                            ? "bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white shadow-lg shadow-[#6366F1]/25"
                                            : "bg-transparent border border-[#1E293B] text-[#F8FAFC] hover:bg-[#1E293B]"
                                        }`}
                                >
                                    {plan.cta}
                                    {!plan.popular && <ArrowRight className="w-4 h-4 ml-2" />}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
