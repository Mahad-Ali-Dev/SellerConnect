"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
    BarChart3,
    ArrowRight,
    CheckCircle2,
    Zap,
    HelpCircle,
    MessageCircle,
    Barcode,
    CalendarCheck,
    MapPin,
    Layers,
    Shield,
    TrendingUp,
    Clock,
    RefreshCw,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const checkSteps = [
    {
        icon: Barcode,
        title: "ASIN Verificatie",
        description: "Producten worden gecontroleerd op ASIN-codes om nauwkeurige identificatie en matching met leveranciersvoorraad te garanderen.",
    },
    {
        icon: CalendarCheck,
        title: "Leverdatum Controle",
        description: "Leverdata van leveranciers worden geverifieerd om te garanderen dat producten binnen marketplace tijdlijnen kunnen worden verzonden.",
    },
    {
        icon: MapPin,
        title: "Afleveradres Verificatie",
        description: "Elke levering wordt geverifieerd met het verzendadres om onjuiste of mislukte leveringen te voorkomen.",
    },
    {
        icon: Layers,
        title: "Voorraad Hoeveelheid Controle",
        description: "De beschikbare hoeveelheid van elk product wordt gecontroleerd en bijgewerkt om de werkelijke beschikbaarheid bij de leverancier weer te geven.",
    },
];

const pricingPlans = [
    { name: "Starter", products: "1.000", price: "99", popular: false },
    { name: "Premium", products: "5.000", price: "299", popular: true },
];

const features = [
    "Bol.com integratie",
    "ASIN verificatie",
    "Leverdatum controle",
    "Afleveradres verificatie",
    "Voorraad hoeveelheid monitoring",
];

const faqs = [
    {
        question: "Hoe vaak wordt de voorraadcontrole uitgevoerd?",
        answer: "Voorraadcontroles worden twee keer per dag uitgevoerd. Producten die niet op voorraad zijn worden een keer per week opnieuw gecontroleerd om herbevoorrading te detecteren.",
    },
    {
        question: "Wat gebeurt er als een product niet op voorraad is?",
        answer: "Ons systeem detecteert automatisch producten die niet op voorraad zijn en deactiveert ze tijdelijk. Zodra de leverancier weer voorraad heeft, wordt het product automatisch opnieuw geactiveerd.",
    },
    {
        question: "Werkt voorraadcontrole met mijn bestaande producten?",
        answer: "Ja, onze voorraadcontrole integreert naadloos met alle producten in je Bol.com winkel, of ze nu door ons of door jou zijn toegevoegd.",
    },
    {
        question: "Kan ik voorraadcontrole gebruiken zonder andere diensten?",
        answer: "Alle diensten zijn apart verkrijgbaar. Je kunt voorraadcontrole als standalone dienst gebruiken. Producten moeten echter eerst aan je winkel worden toegevoegd voordat voorraadcontrole kan worden geactiveerd.",
    },
    {
        question: "Wat zijn de verwachte inkomsten in maand 1?",
        answer: "Voorzichtige schattingen voor de eerste maand: 500 producten → 30-40 bestellingen/maand, 1.000 producten → 50-75 bestellingen/maand, 2.000 producten → 80-110 bestellingen/maand, 3.000 producten → 120-150 bestellingen/maand.",
    },
];

export default function BolVoorraadBeheerPage() {
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
                                <BarChart3 className="w-4 h-4" />
                                Voorraad Beheer
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                Slimme <span className="gradient-text">Voorraadcontrole</span>{" "}
                                voor Bol.com
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                Bereik succesvolle verkopen met minder annuleringen dankzij onze nauwkeurige voorraadcontrole.
                                Automatische controles twee keer per dag houden je inventaris accuraat.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/bol/aanvraagformulier">
                                    <ShimmerButton className="shadow-2xl h-14 px-8 text-base font-medium rounded-xl">
                                        Direct Starten
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </ShimmerButton>
                                </Link>
                                <Link href="#pricing">
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
                                {["2x Dagelijkse Controle", "ASIN Verificatie", "Real-time Synchronisatie"].map((badge, i) => (
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
                            <RefreshCw className="w-4 h-4" />
                            Hoe Het Werkt
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Vier verificatie <span className="gradient-text">lagen</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Onze voorraadbeheertool voert vier uitgebreide controles uit om je voorraad nauwkeurig te houden
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {checkSteps.map((step, index) => (
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
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
                                Verbeter de prestaties van je <span className="gradient-text">winkel</span>
                            </h2>
                            <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
                                Genereer meer omzet met producten die aan je Bol.com winkel zijn toegevoegd. Onze tools regelen
                                productonderzoek, listing optimalisatie en doorlopend voorraadbeheer, zodat jij je kunt
                                richten op het schalen van je bedrijf.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: Shield, label: "Minder annuleringen" },
                                    { icon: TrendingUp, label: "Hogere omzet" },
                                    { icon: Clock, label: "Geautomatiseerde dagelijkse controles" },
                                    { icon: Zap, label: "Real-time updates" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[#E2E8F0]">
                                        <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 flex items-center justify-center">
                                            <item.icon className="w-4 h-4 text-[#6366F1]" />
                                        </div>
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </div>
                                ))}
                            </div>
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
                            {/* Stock Control Dashboard Mockup */}
                            <div className="bg-[#0F172A]/70 backdrop-blur-sm rounded-2xl border border-[#1E293B] p-6">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FACC15]" />
                                    <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                                    <span className="text-xs text-[#64748B] ml-2">Voorraadbeheer Dashboard</span>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { label: "ASIN Controle", status: "Geslaagd", color: "#22C55E" },
                                        { label: "Leverdatum", status: "Geverifieerd", color: "#22C55E" },
                                        { label: "Adres Controle", status: "Bevestigd", color: "#22C55E" },
                                        { label: "Voorraadniveau", status: "2.847 eenheden", color: "#6366F1" },
                                        { label: "Laatste Sync", status: "2 min geleden", color: "#22D3EE" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between py-3 px-4 bg-[#020617]/50 rounded-lg border border-[#1E293B]">
                                            <span className="text-sm text-[#94A3B8]">{item.label}</span>
                                            <span className="text-sm font-medium" style={{ color: item.color }}>{item.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 relative overflow-hidden" id="pricing">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Kies je <span className="gradient-text">pakket</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Maandelijks gefactureerd. Prijzen excl. BTW. Voorraadcontroles draaien twee keer per dag.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group"
                            >
                                <div className={`h-full rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 relative ${plan.popular ? 'bg-[#6366F1]/5 border-[#6366F1]/40' : 'bg-[#0F172A]/50 border-[#1E293B] hover:border-[#6366F1]/30'}`}>
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white text-xs font-medium px-3 py-1 rounded-full">
                                            Meest Populair
                                        </div>
                                    )}
                                    <h3 className="text-lg font-bold text-[#F8FAFC] mb-1">{plan.name}</h3>
                                    <p className="text-sm text-[#64748B] mb-4">Max. {plan.products} Producten</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-[#F8FAFC]">€{plan.price}</span>
                                        <span className="text-[#64748B] text-sm">/maand</span>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        {features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                                                <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/bol/aanvraagformulier">
                                        <Button className={`w-full h-11 rounded-xl text-sm font-medium ${plan.popular ? 'bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white shadow-lg shadow-[#6366F1]/25' : 'bg-[#1E293B] text-[#F8FAFC] hover:bg-[#334155]'}`}>
                                            Starten
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
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
                                <Button variant="outline" className="h-11 px-6 rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Neem contact op
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
                            Start met het alles-in-één <span className="gradient-text">verdienmodel</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-8">
                            Wij beheren het volledige verkoopproces voor je winkel van A tot Z.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/bol/aanvraagformulier">
                                <Button
                                    size="lg"
                                    className="h-14 px-8 text-base font-medium rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white shadow-lg shadow-[#6366F1]/25"
                                >
                                    Starten
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50"
                                >
                                    Contact Ons
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
