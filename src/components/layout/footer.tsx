"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Zap } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#02040f] border-t border-[#1E293B]/50 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xl font-bold text-[#F8FAFC]">
                                Seller<span className="text-[#6366F1]">Connect</span>
                            </span>
                        </Link>
                        <p className="text-[#64748B] leading-relaxed max-w-sm mb-6 text-sm">
                            The all-in-one automation platform for modern e-commerce sellers. Sync, scale, and succeed across every major marketplace.
                        </p>
                        <div className="flex gap-3">
                            <Link href="#" className="w-10 h-10 rounded-lg bg-[#1E293B]/50 text-[#64748B] hover:text-[#F8FAFC] hover:bg-[#6366F1]/20 flex items-center justify-center transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-lg bg-[#1E293B]/50 text-[#64748B] hover:text-[#F8FAFC] hover:bg-[#6366F1]/20 flex items-center justify-center transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-lg bg-[#1E293B]/50 text-[#64748B] hover:text-[#F8FAFC] hover:bg-[#6366F1]/20 flex items-center justify-center transition-all">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-semibold text-[#F8FAFC] mb-4 text-sm">Product</h4>
                        <ul className="space-y-3">
                            <li><Link href="/services" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">Services</Link></li>
                            <li><Link href="/pricing" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">Pricing</Link></li>
                            <li><Link href="/integrations" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">Integrations</Link></li>
                            <li><Link href="/how-it-works" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">How it works</Link></li>
                            <li><Link href="#" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">API Docs</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-[#F8FAFC] mb-4 text-sm">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">About Us</Link></li>
                            <li><Link href="#" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">Careers</Link></li>
                            <li><Link href="#" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">Blog</Link></li>
                            <li><Link href="/contact" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-[#F8FAFC] mb-4 text-sm">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link href="#" className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-[#1E293B]/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#64748B]">
                        © {new Date().getFullYear()} SellerConnect. All rights reserved.
                    </p>
                    <p className="text-sm text-[#64748B]">
                        Built with <span className="text-[#6366F1]">precision</span> in Amsterdam
                    </p>
                </div>
            </div>
        </footer>
    );
}
