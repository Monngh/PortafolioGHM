import React from 'react';
import { motion } from 'framer-motion';
import { FadingVideo } from './FadingVideo';
import { BlurText } from './BlurText';

export function SpaceHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-body">
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />
      
      {/* Navbar */}
      <nav className="fixed top-4 left-0 right-0 px-8 lg:px-16 z-50 flex items-center justify-between pointer-events-none">
        <div className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center font-heading italic lowercase text-white text-3xl pointer-events-auto">
          a
        </div>
        
        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center pointer-events-auto">
          <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body transition-colors hover:text-white">Home</a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body transition-colors hover:text-white">Voyages</a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body transition-colors hover:text-white">Worlds</a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body transition-colors hover:text-white">Innovation</a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body transition-colors hover:text-white">Plan Launch</a>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 whitespace-nowrap ml-2">
            Claim a Spot
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </button>
        </div>
        
        <div className="w-12 h-12 opacity-0 pointer-events-none"></div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center pt-24 px-4 h-full">
        <div className="flex-1 flex flex-col items-center justify-center text-center w-full">
          
          <motion.div 
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
            className="liquid-glass rounded-full flex items-center p-1 mb-6"
          >
            <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold mr-3">New</span>
            <span className="text-sm text-white/90 pr-3">Maiden Crewed Voyage to Mars Arrives 2026</span>
          </motion.div>

          <BlurText 
            text="Venture Past Our Sky Across the Universe"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px]"
          />

          <motion.p 
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ease: "easeOut" }}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>

          <motion.div 
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 1.1, ease: "easeOut" }}
            className="flex items-center gap-6 mt-6"
          >
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-1 transition-transform hover:scale-105">
              Start Your Voyage
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </button>
            <button className="flex items-center gap-2 text-white text-sm font-medium transition-opacity hover:opacity-80">
              View Liftoff
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
            </button>
          </motion.div>

          <motion.div 
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 1.3, ease: "easeOut" }}
            className="flex flex-wrap justify-center items-stretch gap-4 mt-8"
          >
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <svg className="h-7 w-7 text-white mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">34.5 Min</div>
              <div className="text-xs text-white font-body font-light mt-2">Average Videos Watch Time</div>
            </div>
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <svg className="h-7 w-7 text-white mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">2.8B+</div>
              <div className="text-xs text-white font-body font-light mt-2">Users Across the Globe</div>
            </div>
          </motion.div>

        </div>

        {/* Partners */}
        <motion.div 
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 pb-8 w-full"
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="flex flex-wrap justify-center font-heading italic text-white text-2xl md:text-3xl tracking-tight gap-12 md:gap-16">
            <span>Aeon</span>
            <span>Vela</span>
            <span>Apex</span>
            <span>Orbit</span>
            <span>Zeno</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
