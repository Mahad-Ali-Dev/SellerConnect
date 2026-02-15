"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Label } from "../../../../components/ui/label";
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
import { useState, ChangeEvent } from "react";
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
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

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
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, firstName: e.target.value })}
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
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, lastName: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-[#F8FAFC]">Email</Label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="jouw@email.nl"
                                                        className="pl-9 bg-[#020617] border-[#1E293B] text-[#F8FAFC] focus:ring-[#6366F1]"
                                                        value={formData.email}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-[#F8FAFC]">Telefoonnummer</Label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                                                    <Input
                                                        id="phone"
                                                        placeholder="06 12345678"
                                                        className="pl-9 bg-[#020617] border-[#1E293B] text-[#F8FAFC] focus:ring-[#6366F1]"
                                                        value={formData.phone}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="company" className="text-[#F8FAFC]">Bedrijfsnaam (Optioneel)</Label>
                                                <div className="relative">
                                                    <Store className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                                                    <Input
                                                        id="company"
                                                        placeholder="Jouw bedrijf"
                                                        className="pl-9 bg-[#020617] border-[#1E293B] text-[#F8FAFC] focus:ring-[#6366F1]"
                                                        value={formData.company}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, company: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="productCount" className="text-[#F8FAFC]">Aantal Producten</Label>
                                                <div className="relative">
                                                    <Package className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                                                    <Input
                                                        id="productCount"
                                                        placeholder="Bijv. 100-500"
                                                        className="pl-9 bg-[#020617] border-[#1E293B] text-[#F8FAFC] focus:ring-[#6366F1]"
                                                        value={formData.productCount}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, productCount: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="storeUrl" className="text-[#F8FAFC]">Webshop URL (Optioneel)</Label>
                                                <div className="relative">
                                                    <ShoppingBag className="absolute left-3 top-3 w-4 h-4 text-[#64748B]" />
                                                    <Input
                                                        id="storeUrl"
                                                        placeholder="www.jouwwebshop.nl"
                                                        className="pl-9 bg-[#020617] border-[#1E293B] text-[#F8FAFC] focus:ring-[#6366F1]"
                                                        value={formData.storeUrl}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, storeUrl: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="text-[#F8FAFC]">Geïnteresseerd in (Selecteer meerdere)</Label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {services.map((service) => (
                                                    <div
                                                        key={service.id}
                                                        onClick={() => handleServiceToggle(service.id)}
                                                        className={`cursor-pointer border rounded-xl p-3 flex items-center gap-3 transition-all ${formData.services.includes(service.id)
                                                            ? "bg-[#6366F1]/20 border-[#6366F1] text-[#F8FAFC]"
                                                            : "bg-[#0F172A] border-[#1E293B] text-[#94A3B8] hover:border-[#6366F1]/50"
                                                            }`}
                                                    >
                                                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${formData.services.includes(service.id)
                                                            ? "bg-[#6366F1] border-[#6366F1]"
                                                            : "border-[#334155]"
                                                            }`}>
                                                            {formData.services.includes(service.id) && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                                        </div>
                                                        <span className="text-sm font-medium">{service.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-[#F8FAFC]">Je bericht</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Vertel ons meer over je doelen..."
                                                className="min-h-[120px] bg-[#020617] border-[#1E293B] text-[#F8FAFC] focus:ring-[#6366F1]"
                                                value={formData.message}
                                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full h-12 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                                            Verstuur Aanvraag
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
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
        </div>
    );
}
