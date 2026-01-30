"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    CreditCard,
    ArrowRight,
    CheckCircle2,
    Zap,
    HelpCircle,
    MessageCircle,
    Package,
    BarChart3,
    Truck,
    Warehouse,
    Box,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const productAdditionPricing = [
    { range: "500 - 2,500", price: "€1.99" },
    { range: "2,501 - 5,000", price: "€1.79" },
    { range: "5,001 - 10,000", price: "€1.69" },
    { range: "10,000+", price: "€1.49" },
];

const productTransferPricing = [
    { range: "500 - 2,500", price: "€149" },
    { range: "2,501 - 5,000", price: "€249" },
    { range: "5,001 - 10,000", price: "€349" },
    { range: "10,000+", price: "€449" },
];

const stockControlPlans = [
    { name: "Starter", products: "1,000", price: "99", popular: false },
    { name: "Plus", products: "3,000", price: "169", popular: false },
    { name: "Premium", products: "5,000", price: "299", popular: true },
    { name: "Business", products: "7,500", price: "499", popular: false },
    { name: "Business Plus", products: "10,000", price: "649", popular: false },
    { name: "Business Premium", products: "20,000", price: "769", popular: false },
];

const stockFeatures = [
    "Bol.com integration",
    "ASIN verification",
    "Delivery date check",
    "Delivery address verification",
    "Stock quantity monitoring",
];

const faqs = [
    {
        question: "How many products can I add to my store?",
        answer: "The number of products is entirely up to you. You decide how many products you want listed in your store(s).",
    },
    {
        question: "What 4 services can I use to automate my business?",
        answer: "Fulfillment for on-time deliveries, Stock Control for daily supplier availability checks, Product Addition to expand your catalog, and Invoicing Software for automated accounting. All services are available separately.",
    },
    {
        question: "How long does it take to add products?",
        answer: "Product additions typically happen fast. The waiting time varies between 1 to 10 business days, depending on the number of product listings ordered.",
    },
    {
        question: "What are the expected earnings in month 1?",
        answer: "Conservative first-month estimates: 500 products → 30-40 orders/month, 1,000 products → 50-75 orders/month, 2,000 products → 80-110 orders/month, 3,000 products → 120-150 orders/month.",
    },
    {
        question: "Do I need an active Bol.com account to get started?",
        answer: "Yes, you need an active seller account. You can easily create one via the Bol.com seller portal. Within 3-5 business days you'll receive your activation code.",
    },
    {
        question: "How often are payouts processed?",
        answer: "Bol.com offers two payout periods: every 14 days or once per month. Allegro provides multiple options including next-business-day payouts for faster cash flow.",
    },
];

export default function BolPrijzenPage() {
    return (
        <div className="bg-[#020617]">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 animated-grid opacity-50" />
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-[128px]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <CreditCard className="w-4 h-4" />
                            All Pricing
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                            Transparent <span className="gradient-text">Pricing</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
                            Save time and convert it directly into money. Choose the plan that fits your business.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Addition Pricing */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Package className="w-4 h-4" />
                            Product Addition
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                            Product <span className="gradient-text">Listing</span> Prices
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Let us add high-demand products to your Bol.com store with guaranteed Buy Box placement
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Per Product */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden"
                        >
                            <div className="p-6 border-b border-[#1E293B]">
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Per Product Addition</h3>
                                <p className="text-sm text-[#94A3B8]">Price per individual product listing</p>
                            </div>
                            <div className="p-6 space-y-4">
                                {productAdditionPricing.map((tier) => (
                                    <div key={tier.range} className="flex items-center justify-between py-3 px-4 rounded-xl bg-[#020617]/50 border border-[#1E293B]">
                                        <span className="text-[#94A3B8] text-sm">{tier.range} products</span>
                                        <span className="text-[#F8FAFC] font-bold text-lg">{tier.price}<span className="text-xs text-[#64748B] font-normal">/unit</span></span>
                                    </div>
                                ))}
                                <p className="text-xs text-[#64748B] text-center">All prices exclude VAT</p>
                            </div>
                        </motion.div>

                        {/* Bulk Transfer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden"
                        >
                            <div className="p-6 border-b border-[#1E293B]">
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Bulk Product Transfer</h3>
                                <p className="text-sm text-[#94A3B8]">Transfer products between stores</p>
                            </div>
                            <div className="p-6 space-y-4">
                                {productTransferPricing.map((tier) => (
                                    <div key={tier.range} className="flex items-center justify-between py-3 px-4 rounded-xl bg-[#020617]/50 border border-[#1E293B]">
                                        <span className="text-[#94A3B8] text-sm">{tier.range} products</span>
                                        <span className="text-[#F8FAFC] font-bold text-lg">{tier.price}</span>
                                    </div>
                                ))}
                                <p className="text-xs text-[#64748B] text-center">All prices exclude VAT</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stock Control Pricing */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <BarChart3 className="w-4 h-4" />
                            Stock Control
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                            Stock Control <span className="gradient-text">Plans</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Billed monthly. Prices exclude VAT. Stock checks performed twice daily.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {stockControlPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <div className={`h-full rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 relative ${plan.popular ? 'bg-[#6366F1]/5 border-[#6366F1]/40' : 'bg-[#0F172A]/50 border-[#1E293B] hover:border-[#6366F1]/30'}`}>
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white text-xs font-medium px-3 py-1 rounded-full">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-lg font-bold text-[#F8FAFC] mb-1">{plan.name}</h3>
                                    <p className="text-sm text-[#64748B] mb-4">Max. {plan.products} Products</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-[#F8FAFC]">€{plan.price}</span>
                                        <span className="text-[#64748B] text-sm">/month</span>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        {stockFeatures.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                                                <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/bol/aanvraagformulier">
                                        <Button className={`w-full h-11 rounded-xl text-sm font-medium ${plan.popular ? 'bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white shadow-lg shadow-[#6366F1]/25' : 'bg-[#1E293B] text-[#F8FAFC] hover:bg-[#334155]'}`}>
                                            Get Started
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fulfillment Pricing */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Truck className="w-4 h-4" />
                            Fulfillment
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                            Fulfillment <span className="gradient-text">Pricing</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            100% on-time delivery with professional packaging included
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#6366F1]/30 overflow-hidden"
                        >
                            <div className="p-6 border-b border-[#1E293B]">
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Fulfillment Service</h3>
                                <div className="mt-3">
                                    <span className="text-4xl font-bold text-[#F8FAFC]">€7.19</span>
                                    <span className="text-[#64748B] text-sm">/unit (excl. VAT)</span>
                                </div>
                                <p className="text-xs text-[#64748B] mt-1">Shipping label not included</p>
                            </div>
                            <div className="p-6 space-y-3">
                                {["Packaging materials", "Packing tape", "Filling material", "Shipping sticker", "Returns: €3.49/unit"].map((item) => (
                                    <div key={item} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                                <div className="pt-4">
                                    <p className="text-sm font-medium text-[#F8FAFC] mb-3">Free packaging:</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {["A4 Envelope", "Small Box", "Large Box", "XL Box"].map((pkg) => (
                                            <div key={pkg} className="flex items-center gap-2 py-2 px-3 bg-[#020617]/50 rounded-lg border border-[#1E293B]">
                                                <Box className="w-4 h-4 text-[#6366F1]" />
                                                <span className="text-xs text-[#94A3B8]">{pkg}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden"
                        >
                            <div className="p-6 border-b border-[#1E293B]">
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Warehouse & Storage</h3>
                                <div className="mt-3">
                                    <span className="text-4xl font-bold text-[#F8FAFC]">€2.89</span>
                                    <span className="text-[#64748B] text-sm">/m² daily (excl. VAT)</span>
                                </div>
                            </div>
                            <div className="p-6 space-y-3">
                                {[
                                    { size: "1.5 m²", available: true },
                                    { size: "3 m²", available: true },
                                    { size: "4 m²", available: true },
                                    { size: "6 m²", available: false },
                                ].map((space) => (
                                    <div key={space.size} className="flex items-center justify-between py-3 px-4 rounded-xl bg-[#020617]/50 border border-[#1E293B]">
                                        <div className="flex items-center gap-3">
                                            <Warehouse className="w-4 h-4 text-[#6366F1]" />
                                            <span className="text-sm text-[#94A3B8]">{space.size}</span>
                                        </div>
                                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${space.available ? 'bg-[#22C55E]/10 text-[#22C55E]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                                            {space.available ? "Available" : "Unavailable"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <HelpCircle className="w-4 h-4" />
                                FAQ
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                                Frequently asked <span className="gradient-text">questions</span>
                            </h2>
                        </motion.div>

                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl border border-[#1E293B] px-6 data-[state=open]:border-[#6366F1]/30"
                                >
                                    <AccordionTrigger className="text-left text-base font-medium text-[#F8FAFC] hover:text-[#6366F1] transition-colors py-5 [&[data-state=open]]:text-[#6366F1]">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#94A3B8] text-sm leading-relaxed pb-5">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mt-12"
                        >
                            <p className="text-[#64748B] mb-4">Still have questions?</p>
                            <Link href="/contact">
                                <Button variant="outline" className="h-11 px-6 rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Contact us
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 animated-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6366F1]/10 rounded-full blur-[128px]" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
                            Ready to <span className="gradient-text">get started</span>?
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-8">
                            Choose your plan and start growing your Bol.com store today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/bol/aanvraagformulier">
                                <Button size="lg" className="h-14 px-8 text-base font-medium rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white shadow-lg shadow-[#6366F1]/25">
                                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
