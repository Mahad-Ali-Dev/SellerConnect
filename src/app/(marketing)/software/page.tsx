"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
    Laptop,
    ArrowRight,
    CheckCircle2,
    Search,
    Package,
    BarChart3,
    Zap,
    HelpCircle,
    MessageCircle,
    Users,
    TrendingUp,
    Shield,
    Clock,
    Crown,
    Rocket,
    PlayCircle,
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
        icon: Search,
        number: "01",
        title: "Producten Zoeken",
        description: "10.000.000+ producten beschikbaar in ons systeem. Vind direct de beste producten voor jouw niche.",
    },
    {
        icon: Package,
        number: "02",
        title: "Producten Toevoegen",
        description: "Voeg producten toe aan je Bol.com winkel met geoptimaliseerde listings die direct de Buy Box winnen.",
    },
    {
        icon: BarChart3,
        number: "03",
        title: "Co-pilot Automatisering",
        description: "Voorraad, prijs en levertijd controle. Volledig geautomatiseerd met dagelijkse synchronisatie.",
    },
];

const bolBenefits = [
    "Geen opstartkosten",
    "Geen advertentiekosten",
    "Vertrouwd platform voor consumenten",
    "Bereik meer dan 13 miljoen klanten uit Nederland en België",
];

const sellerConnectBenefits = [
    { icon: Shield, text: "Alles-in-één software, speciaal voor beginners" },
    { icon: Users, text: "Duidelijke begeleiding bij elke stap" },
    { icon: TrendingUp, text: "Minder kans op fouten door automatisering" },
    { icon: Clock, text: "Bespaar tijd met onze geoptimaliseerde workflows" },
];

const problems = [
    { title: "Te veel investeren in verkeerde producten", solved: true },
    { title: "Onduidelijke productomschrijvingen", solved: true },
    { title: "Geen inzicht in winst & kosten", solved: true },
    { title: "Te laat reageren op klantvragen", solved: true },
];

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
        monthlyPrice: "Contact",
        yearlyPrice: "Contact",
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

const stats = [
    { value: "1M+", label: "Producten Beschikbaar" },
    { value: "500+", label: "Tevreden Klanten" },
    { value: "13M+", label: "Potentiële Klanten" },
    { value: "99%", label: "Klanttevredenheid" },
];

const faqs = [
    {
        question: "Wat is inbegrepen in de software?",
        answer: "Onze software bevat alles wat je nodig hebt om succesvol te verkopen op Bol.com: producten zoeken, toevoegen, voorraadcontrole, prijsmonitoring, en meer. Afhankelijk van je pakket krijg je toegang tot verschillende modules.",
    },
    {
        question: "Kan ik de software eerst uitproberen?",
        answer: "Ja! We bieden een 7 dagen gratis proefperiode waarin je 25 producten kunt toevoegen aan je Bol.com winkel. Zo kun je zelf ervaren hoe eenvoudig het is.",
    },
    {
        question: "Hoe werkt de koppeling met Bol.com?",
        answer: "Wij gebruiken de officiële Bol.com Partner API. Je hoeft geen inloggegevens te delen - we maken gebruik van veilige API-tokens die je zelf aanmaakt in het Bol.com verkoopplatform.",
    },
    {
        question: "Is er ondersteuning beschikbaar?",
        answer: "Absoluut! Ons supportteam is beschikbaar via WhatsApp en e-mail op alle werkdagen. Premium klanten krijgen prioriteitsondersteuning.",
    },
    {
        question: "Kan ik op elk moment opzeggen?",
        answer: "Ja, er zijn geen langlopende contracten verplicht. Je kunt maandelijks opzeggen. Bij jaarlijkse betaling bespaar je 20% op de totale kosten.",
    },
];

export default function SoftwarePage() {
    return (
        <div className="bg-[#020617]">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
                                Begin Vandaag Nog Met Verkopen op{" "}
                                <span className="gradient-text">Bol.com</span>
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                Eenvoudig en direct winstgevend! SellerConnect begeleidt jou van A tot Z
                                met het opzetten van een winstgevende Bol.com winkel, snel, transparant en zonder gedoe!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/bol/aanvraagformulier">
                                    <ShimmerButton className="shadow-2xl h-14 px-8 text-base font-medium rounded-xl">
                                        Start Nu Met SellerConnect
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </ShimmerButton>
                                </Link>
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50 hover:border-[#475569]"
                                    >
                                        Demo Aanvragen
                                    </Button>
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap justify-center gap-6 mt-12">
                                {["7 Dagen Gratis", "Geen Opstartkosten", "100% Buy Box Garantie"].map((badge, i) => (
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

            {/* Features Grid - 3 Steps */}
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
                            Eenvoudig en Overzichtelijk
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Drie eenvoudige <span className="gradient-text">stappen</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Van product zoeken tot verkopen — wij maken het simpel
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#1E293B] hover:border-[#6366F1]/30 transition-all duration-300 hover:-translate-y-1 relative">
                                    <div className="absolute top-4 right-4 text-6xl font-bold text-[#1E293B] select-none">
                                        {feature.number}
                                    </div>
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#6366F1]/20">
                                        <feature.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Section Placeholder 1 - Why Bol.com */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 animated-grid opacity-30" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
                                Waarom kiezen voor <span className="gradient-text">Bol.com</span>?
                            </h2>
                            <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
                                Bereik meer dan 13 miljoen klanten uit Nederland en België via het
                                meest vertrouwde e-commerce platform in de Benelux.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {bolBenefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-4 text-[#E2E8F0]">
                                        <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                                        </div>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/bol/aanvraagformulier">
                                <ShimmerButton className="shadow-2xl h-12 px-6 rounded-xl">
                                    Start Nu
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </ShimmerButton>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Bol.com Image */}
                            <img
                                src="/assets/img/bol.jpg"
                                alt="Bol.com"
                                className="rounded-2xl border border-[#1E293B] w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why SellerConnect Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            {/* SellerConnect Image */}
                            <img
                                src="/assets/img/dk.png"
                                alt="SellerConnect Platform"
                                className="rounded-2xl border border-[#1E293B] w-full h-auto"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
                                Waarom kiezen voor <span className="gradient-text">SellerConnect</span>?
                            </h2>
                            <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
                                SellerConnect biedt alles wat je nodig hebt om succesvol te worden op Bol.com,
                                speciaal ontwikkeld voor zowel beginners als gevorderde verkopers.
                            </p>
                            <div className="grid gap-4 mb-8">
                                {sellerConnectBenefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-4 border border-[#1E293B]">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 flex items-center justify-center flex-shrink-0">
                                            <benefit.icon className="w-5 h-5 text-[#6366F1]" />
                                        </div>
                                        <span className="text-[#E2E8F0] font-medium">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/bol/aanvraagformulier">
                                <ShimmerButton className="shadow-2xl h-12 px-6 rounded-xl">
                                    Start Nu Met SellerConnect
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </ShimmerButton>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Problems We Solve */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Ontdek hoe SellerConnect jouw <span className="gradient-text">verkoop versnelt</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Wij lossen de meest voorkomende problemen van Bol.com verkopers op
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-6 border border-[#1E293B]"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-[#E2E8F0] font-medium line-through decoration-[#22C55E]/50">{problem.title}</span>
                                    <span className="ml-2 text-[#22C55E] text-sm font-medium">Opgelost ✓</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Software Pricing */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#22D3EE]/5 rounded-full blur-[128px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            OmniChannel Winkel Beheer Software
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Kies jouw <span className="gradient-text">pakket</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Alle prijzen zijn excl. BTW. Bespaar 20% op jaarlijkse betalingen.
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
                                        {plan.monthlyPrice === "Contact" ? (
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

                                    <Link href={plan.monthlyPrice === "Contact" ? "/contact" : "/bol/aanvraagformulier"} className="block">
                                        <Button
                                            className={`w-full h-11 rounded-xl ${plan.popular
                                                ? 'bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white shadow-lg shadow-[#6366F1]/25'
                                                : 'bg-transparent border border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50'
                                                }`}
                                        >
                                            {plan.monthlyPrice === "Contact" ? "Contact" : "Direct Starten"}
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                                <div className="text-[#94A3B8] text-sm">{stat.label}</div>
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

            {/* 7 Dagen Gratis CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 animated-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6366F1]/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl p-8 md:p-12 border border-[#6366F1]/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6366F1]/10 rounded-full blur-[64px]" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] px-4 py-2 rounded-full text-sm font-medium mb-4">
                                    7 DAGEN GRATIS
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">
                                    Ben jij klaar om jouw eerste Bol.com shop te starten?
                                </h2>
                                <p className="text-[#94A3B8] mb-6">
                                    Test SellerConnect door 25 producten toe te voegen aan uw Bol.com-winkel.
                                    Ontdek miljoenen producten en voeg moeiteloos topartikelen toe aan uw winkel.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Link href="/bol/aanvraagformulier">
                                        <ShimmerButton className="shadow-2xl h-14 px-8 text-base font-medium rounded-xl">
                                            Demo Aanvragen
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </ShimmerButton>
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
                            </div>

                            {/* Video */}
                            <div className="w-full md:w-80 aspect-video bg-[#020617]/50 rounded-xl border border-[#1E293B] overflow-hidden">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/assets/intro.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
