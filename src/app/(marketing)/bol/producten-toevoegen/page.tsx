"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
    Package,
    ArrowRight,
    CheckCircle2,
    Search,
    ShoppingCart,
    Rocket,
    FileText,
    Shield,
    Clock,
    TrendingUp,
    Users,
    BarChart3,
    Truck,
    Zap,
    HelpCircle,
    MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
    {
        icon: FileText,
        title: "Aanvraag Indienen",
        description:
            "Vul het aanvraagformulier in met je winkelgegevens. Ons team beoordeelt en bereidt je account voor op het toevoegen van producten.",
    },
    {
        icon: Search,
        title: "Productonderzoek",
        description:
            "Wij gebruiken exclusieve live Bol.com verkoopdata om producten met hoge vraag en sterke zoekvolumes te identificeren voor jouw niche.",
    },
    {
        icon: Package,
        title: "Producten Toevoegen",
        description:
            "Producten worden toegevoegd aan je Bol.com winkel volgens marketplace richtlijnen, met geoptimaliseerde listings die de Buy Box winnen.",
    },
    {
        icon: Rocket,
        title: "Start Met Verkopen",
        description:
            "Je winkel is live met professioneel geplaatste producten. Start direct met het genereren van bestellingen en schaal je omzet vanaf dag één.",
    },
];

const benefits = [
    { icon: Shield, text: "100% Buy Box garantie vanaf het moment dat producten worden toegevoegd" },
    { icon: TrendingUp, text: "Alles-in-één verdienmodel om je winst te maximaliseren" },
    { icon: BarChart3, text: "Prestatiescore beoordeeld als 'Zeer Goed' op alle metrics" },
    { icon: Clock, text: "93-99% tijdige levering op alle items" },
    { icon: Users, text: "Klantenservice beschikbaar op alle werkdagen" },
    { icon: Zap, text: "Dagelijkse voorraadcontrole gesynchroniseerd met leveranciers" },
    { icon: Truck, text: "Volledige fulfillment service inbegrepen" },
    { icon: TrendingUp, text: "Schaal op tot €250.000/maand aan omzet" },
    { icon: FileText, text: "Geautomatiseerde facturatiesoftware inbegrepen" },
];

const pricingProducts = [
    { range: "500 - 3.000", price: "€0.50" },
    { range: "3.001 - 5.000", price: "€0.45" },
    { range: "5.001 - 10.000", price: "€0.40" },
    { range: "10.000+", price: "€0.35" },
];

const pricingTransfer = [
    { range: "500 - 2.500", price: "€149" },
    { range: "2.501 - 5.000", price: "€249" },
    { range: "5.001 - 10.000", price: "€349" },
    { range: "10.000+", price: "€449" },
];

const faqs = [
    {
        question: "Hoeveel producten kan ik toevoegen aan mijn winkel?",
        answer: "Het aantal producten is geheel aan jou. Jij bepaalt hoeveel producten je in je winkel(s) wilt hebben.",
    },
    {
        question: "Welke 4 diensten kan ik gebruiken om mijn e-commerce bedrijf te automatiseren?",
        answer: "Fulfillment zorgt voor tijdige levering. Voorraadcontrole controleert dagelijks de beschikbaarheid bij leveranciers. Producten Toevoegen laat je uitbreiden naar nieuwe niches. Facturatiesoftware automatiseert je boekhouding. Alle diensten zijn apart verkrijgbaar.",
    },
    {
        question: "Betekenen meer producten meer winst?",
        answer: "Ja, je genereert meer verkopen en hogere omzet door meer producten aan je winkel toe te voegen. Een grotere catalogus betekent meer zichtbaarheid en meer kansen om klanten aan te spreken.",
    },
    {
        question: "Hoe lang duurt het om producten toe te voegen?",
        answer: "Producten worden doorgaans snel toegevoegd. De wachttijd varieert tussen 1 tot 10 werkdagen, afhankelijk van het aantal productlistings dat is besteld.",
    },
    {
        question: "Wat zijn de verwachte inkomsten in maand 1?",
        answer: "Voorzichtige schattingen voor de eerste maand: 500 producten → 30-40 bestellingen/maand, 1.000 producten → 50-75 bestellingen/maand, 2.000 producten → 80-110 bestellingen/maand, 3.000 producten → 120-150 bestellingen/maand.",
    },
    {
        question: "Moet ik mijn inloggegevens van de winkel delen?",
        answer: "Helemaal niet! Wij adviseren alle verkopers om een nieuwe winkel aan te maken via het Bol.com partner portaal. Binnen 3-5 werkdagen ontvang je je activatiecode en is je winkel actief.",
    },
];

export default function BolProductenToevoegenPage() {
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
                                <Package className="w-4 h-4" />
                                Bol.com Producten Toevoegen
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                Voeg Producten Toe aan Je{" "}
                                <span className="gradient-text">Bol.com Winkel</span>
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                Kies uit meer dan 1 miljoen producten met hoge zoekvolumes. Krijg 100% Buy Box garantie
                                en start direct met verkopen met onze complete producten toevoegen service.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/bol/aanvraagformulier">
                                    <ShimmerButton className="shadow-2xl h-14 px-8 text-base font-medium rounded-xl">
                                        Direct Starten
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </ShimmerButton>
                                </Link>
                                <Link href="/bol/prijzen">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50 hover:border-[#475569]"
                                    >
                                        Bekijk Prijzen
                                    </Button>
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap justify-center gap-6 mt-12">
                                {["100% Buy Box Garantie", "100% Track & Trace", "1M+ Producten Beschikbaar"].map((badge, i) => (
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

            {/* How It Works */}
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
                            <Zap className="w-4 h-4" />
                            Hoe Het Werkt
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Vier eenvoudige <span className="gradient-text">stappen</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Van aanvraag tot je eerste verkoop — wij regelen het hele proces
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-all duration-300 hover:-translate-y-1 relative">
                                    <div className="absolute top-4 right-4 text-5xl font-bold text-[#1E293B] select-none">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-[#6366F1]/20">
                                        <step.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#94A3B8] text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 animated-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-[128px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
                                Verhoog je Bol.com{" "}
                                <span className="gradient-text">winkelwinst</span>
                            </h2>
                            <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
                                Genereer meer omzet met de producten die wij aan je Bol.com winkel toevoegen.
                                Wij regelen het hele proces van productonderzoek tot listing optimalisatie,
                                terwijl jij je richt op het laten groeien van je bedrijf.
                            </p>
                            <Link href="/bol/aanvraagformulier">
                                <Button
                                    size="lg"
                                    className="h-12 px-6 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white shadow-lg shadow-[#6366F1]/25"
                                >
                                    Start Nu
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="grid gap-3">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-4 bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-4 border border-[#1E293B] hover:border-[#6366F1]/20 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 flex items-center justify-center flex-shrink-0">
                                            <benefit.icon className="w-5 h-5 text-[#6366F1]" />
                                        </div>
                                        <span className="text-[#E2E8F0] text-sm font-medium">
                                            {benefit.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
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
                            <ShoppingCart className="w-4 h-4" />
                            Prijzen
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Transparante <span className="gradient-text">prijzen</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Betaal per product — hoe meer je toevoegt, hoe lager de prijs per eenheid
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Product Addition Pricing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden"
                        >
                            <div className="p-6 border-b border-[#1E293B]">
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Producten Toevoegen</h3>
                                <p className="text-sm text-[#94A3B8]">Prijs per product listing</p>
                            </div>
                            <div className="p-6 space-y-4">
                                {pricingProducts.map((tier) => (
                                    <div
                                        key={tier.range}
                                        className="flex items-center justify-between py-3 px-4 rounded-xl bg-[#020617]/50 border border-[#1E293B]"
                                    >
                                        <span className="text-[#94A3B8] text-sm">{tier.range} producten</span>
                                        <span className="text-[#F8FAFC] font-bold text-lg">{tier.price}<span className="text-xs text-[#64748B] font-normal">/stuk</span></span>
                                    </div>
                                ))}
                                <p className="text-xs text-[#64748B] text-center mt-4">Alle prijzen zijn excl. BTW</p>
                            </div>
                        </motion.div>

                        {/* Product Transfer Pricing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden"
                        >
                            <div className="p-6 border-b border-[#1E293B]">
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Product Overdracht</h3>
                                <p className="text-sm text-[#94A3B8]">Bulk overdracht tussen winkels</p>
                            </div>
                            <div className="p-6 space-y-4">
                                {pricingTransfer.map((tier) => (
                                    <div
                                        key={tier.range}
                                        className="flex items-center justify-between py-3 px-4 rounded-xl bg-[#020617]/50 border border-[#1E293B]"
                                    >
                                        <span className="text-[#94A3B8] text-sm">{tier.range} producten</span>
                                        <span className="text-[#F8FAFC] font-bold text-lg">{tier.price}</span>
                                    </div>
                                ))}
                                <p className="text-xs text-[#64748B] text-center mt-4">Alle prijzen zijn excl. BTW</p>
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
                                Veelgestelde <span className="gradient-text">vragen</span>
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
                            <p className="text-[#64748B] mb-4">Nog vragen?</p>
                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    className="h-11 px-6 rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Neem Contact Op
                                </Button>
                            </Link>
                        </motion.div>
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
                            Klaar om je <span className="gradient-text">Bol.com winkel</span> te laten groeien?
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-8">
                            Wij beheren het volledige verkoopproces in je winkel van A tot Z.
                            Begin vandaag nog en zie je omzet groeien.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/bol/aanvraagformulier">
                                <Button
                                    size="lg"
                                    className="h-14 px-8 text-base font-medium rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 transition-all text-white shadow-lg shadow-[#6366F1]/25"
                                >
                                    Direct Starten
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50"
                                >
                                    Neem Contact Op
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
