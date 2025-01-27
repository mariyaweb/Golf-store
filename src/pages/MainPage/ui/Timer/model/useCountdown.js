import { useState, useEffect, useRef } from 'react';

export const useCountdown = (targetDate) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = new Date(targetDate).getTime() - now;

    if (diff <= 0) {
      return {
        days: '00', hours: '00', minutes: '00', seconds: '00',
      };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const animationFrameId = useRef(null);

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
      animationFrameId.current = requestAnimationFrame(updateCountdown);
    };

    animationFrameId.current = requestAnimationFrame(updateCountdown);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [targetDate]);

  return timeLeft;
};
