"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Peter @TechStore",
        handle: "@socialhotspot",
        avatar: "P",
        text: "Briljante software. Ik beheer een e-commerce bedrijf met meer dan 30 klanten en een product listing team, en deze software heeft ons geholpen onze service te verbeteren en meer klanten aan te trekken.\n\nDe installatie is eenvoudig en het team staat altijd klaar om vragen te beantwoorden.\n\n10/10",
        featured: true,
    },
    {
        name: "Daniel Brooks",
        handle: "Private Investor",
        avatar: "D",
        text: "We schaalden naar 100k/mnd met SellerConnect.\n\nSellerConnect sprong in en stelde ons echt in staat om de diamanten in de ruwe te vinden en onze inspanningen te maximaliseren zonder handmatig werk toe te voegen.",
    },
    {
        name: "Tim Price",
        handle: "Co-Founder @KST Marketing",
        avatar: "T",
        text: "Ongelooflijke mogelijkheden. De SellerConnect AI doet uitzonderlijk werk bij het ophalen van producten. Wat het meeste opviel was hoe effectief het pijnpunten identificeert en naadloos overgaat tot uploads. Het voelt als een hoogopgeleide medewerker die 24/7 werkt.",
    },
    {
        name: "Adam Goodheart",
        handle: "Co-Founder @Conquer Growth",
        avatar: "A",
        text: "Het team is super behulpzaam en gaat tot het uiterste om je te helpen.",
    },
    {
        name: "Jay Dijk",
        handle: "Founder @GetMoreListings",
        avatar: "J",
        text: "GAME CHANGER voor mijn product upload bureau.\n\nSellerConnect heeft mijn bureau absoluut gerevolutioneerd door ons een uitstekende USP te geven om aan onze klanten aan te bieden. Als je een bureau bent, raad ik je aan het een kans te geven.",
    },
    {
        name: "Jamie Platt",
        handle: "Founder @NanoSite",
        avatar: "J",
        text: "SellerConnect loste mijn grootste probleem op.\n\nWonen in NL, op afstand werken voor BE, en producten uploaden betekende dat ik mijn slaapritme moest opofferen. SellerConnect werkt 24/7 direct met mijn producten, en ik zie constant een uploadpercentage van 70-80%.",
    },
    {
        name: "Greg Smith",
        handle: "Co-Founder @thebolt.leads",
        avatar: "G",
        text: "We zijn zo blij dat we SellerConnect hebben gevonden voor ons bedrijf. Onze productkwaliteit is comfortabel verbeterd met deze software en onze klanten zien het verschil.",
    },
];

export function TestimonialsGrid() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            <div className="absolute inset-0 animated-grid opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Dit zeggen onze accounts...
                    </h2>
                    <p className="text-[#94A3B8] text-lg">
                        Echte verhalen van onze gebruikers over de hele wereld.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-6 border border-[#1E293B] ${testimonial.featured ? "md:row-span-2" : ""
                                }`}
                        >
                            {/* Author */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center text-white font-medium">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="text-[#F8FAFC] font-medium text-sm">{testimonial.name}</p>
                                    <p className="text-[#64748B] text-xs">{testimonial.handle}</p>
                                </div>
                            </div>

                            {/* Text */}
                            <p className="text-[#94A3B8] text-sm whitespace-pre-line leading-relaxed">
                                {testimonial.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
