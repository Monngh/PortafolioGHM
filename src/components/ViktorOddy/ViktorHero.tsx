import React from 'react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';
import { Button } from './Button';

export function ViktorHero() {
  const { ref: ref1, className: class1 } = useInViewAnimation();
  const { ref: ref2, className: class2 } = useInViewAnimation();
  const { ref: ref3, className: class3 } = useInViewAnimation();
  const { ref: ref4, className: class4 } = useInViewAnimation();
  const { ref: ref5, className: class5 } = useInViewAnimation();

  return (
    <section className="flex flex-col items-center justify-center pt-12 md:pt-16 px-6 w-full bg-white max-w-[440px] mx-auto text-center font-neue-montreal relative z-10">
      <div ref={ref1} className={`${class1} font-mondwest text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4`} style={{ animationDelay: '0.1s' }}>
        Viktor Oddy
      </div>
      
      <div ref={ref2} className={`${class2} font-mono text-xs md:text-sm text-[#051A24] mb-2`} style={{ animationDelay: '0.2s' }}>
        The creative studio of Viktor Oddy
      </div>

      <div ref={ref3} className={`${class3} text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap`} style={{ animationDelay: '0.3s' }}>
        Build <span className="font-mondwest">the next wave,</span><br/>
        <span className="font-mondwest">the bold way.</span>
      </div>

      <div ref={ref4} className={`${class4} flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6`} style={{ animationDelay: '0.4s' }}>
        <p>I spent seven years at Apple crafting products used by over a billion people. I founded Vortex Studio to bring that same level of thinking to innovators shaping what comes next.</p>
        <p>The studio is deliberately small. I guide the creative vision on every project, backed by a veteran design crew that moves fast without cutting corners.</p>
        <p>Projects start at $5,000 per month.</p>
      </div>

      <div ref={ref5} className={`${class5} flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 w-full sm:w-auto`} style={{ animationDelay: '0.5s' }}>
        <Button variant="primary" className="w-full sm:w-auto">Start a chat</Button>
        <Button variant="secondary" className="w-full sm:w-auto">View projects</Button>
      </div>
    </section>
  );
}
