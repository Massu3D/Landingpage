import {
  benefits,
  finalCta,
  galleryItems,
  heroStats,
  navItems,
  processSteps,
  services,
  testimonials,
  whatsappHref,
} from "@/data/landing";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { BackgroundLayer } from "@/components/landing/background-layer";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

export default function Home() {
  return (
    <main className="relative isolate text-ink">
      <BackgroundLayer />
      <div className="relative z-10">
        <SiteHeader navItems={navItems} whatsappHref={whatsappHref} />
        <HeroSection heroStats={heroStats} whatsappHref={whatsappHref} />
        <BenefitsSection benefits={benefits} />
        <ServicesSection services={services} />
        <GallerySection items={galleryItems} />
        <ProcessSection steps={processSteps} />
        <TestimonialsSection testimonials={testimonials} />
        <FinalCtaSection content={finalCta} whatsappHref={whatsappHref} />
        <SiteFooter navItems={navItems} whatsappHref={whatsappHref} />
      </div>
    </main>
  );
}
