import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface HlsVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export function HlsVideo({ src, ...props }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "200px" } // Load slightly before entering view
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isInView) return;

    if (Hls.isSupported() && !hlsRef.current) {
      const hls = new Hls({
        startPosition: -1,
        capLevelToPlayerSize: true,
        enableWorker: true, // Use web worker for better performance
        lowLatencyMode: false,
      });
      hlsRef.current = hls;
      
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (props.autoPlay) {
          video.play().catch(() => {});
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      if (!video.src) {
        video.src = src;
        video.addEventListener('loadedmetadata', () => {
          if (props.autoPlay) {
            video.play().catch(() => {});
          }
        }, { once: true });
      } else if (props.autoPlay) {
        video.play().catch(() => {});
      }
    }

    return () => {
      // Don't destroy immediately when leaving view, just pause it (handled below)
      // We only destroy on unmount to avoid reloading overhead if they scroll back up fast
    };
  }, [src, isInView, props.autoPlay]);

  // Clean up HLS instance on unmount
  useEffect(() => {
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, []);

  // Handle play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !props.autoPlay) return;

    if (isInView) {
      // Only play if it has a source (handled by the other effect)
      if (video.src || hlsRef.current) {
        video.play().catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [isInView, props.autoPlay]);

  return <video ref={videoRef} {...props} />;
}
