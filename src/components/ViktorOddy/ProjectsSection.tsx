import React from 'react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';

export function ProjectsSection() {
  const projects = [
    {
      name: "evr",
      desc: "From idea to millions raised for a web3 AI product",
      img: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif"
    },
    {
      name: "Automation Machines",
      desc: "Streamlining industrial automation processes",
      img: "https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif"
    },
    {
      name: "xPortfolio",
      desc: "Modern portfolio management platform",
      img: "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif"
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-16 md:gap-20 bg-white font-neue-montreal relative z-10">
      {projects.map((p, idx) => {
        const { ref, className } = useInViewAnimation();
        return (
          <div ref={ref} key={idx} className={`${className} flex flex-col gap-6`}>
            <div className="ml-20 md:ml-28">
              <h3 className="font-mondwest text-2xl md:text-3xl font-semibold text-[#051A24]">{p.name}</h3>
              <p className="text-sm md:text-base text-[#051A24]/70 mt-1">{p.desc}</p>
            </div>
            <img src={p.img} alt={p.name} className="w-full rounded-2xl shadow-lg object-cover" />
          </div>
        );
      })}
    </section>
  );
}
