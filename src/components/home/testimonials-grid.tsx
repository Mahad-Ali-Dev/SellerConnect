"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Pieter @TechStore",
        handle: "@socialhotspot",
        avatar: "P",
        text: "Briljante software. Ik run een e-commerce bedrijf met meer dan 30 klanten en een product-listing team en deze software heeft ons geholpen om onze service te verbeteren en het makkelijker te maken om meer klanten te tekenen.\n\nDe setup is makkelijk en het team is er altijd als er vragen beantwoord moeten worden.\n\n10/10",
        featured: true,
    },
    {
        name: "Daniel Broeks",
        handle: "Private Investor",
        avatar: "D",
        text: "We hebben geschaald naar 100k p/m met SellerConnect.\n\nSellerConnect springt erin en stelt ons echt in staat om de diamanten in het ruwe te vinden en onze inspanningen te maximaliseren zonder echt handmatige arbeid te hoeven toevoegen.",
    },
    {
        name: "Tim Prijs",
        handle: "Co-Founder @KST Marketing",
        avatar: "T",
        text: "Ongelooflijke mogelijkheden. De SellerConnect AI doet een uitzonderlijk werk met het ophalen van producten door kwalificatievragen. Wat me het meest opviel was hoe effectief het pijnpunten identificeert en naadloos overgaat naar uploads. Het voelt als een hoogopgeleide medewerker die 24/7 werkt.",
    },
    {
        name: "Adam Goedhart",
        handle: "Co-Founder @Conquer Growth",
        avatar: "A",
        text: "Het team is super behulpzaam en gaat boven en buiten om je te helpen.",
    },
    {
        name: "Jay Dijk",
        handle: "Founder @GetMoreListings",
        avatar: "J",
        text: "GAME CHANGER voor mijn product upload agency.\n\nSellerConnect heeft absoluut mijn agency gerevolutioneerd door ons een uitstekende USP te geven die we kunnen bieden aan onze klanten. Als je een agency bent, raad ik aan om het een kans te geven.",
    },
    {
        name: "Jamie Plat",
        handle: "Founder @NanoSite",
        avatar: "JA",
        text: "SellerConnect loste het grootste probleem op waarmee ik te maken had.\n\nWonend in NL, werkend op afstand voor BE, en het uploaden van producten betekende dat ik mijn slaapschema zou moeten opofferen. SellerConnect engageert met mijn producten direct 24/7, en ik heb consistent een 70-80% upload rate gezien.",
    },
    {
        name: "Greg Smit",
        handle: "Co-Founder @thebolt.leads",
        avatar: "G",
        text: "We zijn zo blij dat we SellerConnect voor ons bedrijf hebben gevonden. Onze product kwaliteit is enorm verbeterd door het gebruik van deze software en onze klanten merken het verschil.",
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
                        Dit is wat onze klanten<br />te zeggen hebben...
                    </h2>
                    <p className="text-[#94A3B8] text-lg">
                        Echte verhalen van onze gebruikers van over de hele wereld, allemaal met verschillende doelresultaten.
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
