import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function StickyNavbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-6 pointer-events-none"
        >
          <div className="w-full max-w-7xl flex items-center justify-between pointer-events-auto">
            {/* Logo */}
            <div 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl flex items-center justify-center group cursor-pointer hover:border-white/40 transition-colors"
            >
              <span className="text-white font-bold italic text-sm tracking-tighter">GHM</span>
            </div>

            {/* Pill Navbar */}
            <div className="liquid-glass rounded-full p-1 md:px-1.5 md:py-1.5 flex items-center gap-1 border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/50 overflow-x-auto max-w-full hide-scrollbar">
              <div className="flex items-center px-1 md:px-2">
                <a href="#about" className="px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase">{t('nav_about')}</a>
                <a href="#projects" className="px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase">{t('nav_projects')}</a>
                <a href="#skills" className="px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase">{t('nav_skills')}</a>
              </div>
              <button 
                onClick={scrollToContact}
                className="bg-white text-black rounded-full px-3 md:px-5 py-1.5 md:py-2.5 text-[10px] md:text-xs font-bold flex items-center gap-1 md:gap-2 hover:bg-white/90 transition-all active:scale-95 uppercase whitespace-nowrap"
              >
                {t('nav_contact')} <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5 stroke-[3px]" />
              </button>
            </div>

            {/* Empty space for balance */}
            <div className="w-12 h-12 opacity-0"></div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
