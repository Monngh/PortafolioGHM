import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function PortfolioFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold font-heading italic text-xl tracking-tighter">GHM</span>
          </div>
          <p className="text-white/40 text-xs font-body">
            &copy; {new Date().getFullYear()} Gael Hernández Monroy. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-body">Twitter</a>
          <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-body">LinkedIn</a>
          <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-body">GitHub</a>
        </div>

        {/* Back to top */}
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all bg-white/[0.02]"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
