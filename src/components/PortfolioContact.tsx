import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { HlsVideo } from './HlsVideo';
import { useLanguage } from '../context/LanguageContext';

const videos = [
  "https://stream.mux.com/Trq9FFImmVOh1xPTwtOcItrmuBNLNpX01lhMSpl7H00Go.m3u8",
  "https://stream.mux.com/VLpRzXQlM2BykAnpDGJDLIV8o7rMA01T1bPYIFzlDezk.m3u8",
  "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8",
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
];

interface Thumbnail {
  id: number;
  x: number;
  y: number;
  rotation: number;
  url: string;
}

export function PortfolioContact() {
  const { t } = useLanguage();
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);
  const lastSpawnTime = useRef(0);
  const idCounter = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (clientX: number, clientY: number) => {
    const now = performance.now();
    if (now - lastSpawnTime.current > 300) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const newThumb: Thumbnail = {
        id: idCounter.current++,
        x,
        y,
        rotation: Math.random() * 30 - 15,
        url: videos[Math.floor(Math.random() * videos.length)]
      };
      
      setThumbnails(prev => [...prev, newThumb]);
      lastSpawnTime.current = now;

      setTimeout(() => {
        setThumbnails(prev => prev.filter(t => t.id !== newThumb.id));
      }, 1500);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => handlePointerMove(e.clientX, e.clientY);
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="bg-[#05070a] py-32 px-6 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-24">
          {/* Text/Info Side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8">
                <span className="text-xs font-medium text-white/80 uppercase tracking-widest font-body">{t('contact_tag')}</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-heading italic text-white tracking-tighter leading-[1.1] mb-6">
                {t('contact_title_1')} <span className="text-white/30">{t('contact_title_2')}</span>
              </h2>
              
              <p className="text-white/60 font-body font-light max-w-lg mx-auto lg:mx-0 text-lg mb-12">
                {t('contact_desc')}
              </p>

              <div className="flex flex-col gap-6 items-center lg:items-start mb-12">
                <a href="mailto:gaelhernandezmonroy@gmail.com" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="text-left font-body">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Email</div>
                    <div className="text-sm font-medium">gaelhernandezmonroy@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-white/70">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="text-left font-body">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Location</div>
                    <div className="text-sm font-medium">Remote / Global</div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a href="https://github.com/Monngh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all bg-white/[0.02]">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/gaelhernándezmonroy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all bg-white/[0.02]">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/gae_monroy?igsh=MnphdnRrNWEzbzNy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all bg-white/[0.02]">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Integrated Gallery in the place of the old form area */}
          <div className="flex-1 w-full flex flex-col items-center">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onTouchStart={handleTouchMove}
              className="w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl relative overflow-hidden flex flex-col items-center justify-center text-center cursor-crosshair border border-white/10 bg-white/[0.02] touch-none shadow-2xl"
            >
              {thumbnails.map(t => (
                <div
                  key={t.id}
                  className="absolute w-[140px] h-[100px] md:w-[200px] md:h-[140px] rounded-xl pointer-events-none transition-all duration-[1500ms] ease-out overflow-hidden shadow-2xl border border-white/10"
                  style={{
                    left: t.x - (window.innerWidth < 768 ? 70 : 100),
                    top: t.y - (window.innerWidth < 768 ? 50 : 70),
                    '--rot': t.rotation,
                    opacity: 0,
                    animation: 'gallery-fade 1.5s ease-out forwards',
                    zIndex: t.id
                  } as React.CSSProperties}
                >
                  <HlsVideo 
                    src={t.url}
                    className="w-full h-full object-cover"
                    autoPlay muted loop playsInline
                  />
                </div>
              ))}

              <style>{`
                @keyframes gallery-fade {
                  0% { opacity: 0; transform: rotate(calc(var(--rot) * 1deg)) scale(0.8); }
                  10% { opacity: 1; transform: rotate(calc(var(--rot) * 1deg)) scale(1.05); }
                  100% { opacity: 0; transform: rotate(calc(var(--rot) * 1deg)) scale(0.9); }
                }
              `}</style>

              <h2 className="font-heading italic text-3xl md:text-5xl text-white tracking-tighter mb-4 relative z-[9999] pointer-events-none drop-shadow-2xl mix-blend-difference">
                {t('gallery_title')}
              </h2>
              <div className="liquid-glass px-4 py-2 rounded-full relative z-[9999] pointer-events-none">
                <span className="text-[10px] md:text-xs font-medium text-white/80 uppercase tracking-widest">{t('gallery_instruction')}</span>
              </div>
            </div>
            <p className="text-white/40 font-body text-sm mt-6 italic">
              {t('gallery_desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
