"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
    Truck,
    ArrowRight,
    CheckCircle2,
    Zap,
    HelpCircle,
    MessageCircle,
    Package,
    RotateCcw,
    PackageOpen,
    Warehouse,
    Users,
    Leaf,
    Clock,
    Heart,
    Box,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
    {
        icon: RotateCcw,
        title: "Retour Service",
        description: "Wij handelen al je retouren snel af voor snelle terugbetalingen van de leverancier. Geen gedoe meer met retourlogistiek.",
    },
    {
        icon: Truck,
        title: "Fulfillment",
        description: "Bespaar geld en tijd op al je zendingen met onze fulfillment service. Professionele verpakking en snelle verzending.",
    },
    {
        icon: PackageOpen,
        title: "Herverpakkings Service",
        description: "Wij inspecteren alle producten en herverpakken alle zendingen in neutrale dozen en enveloppen voor een professionele uitstraling.",
    },
    {
        icon: Warehouse,
        title: "Magazijn & Opslag",
        description: "Veilige opslagruimte voor je inventaris met dagelijkse controle en professionele afhandeling.",
    },
];

const whyChoose = [
    {
        icon: Heart,
        title: "Persoonlijk Contact",
        description: "Wij hechten waarde aan persoonlijke en effectieve communicatie met onze klanten om het verzend- en retourproces samen te beheren.",
    },
    {
        icon: Leaf,
        title: "Milieuvriendelijk",
        description: "Wij gebruiken de meest effici\u00ebnte en milieuvriendelijke opties, verminderen CO2-uitstoot en houden afval uit stortplaatsen.",
    },
    {
        icon: Clock,
        title: "Snelle Levertijden",
        description: "Wij werken met leveranciers die de volgende werkdag kunnen leveren, zodat alle bestellingen je klanten op tijd bereiken.",
    },
    {
        icon: Users,
        title: "Betrouwbare Partners",
        description: "Verzend met DHL, PostNL, DPD, UPS en FedEx \u2014 kies de vervoerder die het beste bij jouw behoeften past.",
    },
];

const packagingOptions = [
    { name: "A4 Envelop", price: "Gratis" },
    { name: "Kleine Doos", price: "Gratis" },
    { name: "Grote Doos", price: "Gratis" },
    { name: "XL Doos", price: "Gratis" },
];

const faqs = [
    {
        question: "Wat is inbegrepen in de fulfillment prijs?",
        answer: "De prijs van €8.50 per eenheid (excl. BTW & porto) omvat verpakkingsmateriaal, plakband, vulmateriaal en een verzendsticker. Retouren worden afgehandeld voor €3 per eenheid (excl. BTW).",
    },
    {
        question: "Met welke vervoerders kan ik verzenden?",
        answer: "Wij werken samen met DHL, DHL Express, PostNL, DPD, UPS en FedEx. Je kunt de vervoerder kiezen die het beste past bij jouw zending.",
    },
    {
        question: "Is magazijnopslag beschikbaar?",
        answer: "Ja, magazijnopslag is beschikbaar. Neem contact op voor actuele prijzen en beschikbare ruimtes.",
    },
    {
        question: "Hoe worden retouren afgehandeld?",
        answer: "Wij verwerken alle retouren snel en efficiënt. De retourafhandelingskosten zijn €3 per eenheid (excl. BTW). Wij coördineren rechtstreeks met leveranciers voor snelle terugbetalingen.",
    },
    {
        question: "Wat zijn de verwachte inkomsten in maand 1?",
        answer: "Voorzichtige schattingen voor de eerste maand: 500 producten → 30-40 bestellingen/maand, 1.000 producten → 50-75 bestellingen/maand, 2.000 producten → 80-110 bestellingen/maand.",
    },
];

export default function BolFulfillmentPage() {
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
                                <Truck className="w-4 h-4" />
                                Fulfillment Service
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                Het Gemak van{" "}
                                <span className="gradient-text">Fulfillment</span>
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                Stuur je producten naar ons fulfillment centrum en wij handelen de verzending af.
                                Zo heb jij meer tijd om je business te laten groeien.
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

                            {/* Service Badges */}
                            <div className="flex flex-wrap justify-center gap-6 mt-12">
                                {["Fulfillment", "Return Service", "Repackaging", "Warehouse & Storage"].map((badge, i) => (
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

            {/* Shipping Partners */}
            <section className="py-16 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <p className="text-sm text-[#64748B] uppercase tracking-wider font-medium">Shipping Partners</p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {["DHL", "DHL Express", "PostNL", "DPD", "UPS", "FedEx"].map((partner, i) => (
                            <motion.div
                                key={partner}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="text-[#475569] font-bold text-lg hover:text-[#94A3B8] transition-colors"
                            >
                                {partner}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Zap className="w-4 h-4" />
                            Discover All Options
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Complete fulfillment <span className="gradient-text">services</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Send your products to us and we handle everything from shipping to returns
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {services.map((service, index) => (
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
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{service.title}</h3>
                                    <p className="text-[#94A3B8] text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
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
                            Less work, <span className="gradient-text">more profit</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            We manage the entire shipping process, reducing your workload while ensuring on-time delivery
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {whyChoose.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 flex items-center justify-center mb-4">
                                        <item.icon className="w-5 h-5 text-[#6366F1]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{item.title}</h3>
                                    <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
                                </div>
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
                            Fulfillment <span className="gradient-text">pricing</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            100% on-time delivery with professional packaging
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Fulfillment Pricing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#6366F1]/30 overflow-hidden"
                        >
                            <div className="p-6 border-b border-[#1E293B]">
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Fulfillment</h3>
                                <div className="mt-3">
                                    <span className="text-4xl font-bold text-[#F8FAFC]">€7.19</span>
                                    <span className="text-[#64748B] text-sm">/unit (excl. VAT)</span>
                                </div>
                                <p className="text-xs text-[#64748B] mt-1">Shipping label not included</p>
                            </div>
                            <div className="p-6 space-y-3">
                                {["Packaging materials", "Packing tape", "Filling material", "Shipping sticker", "Returns: €3.49/unit"].map((item) => (
                                    <div key={item} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                                <div className="pt-4">
                                    <p className="text-sm font-medium text-[#F8FAFC] mb-3">Free packaging materials:</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {packagingOptions.map((opt) => (
                                            <div key={opt.name} className="flex items-center gap-2 py-2 px-3 bg-[#020617]/50 rounded-lg border border-[#1E293B]">
                                                <Box className="w-4 h-4 text-[#6366F1]" />
                                                <span className="text-xs text-[#94A3B8]">{opt.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Warehouse Pricing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden"
                        >
                            <div className="p-6 border-b border-[#1E293B]">
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Warehouse & Storage</h3>
                                <div className="mt-3">
                                    <span className="text-4xl font-bold text-[#F8FAFC]">€2.89</span>
                                    <span className="text-[#64748B] text-sm">/m² daily (excl. VAT)</span>
                                </div>
                            </div>
                            <div className="p-6 space-y-3">
                                {[
                                    { size: "1.5 m²", available: true },
                                    { size: "3 m²", available: true },
                                    { size: "4 m²", available: true },
                                    { size: "6 m²", available: false },
                                ].map((space) => (
                                    <div
                                        key={space.size}
                                        className="flex items-center justify-between py-3 px-4 rounded-xl bg-[#020617]/50 border border-[#1E293B]"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Warehouse className="w-4 h-4 text-[#6366F1]" />
                                            <span className="text-sm text-[#94A3B8]">{space.size}</span>
                                        </div>
                                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${space.available ? 'bg-[#22C55E]/10 text-[#22C55E]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                                            {space.available ? "Available" : "Unavailable"}
                                        </span>
                                    </div>
                                ))}
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
                            Start with the all-in-one <span className="gradient-text">earning model</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-8">
                            We manage the entire sales process for your store from A to Z.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/bol/aanvraagformulier">
                                <Button
                                    size="lg"
                                    className="h-14 px-8 text-base font-medium rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white shadow-lg shadow-[#6366F1]/25"
                                >
                                    Get Started
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50"
                                >
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
