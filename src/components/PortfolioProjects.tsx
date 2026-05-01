import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { HlsVideo } from './HlsVideo';

const projects = [
  {
    title: "Cinematic Journey",
    category: "Web Experience / 3D",
    description: "A high-fidelity interactive story built with React Three Fiber and GSAP, pushing the boundaries of web storytelling.",
    video: "https://stream.mux.com/VLpRzXQlM2BykAnpDGJDLIV8o7rMA01T1bPYIFzlDezk.m3u8",
    tags: ["Three.js", "React", "GSAP"]
  },
  {
    title: "Nebula Dashboard",
    category: "SaaS / Interface",
    description: "Enterprise-grade data visualization platform with a focus on liquid-glass aesthetics and seamless performance.",
    video: "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8",
    tags: ["Next.js", "Tailwind", "D3.js"]
  },
  {
    title: "Abstract Motion",
    category: "Creative Coding",
    description: "Exploration of generative art and algorithmic motion design for digital installations.",
    video: "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8",
    tags: ["GLSL", "P5.js", "Motion"]
  }
];

export function PortfolioProjects() {
  return (
    <section id="projects" className="bg-[#05070a] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 self-start">
            <span className="text-xs font-medium text-white/80 uppercase tracking-widest font-body">Selected Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading italic text-white tracking-tighter leading-none">
            Digital <span className="text-white/30">Artifacts.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Visuals */}
              <div className="flex-1 w-full group cursor-pointer">
                <div className="liquid-glass rounded-3xl overflow-hidden aspect-video relative border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <HlsVideo 
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-700"
                    src={project.video}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-left">
                <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4 font-body">
                  {project.category}
                </div>
                <h3 className="text-3xl md:text-5xl font-heading italic text-white mb-6 leading-none">
                  {project.title}
                </h3>
                <p className="text-white/60 font-body font-light text-lg mb-8 leading-relaxed max-w-md">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-white/40 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-white font-medium group text-lg transition-colors hover:text-indigo-400">
                  View Project <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
