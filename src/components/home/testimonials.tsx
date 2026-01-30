"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Mark de Vries",
        role: "E-commerce Entrepreneur",
        company: "TechStore NL",
        rating: 5,
        text: "SellerConnect transformed my Bol.com sales. Automation saves me hours weekly and revenue increased by 150%!",
        highlight: "revenue increased by 150%",
        avatar: "MV",
    },
    {
        name: "Lisa van den Berg",
        role: "Founder",
        company: "Fashion Forward",
        rating: 5,
        text: "The stock control feature is amazing. No more overselling and customer satisfaction has improved enormously.",
        highlight: "No more overselling",
        avatar: "LB",
    },
    {
        name: "Peter Jansen",
        role: "Operations Manager",
        company: "HomeGoods Plus",
        rating: 5,
        text: "The support team is fantastic. They really think along and helped me optimize my entire operation.",
        highlight: "optimize my entire operation",
        avatar: "PJ",
    },
];

const featuredTestimonial = {
    name: "James Bakker",
    role: "6-figure Seller",
    company: "@ecomexpert",
    text: "We consistently process over 350 orders each day from just 2,000 products using SellerConnect. The automation is a game changer for scaling without extra staff.",
    avatar: "JB",
};

export function Testimonials() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22D3EE]/5 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Star className="w-4 h-4 fill-current" />
                        Testimonials
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
                        Here&apos;s what our{" "}
                        <span className="gradient-text">clients</span> have to say
                    </h2>
                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        Trusted by 500+ sellers to grow their Bol.com business
                    </p>
                </motion.div>

                {/* Featured Testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/20 to-[#22D3EE]/20 rounded-3xl blur-xl" />

                        <div className="relative bg-[#0F172A]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#6366F1]/30">
                            <Quote className="w-12 h-12 text-[#6366F1]/30 mb-6" />

                            <p className="text-xl md:text-2xl text-[#F8FAFC] leading-relaxed mb-8 font-medium">
                                &ldquo;{featuredTestimonial.text}&rdquo;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center text-white font-bold text-lg">
                                    {featuredTestimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#F8FAFC] text-lg">
                                        {featuredTestimonial.name}
                                    </h4>
                                    <p className="text-[#6366F1]">
                                        {featuredTestimonial.role} {featuredTestimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="h-full bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#6366F1]/30 transition-all hover:-translate-y-1">
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-[#FACC15] fill-current" />
                                    ))}
                                </div>

                                {/* Text with highlighted part */}
                                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                                    &ldquo;{testimonial.text.split(testimonial.highlight).map((part, i, arr) => (
                                        <span key={i}>
                                            {part}
                                            {i < arr.length - 1 && (
                                                <span className="text-[#6366F1] font-semibold">{testimonial.highlight}</span>
                                            )}
                                        </span>
                                    ))}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center text-white font-semibold text-sm">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#F8FAFC] text-sm">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-[#64748B] text-xs">
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
