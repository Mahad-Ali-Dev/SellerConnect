"use client";
import React from "react";
import { useScroll, useTransform, useSpring } from "motion/react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function GeminiEffectSection() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        <section
            className="h-[400vh] bg-[#020617] w-full relative pt-40 overflow-clip"
            ref={ref}
        >
            <GoogleGeminiEffect
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
                title="Automatiseer Je E-commerce"
                description="Scroll om te ontdekken hoe SellerConnect jouw verkoop naar het volgende niveau tilt"
            />

            {/* Custom CTA button */}
            <div className="w-full h-[890px] -top-60 md:-top-40 flex items-center justify-center absolute">
                <Link href="/auth/register">
                    <Button className="font-bold bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full md:px-6 md:py-3 px-4 py-2 md:mt-24 mt-8 z-30 md:text-base text-white text-sm w-fit mx-auto shadow-lg shadow-[#6366F1]/25 hover:opacity-90">
                        Start Gratis Proefperiode
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}
