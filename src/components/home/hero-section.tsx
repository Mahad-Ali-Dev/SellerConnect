"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Particles from "@/components/magicui/particles";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TypingAnimation from "@/components/magicui/typing-animation";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap, Shield } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <div className="relative flex w-full flex-col overflow-hidden bg-[#0B1120] pt-24 pb-20 md:pt-32 md:pb-32">
            {/* Background Elements */}
            <AnimatedGridPattern
                numSquares={40}
                maxOpacity={0.05}
                duration={4}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-20%] h-[150%]",
                )}
            />
            <Particles
                className="absolute inset-0 z-0 opacity-30"
                quantity={80}
                ease={80}
                color="#4F46E5"
                refresh
            />

            <div className="z-10 container px-4 md:px-6 relative mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Content */}
                    <div className="flex flex-col items-start text-left space-y-8">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            v2.0 Now Available
                        </motion.div>

                        {/* Heading with Typing Animation */}
                        <div className="text-left">
                            <TypingAnimation
                                text="Automate Your Marketplace"
                                className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-left leading-tight"
                                duration={50}
                            />
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-left leading-tight mt-2">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-cyan-400">
                                    Global Growth.
                                </span>
                            </h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="max-w-[36rem] leading-relaxed text-gray-300 text-lg sm:text-xl"
                        >
                            The all-in-one operating system for high-volume sellers. Sync inventory, automate pricing, and fulfill orders across Bol.com, Amazon, and Allegro.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
                        >
                            <Link href="/auth/register" className="w-full sm:w-auto">
                                <ShimmerButton className="shadow-2xl shadow-primary/40 font-bold text-lg h-14 px-8 rounded-full w-full">
                                    <span className="text-white">Start Free Trial</span>
                                </ShimmerButton>
                            </Link>

                            <Link href="/pricing" className="w-full sm:w-auto">
                                <button className="w-full inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 font-medium text-white transition-colors">
                                    View Pricing
                                </button>
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="pt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-400"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Cancel anytime</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Grow Your Business Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square">

                            {/* Central Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 blur-[80px] rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/20 blur-[60px] rounded-full" />

                            {/* Orbiting Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-8 border-2 border-dashed border-white/10 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-16 border border-primary/20 rounded-full"
                            />

                            {/* Orbiting Icons */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-[#1F2937] border border-white/10 rounded-full shadow-xl">
                                    <TrendingUp className="w-5 h-5 text-green-400" />
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-3 bg-[#1F2937] border border-white/10 rounded-full shadow-xl">
                                    <Zap className="w-5 h-5 text-yellow-400" />
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-3 bg-[#1F2937] border border-white/10 rounded-full shadow-xl">
                                    <Shield className="w-5 h-5 text-primary" />
                                </div>
                            </motion.div>

                            {/* Center Content: Growth Chart */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="text-center mb-4"
                                >
                                    <div className="text-5xl font-bold text-white mb-1">📈</div>
                                    <div className="text-2xl font-bold text-white">Grow Your</div>
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Business</div>
                                </motion.div>

                                {/* Animated Bars */}
                                <div className="flex items-end gap-2 h-20 mt-4">
                                    {[40, 60, 50, 80, 70, 95].map((height, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${height}%` }}
                                            transition={{ delay: 0.7 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                                            className="w-4 bg-gradient-to-t from-primary via-indigo-500 to-cyan-400 rounded-t-md"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Floating Stats Badges */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 -right-4 bg-[#1F2937] border border-green-500/30 p-3 rounded-xl shadow-xl z-10"
                            >
                                <div className="text-xs text-green-400 font-bold">+127% Revenue</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -left-4 bg-[#1F2937] border border-primary/30 p-3 rounded-xl shadow-xl z-10"
                            >
                                <div className="text-xs text-primary font-bold">2,400 Orders/mo</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
