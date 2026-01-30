"use client";

import { Hero } from "@/components/home/hero";
import { TrustedBySection } from "@/components/home/trusted-by-section";
import { GeminiEffectSection } from "@/components/home/gemini-effect-section";
import { VideoSection } from "@/components/home/video-section";
import { OutperformsSection } from "@/components/home/outperforms-section";
import { NurtureSection } from "@/components/home/nurture-section";
import { ReviewsParallax } from "@/components/home/reviews-parallax";
import { PipelineSection } from "@/components/home/pipeline-section";
import { IntegrationSection } from "@/components/home/integration-section";
import { PricingSection } from "@/components/home/pricing-section";
import { TestimonialsGrid } from "@/components/home/testimonials-grid";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";

export default function HomeUI() {
  return (
    <>
      <Hero />
      <TrustedBySection />
      <GeminiEffectSection />
      <VideoSection />
      <OutperformsSection />
      <NurtureSection />
      <ReviewsParallax />
      <PipelineSection />
      <IntegrationSection />
      <PricingSection />
      <TestimonialsGrid />
      <FAQ />
      <CTA />
    </>
  );
}
