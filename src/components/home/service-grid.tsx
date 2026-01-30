"use client";

import { LayoutGrid, RefreshCw, ShoppingCart, Truck, Database, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
    {
        icon: Database,
        title: "Product Expansion",
        price: "From €1.49",
        description: "Select product categories based on your brand registration. We put your products in the spotlight on Bol.com.",
        features: ["100% Buy Box Guarantee", "Automated Listing", "Revenue Growth"],
        link: "/services/product-listing",
        gradient: "from-blue-500 to-indigo-500",
    },
    {
        icon: RefreshCw,
        title: "Stock Control",
        price: "From €149/mo",
        description: "Sell without stock safely. We check supplier stock levels every 15 minutes to prevent strikes.",
        features: ["Real-time Sync", "Strike Prevention", "Automated Pausing"],
        link: "/services/stock-control",
        gradient: "from-indigo-500 to-purple-500",
    },
    {
        icon: Truck,
        title: "Fulfillment Service",
        price: "From €7.19",
        description: "Save time and money. We handle storage, repacking (neutral boxes), and shipping.",
        features: ["Cut-off 23:59", "Neutral Packaging", "Returns Handling"],
        link: "/services/fulfillment",
        gradient: "from-purple-500 to-pink-500",
    },
];

export function ServicesGrid() {
    return (
        <section className="py-24 bg-[#0B1120] relative z-10">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
                        Unlock your <span className="text-primary">Earning Model</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Choose the module that fits your growth stage. Scale from startup to enterprise with our integrated ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-card/5 border border-white/10 p-8 transition-all hover:bg-card/10 hover:border-primary/50"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-7 h-7" />
                            </div>

                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <div className="inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary-foreground">
                                    {service.price}
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href={service.link} className="mt-auto">
                                <Button variant="outline" className="w-full rounded-xl border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all group-hover:translate-x-1">
                                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>

                            {/* Glow Effect */}
                            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
