"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

export function VideoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

    // Play video when in view
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleScroll = () => {
            const rect = video.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;

            if (isInView && !isPlaying) {
                video.play().catch(() => { });
                setIsPlaying(true);
            } else if (!isInView && isPlaying) {
                video.pause();
                setIsPlaying(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isPlaying]);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section
            id="video-section"
            ref={containerRef}
            className="relative py-24 bg-[#020617] overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 animated-grid opacity-30" />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Play className="w-4 h-4" />
                        Bekijk Onze Intro
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Ontdek Wat We{" "}
                        <span className="gradient-text">Kunnen Doen</span>
                    </h2>

                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        Een korte introductie over onze diensten en hoe wij jouw business naar het volgende niveau tillen.
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    style={{ opacity, scale }}
                    className="relative max-w-6xl mx-auto"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#6366F1]/20 via-[#8B5CF6]/20 to-[#22D3EE]/20 rounded-3xl blur-2xl" />

                    {/* Video Frame */}
                    <div className="relative bg-[#0F172A] rounded-2xl border border-[#1E293B] overflow-hidden shadow-2xl shadow-[#6366F1]/10">
                        {/* Browser Mockup Header */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#0F172A] border-b border-[#1E293B]">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                                <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="bg-[#020617] rounded-lg px-4 py-1.5 text-[#64748B] text-sm text-center">
                                    sellerconnect.nl/intro
                                </div>
                            </div>
                        </div>

                        {/* Video Player */}
                        <div className="relative aspect-video bg-[#020617]">
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                loop
                                muted={isMuted}
                                playsInline
                                autoPlay
                            >
                                <source src="/assets/intro.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Video Overlay - Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent pointer-events-none" />

                            {/* Play Button Overlay (shows when paused) */}
                            {!isPlaying && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 flex items-center justify-center bg-[#020617]/50"
                                >
                                    <button
                                        onClick={() => videoRef.current?.play()}
                                        className="w-20 h-20 rounded-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE] flex items-center justify-center shadow-lg shadow-[#6366F1]/30 hover:scale-110 transition-transform"
                                    >
                                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                    </button>
                                </motion.div>
                            )}

                            {/* Mute Toggle */}
                            <button
                                onClick={toggleMute}
                                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#0F172A]/80 backdrop-blur-sm border border-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
                            >
                                {isMuted ? (
                                    <VolumeX className="w-5 h-5" />
                                ) : (
                                    <Volume2 className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Video Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-6 mt-12"
                >
                    {[
                        "Professionele Aanpak",
                        "Bewezen Resultaten",
                        "24/7 Support",
                        "Snelle Implementatie",
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 text-[#94A3B8] text-sm"
                        >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
                            {feature}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
