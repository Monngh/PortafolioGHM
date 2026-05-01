import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';

export function TestimonialSection() {
  const { ref: ref1, className: class1 } = useInViewAnimation();
  const { ref: ref2, className: class2 } = useInViewAnimation();
  const { ref: ref3, className: class3 } = useInViewAnimation();
  const { ref: ref4, className: class4 } = useInViewAnimation();
  const { ref: ref5, className: class5 } = useInViewAnimation();

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // max offset 200px
    const offset = Math.min(scrollY * 0.15, 200);
    setOffsetY(offset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-12 px-6 w-full max-w-2xl mx-auto flex flex-col items-center text-center bg-white font-neue-montreal relative z-10">
      <div ref={ref1} className={`${class1} mb-6`} style={{ animationDelay: '0.1s' }}>
        <Quote className="w-6 h-6 text-slate-900" />
      </div>

      <div ref={ref2} className={`${class2} text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-6`} style={{ animationDelay: '0.2s' }}>
        I left <span className="font-mondwest">Apple</span> to build the studio I always wanted to work with
      </div>

      <div ref={ref3} className={`${class3} italic text-sm text-[#273C46] mb-8`} style={{ animationDelay: '0.3s' }}>
        Viktor Oddy
      </div>

      <div ref={ref4} className={`${class4} flex items-center justify-center gap-6 md:gap-12 mb-16`} style={{ animationDelay: '0.4s' }}>
        <span className="font-medium text-slate-900 text-[24px] w-[80px]">Apple</span>
        <span className="font-medium text-slate-900 text-[24px] w-[83px]">IDEO</span>
        <span className="font-medium text-slate-900 text-[24px] w-[110px]">Polygon</span>
      </div>

      <div ref={ref5} className={`${class5} w-full max-w-xs relative rounded-2xl shadow-lg overflow-hidden h-[400px]`} style={{ animationDelay: '0.5s' }}>
        <img 
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85" 
          alt="Chris Halaska"
          className="absolute left-0 right-0 w-full object-cover scale-[1.2]"
          style={{ top: `${-100 + offsetY}px`, height: '500px' }}
        />
      </div>
    </section>
  );
}
