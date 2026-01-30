"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Shield,
    ArrowRight,
    CheckCircle2,
    Zap,
    HelpCircle,
    MessageCircle,
    Barcode,
    Stamp,
    FileCheck,
    TrendingUp,
    Award,
    ShoppingBag,
    Globe,
    Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const includedServices = [
    { icon: Barcode, text: "GS1 Registered EAN codes" },
    { icon: Barcode, text: "GS1 EAN Purchase & Management" },
    { icon: Zap, text: "GS1 EAN Activation" },
    { icon: FileCheck, text: "GS1 EAN Coupling" },
    { icon: Stamp, text: "Custom Logo & Stamp design" },
    { icon: Stamp, text: "Custom Logo Printing" },
    { icon: FileCheck, text: "SME Fund Submission (75% refund)" },
    { icon: ShoppingBag, text: "Buy Box enforcement" },
];

const packages = [
    {
        name: "Small",
        classes: "1 Class",
        eans: "1,000",
        price: "1,499",
        popular: false,
    },
    {
        name: "Medium",
        classes: "2 Classes",
        eans: "10,000",
        price: "2,249",
        popular: true,
    },
    {
        name: "Premium",
        classes: "All Classes",
        eans: "100,000",
        price: "4,999",
        popular: false,
    },
];

const benefits = [
    {
        icon: TrendingUp,
        title: "Increase Revenue",
        description: "Registered brands on marketplaces can proportionally expand their Buy Box products, leading to higher sales.",
    },
    {
        icon: Shield,
        title: "Brand Protection",
        description: "Your trademark is registered through BOIP (Benelux Office for Intellectual Property) and valid for 10 years.",
    },
    {
        icon: Globe,
        title: "Benelux Coverage",
        description: "Full trademark protection across the Netherlands, Belgium, and Luxembourg with a single registration.",
    },
    {
        icon: Lock,
        title: "Exclusive Rights",
        description: "Prevent others from using your brand name or logo. Enforce your rights on marketplaces and beyond.",
    },
];

const faqs = [
    {
        question: "What is BOIP brand registration?",
        answer: "BOIP (Benelux Office for Intellectual Property) handles trademark registration in the Benelux region. A registered trademark gives you exclusive rights to your brand name and logo for 10 years.",
    },
    {
        question: "What is the SME Fund refund?",
        answer: "The SME Fund offers a 75% refund on trademark registration costs for small and medium-sized enterprises. We handle the submission process for you as part of every package.",
    },
    {
        question: "How do EAN codes help my business?",
        answer: "GS1 EAN codes are required for listing products under your own brand on marketplaces like Bol.com. They uniquely identify your products and are essential for Buy Box placement with your own brand.",
    },
    {
        question: "What are trademark classes?",
        answer: "Trademark classes define the categories of goods or services your brand covers. The Small package covers 1 class, Medium covers 2 classes, and Premium covers all classes for maximum protection.",
    },
    {
        question: "How long does registration take?",
        answer: "The trademark registration process typically takes a few months. Once submitted, you receive interim protection while the registration is being processed by BOIP.",
    },
    {
        question: "Can I use this on Bol.com immediately?",
        answer: "Yes, once your brand is registered and EAN codes are activated, you can start listing products under your own brand on Bol.com and other marketplaces.",
    },
];

export default function BolMerkregistratiePage() {
    return (
        <div className="bg-[#020617]">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 animated-grid opacity-50" />
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-[128px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Shield className="w-4 h-4" />
                                Brand Registration
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                Grow Your Business with{" "}
                                <span className="gradient-text">Brand Protection</span>
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                Register your trademark through BOIP and protect your brand across the Benelux region.
                                Valid for 10 years with full EAN code management included.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="#packages">
                                    <Button
                                        size="lg"
                                        className="h-14 px-8 text-base font-medium rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 transition-all text-white shadow-lg shadow-[#6366F1]/25 shimmer"
                                    >
                                        View Packages
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <Link href="/bol/aanvraagformulier">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50 hover:border-[#475569]"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 mt-12">
                                {["BOIP Certified", "10 Year Protection", "SME Fund Eligible"].map((badge, i) => (
                                    <motion.div
                                        key={badge}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        className="flex items-center gap-2 text-sm text-[#94A3B8]"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                                        {badge}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
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
                            <Award className="w-4 h-4" />
                            All-Inclusive
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Everything <span className="gradient-text">included</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Every package comes with a comprehensive set of BOIP registration services
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {includedServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-4 border border-[#1E293B] hover:border-[#6366F1]/20 transition-colors"
                            >
                                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 flex items-center justify-center flex-shrink-0">
                                    <service.icon className="w-4 h-4 text-[#6366F1]" />
                                </div>
                                <span className="text-sm text-[#E2E8F0] font-medium">{service.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 animated-grid opacity-30" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Increase your <span className="gradient-text">revenue</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            A registered brand on marketplaces allows you to expand your Buy Box products and boost sales
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-[#6366F1]/20">
                                        <benefit.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{benefit.title}</h3>
                                    <p className="text-[#94A3B8] text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-24 relative overflow-hidden" id="packages">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Choose your <span className="gradient-text">package</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Each package includes all BOIP registration services listed above
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className={`h-full rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 relative ${pkg.popular ? 'bg-[#6366F1]/5 border-[#6366F1]/40' : 'bg-[#0F172A]/50 border-[#1E293B] hover:border-[#6366F1]/30'}`}>
                                    {pkg.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white text-xs font-medium px-3 py-1 rounded-full">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">{pkg.name}</h3>
                                    <p className="text-sm text-[#6366F1] font-medium mb-1">{pkg.classes} Trademark Registration</p>
                                    <p className="text-sm text-[#64748B] mb-6">Includes {pkg.eans} EAN codes</p>
                                    <div className="mb-8">
                                        <span className="text-5xl font-bold text-[#F8FAFC]">€{pkg.price}</span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {includedServices.slice(0, 5).map((service) => (
                                            <li key={service.text} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                                                <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                {service.text}
                                            </li>
                                        ))}
                                        <li className="flex items-center gap-2 text-sm text-[#6366F1]">
                                            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                                            + all included services
                                        </li>
                                    </ul>
                                    <Link href="/bol/aanvraagformulier">
                                        <Button className={`w-full h-12 rounded-xl text-sm font-medium ${pkg.popular ? 'bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white shadow-lg shadow-[#6366F1]/25' : 'bg-[#1E293B] text-[#F8FAFC] hover:bg-[#334155]'}`}>
                                            Get Started
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
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
                            Protect your brand <span className="gradient-text">today</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-8">
                            Get your trademark registered and start selling under your own brand on Bol.com.
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
