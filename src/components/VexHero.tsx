import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedHeading } from './AnimatedHeading';

export function VexHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white font-sans antialiased">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col pt-6 pb-12 lg:pb-16 px-6 md:px-12 lg:px-16">
        {/* Navbar */}
        <nav className="liquid-glass-vex rounded-xl px-4 py-2 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">VEX</div>
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Story</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Investing</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Building</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Advisory</a>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            Start a Chat
          </button>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-end">
          <div className="lg:grid lg:grid-cols-2 lg:items-end w-full">
            {/* Left Column */}
            <div className="mb-8 lg:mb-0">
              <AnimatedHeading
                text="Shaping tomorrow\nwith vision and action."
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
              />
              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5 max-w-xl">
                  We back visionaries and craft ventures that define what comes next.
                </p>
              </FadeIn>
              <FadeIn delay={1200} duration={1000} className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Start a Chat
                </button>
                <button className="liquid-glass-vex border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
                  Explore Now
                </button>
              </FadeIn>
            </div>

            {/* Right Column */}
            <div className="flex items-end justify-start lg:justify-end">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass-vex border border-white/20 px-6 py-3 rounded-xl">
                  <span className="text-lg md:text-xl lg:text-2xl font-light">
                    Investing. Building. Advisory.
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
