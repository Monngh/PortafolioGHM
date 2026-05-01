import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe } from 'lucide-react';
import { BlurText } from './BlurText';
import { HlsVideo } from './HlsVideo';
import { useLanguage } from '../context/LanguageContext';

export function PortfolioHero() {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#05070a] text-white w-full overflow-hidden relative font-body min-h-screen">
      {/* NAVBAR */}
      <nav className="absolute top-4 left-0 right-0 z-50 px-8 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-white font-bold font-heading italic text-2xl tracking-tighter">GHM</span>
          <button 
            onClick={toggleLanguage}
            className="liquid-glass rounded-full px-3 py-1 flex items-center gap-2 text-[10px] font-bold text-white/70 hover:text-white transition-colors"
          >
            <Globe className="w-3 h-3" />
            {language.toUpperCase()}
          </button>
        </div>
        
        <div className="flex liquid-glass rounded-full p-1 md:px-1.5 md:py-1 items-center border-white/10 overflow-x-auto max-w-full hide-scrollbar">
          <div className="flex items-center">
            <a href="#about" className="px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-sm font-medium text-white/70 font-body hover:text-white transition-colors">{t('nav_about')}</a>
            <a href="#projects" className="px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-sm font-medium text-white/70 font-body hover:text-white transition-colors">{t('nav_projects')}</a>
            <a href="#skills" className="px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-sm font-medium text-white/70 font-body hover:text-white transition-colors">{t('nav_skills')}</a>
          </div>
          <button 
            onClick={scrollToContact}
            className="bg-white/90 text-black rounded-full px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-sm font-medium flex items-center gap-1 ml-1 md:ml-2 hover:bg-white transition-colors whitespace-nowrap"
          >
            {t('nav_contact')} <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
        <HlsVideo 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://stream.mux.com/Trq9FFImmVOh1xPTwtOcItrmuBNLNpX01lhMSpl7H00Go.m3u8"
        />
        
        <div className="absolute inset-0 bg-indigo-950/20 z-0"></div>
        <div className="absolute top-0 w-full h-[250px] bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/40 to-transparent z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 w-full h-[450px] bg-gradient-to-t from-[#05070a] via-[#05070a]/20 to-transparent z-0 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center h-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 mb-8"
          >
            <span className="bg-white/10 text-white rounded-full px-3 py-1 text-xs font-semibold tracking-widest">{t('hero_tag')}</span>
            <span className="text-xs font-medium text-white/80 font-body pr-2">Gael Hernández Monroy</span>
          </motion.div>

          <BlurText 
            text={t('hero_title')}
            className="text-5xl md:text-7xl lg:text-[7rem] font-heading italic text-white leading-[0.9] max-w-4xl justify-center tracking-tight mb-2"
            delay={0.1}
          />
          
          <BlurText 
            text={t('hero_subtitle')}
            className="text-3xl md:text-5xl lg:text-[4.5rem] font-heading italic text-white/70 leading-[0.9] max-w-4xl justify-center tracking-tight"
            delay={0.3}
          />

          <motion.p 
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-8 text-sm md:text-base text-white/70 font-body font-light leading-relaxed max-w-xl"
          >
            {t('hero_desc')}
          </motion.p>

          <motion.div 
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex items-center gap-6 mt-12"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors"
            >
              {t('hero_explore')} <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              {t('hero_resume')}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
