"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "motion/react";
import Image from "next/image";

const reviews = [
    {
        title: "€50.000+ omzet in 3 maanden",
        quote: "SellerConnect heeft onze workflow volledig getransformeerd",
        author: "Pieter van TechStore",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop",
    },
    {
        title: "90% minder handwerk",
        quote: "Van 8 uur per dag naar 45 minuten",
        author: "Maria van FashionHub",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
    },
    {
        title: "10.000 producten geüpload",
        quote: "In slechts één week tijd",
        author: "Jan van ElectroWorld",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
    },
    {
        title: "€23.000 bespaard per jaar",
        quote: "Geen extra personeel meer nodig",
        author: "Sophie van HomeDecor",
        thumbnail: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop",
    },
    {
        title: "40% hogere conversie",
        quote: "Dankzij AI-geoptimaliseerde listings",
        author: "Thomas van SportShop",
        thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=400&fit=crop",
    },
    {
        title: "24/7 Automatisering",
        quote: "Ook terwijl we slapen",
        author: "Emma van BookStore",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop",
    },
    {
        title: "5 platformen verbonden",
        quote: "Bol.com, Amazon en meer op één plek",
        author: "Lucas van GadgetZone",
        thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&h=400&fit=crop",
    },
    {
        title: "€100k omzet in 6 maanden",
        quote: "Van startup naar scale-up",
        author: "Nina van BeautyBox",
        thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=400&fit=crop",
    },
    {
        title: "3x sneller uploaden",
        quote: "AI doet het zware werk",
        author: "Daan van ToolsHQ",
        thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&h=400&fit=crop",
    },
    {
        title: "Multi-channel succes",
        quote: "Verkoop overal tegelijk",
        author: "Lisa van KidsWorld",
        thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop",
    },
    {
        title: "Voorraadbeheer geautomatiseerd",
        quote: "Nooit meer out of stock",
        author: "Mark van AutoParts",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
    },
    {
        title: "Premium support",
        quote: "Het team reageert binnen 5 minuten",
        author: "Anna van PetSupplies",
        thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=400&fit=crop",
    },
    {
        title: "ROI van 500%",
        quote: "Beste investering ooit",
        author: "Kevin van WineStore",
        thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop",
    },
    {
        title: "Schaalbaar zonder grenzen",
        quote: "Van 100 naar 10.000 producten",
        author: "Sarah van CraftSupply",
        thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop",
    },
    {
        title: "Mijn team kan nu focussen",
        quote: "Op wat echt belangrijk is",
        author: "Rob van OfficeSupply",
        thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop",
    },
];

export function ReviewsParallax() {
    const firstRow = reviews.slice(0, 5);
    const secondRow = reviews.slice(5, 10);
    const thirdRow = reviews.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );

    return (
        <section
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#020617]"
        >
            {/* Header */}
            <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
                <h2 className="text-2xl md:text-7xl font-bold text-[#F8FAFC]">
                    Succesverhalen <br />
                    <span className="gradient-text">van onze klanten</span>
                </h2>
                <p className="max-w-2xl text-base md:text-xl mt-8 text-[#94A3B8]">
                    Ontdek hoe honderden e-commerce ondernemers hun business hebben
                    getransformeerd met SellerConnect. Van startups tot gevestigde
                    merken.
                </p>
            </div>

            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((review) => (
                        <ReviewCard
                            review={review}
                            translate={translateX}
                            key={review.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
                    {secondRow.map((review) => (
                        <ReviewCard
                            review={review}
                            translate={translateXReverse}
                            key={review.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((review) => (
                        <ReviewCard
                            review={review}
                            translate={translateX}
                            key={review.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

const ReviewCard = ({
    review,
    translate,
}: {
    review: {
        title: string;
        quote: string;
        author: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            className="group/product h-96 w-[30rem] relative shrink-0 rounded-2xl overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
            <img
                src={review.thumbnail}
                height="600"
                width="600"
                className="object-cover object-center absolute h-full w-full inset-0 group-hover/product:scale-105 transition-transform duration-300"
                alt={review.title}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-1">{review.title}</h3>
                <p className="text-[#94A3B8] text-sm mb-2">&quot;{review.quote}&quot;</p>
                <p className="text-[#6366F1] text-xs font-medium">{review.author}</p>
            </div>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-40 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] pointer-events-none transition-opacity duration-300 z-5" />
        </motion.div>
    );
};
