"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import {
    Code2,
    Palette,
    Bot,
    Server,
    ShoppingCart,
    TrendingUp,
    Video,
    Search,
    Share2,
    ArrowRight,
    Zap,
    Globe,
    Package,
    MessageCircle,
    Sparkles,
    Clapperboard,
    Users,
    Megaphone,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    X,
    Play,
    Star,
    ArrowUpRight,
    Layers,
    Database,
    Smartphone,
    BarChart3,
    Mail,
    Link2,
    Target,
    Eye,
    PenTool,
    Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TracingBeam } from "@/components/ui/tracing-beam";
import ShimmerButton from "@/components/magicui/shimmer-button";
import MagicWrapper from "@/components/client/MagicWrapper";

// ============ SERVICE DATA ============
const serviceCategories = [
    {
        id: "webdev",
        icon: Code2,
        title: "Web Development",
        subtitle: "Van Idee tot Lancering",
        description: "Wij bouwen websites en applicaties die niet alleen mooi zijn, maar ook converteren. Met de nieuwste technologieën creëren we digitale ervaringen die je klanten niet snel vergeten.",
        color: "#6366F1",
        gradient: "from-[#6366F1] to-[#8B5CF6]",
        stats: { projects: "200+", satisfaction: "99%", speed: "2x" },
        services: [
            {
                icon: Palette,
                title: "UI/UX Design",
                description: "Gebruiksvriendelijke interfaces die converteren",
                features: ["Figma/Adobe XD", "Wireframing", "Prototyping", "User Testing"],
                size: "large",
            },
            {
                icon: Code2,
                title: "Custom Websites",
                description: "Maatwerk met React, Next.js en meer",
                features: ["Next.js", "React", "WordPress", "Headless CMS"],
                size: "medium",
            },
            {
                icon: Server,
                title: "Custom Software",
                description: "Oplossingen op maat voor jouw business",
                features: ["Web Apps", "Dashboards", "API's", "Databases"],
                size: "medium",
            },
            {
                icon: Bot,
                title: "Chatbots & AI",
                description: "Intelligente automatisering met AI",
                features: ["GPT Integratie", "WhatsApp Bots", "Leadgen", "24/7 Support"],
                size: "large",
            },
            {
                icon: Smartphone,
                title: "Responsive Design",
                description: "Perfect op elk scherm",
                features: ["Mobile First", "Cross-browser", "Performance", "Accessibility"],
                size: "medium",
            },
            {
                icon: Database,
                title: "Backend & APIs",
                description: "Robuuste server-side oplossingen",
                features: ["Node.js", "Python", "REST APIs", "GraphQL"],
                size: "medium",
            },
        ],
    },
    {
        id: "automation",
        icon: Zap,
        title: "Automatisering",
        subtitle: "Werk Slimmer, Niet Harder",
        description: "Stop met handmatig werk. Wij automatiseren je bedrijfsprocessen zodat jij je kunt focussen op groei. Van eenvoudige workflows tot complexe integraties.",
        color: "#22D3EE",
        gradient: "from-[#22D3EE] to-[#06B6D4]",
        stats: { timeSaved: "80%", accuracy: "100%", roi: "5x" },
        services: [
            {
                icon: Zap,
                title: "Workflow Automatisering",
                description: "Automatiseer repetitieve taken",
                features: ["Zapier", "Make", "n8n", "Custom Scripts"],
                size: "large",
            },
            {
                icon: Package,
                title: "Voorraad Sync",
                description: "Real-time voorraad over alle kanalen",
                features: ["Multi-channel", "Alerts", "Forecasting", "Reporting"],
                size: "medium",
            },
            {
                icon: BarChart3,
                title: "Rapportage",
                description: "Automatische dashboards en reports",
                features: ["KPI Tracking", "Custom Reports", "Scheduling", "Alerts"],
                size: "medium",
            },
            {
                icon: Mail,
                title: "Email Automatisering",
                description: "Slimme email sequences",
                features: ["Drip Campaigns", "Triggers", "Personalisatie", "A/B Testing"],
                size: "medium",
            },
        ],
    },
    {
        id: "ecommerce",
        icon: ShoppingCart,
        title: "E-commerce",
        subtitle: "Verkoop Overal, Beheer Centraal",
        description: "Van Bol.com tot Amazon, van Shopify tot WooCommerce. Wij helpen je verkopen op alle grote platformen met geautomatiseerde listings en voorraad management.",
        color: "#F59E0B",
        gradient: "from-[#F59E0B] to-[#F97316]",
        stats: { channels: "15+", listings: "50K+", revenue: "€10M+" },
        services: [
            {
                icon: Globe,
                title: "Bol.com Integratie",
                description: "Complete Bol.com automatisering",
                features: ["Product Upload", "Voorraad Sync", "Order Management", "Returns"],
                size: "large",
            },
            {
                icon: ShoppingCart,
                title: "Amazon Verkoop",
                description: "Uitbreiden naar Amazon markten",
                features: ["Amazon NL/DE/FR", "FBA", "PPC", "Product Research"],
                size: "large",
            },
            {
                icon: Package,
                title: "Shopify Development",
                description: "Custom Shopify webshops",
                features: ["Custom Themes", "Apps", "Checkout+", "Headless"],
                size: "medium",
            },
            {
                icon: TrendingUp,
                title: "Multi-channel",
                description: "Centraal beheer, overal verkopen",
                features: ["Channel Manager", "Inventory", "Orders", "Analytics"],
                size: "medium",
            },
            {
                icon: Layers,
                title: "WooCommerce",
                description: "WordPress e-commerce oplossingen",
                features: ["Plugins", "Payment", "Shipping", "Optimization"],
                size: "medium",
            },
        ],
    },
    {
        id: "video",
        icon: Video,
        title: "Video Editing",
        subtitle: "Beelden Die Blijven Hangen",
        description: "Video is de toekomst van marketing. Wij creëren professionele video content die je merk naar een hoger niveau tilt - van product videos tot viral social content.",
        color: "#EC4899",
        gradient: "from-[#EC4899] to-[#F43F5E]",
        stats: { videos: "500+", views: "10M+", engagement: "3x" },
        services: [
            {
                icon: Video,
                title: "Product Videos",
                description: "Professionele productvideo's",
                features: ["4K Kwaliteit", "360° Views", "Lifestyle", "Demo's"],
                size: "large",
            },
            {
                icon: Clapperboard,
                title: "Social Content",
                description: "Content voor TikTok, Reels, Shorts",
                features: ["Trending Audio", "Snelle Edits", "Captions", "Formats"],
                size: "medium",
            },
            {
                icon: Play,
                title: "Commercials",
                description: "Advertenties die converteren",
                features: ["Facebook Ads", "YouTube Ads", "TV Spots", "Branded"],
                size: "medium",
            },
            {
                icon: Camera,
                title: "Motion Graphics",
                description: "Animaties en visual effects",
                features: ["2D/3D", "Logo Animaties", "Infographics", "Intros"],
                size: "medium",
            },
            {
                icon: PenTool,
                title: "Thumbnail Design",
                description: "Click-worthy thumbnails",
                features: ["YouTube", "Courses", "Podcasts", "A/B Testing"],
                size: "medium",
            },
        ],
    },
    {
        id: "seo",
        icon: Search,
        title: "SEO",
        subtitle: "Gevonden Worden in Google",
        description: "Organisch verkeer is gratis verkeer. Wij optimaliseren je website voor zoekmachines zodat je gevonden wordt door klanten die actief zoeken naar jouw producten of diensten.",
        color: "#10B981",
        gradient: "from-[#10B981] to-[#059669]",
        stats: { keywords: "5000+", traffic: "300%", position: "Top 3" },
        services: [
            {
                icon: Search,
                title: "On-page SEO",
                description: "Website optimalisatie",
                features: ["Keywords", "Meta Tags", "Content", "Technical"],
                size: "large",
            },
            {
                icon: Globe,
                title: "Lokale SEO",
                description: "Gevonden worden in jouw regio",
                features: ["Google Business", "Citations", "Reviews", "Local Pack"],
                size: "medium",
            },
            {
                icon: Link2,
                title: "Link Building",
                description: "Autoriteit opbouwen",
                features: ["Guest Posts", "Digital PR", "Outreach", "HARO"],
                size: "medium",
            },
            {
                icon: Eye,
                title: "SEO Audits",
                description: "Complete website analyse",
                features: ["Technical", "Content", "Backlinks", "Competitors"],
                size: "medium",
            },
        ],
    },
    {
        id: "social",
        icon: Share2,
        title: "Social Media Marketing",
        subtitle: "Bereik Je Doelgroep Waar Ze Zijn",
        description: "Social media is waar je klanten hun tijd doorbrengen. Wij helpen je daar aanwezig te zijn met content die engagement creëert en je merk laat groeien.",
        color: "#8B5CF6",
        gradient: "from-[#8B5CF6] to-[#7C3AED]",
        stats: { reach: "5M+", engagement: "8%", followers: "100K+" },
        services: [
            {
                icon: Share2,
                title: "Content Creatie",
                description: "Aansprekende social content",
                features: ["Posts", "Stories", "Carousels", "Reels"],
                size: "large",
            },
            {
                icon: Megaphone,
                title: "Paid Advertising",
                description: "Advertenties met resultaat",
                features: ["Facebook", "Instagram", "LinkedIn", "TikTok"],
                size: "large",
            },
            {
                icon: Users,
                title: "Community Management",
                description: "Bouw een loyale community",
                features: ["Engagement", "Monitoring", "DM's", "Crisis"],
                size: "medium",
            },
            {
                icon: Target,
                title: "Influencer Marketing",
                description: "Samenwerken met creators",
                features: ["Research", "Outreach", "Campaigns", "Tracking"],
                size: "medium",
            },
        ],
    },
];

// Testimonials for slider
const testimonials = [
    { name: "Jan de Vries", company: "TechStore.nl", text: "SellerConnect heeft onze omzet met 300% verhoogd door slimme automatisering.", avatar: "JV", rating: 5 },
    { name: "Lisa Bakker", company: "Fashion Forward", text: "Eindelijk een partner die snapt wat e-commerce nodig heeft. Fantastisch team!", avatar: "LB", rating: 5 },
    { name: "Mark Peters", company: "Home & Living", text: "Van 0 naar 500 orders per dag dankzij hun Bol.com expertise.", avatar: "MP", rating: 5 },
];

// ============ COMPONENTS ============

// Bento Grid Item
const BentoItem = ({ service, color, index }: { service: any; color: string; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className={`
            group relative overflow-hidden rounded-2xl border border-[#1E293B] bg-[#0F172A]/80 backdrop-blur-sm
            hover:border-opacity-50 transition-all duration-300 cursor-pointer
            ${service.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
        `}
        style={{ borderColor: `${color}30` }}
    >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{ background: `linear-gradient(135deg, ${color}, transparent)` }} />

        <div className={`relative p-5 ${service.size === "large" ? "md:p-8" : ""} h-full flex flex-col`}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${color}20` }}>
                <service.icon className="w-5 h-5" style={{ color }} />
            </div>

            <h4 className={`font-bold text-[#F8FAFC] mb-1 ${service.size === "large" ? "text-xl md:text-2xl" : "text-lg"}`}>
                {service.title}
            </h4>

            <p className="text-[#94A3B8] text-sm mb-3">{service.description}</p>

            <div className={`flex-1 grid gap-1.5 ${service.size === "large" ? "grid-cols-2" : "grid-cols-1"}`}>
                {service.features.map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-[#64748B]">
                        <CheckCircle2 className="w-3 h-3" style={{ color }} />
                        {f}
                    </div>
                ))}
            </div>

            <div className="mt-3 flex items-center gap-1 text-xs font-medium group-hover:translate-x-1 transition-transform" style={{ color }}>
                Bekijk details <ArrowUpRight className="w-3 h-3" />
            </div>
        </div>
    </motion.div>
);

// Testimonial Slider
const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="relative max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#1E293B] text-center"
                >
                    <div className="flex justify-center gap-1 mb-4">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                        ))}
                    </div>
                    <p className="text-lg text-[#F8FAFC] mb-6 italic">"{testimonials[current].text}"</p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE] flex items-center justify-center text-white font-bold text-sm">
                            {testimonials[current].avatar}
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-[#F8FAFC]">{testimonials[current].name}</p>
                            <p className="text-sm text-[#64748B]">{testimonials[current].company}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === current ? "w-8 bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" : "bg-[#334155]"}`}
                    />
                ))}
            </div>
        </div>
    );
};

// Service Section with popup
const ServiceSection = ({ category, index }: { category: typeof serviceCategories[0]; index: number }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <motion.section
            id={category.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative py-24"
        >
            {/* Background accent */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute ${index % 2 === 0 ? "-left-64" : "-right-64"} top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20`}
                    style={{ background: category.color }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className={`flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                    style={{ backgroundColor: `${category.color}20` }}>
                                    <category.icon className="w-7 h-7" style={{ color: category.color }} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium" style={{ color: category.color }}>{category.subtitle}</p>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC]">{category.title}</h2>
                                </div>
                            </div>

                            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">{category.description}</p>

                            {/* Stats */}
                            <div className="flex gap-6">
                                {Object.entries(category.stats).map(([key, val]) => (
                                    <div key={key}>
                                        <p className="text-2xl font-bold" style={{ color: category.color }}>{val}</p>
                                        <p className="text-xs text-[#64748B] capitalize">{key}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 flex items-center justify-center"
                        >
                            <button
                                onClick={() => setShowPopup(true)}
                                className="group relative w-40 h-40 rounded-full flex items-center justify-center"
                                style={{ background: `linear-gradient(135deg, ${category.color}30, transparent)` }}
                            >
                                <div className="absolute inset-4 rounded-full border-2 border-dashed animate-spin-slow"
                                    style={{ borderColor: `${category.color}50` }} />
                                <div className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                                    style={{ backgroundColor: category.color }}>
                                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                </div>
                            </button>
                        </motion.div>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {category.services.map((service, i) => (
                            <BentoItem key={i} service={service} color={category.color} index={i} />
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-10 text-center"
                    >
                        <Link href="/contact">
                            <Button className="rounded-xl px-8 h-12" style={{ backgroundColor: category.color }}>
                                {category.title} Offerte Aanvragen
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setShowPopup(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0F172A] rounded-2xl p-8 max-w-lg w-full border border-[#1E293B] relative"
                        >
                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-4 right-4 text-[#64748B] hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                                style={{ backgroundColor: `${category.color}20` }}>
                                <category.icon className="w-8 h-8" style={{ color: category.color }} />
                            </div>

                            <h3 className="text-2xl font-bold text-[#F8FAFC] text-center mb-4">{category.title}</h3>
                            <p className="text-[#94A3B8] text-center mb-6">{category.description}</p>

                            <div className="space-y-2 mb-6">
                                {category.services.slice(0, 4).map((s, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#020617]/50">
                                        <s.icon className="w-5 h-5" style={{ color: category.color }} />
                                        <span className="text-[#F8FAFC] text-sm">{s.title}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="block">
                                <Button className="w-full rounded-xl h-12" style={{ backgroundColor: category.color }}>
                                    Neem Contact Op
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

// ============ MAIN PAGE ============
export default function ServicesPage() {
    return (
        <div className="bg-slate-950 overflow-hidden">
            {/* 1. LAMP HERO */}
            <LampContainer className="pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-2.5 rounded-full text-sm font-medium mb-8"
                    >
                        <Sparkles className="w-4 h-4 animate-pulse" />
                        Professionele Digitale Diensten
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent leading-[1.1] mb-6"
                    >
                        Alles Voor Jouw{" "}
                        <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Digitale Groei</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto"
                    >
                        Van webontwikkeling tot e-commerce, van SEO tot social media.
                        Wij zijn jouw one-stop-shop voor digitaal succes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/contact">
                            <MagicWrapper>
                                <ShimmerButton className="h-14 px-10 text-lg font-medium rounded-xl">
                                    Gratis Strategiegesprek
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </ShimmerButton>
                            </MagicWrapper>
                        </Link>
                        <a href="https://wa.me/+31684071168" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="h-14 px-8 bg-[#25D366] hover:bg-[#22c55e] text-white rounded-xl">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Direct WhatsApp
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>
            </LampContainer>

            {/* 2. NAVIGATION BAR */}
            <section className="sticky top-16 z-40 py-4 bg-[#020617]/90 backdrop-blur-xl border-y border-[#1E293B]">
                <div className="container mx-auto px-4">
                    <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
                        {serviceCategories.map((cat) => (
                            <a
                                key={cat.id}
                                href={`#${cat.id}`}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A]/50 border border-[#1E293B] text-[#94A3B8] hover:text-white hover:border-opacity-50 transition-all text-sm whitespace-nowrap"
                                style={{ borderColor: `${cat.color}30` }}
                            >
                                <cat.icon className="w-4 h-4" style={{ color: cat.color }} />
                                {cat.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TRACING BEAM WITH SERVICE SECTIONS */}
            <TracingBeam className="px-0">
                {serviceCategories.map((category, index) => (
                    <ServiceSection key={category.id} category={category} index={index} />
                ))}
            </TracingBeam>

            {/* 4. TESTIMONIAL SLIDER SECTION */}
            <section className="py-24 border-t border-[#1E293B]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                            Wat Klanten <span className="gradient-text">Zeggen</span>
                        </h2>
                        <p className="text-[#94A3B8]">Ontdek waarom 500+ bedrijven voor ons kiezen</p>
                    </motion.div>

                    <TestimonialSlider />
                </div>
            </section>

            {/* 5. CTA WITH BACKGROUND BEAMS */}
            <BackgroundBeamsWithCollision className="!bg-[#020617] dark:!from-[#020617] dark:!to-[#0F172A] !h-auto py-24">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
                            Klaar om te{" "}
                            <span className="gradient-text">groeien?</span>
                        </h2>

                        <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10">
                            Laten we samen jouw digitale strategie bespreken.
                            Gratis en vrijblijvend.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <ShimmerButton className="h-16 px-10 text-lg font-medium rounded-2xl">
                                    Plan Je Gratis Gesprek
                                    <ArrowRight className="w-6 h-6 ml-3" />
                                </ShimmerButton>
                            </Link>
                            <a href="https://wa.me/+31684071168" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="h-16 px-10 bg-[#25D366] hover:bg-[#22c55e] text-white rounded-2xl text-lg">
                                    <MessageCircle className="w-6 h-6 mr-3" />
                                    WhatsApp Ons Nu
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}
