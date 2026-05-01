import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden relative flex justify-center w-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-6xl w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-12"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">What we do</h2>
          <span className="text-white/40 text-sm hidden md:block uppercase tracking-widest">Our services</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="liquid-glass rounded-3xl overflow-hidden group relative text-left flex flex-col"
          >
            <div className="w-full aspect-video overflow-hidden relative">
              <video 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted autoPlay loop playsInline preload="auto"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="uppercase tracking-widest text-white/40 text-xs mt-2">Strategy</span>
                <div className="liquid-glass rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight">Research & Insight</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="liquid-glass rounded-3xl overflow-hidden group relative text-left flex flex-col"
          >
            <div className="w-full aspect-video overflow-hidden relative">
              <video 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted autoPlay loop playsInline preload="auto"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="uppercase tracking-widest text-white/40 text-xs mt-2">Craft</span>
                <div className="liquid-glass rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight">Design & Execution</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
