"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ChevronDown, Zap, Package, BarChart3, Truck, CreditCard, Shield, FileText, MessageCircle, Laptop, Headphones, LogOut, User, Settings } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

const bolSubItems = [
    { name: "Producten Toevoegen", href: "/bol/producten-toevoegen", icon: Package, desc: "Add products to your Bol.com store" },
    { name: "Voorraad Beheer", href: "/bol/voorraad-beheer", icon: BarChart3, desc: "Stock control twice daily" },
    { name: "Fulfillment", href: "/bol/fulfillment", icon: Truck, desc: "Shipping & returns service" },
    { name: "Prijzen", href: "/pricing", icon: CreditCard, desc: "Bekijk alle prijzen" },
    { name: "Merkregistratie", href: "/bol/merkregistratie", icon: Shield, desc: "BOIP brand registration" },
    { name: "Aanvraagformulier", href: "/bol/aanvraagformulier", icon: FileText, desc: "Apply to get started" },
];

const navItems = [
    { name: "Diensten", href: "/services" },
    { name: "Bol", href: "/bol", hasDropdown: true },
    { name: "Software", href: "/software" },
    { name: "Prijzen", href: "/pricing" },
    { name: "Hoe het Werkt", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
    { name: "Support", href: "/support" },
];

export function Navbar() {
    const { data: session } = useSession();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [bolDropdownOpen, setBolDropdownOpen] = useState(false);
    const [mobileBolOpen, setMobileBolOpen] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setBolDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setBolDropdownOpen(false);
        }, 150);
    };

    const isBolActive = pathname.startsWith("/bol");

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 h-[72px]",
                isScrolled
                    ? "bg-[#020617]/80 backdrop-blur-xl border-b border-[#1E293B]/50"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 relative z-50">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-[#F8FAFC] tracking-tight">
                        Seller<span className="text-[#6366F1]">Connect</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) =>
                        item.hasDropdown ? (
                            <div
                                key={item.name}
                                className="relative"
                                ref={dropdownRef}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1",
                                        isBolActive
                                            ? "text-[#6366F1] bg-[#6366F1]/10"
                                            : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B]/50"
                                    )}
                                >
                                    {item.name}
                                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", bolDropdownOpen && "rotate-180")} />
                                </button>

                                <AnimatePresence>
                                    {bolDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                            transition={{ duration: 0.15, ease: "easeOut" }}
                                            className="absolute top-full left-0 mt-2 w-[340px] bg-[#0F172A] border border-[#1E293B] rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
                                        >
                                            <div className="p-2">
                                                {bolSubItems.map((sub) => (
                                                    <Link
                                                        key={sub.href}
                                                        href={sub.href}
                                                        onClick={() => setBolDropdownOpen(false)}
                                                        className={cn(
                                                            "flex items-start gap-3 px-3 py-3 rounded-lg transition-all duration-150",
                                                            pathname === sub.href
                                                                ? "bg-[#6366F1]/10 text-[#6366F1]"
                                                                : "hover:bg-[#1E293B]/70 text-[#94A3B8] hover:text-[#F8FAFC]"
                                                        )}
                                                    >
                                                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <sub.icon className="w-4.5 h-4.5 text-[#6366F1]" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium text-[#F8FAFC]">{sub.name}</div>
                                                            <div className="text-xs text-[#64748B] mt-0.5">{sub.desc}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                                    pathname === item.href
                                        ? "text-[#6366F1] bg-[#6366F1]/10"
                                        : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B]/50"
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    )}
                </nav>

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    {/* WhatsApp CTA */}
                    <a
                        href="https://wa.me/+31684071168?text=Hallo%20SellerConnect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all"
                    >
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">WhatsApp</span>
                    </a>

                    {session ? (
                        <>
                            {session.user?.role === "admin" && (
                                <Link href="/admin">
                                    <Button
                                        variant="ghost"
                                        className="text-[#6366F1] hover:text-[#818CF8] hover:bg-[#6366F1]/10 rounded-lg px-4 h-10"
                                    >
                                        <Settings className="w-4 h-4 mr-2" />
                                        Admin
                                    </Button>
                                </Link>
                            )}
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1E293B]/50 text-[#94A3B8]">
                                <User className="w-4 h-4" />
                                <span className="text-sm">{session.user?.name}</span>
                            </div>
                            <Button
                                onClick={() => signOut({ callbackUrl: "/" })}
                                variant="ghost"
                                className="text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg px-4 h-10"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Uitloggen
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link href="/auth/login">
                                <Button
                                    variant="ghost"
                                    className="text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B]/50 rounded-lg px-5 h-10"
                                >
                                    Inloggen
                                </Button>
                            </Link>
                            <Link href="/auth/register">
                                <Button
                                    className="h-10 px-5 text-sm font-medium rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 transition-opacity text-white shadow-lg shadow-[#6366F1]/25"
                                >
                                    Direct Starten
                                </Button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-[#F8FAFC] z-50 p-2 hover:bg-[#1E293B]/50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-0 z-40 bg-[#020617] lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
                        >
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item, index) =>
                                    item.hasDropdown ? (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <button
                                                className={cn(
                                                    "w-full text-xl font-medium py-4 px-4 rounded-xl flex items-center justify-between group transition-colors",
                                                    isBolActive
                                                        ? "text-[#6366F1] bg-[#6366F1]/10"
                                                        : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B]/50"
                                                )}
                                                onClick={() => setMobileBolOpen(!mobileBolOpen)}
                                            >
                                                {item.name}
                                                <ChevronDown className={cn("w-5 h-5 transition-transform", mobileBolOpen && "rotate-180")} />
                                            </button>
                                            <AnimatePresence>
                                                {mobileBolOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-4 mt-1 space-y-1">
                                                            {bolSubItems.map((sub) => (
                                                                <Link
                                                                    key={sub.href}
                                                                    href={sub.href}
                                                                    onClick={() => { setMobileMenuOpen(false); setMobileBolOpen(false); }}
                                                                    className={cn(
                                                                        "flex items-center gap-3 px-4 py-3 rounded-xl text-base transition-colors",
                                                                        pathname === sub.href
                                                                            ? "text-[#6366F1] bg-[#6366F1]/10"
                                                                            : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B]/50"
                                                                    )}
                                                                >
                                                                    <sub.icon className="w-5 h-5" />
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "text-xl font-medium py-4 px-4 rounded-xl flex items-center justify-between group transition-colors",
                                                    pathname === item.href
                                                        ? "text-[#6366F1] bg-[#6366F1]/10"
                                                        : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B]/50"
                                                )}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                                <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                            </Link>
                                        </motion.div>
                                    )
                                )}
                            </nav>
                            <div className="mt-auto mb-10 flex flex-col gap-3">
                                <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                                    <Button
                                        variant="outline"
                                        className="w-full rounded-xl border-[#1E293B] text-[#F8FAFC] hover:bg-[#1E293B]/50 h-14 text-base"
                                    >
                                        Inloggen
                                    </Button>
                                </Link>
                                <Link href="/auth/register" onClick={() => setMobileMenuOpen(false)}>
                                    <Button
                                        className="w-full rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white h-14 text-base shadow-lg shadow-[#6366F1]/25"
                                    >
                                        Direct Starten
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
