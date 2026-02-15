"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
    Laptop,
    ArrowRight,
    CheckCircle2,
    Zap,
    HelpCircle,
    MessageCircle,
    BarChart3,
    Settings,
    ShoppingCart,
    LineChart,
    Globe,
    Shield,
    Smartphone,
    Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
    {
        icon: BarChart3,
        title: "Real-time Voorraad",
        description: "Automatische synchronisatie van voorraad over alle verkoopkanalen. Voorkom nee-verkopen en maximaliseer je omzet.",
    },
    {
        icon: TrendingUp,
        title: "Automatische Repricing",
        description: "Win het koopblok met onze slimme repricer. Stel je minimale en maximale prijzen in en laat ons de rest doen.",
    },
    {
        icon: ShoppingCart,
        title: "Orderbeheer",
        description: "Beheer al je bestellingen vanuit één centraal dashboard. Verwerk orders sneller en efficiënter.",
    },
    {
        icon: LineChart,
        title: "Winstanalyse",
        description: "Gedetailleerde inzichten in je omzet, kosten en winst. Neem betere beslissingen op basis van data.",
    },
    {
        icon: Globe,
        title: "Multi-channel",
        description: "Verkoop op meerdere platforms tegelijk. Wij koppelen Bol.com, Amazon en je eigen webshop.",
    },
    {
        icon: Shield,
        title: "Veilig & Betrouwbaar",
        description: "Je data is veilig bij ons. Wij gebruiken de nieuwste beveiligingstechnologieën om je account te beschermen.",
    },
];

const steps = [
    {
        icon: Settings,
        title: "Koppel je winkel",
        description: "Verbind je Bol.com verkoopaccount in enkele klikken met onze software via de officiële API.",
    },
    {
        icon: Settings,
        title: "Configureer instellingen",
        description: "Stel je verzendvoorkeuren, repricing regels en voorraadstrategie in naar jouw wensen.",
    },
    {
        icon: Rocket,
        title: "Start met groeien",
        description: "Onze software gaat direct aan de slag om je winkel te optimaliseren en je omzet te verhogen.",
    },
];

const pricingPlans = [
    { name: "Basic", products: "500", price: "49", popular: false },
    { name: "Pro", products: "2.500", price: "149", popular: true },
    { name: "Enterprise", products: "Onbeperkt", price: "299", popular: false },
];

const planFeatures = [
    "Real-time voorraadbeheer",
    "Automatische repricing",
    "Winstanalyse dashboard",
    "Order management",
    "Support binnen 24u",
];

const faqs = [
    {
        question: "Kan ik de software gratis uitproberen?",
        answer: "Ja, je kunt onze software 14 dagen gratis uitproberen. Geen creditcard nodig.",
    },
    {
        question: "Werkt de software ook met Amazon?",
        answer: "Op dit moment focussen we ons volledig op Bol.com om de beste ervaring te bieden. Amazon integratie staat op de planning.",
    },
    {
        question: "Hoe veilig is mijn data?",
        answer: "Wij nemen beveiliging zeer serieus. Al je data wordt versleuteld opgeslagen en verwerkt volgens de AVG-richtlijnen.",
    },
    {
        question: "Kan ik op elk moment opzeggen?",
        answer: "Ja, onze abonnementen zijn maandelijks opzegbaar. Je zit nergens aan vast.",
    },
    {
        question: "Is er ondersteuning beschikbaar?",
        answer: "Zeker! Ons support team staat 7 dagen per week voor je klaar om je te helpen met al je vragen.",
    },
];

import { TrendingUp } from "lucide-react";

export default function SoftwarePage() {
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
                                <Laptop className="w-4 h-4" />
                                OmniChannel Winkel Beheer Software
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                Beheer alles vanuit <span className="gradient-text">één dashboard</span>
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                Onze software geeft je volledige controle over je Bol.com winkel. Van voorraadbeheer tot
                                automatische prijsstelling en orderverwerking.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/register">
                                    <ShimmerButton className="shadow-2xl h-14 px-8 text-base font-medium rounded-xl">
                                        Start Gratis Proefperiode
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </ShimmerButton>
                                </Link>
                                <Link href="#features">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50 hover:border-[#475569]"
                                    >
                                        Bekijk Functies
                                    </Button>
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap justify-center gap-6 mt-12">
                                {["14 Dagen Gratis", "Geen Creditcard Nodig", "Direct Opzegbaar"].map((badge, i) => (
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

            {/* Features Grid */}
            <section className="py-24 relative overflow-hidden" id="features">
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
                            Krachtige Functies
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Alles wat je <span className="gradient-text">nodig hebt</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Tools die ontworpen zijn om je  te helpen groeien en je werk uit handen te nemen
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {features.map((feature, index) => (
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
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{feature.title}</h3>
                                    <p className="text-[#94A3B8] text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Steps */}
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
                            Drie eenvoudige <span className="gradient-text">stappen</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Binnen enkele minuten ben je operationeel en klaar om te groeien
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent -translate-y-1/2 z-0" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative z-10 text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#020617] border border-[#6366F1]/30 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#6366F1]/10">
                                    <span className="text-2xl font-bold text-[#6366F1]">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">{step.title}</h3>
                                <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
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
                            Flexibele plannen die met je meegroeien. Altijd maandelijks opzegbaar.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className={`h-full rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 relative ${plan.popular ? 'bg-[#6366F1]/5 border-[#6366F1]/40' : 'bg-[#0F172A]/50 border-[#1E293B] hover:border-[#6366F1]/30'}`}>
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white text-xs font-medium px-3 py-1 rounded-full">
                                            Meest Populair
                                        </div>
                                    )}
                                    <h3 className="text-lg font-bold text-[#F8FAFC] mb-1">{plan.name}</h3>
                                    <p className="text-sm text-[#64748B] mb-4">Tot {plan.products} Producten</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-[#F8FAFC]">€{plan.price}</span>
                                        <span className="text-[#64748B] text-sm">/maand</span>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        {planFeatures.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                                                <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/register">
                                        <Button className={`w-full h-11 rounded-xl text-sm font-medium ${plan.popular ? 'bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white shadow-lg shadow-[#6366F1]/25' : 'bg-[#1E293B] text-[#F8FAFC] hover:bg-[#334155]'}`}>
                                            Start nu
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
                            <Link href="/register">
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
