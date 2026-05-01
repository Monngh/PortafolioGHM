import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Layers, Zap, Video, MousePointer2, Smartphone } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend Engineering",
    desc: "Crafting highly performant web applications using React, Next.js, and TypeScript.",
    category: "Core"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multimedia Design",
    desc: "Expertise in video optimization, HLS streaming, and interactive 2D/3D assets.",
    category: "Core"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Creative Animations",
    desc: "Mastering complex UI motion with Framer Motion, GSAP, and CSS transitions.",
    category: "Specialized"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Aesthetic UI/UX",
    desc: "Designing world-class interfaces with a focus on dark mode, glassmorphism, and bento grids.",
    category: "Design"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Ecosystems",
    desc: "Seamless integration with Vercel, Mux, and headless CMS platforms.",
    category: "Cloud"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive First",
    desc: "Ensuring pixel-perfect experiences across all device sizes and orientations.",
    category: "Development"
  }
];

export function PortfolioSkills() {
  return (
    <section id="skills" className="bg-[#05070a] py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-500/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-white/80 uppercase tracking-widest font-body">Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading italic text-white tracking-tighter leading-none mb-6">
            Technical <span className="text-white/30">Arsenal.</span>
          </h2>
          <p className="text-white/50 font-body font-light max-w-xl text-lg">
            A comprehensive set of skills designed to transform complex challenges into elegant digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="liquid-glass group rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.03]"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                {skill.icon}
              </div>
              <div className="text-indigo-400/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-2 font-body">
                {skill.category}
              </div>
              <h3 className="text-2xl font-heading italic text-white mb-4 group-hover:translate-x-1 transition-transform duration-500">
                {skill.title}
              </h3>
              <p className="text-white/40 font-body font-light text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
