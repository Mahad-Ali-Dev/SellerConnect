
import { Hero } from "@/components/home/hero";
import { GeminiEffectSection } from "@/components/home/gemini-effect-section";
import { OutperformsSection } from "@/components/home/outperforms-section";
import { NurtureSection } from "@/components/home/nurture-section";
import { ReviewsParallax } from "@/components/home/reviews-parallax";
import { PipelineSection } from "@/components/home/pipeline-section";
import { ClientStoreStatsSection } from "@/components/home/client-store-stats";
import { PricingSection } from "@/components/home/pricing-section";
import { TestimonialsGrid } from "@/components/home/testimonials-grid";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";

export default function Home() {
    return (
        <>
            <Hero />
            <GeminiEffectSection />
            <OutperformsSection />
            <NurtureSection />
            <ReviewsParallax />
            <PipelineSection />
            <ClientStoreStatsSection />
            <PricingSection />
            <TestimonialsGrid />
            <FAQ />
            <CTA />
        </>
    );
}
