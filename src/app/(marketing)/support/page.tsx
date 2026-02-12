"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
    Headphones,
    MessageCircle,
    Mail,
    FileText,
    HelpCircle,
    ArrowRight,
    CheckCircle2,
    BookOpen,
    Video,
    Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const supportOptions = [
    {
        icon: MessageCircle,
        title: "WhatsApp Support",
        description: "Snelle ondersteuning via WhatsApp. Gemiddelde reactietijd: 2 uur.",
        link: "https://wa.me/+31854012968?text=Hallo%20SellerConnect%20-%20Ik%20heb%20een%20vraag",
        buttonText: "Start Chat",
        color: "#25D366",
    },
    {
        icon: Mail,
        title: "E-mail Support",
        description: "Stuur ons een e-mail voor uitgebreide vragen. Reactie binnen 24 uur.",
        link: "mailto:info@sellerconnect.nl",
        buttonText: "Stuur E-mail",
        color: "#6366F1",
    },
    {
        icon: Phone,
        title: "Contact Formulier",
        description: "Vul het contactformulier in en wij nemen contact met je op.",
        link: "/contact",
        buttonText: "Naar Formulier",
        color: "#22D3EE",
    },
];

const helpCategories = [
    {
        icon: BookOpen,
        title: "Aan de Slag",
        description: "Leer hoe je je eerste winkel opzet en producten toevoegt.",
    },
    {
        icon: FileText,
        title: "Account & Facturatie",
        description: "Vragen over je account, abonnement of facturen.",
    },
    {
        icon: Video,
        title: "Tutorials",
        description: "Video handleidingen en stap-voor-stap guides.",
    },
];

const faqs = [
    {
        question: "Hoe maak ik een nieuw Bol.com verkopersaccount aan?",
        answer: "Ga naar partner.bol.com/sdd/account/creation en volg de stappen om een nieuw verkopersaccount aan te maken. Dit kost ongeveer 10 minuten. Binnen 3-5 werkdagen ontvang je je activatiecode per e-mail.",
    },
    {
        question: "Ik wil de inloggegevens van mijn winkel niet delen. Kan ik dan alsnog diensten afnemen?",
        answer: "Absoluut! We raden alle verkopers aan om een nieuw Bol.com account aan te maken via het partner portaal. Je hoeft nooit je inloggegevens met ons te delen - we gebruiken uitsluitend veilige API-tokens die je zelf aanmaakt in het Bol.com verkoopplatform.",
    },
    {
        question: "Hoe werkt de voorraadcontrole?",
        answer: "Onze voorraadcontrole controleert dagelijks de beschikbaarheid van je producten bij de leveranciers. Als een product niet meer op voorraad is, wordt het automatisch gedeactiveerd. Zodra het weer beschikbaar is, wordt het opnieuw geactiveerd.",
    },
    {
        question: "Wat zijn de verwachte inkomsten in de eerste maand?",
        answer: "Voorzichtige schattingen: 500 producten → 30-40 bestellingen/maand, 1.000 producten → 50-75 bestellingen/maand, 2.000 producten → 80-110 bestellingen/maand, 3.000 producten → 120-150 bestellingen/maand.",
    },
    {
        question: "Hoe werkt de fulfillment service?",
        answer: "Bij onze fulfillment service verzenden wij je producten namens jou. De prijs is €8.50 per verzonden eenheid (excl. BTW en portokosten). Retouren worden afgehandeld voor €3 per retour. Wij zorgen voor professionele verpakking en snelle verzending.",
    },
    {
        question: "Kan ik de diensten los afnemen?",
        answer: "Ja, alle diensten zijn los af te nemen. Je kunt kiezen voor alleen Producten Toevoegen, alleen Voorraadcontrole, alleen Fulfillment, of een combinatie die bij jouw situatie past.",
    },
    {
        question: "Wat kost het toevoegen van producten?",
        answer: "De prijs per product hangt af van het volume: 3.001-5.000 producten: €0.45/product, 5.001-10.000 producten: €0.40/product, 10.000+ producten: €0.35/product. Alle prijzen zijn exclusief BTW.",
    },
    {
        question: "Hoe kan ik mijn abonnement opzeggen?",
        answer: "Je kunt je abonnement op elk moment opzeggen - er zijn geen langlopende contracten. Neem contact op via WhatsApp of e-mail en wij regelen de opzegging voor je.",
    },
];

export default function SupportPage() {
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
                                <Headphones className="w-4 h-4" />
                                Ondersteuning
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                Hoe kunnen we je <span className="gradient-text">helpen</span>?
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                Stel je vraag via het contactformulier of neem direct contact op via WhatsApp.
                                Ons team staat klaar om je te helpen.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Support Options */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {supportOptions.map((option, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-all duration-300"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${option.color}20` }}
                                >
                                    <option.icon className="w-6 h-6" style={{ color: option.color }} />
                                </div>
                                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{option.title}</h3>
                                <p className="text-[#94A3B8] text-sm mb-4">{option.description}</p>
                                {option.link.startsWith("http") || option.link.startsWith("mailto") ? (
                                    <a
                                        href={option.link}
                                        target={option.link.startsWith("http") ? "_blank" : undefined}
                                        rel={option.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    >
                                        <Button
                                            className="w-full h-11 rounded-xl"
                                            style={{
                                                backgroundColor: `${option.color}20`,
                                                color: option.color,
                                                borderColor: `${option.color}30`,
                                            }}
                                        >
                                            {option.buttonText}
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </a>
                                ) : (
                                    <Link href={option.link}>
                                        <Button
                                            className="w-full h-11 rounded-xl"
                                            style={{
                                                backgroundColor: `${option.color}20`,
                                                color: option.color,
                                            }}
                                        >
                                            {option.buttonText}
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Help Categories */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">
                            Help Categorieën
                        </h2>
                        <p className="text-[#94A3B8]">
                            Vind snel antwoord op je vragen
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {helpCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <category.icon className="w-6 h-6 text-[#6366F1]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{category.title}</h3>
                                <p className="text-[#94A3B8] text-sm">{category.description}</p>
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

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mt-12"
                        >
                            <p className="text-[#64748B] mb-4">Staat je vraag er niet bij?</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button
                                        variant="outline"
                                        className="h-11 px-6 rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50"
                                    >
                                        <Mail className="w-5 h-5 mr-2" />
                                        Contact Formulier
                                    </Button>
                                </Link>
                                <a
                                    href="https://wa.me/+31854012968?text=Hallo%20SellerConnect%20-%20Ik%20heb%20een%20vraag"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        className="h-11 px-6 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white"
                                    >
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        WhatsApp
                                    </Button>
                                </a>
                            </div>
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
                            Start vandaag nog met het all-in-one{" "}
                            <span className="gradient-text">verdienmodel van SellerConnect</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-8">
                            SellerConnect verzorgt het verkoopproces in je winkel van A tot Z.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/bol/aanvraagformulier">
                                <ShimmerButton className="shadow-2xl h-14 px-8 text-base font-medium rounded-xl">
                                    Direct Starten
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
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
