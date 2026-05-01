import React from 'react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';
import { Button } from './Button';

export function PricingSection() {
  const { ref: ref1, className: class1 } = useInViewAnimation();
  const { ref: ref2, className: class2 } = useInViewAnimation();

  return (
    <section className="py-12 px-6 w-full bg-white font-neue-montreal relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl mx-auto md:justify-end">
        {/* Card 1 */}
        <div ref={ref1} className={`${class1} bg-[#051A24] shadow-inner rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 flex flex-col`} style={{ animationDelay: '0.1s' }}>
          <h3 className="text-[22px] font-medium text-[#F6FCFF] mb-4">Monthly Partnership</h3>
          <p className="text-[#E0EBF0] mb-8 leading-relaxed">
            A dedicated creative design team.<br/>You work directly with Viktor.
          </p>
          <div className="mt-auto">
            <div className="text-2xl text-[#F6FCFF] mb-1">$5,000</div>
            <div className="text-[#E0EBF0] text-sm mb-6">Monthly</div>
            <div className="flex flex-col gap-3">
              <a href="https://halaskastudio.com/./book" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="w-full">Start a chat</Button>
              </a>
              <a href="https://halaskastudio.com/./book" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="w-full">How it works</Button>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div ref={ref2} className={`${class2} bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 flex flex-col`} style={{ animationDelay: '0.2s' }}>
          <h3 className="text-[22px] font-medium text-[#0D212C] mb-4">Custom Project</h3>
          <p className="text-[#051A24] mb-8 leading-relaxed">
            Fixed scope, fixed timeline.<br/>Same team, same standards.
          </p>
          <div className="mt-auto">
            <div className="text-2xl text-[#0D212C] mb-1">$5,000</div>
            <div className="text-[#051A24] text-sm mb-6">Minimum</div>
            <div className="flex flex-col gap-3">
              <a href="https://halaskastudio.com/./book" target="_blank" rel="noopener noreferrer">
                <Button variant="tertiary" className="w-full">Start a chat</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
