import React, { useRef, useEffect } from 'react';

interface FadingVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export function FadingVideo({ src, className, style, ...props }: FadingVideoProps) {
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

    const handleLoadedData = () => {
      video.play().catch(e => console.error("Video play failed:", e));
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
          videoRef.current.play().catch(e => console.error(e));
          fadingOutRef.current = false;
          fadeTo(1);
        }
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (fadeRafId.current !== null) cancelAnimationFrame(fadeRafId.current);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ ...style, opacity: 0 }}
      autoPlay
      muted
      playsInline
      preload="auto"
      {...props}
    />
  );
}
