import React, { useRef, useEffect } from 'react';
import { Globe, ArrowRight } from 'lucide-react';

export function AsmeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeRafId = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);

  const fadeTo = (targetOpacity: number, durationMs = 500) => {
    const video = videoRef.current;
    if (!video) return;

    if (fadeRafId.current !== null) {
      cancelAnimationFrame(fadeRafId.current);
    }

    const startOpacity = parseFloat(video.style.opacity || '0');
    const startTime = performance.now();

    const animateFade = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      if (videoRef.current) {
         videoRef.current.style.opacity = currentOpacity.toString();
      }

      if (progress < 1) {
        fadeRafId.current = requestAnimationFrame(animateFade);
      }
    };

    fadeRafId.current = requestAnimationFrame(animateFade);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';

    const handleCanPlay = () => {
      video.play().catch(() => {});
      fadeTo(1);
    };

    const handleTimeUpdate = () => {
      if (fadingOutRef.current) return;
      const timeRemaining = video.duration - video.currentTime;
      if (timeRemaining <= 0.55 && timeRemaining > 0) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
          fadingOutRef.current = false;
          fadeTo(1);
        }
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (fadeRafId.current !== null) cancelAnimationFrame(fadeRafId.current);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        muted autoPlay playsInline preload="auto"
        style={{ opacity: 0 }}
      />
      
      <nav className="relative z-20 px-6 py-6 w-full max-w-5xl mx-auto flex justify-between items-center liquid-glass rounded-full mt-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-lg">Asme</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-white/80 hover:text-white text-sm font-medium">Features</a>
            <a href="#" className="text-white/80 hover:text-white text-sm font-medium">Pricing</a>
            <a href="#" className="text-white/80 hover:text-white text-sm font-medium">About</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-white text-sm font-medium">Sign Up</button>
          <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium">Login</button>
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[10%]">
        <h1 className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-heading mb-8">
          Know it <em className="italic">all</em>.
        </h1>
        
        <div className="max-w-xl w-full liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 mb-6">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40"
          />
          <button className="bg-white rounded-full p-3 text-black">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-white text-sm leading-relaxed px-4 max-w-md mb-8">
          Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
        </p>

        <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
          Manifesto
        </button>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Globe className="w-5 h-5" />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </button>
      </div>
    </section>
  );
}
