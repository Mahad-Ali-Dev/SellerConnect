"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8"
                >
                    <Button
                        onClick={scrollToTop}
                        size="icon"
                        className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#6366F1] hover:bg-[#4F46E5] text-white shadow-lg shadow-[#6366F1]/20 border border-[#818CF8]/20"
                    >
                        <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
