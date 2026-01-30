"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Rocket, Target, Users, Zap, TrendingUp, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "@/components/ui/tracing-beam";

const stats = [
    { value: "500+", label: "Tevreden klanten" },
    { value: "1M+", label: "Producten verwerkt" },
    { value: "€50M+", label: "Gegenereerde omzet" },
    { value: "99.9%", label: "Uptime garantie" },
];

const values = [
    {
        icon: Rocket,
        title: "Innovatie",
        description: "We pushen constant de grenzen van wat mogelijk is met AI-technologie.",
    },
    {
        icon: Target,
        title: "Resultaatgericht",
        description: "Alles wat we doen is gericht op tastbare resultaten voor jouw business.",
    },
    {
        icon: Users,
        title: "Klantgericht",
        description: "Jouw succes is ons succes. We staan altijd voor je klaar.",
    },
    {
        icon: Heart,
        title: "Passie",
        description: "We zijn gepassioneerd over e-commerce en het helpen van ondernemers.",
    },
];

const milestones = [
    {
        year: "2021",
        title: "De Start",
        description: "SellerConnect begon als een simpel idee: e-commerce automatisering toegankelijk maken voor iedereen.",
    },
    {
        year: "2022",
        title: "Eerste AI Integratie",
        description: "We lanceerden onze eerste AI-gestuurde productuploads, wat de industrie veranderde.",
    },
    {
        year: "2023",
        title: "Snelle Groei",
        description: "Meer dan 100 klanten vertrouwden op ons platform. Uitbreiding naar Amazon en andere marketplaces.",
    },
    {
        year: "2024",
        title: "Internationale Expansie",
        description: "Lancering in België, Duitsland en Frankrijk. 500+ tevreden klanten bereikt.",
    },
    {
        year: "2025",
        title: "De Toekomst",
        description: "Continuë innovatie met geavanceerde AI, multi-channel sync en meer automatisering.",
    },
];

const team = [
    {
        name: "Fatih Karakas",
        role: "Founder & CEO",
        description: "Visionair met 10+ jaar e-commerce ervaring",
        avatar: "F",
    },
    {
        name: "Thomas de Vries",
        role: "CTO",
        description: "AI expert en software architect",
        avatar: "T",
    },
    {
        name: "Sophie van den Berg",
        role: "Head of Customer Success",
        description: "Zorgt dat elke klant succesvol is",
        avatar: "S",
    },
    {
        name: "Mark Jansen",
        role: "Lead Developer",
        description: "Full-stack developer met oog voor detail",
        avatar: "M",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-[#020617]">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden py-20">
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
                                <Rocket className="w-4 h-4" />
                                Over Ons
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                                We Bouwen De{" "}
                                <span className="gradient-text">Toekomst</span> Van E-commerce
                            </h1>

                            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                                SellerConnect is opgericht met één missie: e-commerce ondernemers
                                helpen groeien door krachtige automatisering en AI-technologie
                                toegankelijk te maken.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/auth/register">
                                    <Button className="h-14 px-8 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white rounded-xl font-medium shadow-lg shadow-[#6366F1]/25">
                                        Start Gratis Proefperiode
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button
                                        variant="outline"
                                        className="h-14 px-8 border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50 rounded-xl"
                                    >
                                        Neem Contact Op
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 relative border-y border-[#1E293B]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-[#64748B] text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline with Tracing Beam */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <TrendingUp className="w-4 h-4" />
                            Onze Reis
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Van Idee Tot{" "}
                            <span className="gradient-text">Marktleider</span>
                        </h2>
                    </motion.div>

                    <TracingBeam className="px-6">
                        <div className="max-w-2xl mx-auto">
                            {milestones.map((milestone, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="mb-16 pl-8"
                                >
                                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                                        {milestone.year}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-[#94A3B8]">{milestone.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </TracingBeam>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 relative overflow-hidden border-t border-[#1E293B]">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Award className="w-4 h-4" />
                            Onze Waarden
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            Waar We Voor{" "}
                            <span className="gradient-text">Staan</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 flex items-center justify-center mb-4">
                                    <value.icon className="w-6 h-6 text-[#6366F1]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-[#94A3B8] text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 relative overflow-hidden border-t border-[#1E293B]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Users className="w-4 h-4" />
                            Ons Team
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                            De Mensen Achter{" "}
                            <span className="gradient-text">SellerConnect</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-colors text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                    {member.avatar}
                                </div>
                                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[#6366F1] text-sm font-medium mb-2">
                                    {member.role}
                                </p>
                                <p className="text-[#94A3B8] text-sm">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden border-t border-[#1E293B]">
                <div className="absolute inset-0 animated-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6366F1]/10 rounded-full blur-[128px]" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
                            Klaar Om Je Business{" "}
                            <span className="gradient-text">Te Schalen?</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-8">
                            Sluit je aan bij 500+ succesvolle e-commerce ondernemers die hun
                            verkoop hebben geautomatiseerd met SellerConnect.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/auth/register">
                                <Button className="h-14 px-8 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white rounded-xl font-medium shadow-lg shadow-[#6366F1]/25">
                                    Start Gratis Proefperiode
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    className="h-14 px-8 border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50 rounded-xl"
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
