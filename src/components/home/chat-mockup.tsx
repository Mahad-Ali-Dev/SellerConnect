"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

const messages = [
    {
        type: "user",
        text: "Ik wil graag 500 nieuwe producten uploaden naar Bol.com",
        delay: 0,
    },
    {
        type: "bot",
        text: "Natuurlijk! Upload je Excel bestand of stuur me de product EANs. Ik zal de rest regelen inclusief afbeeldingen, beschrijvingen en prijzen.",
        delay: 0.5,
    },
    {
        type: "user",
        text: "Hier is mijn bestand met EAN codes",
        delay: 1,
    },
    {
        type: "bot",
        text: "Perfect! Ik heb 500 producten gevonden. Alle productgegevens worden nu automatisch opgehaald. Je ontvangt een melding zodra alles klaar staat.",
        delay: 1.5,
    },
    {
        type: "notification",
        text: "✓ 500 producten succesvol geüpload naar Bol.com",
        delay: 2,
    },
];

export function ChatMockup() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Bot className="w-4 h-4" />
                            Automated Workflow
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6 leading-tight">
                            Upload producten{" "}
                            <span className="gradient-text">binnen seconden</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
                            Ons intelligente systeem automatiseert het volledige uploadproces.
                            Stuur je EAN codes en wij regelen de rest - van productdata tot afbeeldingen.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Automatisch ophalen van productinformatie",
                                "Directe synchronisatie met Bol.com",
                                "Realtime voorraad updates",
                                "24/7 beschikbaar, geen wachttijden",
                            ].map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-center gap-3 text-[#94A3B8]"
                                >
                                    <span className="w-5 h-5 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                                        <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                                    </span>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Chat Interface */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="bg-[#0F172A]/80 backdrop-blur-sm rounded-2xl border border-[#1E293B] overflow-hidden shadow-2xl shadow-[#6366F1]/10">
                            {/* Chat Header */}
                            <div className="bg-[#1E293B]/50 px-6 py-4 border-b border-[#1E293B] flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-[#F8FAFC] font-semibold text-sm">SellerConnect AI</h4>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                                        <span className="text-[#22C55E] text-xs">Online</span>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="p-6 space-y-4 min-h-[350px]">
                                {messages.map((message, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: message.delay }}
                                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        {message.type === "notification" ? (
                                            <div className="bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-lg px-4 py-2 text-[#22C55E] text-sm font-medium">
                                                {message.text}
                                            </div>
                                        ) : (
                                            <div className={`flex items-start gap-2 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : ""}`}>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === "user"
                                                        ? "bg-[#1E293B]"
                                                        : "bg-gradient-to-br from-[#6366F1] to-[#22D3EE]"
                                                    }`}>
                                                    {message.type === "user" ? (
                                                        <User className="w-4 h-4 text-[#94A3B8]" />
                                                    ) : (
                                                        <Bot className="w-4 h-4 text-white" />
                                                    )}
                                                </div>
                                                <div className={`rounded-2xl px-4 py-3 text-sm ${message.type === "user"
                                                        ? "bg-[#6366F1] text-white rounded-tr-none"
                                                        : "bg-[#1E293B] text-[#E5E7EB] rounded-tl-none"
                                                    }`}>
                                                    {message.text}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
