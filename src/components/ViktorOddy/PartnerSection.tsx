import React, { useRef, useState } from 'react';

const gifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif"
];

interface Thumbnail {
  id: number;
  x: number;
  y: number;
  rotation: number;
  url: string;
}

export function PartnerSection() {
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);
  const lastSpawnTime = useRef(0);
  const idCounter = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const now = performance.now();
    if (now - lastSpawnTime.current > 80) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newThumb: Thumbnail = {
        id: idCounter.current++,
        x,
        y,
        rotation: Math.random() * 20 - 10,
        url: gifs[Math.floor(Math.random() * gifs.length)]
      };
      
      setThumbnails(prev => [...prev, newThumb]);
      lastSpawnTime.current = now;

      setTimeout(() => {
        setThumbnails(prev => prev.filter(t => t.id !== newThumb.id));
      }, 1000);
    }
  };

  return (
    <section className="w-full py-12 px-6 bg-white relative z-10">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="max-w-7xl mx-auto py-48 rounded-[40px] shadow-[0_4px_40px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col items-center justify-center text-center cursor-crosshair border border-slate-100 bg-white"
      >
        {thumbnails.map(t => (
          <img 
            key={t.id}
            src={t.url}
            className="absolute w-[200px] h-[150px] object-cover rounded-xl pointer-events-none transition-all duration-1000 ease-out animate-fade-out"
            style={{
              left: t.x - 100,
              top: t.y - 75,
              transform: `rotate(${t.rotation}deg) scale(0.9)`,
              opacity: 0,
              animation: 'thumbnail-fade 1s ease-out forwards'
            }}
          />
        ))}

        <style>{`
          @keyframes thumbnail-fade {
            0% { opacity: 1; transform: rotate(var(--rot)) scale(1); }
            100% { opacity: 0; transform: rotate(var(--rot)) scale(0.8); }
          }
        `}</style>

        <h2 className="font-mondwest text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] mb-12 relative z-10">
          Partner with us
        </h2>
        
        <button className="relative z-10 bg-[#051A24] text-white rounded-full pl-2 pr-6 py-2 flex items-center gap-3 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),inset_0_2px_8px_0_rgba(255,255,255,0.5)] transition-transform hover:scale-105">
          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Viktor" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-sm font-medium">Start chat with Viktor</span>
        </button>
      </div>
    </section>
  );
}
