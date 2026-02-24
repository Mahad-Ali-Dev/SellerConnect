"use client";

import { motion } from "framer-motion";

export function BusinessGrowthAnimation() {
    return (
        <div className="relative w-full h-[500px] lg:h-[550px]">
            {/* Main Dashboard Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl border border-[#1E293B] overflow-hidden"
            >
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#6366F1] to-[#22D3EE] p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-bold text-base text-white">Analytics Dashboard</h3>
                            <p className="text-white/70 text-sm">Real-time cijfers</p>
                        </div>
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-white/20" />
                            <div className="w-3 h-3 rounded-full bg-white/20" />
                            <div className="w-3 h-3 rounded-full bg-white/20" />
                        </div>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-5 space-y-5">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-3">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="bg-[#020617] rounded-xl p-4 border border-[#1E293B]"
                        >
                            <div className="text-[#22C55E] text-xs font-medium mb-1">Omzet</div>
                            <div className="text-xl font-bold text-[#F8FAFC]">€24.5K</div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="mt-2 h-1 bg-[#1E293B] rounded-full overflow-hidden"
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "78%" }}
                                    transition={{ delay: 1.2, duration: 0.8 }}
                                    className="h-full bg-[#22C55E] rounded-full"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="bg-[#020617] rounded-xl p-4 border border-[#1E293B]"
                        >
                            <div className="text-[#6366F1] text-xs font-medium mb-1">Bestellingen</div>
                            <div className="text-xl font-bold text-[#F8FAFC]">1,847</div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.9, duration: 1 }}
                                className="mt-2 h-1 bg-[#1E293B] rounded-full overflow-hidden"
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "65%" }}
                                    transition={{ delay: 1.3, duration: 0.8 }}
                                    className="h-full bg-[#6366F1] rounded-full"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="bg-[#020617] rounded-xl p-4 border border-[#1E293B]"
                        >
                            <div className="text-[#22D3EE] text-xs font-medium mb-1">Groei</div>
                            <div className="text-xl font-bold text-[#F8FAFC]">+32%</div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1.0, duration: 1 }}
                                className="mt-2 h-1 bg-[#1E293B] rounded-full overflow-hidden"
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "85%" }}
                                    transition={{ delay: 1.4, duration: 0.8 }}
                                    className="h-full bg-[#22D3EE] rounded-full"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Animated Growth Chart */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="bg-[#020617] rounded-xl p-4 border border-[#1E293B]"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-[#F8FAFC]">Verkoop Prestaties</span>
                            <span className="text-xs text-[#22C55E] font-medium bg-[#22C55E]/10 px-2 py-1 rounded-full">
                                ↑ 24%
                            </span>
                        </div>
                        <div className="h-28 flex items-end justify-between gap-1.5">
                            {[40, 65, 45, 80, 55, 90, 70, 95, 85, 100, 88, 110].map((height, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{
                                        delay: 1.5 + i * 0.1,
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }}
                                    className={`flex-1 rounded-t ${i === 11
                                        ? 'bg-gradient-to-t from-[#6366F1] to-[#22D3EE]'
                                        : 'bg-[#1E293B] hover:bg-[#334155] transition-colors'
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] text-[#64748B]">
                            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, i) => (
                                <span key={i}>{month}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Product List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="space-y-2"
                    >
                        {[
                            { name: "Product Toevoegingen", count: 2847, trend: "+12%" },
                            { name: "Actieve Bestellingen", count: 156, trend: "+8%" },
                            { name: "Verzonden Vandaag", count: 89, trend: "+15%" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 2 + i * 0.15, duration: 0.4 }}
                                className="flex items-center justify-between bg-[#020617] rounded-lg p-3 border border-[#1E293B]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 flex items-center justify-center">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                                            className="w-2.5 h-2.5 rounded-full bg-[#6366F1]"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-[#94A3B8]">{item.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-[#F8FAFC]">{item.count.toLocaleString()}</span>
                                    <span className="text-xs text-[#22C55E] font-medium">{item.trend}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating Success Card */}
            <motion.div
                initial={{ y: 30, opacity: 0, x: -20 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ delay: 2.5, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-[#0F172A] rounded-xl p-4 border border-[#1E293B] hidden lg:flex items-center gap-3 z-20 shadow-xl shadow-black/20"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        boxShadow: [
                            "0 0 0 0 rgba(34, 197, 94, 0.4)",
                            "0 0 0 8px rgba(34, 197, 94, 0)",
                            "0 0 0 0 rgba(34, 197, 94, 0)"
                        ]
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center"
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>
                <div>
                    <div className="text-sm font-semibold text-[#F8FAFC]">Bestelling Gesynchroniseerd</div>
                    <div className="text-xs text-[#22C55E]">99.2% succespercentage</div>
                </div>
            </motion.div>

            {/* Floating Analytics Card */}
            <motion.div
                initial={{ y: 30, opacity: 0, x: 20 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
                className="absolute -bottom-2 -right-2 bg-[#0F172A] rounded-xl p-4 border border-[#1E293B] hidden lg:block z-20 shadow-xl shadow-black/20"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-[#F8FAFC]">Koopblok Gewonnen</div>
                        <div className="text-xs text-[#6366F1]">+847 producten</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
