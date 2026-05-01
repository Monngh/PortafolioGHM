import React, { useState, useEffect } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  initialDelay?: number;
  charDelayMs?: number;
  transitionDurationMs?: number;
}

export function AnimatedHeading({
  text,
  className = '',
  initialDelay = 200,
  charDelayMs = 30,
  transitionDurationMs = 500,
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');
  let globalCharIndex = 0;

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => {
            const delay = started ? globalCharIndex * charDelayMs : 0;
            globalCharIndex++;

            return (
              <span
                key={charIndex}
                className="inline-block"
                style={{
                  opacity: started ? 1 : 0,
                  transform: started ? 'translateX(0)' : 'translateX(-18px)',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: `${transitionDurationMs}ms`,
                  transitionTimingFunction: 'ease-out',
                  transitionDelay: started ? `${delay}ms` : '0ms',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
