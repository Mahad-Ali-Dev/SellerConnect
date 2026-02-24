"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import MagicWrapper from "@/components/client/MagicWrapper";
import {
    Mail,
    Phone,
    MapPin,
    MessageCircle,
    Send,
    ArrowRight,
    HelpCircle,
    Clock,
    Building2,
    CheckCircle2,
    Loader2,
    AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const contactInfo = [
    {
        icon: MessageCircle,
        title: "WhatsApp",
        value: "+31 85 401 2968",
        link: "https://wa.me/+31854012968?text=Hallo%20SellerConnect",
        color: "#25D366",
    },
    {
        icon: Mail,
        title: "E-mail",
        value: "info@sellerconnect.nl",
        link: "mailto:info@sellerconnect.nl",
        color: "#6366F1",
    },
    {
        icon: MapPin,
        title: "Adres",
        value: "Torenallee 20, 5617BC, Eindhoven, Netherlands",
        link: "https://maps.google.com/?q=Torenallee+20+5617BC+Eindhoven",
        color: "#22D3EE",
    },
];

const businessInfo = [
    { label: "KvK", value: "99682397" },
    { label: "BTW", value: "NL864780539B01" },
];

const faqs = [
    {
        question: "Ik wil de inloggegevens van mijn winkel niet delen met SellerConnect, kan ik dan alsnog diensten afnemen?",
        answer: "Ja, dat kan! Wij adviseren alle verkopers om een nieuw verkopersaccount aan te maken via het Bol.com partner portaal (partner.bol.com/sdd/account/creation). Binnen 3-5 werkdagen ontvang je een activatiecode en is je winkel actief. Je hoeft nooit je inloggegevens te delen - we gebruiken veilige API-tokens.",
    },
    {
        question: "Hoe lang duurt het voordat mijn winkel actief is?",
        answer: "Na het aanmaken van je Bol.com verkopersaccount duurt het gemiddeld 3-5 werkdagen voordat je de activatiecode ontvangt. Daarna kunnen wij direct aan de slag met het toevoegen van producten.",
    },
    {
        question: "Wat zijn de verwachte inkomsten in maand 1?",
        answer: "Voorzichtige schattingen voor de eerste maand: 500 producten → 30-40 bestellingen/maand, 1.000 producten → 50-75 bestellingen/maand, 2.000 producten → 80-110 bestellingen/maand, 3.000 producten → 120-150 bestellingen/maand.",
    },
    {
        question: "Welke diensten bieden jullie aan?",
        answer: "Onze diensten omvatten: Producten Toevoegen (€0.35-€0.45 per product), Voorraad Controle (vanaf €99/maand), Fulfillment (€8.50 per eenheid), en onze complete OmniChannel Software. Alle diensten zijn ook los af te nemen.",
    },
    {
        question: "Hoe werkt de gratis proefperiode?",
        answer: "Je kunt 7 dagen lang gratis testen door 25 producten toe te voegen aan je Bol.com winkel. Zo kun je zelf ervaren hoe ons systeem werkt voordat je een pakket kiest.",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Er is een fout opgetreden");
            }

            setSubmitStatus({ type: "success", message: data.message });
            setFormData({ name: "", email: "", subject: "", message: "" });
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
            <section className="relative min-h-[50vh] flex items-center overflow-hidden">
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
                                <MessageCircle className="w-4 h-4" />
                                Contact
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                Neem <span className="gradient-text">Contact</span> Op
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                Je berichten worden doorgaans zo snel mogelijk beantwoord.
                                Neem contact op via onze socials, WhatsApp, e-mail of het contactformulier.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link}
                                target={item.link.startsWith("http") ? "_blank" : undefined}
                                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                                    style={{ backgroundColor: `${item.color}20` }}
                                >
                                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                                </div>
                                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{item.title}</h3>
                                <p className="text-[#94A3B8] text-sm">{item.value}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-6">
                                Stuur ons een <span className="gradient-text">bericht</span>
                            </h2>

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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                            Naam *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#0F172A]/50 border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]/50 transition-colors"
                                            placeholder="Je naam"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                            E-mail *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#0F172A]/50 border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]/50 transition-colors"
                                            placeholder="je@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                        Onderwerp *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#0F172A]/50 border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]/50 transition-colors"
                                        placeholder="Waar gaat je vraag over?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                        Bericht *
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#0F172A]/50 border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]/50 transition-colors resize-none"
                                        placeholder="Schrijf hier je bericht..."
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isLoading}
                                    className="w-full h-14 text-base font-medium rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white shadow-lg shadow-[#6366F1]/25 disabled:opacity-70"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Versturen...
                                        </>
                                    ) : (
                                        <>
                                            Verstuur Bericht
                                            <Send className="w-5 h-5 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </motion.div>

                        {/* Business Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-6">
                                Bedrijfsgegevens
                            </h2>

                            <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] mb-6">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0">
                                        <Building2 className="w-6 h-6 text-[#6366F1]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1">SellerConnect</h3>
                                        <p className="text-[#94A3B8] text-sm">Torenallee 20, 5617BC, Eindhoven, Netherlands</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {businessInfo.map((info, i) => (
                                        <div key={i} className="flex items-center justify-between py-3 px-4 bg-[#020617]/50 rounded-lg border border-[#1E293B]">
                                            <span className="text-[#64748B] text-sm">{info.label}</span>
                                            <span className="text-[#F8FAFC] font-medium">{info.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B]">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-[#22C55E]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1">Bereikbaarheid</h3>
                                        <p className="text-[#94A3B8] text-sm mb-4">Ons team staat voor je klaar op alle werkdagen</p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                                                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                                                WhatsApp reactie binnen 2 uur
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                                                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                                                E-mail reactie binnen 24 uur
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Direct Button */}
                            <a
                                href="https://wa.me/+31854012968?text=Hallo%20SellerConnect"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 flex items-center justify-center gap-3 w-full h-14 bg-[#25D366] hover:bg-[#22c55e] text-white rounded-xl transition-colors font-medium"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Direct via WhatsApp
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 relative overflow-hidden" id="faq">
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
                                Vragen & Antwoorden
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                                Veelgestelde <span className="gradient-text">vragen</span>
                            </h2>
                            <p className="text-lg text-[#94A3B8]">
                                Meest gestelde vragen over onze diensten
                            </p>
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
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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
                            Start vandaag nog met het all-in-one{" "}
                            <span className="gradient-text">verdienmodel van SellerConnect</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-8">
                            SellerConnect verzorgt het verkoopproces in je winkel van A tot Z.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/bol/aanvraagformulier">
                                <MagicWrapper>
                                    <ShimmerButton className="shadow-2xl h-14 px-8 text-base font-medium rounded-xl">
                                        Direct Starten
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </ShimmerButton>
                                </MagicWrapper>
                            </Link>
                            <a
                                href="https://wa.me/+31854012968?text=Hallo%20SellerConnect"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 text-base font-medium rounded-xl border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    WhatsApp
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
