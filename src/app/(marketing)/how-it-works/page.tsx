"use client";


import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Play, Zap, FileText, Truck, BarChart3, Settings, Shield, Globe } from "lucide-react";
import ShimmerButton from "@/components/magicui/shimmer-button";

const steps = [
    {
        id: "01",
        title: "Koppel je Bol.com account",
        description: "Verbind je Bol.com verkoopaccount in een paar klikken via onze beveiligde API integratie. We importeren automatisch je huidige aanbod.",
        icon: Globe,
        features: [
            "Gratis registratie",
            "Veilige API koppeling",
            "14 dagen gratis proefperiode",
        ],
    },
    {
        id: "02",
        title: "Product Analyse",
        description: "Onze AI analyseert je producten en marktdata om de beste verkoopstrategie te bepalen. We verifiëren EAN's en optimaliseren content.",
        icon: BarChart3,
        features: [
            "Geautomatiseerde analyse",
            "Winstmarge berekening",
            "Concurrentie check",
        ],
    },
    {
        id: "03",
        title: "Automatische Listing",
        description: "Producten worden automatisch op Bol.com geplaatst met geoptimaliseerde titels, beschrijvingen en prijzen. Jij houdt de volledige controle.",
        icon: FileText,
        features: [
            "Bulk uploaden",
            "Content optimalisatie",
            "Voorraad synchronisatie",
        ],
    },
    {
        id: "04",
        title: "Orders & Fulfillment",
        description: "Bestellingen komen automatisch binnen. Kies voor onze fulfillment service of regel zelf de verzending. Wij syncen alles terug naar Bol.com.",
        icon: Truck,
        features: [
            "Auto track & trace",
            "Label generatie",
            "Retour management",
        ],
    },
];

export default function HowItWorksPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div className="bg-[#020617]" ref={containerRef}>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
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
                                <Settings className="w-4 h-4" />
                                Hoe het werkt
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                Van start tot verkoop in <br />
                                <span className="gradient-text">4 simpele stappen</span>
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                Wij hebben het complexe proces van verkopen op Bol.com vereenvoudigd.
                                Ons platform doet het zware werk, zodat jij je kunt focussen op groei.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/bol/aanvraagformulier">
                                    <ShimmerButton className="h-14 px-8 text-base font-medium rounded-xl">
                                        Start Gratis Proefperiode
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </ShimmerButton>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="relative mb-24 last:mb-0 group"
                            >
                                {/* Connector Line */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute left-[27px] top-[80px] bottom-[-96px] w-0.5 bg-gradient-to-b from-[#6366F1] to-[#1E293B] hidden md:block" />
                                )}

                                <div className="grid md:grid-cols-[auto,1fr] gap-8 md:gap-12">
                                    {/* Number/Icon Column */}
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl bg-[#0F172A] border border-[#6366F1]/30 flex items-center justify-center relative z-10 group-hover:border-[#6366F1] transition-colors shadow-lg shadow-[#6366F1]/20">
                                            <step.icon className="w-6 h-6 text-[#6366F1]" />
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-3xl p-8 border border-[#1E293B] hover:border-[#6366F1]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6366F1]/10">
                                        <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
                                            <div>
                                                <div className="text-[#6366F1] font-bold mb-2 text-sm tracking-wider">STAP {step.id}</div>
                                                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3">{step.title}</h3>
                                                <p className="text-[#94A3B8] leading-relaxed max-w-xl">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-[#1E293B]">
                                            {step.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                    <span className="text-sm text-[#94A3B8] font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 animated-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6366F1]/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center bg-[#0F172A]/80 backdrop-blur-xl rounded-3xl p-12 border border-[#1E293B]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6">
                                Klaar om te <span className="gradient-text">automatiseren</span>?
                            </h2>
                            <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
                                Sluit je aan bij honderden verkopers die ons platform gebruiken om hun Bol.com business te schalen.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/bol/aanvraagformulier">
                                    <Button
                                        size="lg"
                                        className="h-14 px-8 text-base font-medium rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white shadow-lg shadow-[#6366F1]/25"
                                    >
                                        Start Gratis Proefperiode
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
                </div>
            </section>
        </div>
    );
}
