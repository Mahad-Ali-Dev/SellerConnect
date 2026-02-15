"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
    FileText,
    ArrowRight,
    CheckCircle2,
    Zap,
    HelpCircle,
    MessageCircle,
    Package,
    BarChart3,
    Truck,
    Shield,
    Send,
    User,
    Mail,
    Phone,
    Store,
    ShoppingBag,
    Loader2,
    AlertCircle,
    Clock,
    Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


const services = [
    { id: "product-addition", label: "Producten Toevoegen" },
    { id: "fulfillment", label: "Fulfillment Service" },
    { id: "stock-control", label: "Voorraadbeheer" },
    { id: "brand-registration", label: "Merkregistratie" },
    { id: "software", label: "Software" },
    { id: "other", label: "Andere Vraag" },
];

const benefits = [
    {
        title: "Snelle Reactie",
        description: "Binnen 24 uur antwoord op werkdagen"
    },
    {
        title: "Expert Ondersteuning",
        description: "Direct contact met onze Bol.com specialisten"
    },
    {
        title: "Op Maat Oplossingen",
        description: "Afgestemd op jouw specifieke bedrijfsbehoeften"
    }
];

const faqs = [
    {
        question: "Wat gebeurt er na mijn aanvraag?",
        answer: "We beoordelen je aanvraag en nemen binnen 24 uur contact op met een voorstel op maat of om een kennismakingsgesprek in te plannen.",
    },
    {
        question: "Is het adviesgesprek gratis?",
        answer: "Ja, het eerste adviesgesprek is volledig vrijblijvend en gratis. We bespreken je doelen en hoe wij kunnen helpen.",
    },
    {
        question: "Kan ik meerdere diensten aanvragen?",
        answer: "Zeker, selecteer gewoon de diensten waarin je geïnteresseerd bent in het formulier, en we zullen ze allemaal bespreken.",
    },
];

export default function BolAanvraagformulierPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        storeName: "",
        storeUrl: "",
        productCount: "",
        services: [] as string[],
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleServiceToggle = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/applications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Er is een fout opgetreden");
            }

            setSubmitStatus({ type: "success", message: data.message });
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                storeName: "",
                storeUrl: "",
                productCount: "",
                services: [],
                message: "",
            });
        } catch (err) {
            setSubmitStatus({
                type: "error",
                message: err instanceof Error ? err.message : "Er is een fout opgetreden",
            });
        } finally {
            setIsLoading(false);
        }
    };

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
                            <FileText className="w-4 h-4" />
                            Application Form
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                            Get Started <span className="gradient-text">Today</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
                            Fill out the application form below and our team will review your request.
                            Start scaling your Bol.com business with our proven services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid lg:grid-cols-5 gap-8">
                            {/* Form */}
                            <div className="bg-[#020617] pt-24 pb-12">
                                <div className="container mx-auto px-4">
                                    <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                                        {/* Left Column - Contact Info & Benefits */}
                                        <div className="lg:col-span-1 space-y-8">
                                            <div>
                                                <h1 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                                                    Informatie <span className="gradient-text">Aanvragen</span>
                                                </h1>
                                                <p className="text-[#94A3B8] leading-relaxed">
                                                    Neem contact op voor een vrijblijvend gesprek over hoe wij jouw Bol.com business kunnen laten groeien.
                                                </p>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0">
                                                        <Mail className="w-5 h-5 text-[#6366F1]" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-[#F8FAFC] font-medium mb-1">Mail Ons</h3>
                                                        <a href="mailto:info@sellerconnect.nl" className="text-[#94A3B8] hover:text-[#6366F1] transition-colors">
                                                            info@sellerconnect.nl
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0">
                                                        <Clock className="w-5 h-5 text-[#6366F1]" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-[#F8FAFC] font-medium mb-1">Openingstijden</h3>
                                                        <p className="text-[#94A3B8]">Ma - Vr: 09:00 - 17:00</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0">
                                                        <Building2 className="w-5 h-5 text-[#6366F1]" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-[#F8FAFC] font-medium mb-1">Bedrijfsgegevens</h3>
                                                        <p className="text-[#94A3B8]">KVK: 92600207</p>
                                                        <p className="text-[#94A3B8]">BTW: NL004975095B30</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-[#1E293B] pt-8">
                                                <h3 className="text-[#F8FAFC] font-medium mb-4">Waarom SellerConnect?</h3>
                                                <div className="space-y-4">
                                                    {benefits.map((benefit, index) => (
                                                        <div key={index} className="flex gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                <h4 className="text-[#F8FAFC] text-sm font-medium">{benefit.title}</h4>
                                                                <p className="text-[#64748B] text-xs">{benefit.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column - Form */}
                                        <div className="lg:col-span-2">
                                            <Card className="bg-[#0F172A]/50 border-[#1E293B] backdrop-blur-sm">
                                                <CardContent className="p-6 md:p-8">
                                                    {/* Status Messages */}
                                                    {submitStatus && (
                                                        <div className={`flex items-center gap-2 px-4 py-3 rounded-xl mb-6 text-sm ${submitStatus.type === "success"
                                                            ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                                                            }`}>
                                                            {submitStatus.type === "success" ? (
                                                                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                                                            ) : (
                                                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                                            )}
                                                            {submitStatus.message}
                                                        </div>
                                                    )}
                                                    <form onSubmit={handleSubmit} className="space-y-6">
                                                        <div className="grid md:grid-cols-2 gap-6">
                                                            <div className="space-y-2">
                                                                <Label htmlFor="firstName" className="text-[#F8FAFC]">Voornaam</Label>
                                                                <div className="relative">
                                                                    <User className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                                                                    <Input
                                                                        id="firstName"
                                                                        placeholder="Jouw voornaam"
                                                                        className="pl-9 bg-[#020617] border-[#1E293B] text-[#F8FAFC] focus:ring-[#6366F1]"
                                                                        value={formData.firstName}
                                                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <Label htmlFor="lastName" className="text-[#F8FAFC]">Achternaam</Label>
                                                                <div className="relative">
                                                                    <User className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                                                                    <Input
                                                                        id="lastName"
                                                                        placeholder="Jouw achternaam"
                                                                        className="pl-9 bg-[#020617] border-[#1E293B] text-[#F8FAFC] focus:ring-[#6366F1]"
                                                                        value={formData.lastName}
                                                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                                    "100% Buy Box guarantee",
                                                                    "Scale up to €250K/month",
                                                                    "24/7 stock monitoring",
                                                                    "Professional fulfillment",
                                                                    "Personal support team",
                                                                ].map((item) => (
                                                                    <div key={item} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                                                                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                                        {item}
                                                                    </div>
                                                                ))}
                                                                </div>
                                                            </div>

                                                            {/* Contact Info */}
                                                            <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] p-6">
                                                                <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Need Help?</h3>
                                                                <p className="text-sm text-[#94A3B8] mb-4">
                                                                    Our team is here to help you get started. Reach out via WhatsApp or email.
                                                                </p>
                                                                <div className="space-y-2 text-sm">
                                                                    <div className="flex items-center gap-2 text-[#94A3B8]">
                                                                        <Phone className="w-4 h-4 text-[#6366F1]" />
                                                                        +31 85 401 2968
                                                                    </div>
                                                                    <div className="flex items-center gap-2 text-[#94A3B8]">
                                                                        <Mail className="w-4 h-4 text-[#6366F1]" />
                                                                        info@sellerconnect.nl
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </div>
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
                                                Start the all-in-one <span className="gradient-text">earning model</span>
                                            </h2>
                                            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-8">
                                                We manage the entire sales process for your store from A to Z.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                <Link href="/contact">
                                                    <Button size="lg" variant="outline" className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50">
                                                        <MessageCircle className="w-5 h-5 mr-2" />
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
