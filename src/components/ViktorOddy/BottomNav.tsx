import React from 'react';
import { Button } from './Button';

export function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full px-8 py-2 flex items-center gap-6 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_12px_40px_rgba(0,0,0,0.12)]">
      <div className="font-mondwest text-2xl font-semibold text-[#051A24]">V</div>
      <Button variant="primary">Start a chat</Button>
    </div>
  );
}
