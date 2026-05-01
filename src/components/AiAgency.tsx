import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Zap, Palette, BarChart3, Shield } from 'lucide-react';
import { BlurText } from './BlurText';
import { HlsVideo } from './HlsVideo';

export function AiAgency() {
  return (
    <div className="bg-black text-white w-full overflow-hidden relative font-body">
      {/* NAVBAR */}
      <nav className="absolute top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
          <span className="text-black font-bold font-heading italic text-xl">AI</span>
        </div>
        
        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1 items-center">
          <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body">Home</a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body">Services</a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body">Work</a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body">Process</a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body">Pricing</a>
          <button className="bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium flex items-center gap-1 ml-2">
            Get Started <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="w-12 h-12 opacity-0 pointer-events-none hidden md:block"></div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative w-full h-[1000px] flex flex-col overflow-hidden">
        <video 
          autoPlay loop muted playsInline 
          className="absolute left-0 top-[20%] w-full h-auto object-contain z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        />
        <div className="absolute inset-0 bg-black/5 z-0"></div>
        <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-b from-transparent to-black z-0 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center pt-[150px] px-6 text-center h-full">
          <div className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8">
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">New</span>
            <span className="text-xs font-medium text-white font-body pr-3">Introducing AI-powered web design.</span>
          </div>

          <BlurText 
            text="The Website Your Brand Deserves"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px]"
            delay={0.1}
          />

          <motion.p 
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 text-sm md:text-base text-white font-body font-light leading-tight max-w-xl"
          >
            Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.
          </motion.p>

          <motion.div 
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center gap-6 mt-8"
          >
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-1">
              Get Started <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 text-white text-sm font-medium">
              Watch the Film <Play className="w-4 h-4 fill-white" />
            </button>
          </motion.div>

          <div className="mt-auto pb-8 pt-16 flex flex-col items-center gap-6 w-full">
            <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
              Trusted by the teams behind
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 text-2xl md:text-3xl font-heading italic text-white">
              <span>Stripe</span>
              <span>Vercel</span>
              <span>Linear</span>
              <span>Notion</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </section>

      {/* START SECTION */}
      <section className="relative w-full min-h-[500px] flex flex-col justify-center items-center py-32 px-6 overflow-hidden">
        <HlsVideo 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        />
        <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] mb-6">
            You dream it. We ship it.
          </h2>
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mb-8">
            Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters.
          </p>
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium flex items-center gap-1">
            Get Started <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* FEATURES CHESS */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Pro features. Zero complexity.
          </h2>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-4">Designed to convert. Built to perform.</h3>
            <p className="text-white/70 font-body font-light text-sm md:text-base mb-8 max-w-md">
              Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium flex items-center gap-1">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video border border-white/10">
              <img src="https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif" alt="Finlytic Preview" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-4">It gets smarter. Automatically.</h3>
            <p className="text-white/70 font-body font-light text-sm md:text-base mb-8 max-w-md">
              Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium flex items-center gap-1">
              See how it works <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video border border-white/10">
              <img src="https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif" alt="Wealth Preview" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            Why Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            The difference is everything.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <div className="liquid-glass rounded-2xl p-6 text-left flex flex-col">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-6">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2 font-body">Days, Not Months</h3>
            <p className="text-white/60 font-body font-light text-sm">
              Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.
            </p>
          </div>
          <div className="liquid-glass rounded-2xl p-6 text-left flex flex-col">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-6">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2 font-body">Obsessively Crafted</h3>
            <p className="text-white/60 font-body font-light text-sm">
              Every detail considered. Every element refined. Design so precise, it feels inevitable.
            </p>
          </div>
          <div className="liquid-glass rounded-2xl p-6 text-left flex flex-col">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-6">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2 font-body">Built to Convert</h3>
            <p className="text-white/60 font-body font-light text-sm">
              Layouts informed by data. Decisions backed by performance. Results you can measure.
            </p>
          </div>
          <div className="liquid-glass rounded-2xl p-6 text-left flex flex-col">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-6">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2 font-body">Secure by Default</h3>
            <p className="text-white/60 font-body font-light text-sm">
              Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative w-full py-32 px-6 flex justify-center overflow-hidden">
        <HlsVideo 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 saturate-0"
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        />
        <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-5xl liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col gap-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">200+</div>
              <div className="text-white/60 font-body font-light text-sm">Sites launched</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">98%</div>
              <div className="text-white/60 font-body font-light text-sm">Client satisfaction</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">3.2x</div>
              <div className="text-white/60 font-body font-light text-sm">More conversions</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">5 days</div>
              <div className="text-white/60 font-body font-light text-sm">Average delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            What They Say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Don't take our word for it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="liquid-glass rounded-2xl p-8 flex flex-col">
            <p className="text-white/80 font-body font-light text-sm italic mb-8 flex-1">
              "A complete rebuild in five days. The result outperformed everything we'd spent months building before."
            </p>
            <div className="mt-auto">
              <div className="text-white font-body font-medium text-sm">Sarah Chen</div>
              <div className="text-white/50 font-body font-light text-xs">CEO, Luminary</div>
            </div>
          </div>
          <div className="liquid-glass rounded-2xl p-8 flex flex-col">
            <p className="text-white/80 font-body font-light text-sm italic mb-8 flex-1">
              "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data."
            </p>
            <div className="mt-auto">
              <div className="text-white font-body font-medium text-sm">Marcus Webb</div>
              <div className="text-white/50 font-body font-light text-xs">Head of Growth, Arcline</div>
            </div>
          </div>
          <div className="liquid-glass rounded-2xl p-8 flex flex-col">
            <p className="text-white/80 font-body font-light text-sm italic mb-8 flex-1">
              "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it."
            </p>
            <div className="mt-auto">
              <div className="text-white font-body font-medium text-sm">Elena Voss</div>
              <div className="text-white/50 font-body font-light text-xs">Brand Director, Helix</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section className="relative w-full pt-32 pb-8 px-6 flex flex-col justify-center items-center overflow-hidden">
        <HlsVideo 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        />
        <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] mb-6">
            Your next website starts here.
          </h2>
          <p className="text-white/60 font-body font-light text-sm md:text-base mb-8 max-w-xl">
            Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium flex items-center gap-1">
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium">
              View Pricing
            </button>
          </div>

          <div className="w-full mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/40 text-xs">© 2026 Studio. All rights reserved.</div>
            <div className="flex items-center gap-6 text-white/40 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
