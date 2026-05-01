import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

export function Footer() {
  return (
    <footer className="w-full max-w-[1200px] mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-start md:items-center bg-white font-neue-montreal relative z-10 gap-8">
      <Button variant="primary">Start a chat</Button>
      
      <div className="flex items-start gap-8 md:gap-16">
        <ArrowUpRight className="w-6 h-6 text-[#051A24]" />
        <div className="flex flex-col gap-4">
          <a href="#" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">Services</a>
          <a href="#" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">Work</a>
          <a href="#" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">About</a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" target="_blank" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">x.com</a>
          <a href="#" target="_blank" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
