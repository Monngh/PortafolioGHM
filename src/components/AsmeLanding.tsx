import React from 'react';
import { AsmeHero } from './AsmeHero';
import { AboutSection } from './AboutSection';
import { FeaturedVideoSection } from './FeaturedVideoSection';
import { PhilosophySection } from './PhilosophySection';
import { ServicesSection } from './ServicesSection';

export function AsmeLanding() {
  return (
    <div className="w-full font-sans antialiased text-white bg-black">
      <AsmeHero />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </div>
  );
}
