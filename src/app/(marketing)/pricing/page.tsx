"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
    ArrowRight,
    CheckCircle2,
    Zap,
    Crown,
    Rocket,
    HelpCircle,
    Package,
    BarChart3,
    Truck,
    RotateCcw,
    MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Software Plans
const softwarePlans = [
    {
        name: "Starter",
        description: "Voor beginners",
        monthlyPrice: "999",
        yearlyPrice: "9.590",
        icon: Zap,
        popular: false,
        features: [
            "Winkelbeheer Module",
            "1 Bol winkel koppeling",
            "Product Toevoegen: 500/pm",
            "Product Zoeken: 5.000/pm",
            "Co-Pilot Voorraadcontrole",
            "WooCommerce Integratie",
        ],
    },
    {
        name: "Pro",
        description: "Voor gevorderden",
        monthlyPrice: "1.490",
        yearlyPrice: "14.290",
        icon: Crown,
        popular: true,
        features: [
            "Winkelbeheer Module",
            "1 Bol winkel koppeling",
            "Product Toevoegen: 1.000/pm",
            "Product Zoeken: 10.000/pm",
            "Co-Pilot Voorraadcontrole",
            "Productcontrole: 75.000/dagelijks",
            "WooCommerce Integratie",
            "Fulfillment Modules",
            "Factuurautomatisering",
        ],
    },
    {
        name: "Business",
        description: "Voor ervaren verkopers",
        monthlyPrice: "Op maat",
        yearlyPrice: "Op maat",
        icon: Rocket,
        popular: false,
        features: [
            "Winkelbeheer Module",
            "1+ Bol winkels koppeling",
            "Product Toevoegen: 1.000+/pm",
            "Product Zoeken: 10.000+/pm",
            "Co-Pilot Voorraadcontrole",
            "Productcontrole: 75.000+/dagelijks",
            "WooCommerce Integratie",
            "Fulfillment Modules",
            "Factuurautomatisering",
            "CRM Modules",
            "Operaties Teams",
        ],
    },
];

// Service Pricing
const servicePricing = [
    {
        icon: Package,
        title: "Producten Toevoegen",
        description: "Professionele productlijstingen op Bol.com",
        tiers: [
            { range: "500 - 3.000", price: "€0,50", unit: "per product" },
            { range: "3.001 - 5.000", price: "€0,45", unit: "per product" },
            { range: "5.001 - 10.000", price: "€0,40", unit: "per product" },
            { range: "10.000+", price: "€0,35", unit: "per product" },
        ],
    },
    {
        icon: BarChart3,
        title: "Voorraad Beheer",
        description: "Automatische voorraad- en prijscontrole",
        tiers: [
            { range: "Starter (1.000 producten)", price: "€99", unit: "per maand" },
            { range: "Premium (5.000 producten)", price: "€299", unit: "per maand" },
        ],
    },
    {
        icon: Truck,
        title: "Fulfillment",
        description: "Professionele verpakking en verzending",
        tiers: [
            { range: "Per eenheid", price: "€8,50", unit: "excl. BTW & porto" },
        ],
    },
    {
        icon: RotateCcw,
        title: "Retour Afhandeling",
        description: "Complete retourservice",
        tiers: [
            { range: "Per retour", price: "€3,00", unit: "excl. BTW" },
        ],
    },
];

const faqs = [
    {
        question: "Wat is inbegrepen in de software prijs?",
        answer: "Onze software bevat alles wat je nodig hebt om succesvol te verkopen op Bol.com: producten zoeken, toevoegen, voorraadcontrole, prijsmonitoring, en meer. Afhankelijk van je pakket krijg je toegang tot verschillende modules.",
    },
    {
        question: "Zijn er verborgen kosten?",
        answer: "Nee, alle prijzen zijn transparant weergegeven. De vermelde prijzen zijn exclusief BTW (21%). Er zijn geen opstartkosten of verborgen kosten.",
    },
    {
        question: "Kan ik op elk moment opzeggen?",
        answer: "Ja, je kunt maandelijks opzeggen. Bij jaarlijkse betaling bespaar je 20% op de totale kosten maar gaat het abonnement voor een jaar.",
    },
    {
        question: "Hoe werkt de 7 dagen gratis proefperiode?",
        answer: "Je kunt SellerConnect 7 dagen gratis uitproberen met 25 producten. Geen creditcard nodig. Na de proefperiode kun je kiezen voor een betaald pakket of stoppen.",
    },
    {
        question: "Kan ik later upgraden naar een hoger pakket?",
        answer: "Ja, je kunt op elk moment upgraden naar een hoger pakket. Je betaalt alleen het verschil voor de resterende periode.",
    },
    {
        question: "Welke betaalmethoden accepteren jullie?",
        answer: "We accepteren iDEAL, creditcard, bankoverschrijving en factuurbetaling voor zakelijke klanten.",
    },
];

export default function PricingPage() {
    return (
        <div className="bg-[#020617]">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
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
                                Prijzen
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                Transparante{" "}
                                <span className="gradient-text">prijzen</span>
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                Geen verborgen kosten. Kies het pakket dat bij jouw bedrijf past
                                en begin vandaag nog met verkopen op Bol.com.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                {["Geen opstartkosten", "7 dagen gratis", "Direct opzegbaar"].map((badge, i) => (
                                    <div
                                        key={badge}
                                        className="flex items-center gap-2 text-sm text-[#94A3B8]"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                                        {badge}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Software Pricing */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Software <span className="gradient-text">Pakketten</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Alles-in-één software voor jouw Bol.com winkel. Bespaar 20% bij jaarlijkse betaling.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {softwarePlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white px-4 py-1 rounded-full text-xs font-medium">
                                            Meest Populair
                                        </div>
                                    </div>
                                )}

                                <div className={`h-full bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${plan.popular
                                    ? 'border-[#6366F1]/50 shadow-lg shadow-[#6366F1]/10'
                                    : 'border-[#1E293B] hover:border-[#6366F1]/30'
                                    }`}>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center mb-5 shadow-lg shadow-[#6366F1]/20">
                                        <plan.icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1">{plan.name}</h3>
                                    <p className="text-[#64748B] text-sm mb-5">{plan.description}</p>

                                    <div className="mb-6">
                                        {plan.monthlyPrice === "Op maat" ? (
                                            <span className="text-2xl font-bold text-[#F8FAFC]">Neem Contact Op</span>
                                        ) : (
                                            <>
                                                <span className="text-4xl font-bold text-[#F8FAFC]">€{plan.monthlyPrice}</span>
                                                <span className="text-[#64748B]">/maand</span>
                                                <div className="text-xs text-[#64748B] mt-1">of €{plan.yearlyPrice}/jaar</div>
                                            </>
                                        )}
                                    </div>

                                    <ul className="space-y-3 mb-6">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm">
                                                <div className="w-5 h-5 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="w-3 h-3 text-[#22C55E]" />
                                                </div>
                                                <span className="text-[#94A3B8]">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={plan.monthlyPrice === "Op maat" ? "/contact" : "/bol/aanvraagformulier"} className="block">
                                        {plan.popular ? (
                                            <ShimmerButton className="w-full shadow-2xl h-11 rounded-xl">
                                                Direct Starten
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </ShimmerButton>
                                        ) : (
                                            <Button
                                                className="w-full h-11 rounded-xl bg-transparent border border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50"
                                            >
                                                {plan.monthlyPrice === "Op maat" ? "Contact" : "Direct Starten"}
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        )}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center text-[#64748B] text-sm mt-8">
                        Alle prijzen zijn exclusief BTW (21%)
                    </p>
                </div>
            </section>

            {/* Service Pricing */}
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
                            Service <span className="gradient-text">Tarieven</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Aanvullende diensten om je Bol.com business te laten groeien
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {servicePricing.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-colors"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 flex items-center justify-center flex-shrink-0">
                                        <service.icon className="w-6 h-6 text-[#6366F1]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#F8FAFC]">{service.title}</h3>
                                        <p className="text-sm text-[#64748B]">{service.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {service.tiers.map((tier, i) => (
                                        <div key={i} className="flex justify-between items-center py-2 border-b border-[#1E293B] last:border-0">
                                            <span className="text-[#94A3B8] text-sm">{tier.range}</span>
                                            <div className="text-right">
                                                <span className="text-[#F8FAFC] font-semibold">{tier.price}</span>
                                                <span className="text-[#64748B] text-xs ml-1">{tier.unit}</span>
                                            </div>
                                        </div>
                                    ))}
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

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] px-4 py-2 rounded-full text-sm font-medium mb-6">
                            7 DAGEN GRATIS PROBEREN
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
                            Start vandaag nog met <span className="gradient-text">verkopen</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] mb-8 max-w-xl mx-auto">
                            Probeer SellerConnect 7 dagen gratis en ontdek hoe eenvoudig het is om te verkopen op Bol.com.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/bol/aanvraagformulier">
                                <ShimmerButton className="shadow-2xl h-14 px-8 text-base font-medium rounded-xl">
                                    Gratis Proberen
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </ShimmerButton>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50"
                                >
                                    Contact Opnemen
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
