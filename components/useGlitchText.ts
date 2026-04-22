import { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

export function useGlitchText(target: string, trigger: boolean) {
  const [display, setDisplay] = useState(target);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!trigger) {
      setDisplay(target);
      return;
    }
    let iteration = 0;
    const total = 10;

    const animate = () => {
      setDisplay(
        target
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iteration) return target[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(''),
      );
      iteration += target.length / total;
      if (iteration < target.length) {
        frameRef.current = setTimeout(animate, 40);
      } else {
        setDisplay(target);
      }
    };

    animate();
    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [target, trigger]);

  return display;
}
