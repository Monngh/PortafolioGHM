import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function TorchCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics for the firefly core
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (clientX: number, clientY: number) => {
      cursorX.set(clientX);
      cursorY.set(clientY);
      setMousePos({ x: clientX, y: clientY });
      setIsVisible(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);

      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const isInteractable = 
        ['a', 'button', 'input', 'textarea'].includes(tagName) || 
        ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'].includes(tagName);
        
      setIsHovering(isInteractable);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [cursorX, cursorY]);

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* 1. Global Illumination Overlay (The Torch Light Cast) */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9997]"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.15), transparent 100%)`,
          mixBlendMode: 'screen',
        }}
      />
      
      {/* 2. Color Dodge Light specifically for Text/UI enhancement */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(129, 140, 248, 0.4), transparent 100%)`,
          mixBlendMode: 'color-dodge',
        }}
      />

      {/* 3. The Firefly Core (Follows with spring physics) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Outer glow */}
        <div className="absolute w-12 h-12 rounded-full bg-indigo-500 blur-[12px] opacity-60 animate-pulse" />
        
        {/* Inner bright core */}
        <div className="absolute w-3 h-3 rounded-full bg-blue-200 blur-[2px]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_2px_#fff]" />
      </motion.div>
    </div>
  );
}
