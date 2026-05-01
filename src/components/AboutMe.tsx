import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Code2, Sparkles, Cpu } from 'lucide-react';
import { HlsVideo } from './HlsVideo';

export function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} id="about" className="bg-[#05070a] py-24 md:py-40 px-6 overflow-hidden relative border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[160px] -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] -ml-64 -mb-64 pointer-events-none animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="liquid-glass rounded-3xl overflow-hidden aspect-[4/5] relative z-10 border border-white/10">
              <HlsVideo 
                autoPlay loop muted playsInline
                className="w-full h-full object-cover opacity-80"
                src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="liquid-glass-strong rounded-2xl p-4 backdrop-blur-md border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-white/70 uppercase tracking-widest">Currently Building</span>
                  </div>
                  <p className="text-sm text-white font-body">Next-gen interactive experiences & AI-integrated platforms.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element behind the video */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-white/10 rounded-3xl -z-10"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants}>
              <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6">
                <User className="w-4 h-4 text-white/60" />
                <span className="text-xs font-medium text-white/80 uppercase tracking-widest font-body">Acerca de mí</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading italic text-white leading-[1.1] mb-6">
                Combinando <span className="text-white/40">código</span> con <span className="text-white/40">creatividad.</span>
              </h2>
              <p className="text-lg text-white/70 font-body font-light leading-relaxed max-w-xl">
                Soy Gael Hernández Monroy, un Desarrollador Creativo e Ingeniero Multimedia apasionado por crear interfaces que no solo funcionen, sino que cuenten una historia. Mi enfoque se centra en la intersección de la tecnología de vanguardia y el diseño cinemático.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                <Cpu className="w-6 h-6 text-white mb-4" />
                <h3 className="text-white font-medium mb-2 font-body">Ingeniería Multimedia</h3>
                <p className="text-sm text-white/50 font-body leading-snug">Dominio de assets visuales, optimización de video y entornos interactivos 3D.</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                <Code2 className="w-6 h-6 text-white mb-4" />
                <h3 className="text-white font-medium mb-2 font-body">Desarrollo Frontend</h3>
                <p className="text-sm text-white/50 font-body leading-snug">Especialista en React, animaciones complejas con Framer Motion y arquitecturas escalables.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-medium font-body">Visión Creativa</div>
                  <div className="text-white/40 text-sm font-body">Transformando ideas abstractas en realidades digitales.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
