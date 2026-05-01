import React from 'react';
import { ViktorHero } from './ViktorOddy/ViktorHero';
import { InfiniteMarquee } from './ViktorOddy/InfiniteMarquee';
import { TestimonialSection } from './ViktorOddy/TestimonialSection';
import { PricingSection } from './ViktorOddy/PricingSection';
import { TestimonialCarousel } from './ViktorOddy/TestimonialCarousel';
import { ProjectsSection } from './ViktorOddy/ProjectsSection';
import { PartnerSection } from './ViktorOddy/PartnerSection';
import { Footer } from './ViktorOddy/Footer';
import { CopyrightBar } from './ViktorOddy/CopyrightBar';
import { BottomNav } from './ViktorOddy/BottomNav';

export function ViktorOddy() {
  return (
    <div className="w-full bg-white relative">
      <ViktorHero />
      <InfiniteMarquee />
      <TestimonialSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
}
