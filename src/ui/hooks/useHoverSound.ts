import { useCallback, useEffect, useRef } from "react";

export const useHoverSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/mixkit-fast-double-click-on-mouse-275.wav");
    audioRef.current.volume = 0.3; // Increase volume to 30%
    audioRef.current.preload = "auto"; // Preload the audio for better performance

    return () => {
      if (audioRef.current) {
        audioRef.current = null;
      }
    };
  }, []);

  const playSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset audio to start
      audioRef.current.play().catch(() => {
        // Ignore errors - browsers might block autoplay
      });
    }
  }, []);

  return { playSound };
};
