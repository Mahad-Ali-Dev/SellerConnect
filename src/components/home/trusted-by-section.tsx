"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "Bol.com", logo: "BOL" },
    { name: "Amazon", logo: "AMAZON" },
    { name: "MediaMarkt", logo: "MEDIAMARKT" },
    { name: "Coolblue", logo: "COOLBLUE" },
    { name: "Wehkamp", logo: "WEHKAMP" },
];

export function TrustedBySection() {
    return (
        <section className="py-12 bg-[#020617] relative overflow-hidden border-b border-[#1E293B]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-[#64748B] text-sm mb-8">Vertrouwd door top teams</p>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {partners.map((partner, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-[#334155] font-semibold text-lg tracking-wide hover:text-[#64748B] transition-colors"
                            >
                                {partner.logo}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
