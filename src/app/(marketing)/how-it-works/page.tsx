"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
    ArrowRight,
    CheckCircle2,
    Search,
    Package,
    BarChart3,
    Truck,
    TrendingUp,
    Zap,
    HelpCircle,
    MessageCircle,
    UserPlus,
    Settings,
    Rocket,
    Play,
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
        number: "01",
        icon: UserPlus,
        title: "Account Aanmaken",
        description: "Maak een gratis account aan en koppel je Bol.com winkel via de officiële API. Geen technische kennis nodig - wij begeleiden je door het proces.",
        features: [
            "Gratis registratie",
            "Veilige API koppeling",
            "7 dagen gratis proefperiode",
        ],
    },
    {
        number: "02",
        icon: Search,
        title: "Producten Zoeken",
        description: "Doorzoek onze database van meer dan 10 miljoen producten. Filter op categorie, prijs, en winstgevendheid om de beste producten te vinden.",
        features: [
            "10+ miljoen producten",
            "Slimme filters",
            "Winstanalyse per product",
        ],
    },
    {
        number: "03",
        icon: Package,
        title: "Producten Toevoegen",
        description: "Voeg producten toe aan je Bol.com winkel met één klik. Wij optimaliseren automatisch de productomschrijvingen voor maximale zichtbaarheid.",
        features: [
            "Geoptimaliseerde listings",
            "Automatische SEO",
            "100% Buy Box garantie",
        ],
    },
    {
        number: "04",
        icon: Settings,
        title: "Automatiseer met Co-Pilot",
        description: "Onze Co-Pilot houdt je voorraad, prijzen en levertijden automatisch up-to-date. Dagelijkse synchronisatie met leveranciers.",
        features: [
            "Voorraadcontrole",
            "Prijsmonitoring",
            "Levertijd updates",
        ],
    },
    {
        number: "05",
        icon: Truck,
        title: "Fulfillment & Verzending",
        description: "Laat het verzenden aan ons over. Wij pakken je bestellingen professioneel in en verzenden ze rechtstreeks naar je klanten.",
        features: [
            "Professionele verpakking",
            "Snelle verzending",
            "Retourafhandeling",
        ],
    },
    {
        number: "06",
        icon: TrendingUp,
        title: "Groei & Schaal",
        description: "Monitor je verkopen en groei je business met onze analytics. Schaal op naar duizenden producten zonder extra werk.",
        features: [
            "Real-time analytics",
            "Winstrapportages",
            "Automatische schaling",
        ],
    },
];

const benefits = [
    {
        icon: Zap,
        title: "Snel Opstarten",
        description: "Begin binnen 24 uur met verkopen. Geen weken van voorbereiding nodig.",
    },
    {
        icon: CheckCircle2,
        title: "Geen Voorraad Nodig",
        description: "Dropshipping model - je hoeft geen producten zelf in te kopen of op te slaan.",
    },
    {
        icon: BarChart3,
        title: "Lage Investering",
        description: "Start al vanaf €999 per maand. Geen opstartkosten of verborgen kosten.",
    },
    {
        icon: Rocket,
        title: "Schaalbaar Model",
        description: "Van 500 tot 10.000+ producten - ons systeem groeit met je business mee.",
    },
];

const faqs = [
    {
        question: "Hoelang duurt het om te starten?",
        answer: "Je kunt binnen 24 uur live zijn op Bol.com. Na het aanmaken van je account en het koppelen van je Bol.com winkel kun je direct producten toevoegen.",
    },
    {
        question: "Heb ik technische kennis nodig?",
        answer: "Nee, onze software is ontworpen voor gebruiksgemak. Alles werkt via een intuïtief dashboard en wij begeleiden je bij elke stap.",
    },
    {
        question: "Wat zijn de risico's?",
        answer: "De risico's zijn minimaal. Je koopt geen voorraad vooraf, je betaalt alleen voor verkochte producten. En met onze 7 dagen gratis proefperiode kun je eerst uitproberen.",
    },
    {
        question: "Hoeveel kan ik verdienen?",
        answer: "Dit hangt af van het aantal producten en je niche. Gemiddeld verdienen onze klanten €500-€3.000 per maand met 1.000-3.000 producten. Top verkopers verdienen meer dan €10.000 per maand.",
    },
    {
        question: "Wat gebeurt er met retouren?",
        answer: "Wij handelen alle retouren voor je af. Als klant stuurt een product terug, regelen wij de terugbetaling met de leverancier. Kosten: €3 per retour.",
    },
    {
        question: "Hoe werkt de klantenservice?",
        answer: "Wij helpen je met klantvragen via onze support. Je kunt ook onze templates gebruiken om snel te reageren op veelgestelde vragen.",
    },
];

export default function HowItWorksPage() {
    return (
        <div className="bg-[#020617]">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
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
                                <Play className="w-4 h-4" />
                                Hoe Het Werkt
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                In 6 stappen naar je eigen{" "}
                                <span className="gradient-text">Bol.com business</span>
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                Van nul naar winstgevend verkopen op Bol.com. Wij begeleiden je
                                bij elke stap met onze alles-in-één software en expertise.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/bol/aanvraagformulier">
                                    <ShimmerButton className="shadow-2xl h-14 px-8 text-base font-medium rounded-xl">
                                        Start Nu
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </ShimmerButton>
                                </Link>
                                <Link href="/pricing">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50"
                                    >
                                        Bekijk Prijzen
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Steps Timeline */}
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
                            Jouw <span className="gradient-text">stappenplan</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Van account aanmaken tot winstgevend verkopen - zo simpel is het
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Timeline line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-6 md:left-1/2 top-24 bottom-0 w-px bg-gradient-to-b from-[#6366F1]/50 to-transparent" />
                                )}

                                <div className={`flex flex-col md:flex-row items-start gap-6 mb-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Step Number */}
                                    <div className="flex-shrink-0 md:w-1/2">
                                        <div className={`flex items-center gap-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center shadow-lg shadow-[#6366F1]/20">
                                                <step.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="text-5xl font-bold text-[#1E293B]">{step.number}</span>
                                        </div>
                                    </div>

                                    {/* Step Content */}
                                    <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                                        <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-colors">
                                            <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">{step.title}</h3>
                                            <p className="text-[#94A3B8] mb-4 leading-relaxed">{step.description}</p>
                                            <ul className={`space-y-2 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                                                {step.features.map((feature, i) => (
                                                    <li key={i} className={`flex items-center gap-2 text-sm ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                        <span className="text-[#64748B]">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Waarom <span className="gradient-text">SellerConnect</span>?
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            De voordelen van verkopen via ons platform
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-colors text-center"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="w-7 h-7 text-[#6366F1]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{benefit.title}</h3>
                                <p className="text-[#94A3B8] text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                                Bekijk het in <span className="gradient-text">actie</span>
                            </h2>
                            <p className="text-lg text-[#94A3B8]">
                                Ontdek in een korte video hoe SellerConnect werkt
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="aspect-video bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl border border-[#1E293B] overflow-hidden">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/assets/intro.mp4" type="video/mp4" />
                                    Je browser ondersteunt geen video.
                                </video>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 relative overflow-hidden">
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
                            <p className="text-[#64748B] mb-4">Nog vragen? We helpen je graag!</p>
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
                            KLAAR OM TE BEGINNEN?
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
                            Start jouw <span className="gradient-text">Bol.com avontuur</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] mb-8 max-w-xl mx-auto">
                            Sluit je aan bij honderden succesvolle verkopers. Begin vandaag met je 7 dagen gratis proefperiode.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/bol/aanvraagformulier">
                                <ShimmerButton className="shadow-2xl h-14 px-8 text-base font-medium rounded-xl">
                                    Gratis Starten
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </ShimmerButton>
                            </Link>
                            <Link href="/pricing">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50"
                                >
                                    Bekijk Prijzen
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
