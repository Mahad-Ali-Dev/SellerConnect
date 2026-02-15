"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Package, Users, Award, Clock } from "lucide-react";

interface StatItemProps {
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
    delay: number;
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

function StatItem({ icon, value, suffix, label, delay }: StatItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="relative group text-center"
        >
            <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center text-[#6366F1] mb-4 group-hover:scale-110 group-hover:bg-[#6366F1]/20 transition-all">
                    {icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-2">
                    <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <p className="text-[#64748B] font-medium">{label}</p>
            </div>
        </motion.div>
    );
}

export function Stats() {
    const stats = [
        { icon: <Package className="w-6 h-6" />, value: 50000, suffix: "+", label: "Producten Gesynchroniseerd" },
        { icon: <Users className="w-6 h-6" />, value: 500, suffix: "+", label: "Actieve Verkopers" },
        { icon: <Award className="w-6 h-6" />, value: 99, suffix: "%", label: "Succespercentage" },
        { icon: <Clock className="w-6 h-6" />, value: 24, suffix: "/7", label: "Ondersteuning" },
    ];

    return (
        <section className="py-20 bg-[#020617] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            icon={stat.icon}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
