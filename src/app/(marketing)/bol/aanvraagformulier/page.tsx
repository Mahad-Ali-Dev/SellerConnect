"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    FileText,
    ArrowRight,
    CheckCircle2,
    Zap,
    HelpCircle,
    MessageCircle,
    Package,
    BarChart3,
    Truck,
    Shield,
    Send,
    User,
    Mail,
    Phone,
    Store,
    ShoppingBag,
    Loader2,
    AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
    { icon: Package, title: "Product Addition", description: "Add thousands of products with Buy Box guarantee" },
    { icon: BarChart3, title: "Stock Control", description: "Automated inventory checks twice daily" },
    { icon: Truck, title: "Fulfillment", description: "Professional shipping & return handling" },
    { icon: Shield, title: "Brand Registration", description: "BOIP trademark registration with EAN codes" },
];

const faqs = [
    {
        question: "How long does it take to get started after submitting?",
        answer: "Our team reviews applications promptly. You can expect to hear back within 1-2 business days. Once approved, product additions begin within 1-10 business days depending on the quantity ordered.",
    },
    {
        question: "Do I need an active Bol.com store?",
        answer: "Yes, you need an active seller account on Bol.com. You can easily create one via the Bol.com partner portal. Within 3-5 business days you'll receive your activation code.",
    },
    {
        question: "Do I need to share my login credentials?",
        answer: "No! We recommend all sellers to create a new store via the Bol.com partner portal. This way you maintain full control over your credentials while we handle the product management.",
    },
    {
        question: "Which services can I choose?",
        answer: "All services are available separately: Product Addition, Stock Control, Fulfillment, and Invoicing Software. You can start with one service and add more as your business grows.",
    },
    {
        question: "What are the expected earnings?",
        answer: "Conservative first-month estimates: 500 products → 30-40 orders/month, 1,000 products → 50-75 orders/month, 2,000 products → 80-110 orders/month, 3,000 products → 120-150 orders/month.",
    },
    {
        question: "How often are payouts processed?",
        answer: "Bol.com offers two payout periods: every 14 days or once per month. Allegro provides multiple options including next-business-day payouts for faster cash flow.",
    },
];

export default function BolAanvraagformulierPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        storeName: "",
        storeUrl: "",
        productCount: "",
        services: [] as string[],
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleServiceToggle = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/applications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Er is een fout opgetreden");
            }

            setSubmitStatus({ type: "success", message: data.message });
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                storeName: "",
                storeUrl: "",
                productCount: "",
                services: [],
                message: "",
            });
        } catch (err) {
            setSubmitStatus({
                type: "error",
                message: err instanceof Error ? err.message : "Er is een fout opgetreden",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#020617]">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 animated-grid opacity-50" />
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-[128px]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <FileText className="w-4 h-4" />
                            Application Form
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
                            Get Started <span className="gradient-text">Today</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
                            Fill out the application form below and our team will review your request.
                            Start scaling your Bol.com business with our proven services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid lg:grid-cols-5 gap-8">
                            {/* Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="lg:col-span-3"
                            >
                                <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] p-6 md:p-8">
                                    <h2 className="text-2xl font-bold text-[#F8FAFC] mb-6">Application Details</h2>

                                    {/* Status Messages */}
                                    {submitStatus && (
                                        <div className={`flex items-center gap-2 px-4 py-3 rounded-xl mb-6 text-sm ${submitStatus.type === "success"
                                            ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                                            }`}>
                                            {submitStatus.type === "success" ? (
                                                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                                            ) : (
                                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                            )}
                                            {submitStatus.message}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name Fields */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                                    <User className="w-4 h-4 inline mr-1" />
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.firstName}
                                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                    className="w-full h-11 px-4 rounded-xl bg-[#020617] border border-[#1E293B] text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] outline-none transition-colors"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-[#94A3B8] mb-2">Last Name</label>
                                                <input
                                                    type="text"
                                                    value={formData.lastName}
                                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                    className="w-full h-11 px-4 rounded-xl bg-[#020617] border border-[#1E293B] text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] outline-none transition-colors"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                                <Mail className="w-4 h-4 inline mr-1" />
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full h-11 px-4 rounded-xl bg-[#020617] border border-[#1E293B] text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] outline-none transition-colors"
                                                placeholder="john@company.com"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                                <Phone className="w-4 h-4 inline mr-1" />
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full h-11 px-4 rounded-xl bg-[#020617] border border-[#1E293B] text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] outline-none transition-colors"
                                                placeholder="+31 6 12345678"
                                            />
                                        </div>

                                        {/* Company & Store */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                                    <Store className="w-4 h-4 inline mr-1" />
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full h-11 px-4 rounded-xl bg-[#020617] border border-[#1E293B] text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] outline-none transition-colors"
                                                    placeholder="Company B.V."
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                                    <ShoppingBag className="w-4 h-4 inline mr-1" />
                                                    Bol.com Store Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.storeName}
                                                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                                                    className="w-full h-11 px-4 rounded-xl bg-[#020617] border border-[#1E293B] text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] outline-none transition-colors"
                                                    placeholder="My Bol Store"
                                                />
                                            </div>
                                        </div>

                                        {/* Product Count */}
                                        <div>
                                            <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                                How many products would you like to add?
                                            </label>
                                            <select
                                                value={formData.productCount}
                                                onChange={(e) => setFormData({ ...formData, productCount: e.target.value })}
                                                className="w-full h-11 px-4 rounded-xl bg-[#020617] border border-[#1E293B] text-[#F8FAFC] text-sm focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] outline-none transition-colors"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="500-2500">500 - 2,500 products</option>
                                                <option value="2501-5000">2,501 - 5,000 products</option>
                                                <option value="5001-10000">5,001 - 10,000 products</option>
                                                <option value="10000+">10,000+ products</option>
                                            </select>
                                        </div>

                                        {/* Services Selection */}
                                        <div>
                                            <label className="block text-sm font-medium text-[#94A3B8] mb-3">
                                                Which services are you interested in?
                                            </label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {["Product Addition", "Stock Control", "Fulfillment", "Brand Registration"].map((service) => (
                                                    <button
                                                        key={service}
                                                        type="button"
                                                        onClick={() => handleServiceToggle(service)}
                                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${formData.services.includes(service)
                                                            ? "border-[#6366F1] bg-[#6366F1]/10 text-[#6366F1]"
                                                            : "border-[#1E293B] bg-[#020617] text-[#94A3B8] hover:border-[#334155]"
                                                            }`}
                                                    >
                                                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${formData.services.includes(service) ? "text-[#6366F1]" : "text-[#475569]"}`} />
                                                        {service}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                                                Additional Message (optional)
                                            </label>
                                            <textarea
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-[#1E293B] text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] outline-none transition-colors resize-none"
                                                placeholder="Tell us about your goals or any specific requirements..."
                                            />
                                        </div>

                                        {/* Submit */}
                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full h-12 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:opacity-90 text-white font-medium shadow-lg shadow-[#6366F1]/25 disabled:opacity-70"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Submit Application
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </div>
                            </motion.div>

                            {/* Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="lg:col-span-2"
                            >
                                <div className="sticky top-24 space-y-6">
                                    {/* Services Overview */}
                                    <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] p-6">
                                        <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Our Services</h3>
                                        <div className="space-y-4">
                                            {services.map((service, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <service.icon className="w-4 h-4 text-[#6366F1]" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium text-[#F8FAFC]">{service.title}</div>
                                                        <div className="text-xs text-[#64748B] mt-0.5">{service.description}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Why Choose */}
                                    <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] p-6">
                                        <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Why Choose Us</h3>
                                        <div className="space-y-3">
                                            {[
                                                "100% Buy Box guarantee",
                                                "Scale up to €250K/month",
                                                "24/7 stock monitoring",
                                                "Professional fulfillment",
                                                "Personal support team",
                                            ].map((item) => (
                                                <div key={item} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                                                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1E293B] p-6">
                                        <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Need Help?</h3>
                                        <p className="text-sm text-[#94A3B8] mb-4">
                                            Our team is here to help you get started. Reach out via WhatsApp or email.
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2 text-[#94A3B8]">
                                                <Phone className="w-4 h-4 text-[#6366F1]" />
                                                +31 85 401 2968
                                            </div>
                                            <div className="flex items-center gap-2 text-[#94A3B8]">
                                                <Mail className="w-4 h-4 text-[#6366F1]" />
                                                info@sellerconnect.nl
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <HelpCircle className="w-4 h-4" />
                                FAQ
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                                Frequently asked <span className="gradient-text">questions</span>
                            </h2>
                        </motion.div>

                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl border border-[#1E293B] px-6 data-[state=open]:border-[#6366F1]/30"
                                >
                                    <AccordionTrigger className="text-left text-base font-medium text-[#F8FAFC] hover:text-[#6366F1] transition-colors py-5 [&[data-state=open]]:text-[#6366F1]">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#94A3B8] text-sm leading-relaxed pb-5">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mt-12"
                        >
                            <p className="text-[#64748B] mb-4">Still have questions?</p>
                            <Link href="/contact">
                                <Button variant="outline" className="h-11 px-6 rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Contact us
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 animated-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6366F1]/10 rounded-full blur-[128px]" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
                            Start the all-in-one <span className="gradient-text">earning model</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-8">
                            We manage the entire sales process for your store from A to Z.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-medium rounded-xl border-[#334155] text-[#E5E7EB] hover:bg-[#1E293B]/50">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
