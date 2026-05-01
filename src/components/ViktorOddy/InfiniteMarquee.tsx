import React from 'react';

export function InfiniteMarquee() {
  const images = [
    "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
    "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
    "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
    "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
    "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
    "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
    "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
  ];
  
  const duplicatedImages = [...images, ...images];

  return (
    <section className="w-full overflow-hidden mt-16 md:mt-20 mb-16 bg-white relative z-10">
      <div className="flex w-[200%] animate-marquee">
        {duplicatedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-1/8 flex justify-center">
            <img 
              src={src} 
              alt="Marquee Item" 
              className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg w-auto max-w-[80vw]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
