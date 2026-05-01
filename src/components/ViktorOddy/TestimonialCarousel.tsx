import React, { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Marcus Anderson",
    role: "CEO, Data.storage",
    quote: "With very little guidance team delivered designs that were consistently spot on...",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "alexwu",
    role: "Founder, Nexgate",
    quote: "Viktor led the creation of our best fundraising deck to date!...",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "James Mitchell",
    role: "VP Product, LaunchPad",
    quote: "Working with Viktor transformed our product vision...",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Rachel Foster",
    role: "Co-founder, Nexus Labs",
    quote: "The design quality exceeded our expectations...",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "David Zhang",
    role: "Head of Design, Paradigm Labs",
    quote: "Incredible work from start to finish...",
    avatar: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      setTimeout(() => setCurrentIndex(testimonials.length), 800);
    }
    if (currentIndex <= 0) {
      setTimeout(() => setCurrentIndex(testimonials.length), 800);
    }
  }, [currentIndex]);

  return (
    <section className="py-20 w-full overflow-hidden bg-white font-neue-montreal relative z-10"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
      <div className="md:max-w-4xl md:ml-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] text-[#0D212C] tracking-tight">
          What <span className="font-mondwest">builders</span> say
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-black text-black" />)}
          </div>
          <span className="font-medium text-[#0D212C]">Clutch 5/5</span>
        </div>
      </div>

      <div className="relative w-full px-6">
        <div className="flex gap-6 transition-transform duration-800"
             style={{ 
               transform: `translateX(calc(-${currentIndex} * (min(427.5px, 100vw - 48px) + 24px)))`,
               transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
               transitionDuration: isTransitioning ? '0.8s' : '0s'
             }}>
          {tripleTestimonials.map((t, idx) => (
            <div key={idx} className="flex-shrink-0 w-[calc(100vw-48px)] md:w-[427.5px] bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 opacity-20">
                <path d="M10 11L8 15H11V19H5V15L7 11H10ZM19 11L17 15H20V19H14V15L16 11H19Z" fill="#0D212C"/>
              </svg>
              <p className="text-base text-[#0D212C] leading-relaxed mb-8 min-h-[80px]">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-sm text-[#0D212C]">{t.name}</div>
                  <div className="text-sm text-[#273C46]">↗ {t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#051A24] hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={handleNext} className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#051A24] hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
