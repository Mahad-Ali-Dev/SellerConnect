"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
    {
        question: "Moet ik mijn winkel inloggegevens delen?",
        answer: "Nee, je kunt beperkte toegang verlenen via je verkoopaccount instellingen. We gebruiken beveiligde API-verbindingen die alleen de benodigde toegang hebben.",
    },
    {
        question: "Kan ik mijn abonnement op elk moment opzeggen?",
        answer: "Ja, onze abonnementen zijn maandelijks opzegbaar. Je zit niet vast aan langetermijncontracten tenzij je kiest voor een jaarlijks abonnement.",
    },
    {
        question: "Hoe snel worden producten toegevoegd?",
        answer: "Na goedkeuring beginnen we direct. Afhankelijk van de hoeveelheid kan dit 24-48 uur duren. Voor grotere aantallen (5000+) maken we samen een schema.",
    },
    {
        question: "Werkt voorraadbeheer voor meerdere kanalen?",
        answer: "Ja, onze voorraadbeheer software kan worden verbonden met meerdere kanalen zoals Bol.com, Amazon en je eigen webshop. Alle voorraad wordt in real-time gesynchroniseerd.",
    },
    {
        question: "Wat gebeurt er als een product niet meer op voorraad is?",
        answer: "Onze software detecteert dit automatisch en kan het product tijdelijk deactiveren. Zodra het weer op voorraad is, wordt het automatisch opnieuw geactiveerd.",
    },
    {
        question: "Hoeveel kost het om te beginnen?",
        answer: "Je kunt starten met een gratis 14-dagen proefperiode. Daarna beginnen onze plannen vanaf €99/maand voor het Starter plan.",
    },
];

export function FAQ() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden" id="faq">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
            <div className="absolute inset-0 animated-grid opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Section Header */}
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
                            Veelgestelde{" "}
                            <span className="gradient-text">vragen</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Vind antwoorden op veelgestelde vragen over onze services
                        </p>
                    </motion.div>

                    {/* FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
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
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <p className="text-[#64748B] mb-4">
                            Nog vragen?
                        </p>
                        <Link href="/contact">
                            <Button
                                variant="outline"
                                className="h-11 px-6 rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Neem contact op
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
