import React, { useEffect, useRef, useState } from 'react';

export default function PercentCounter({ from = 1, to = 100, duration = 10000, suffix = '%' }) {
  const [value, setValue] = useState(from);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const start = performance.now();
    startRef.current = start;

    function step(now) {
      const elapsed = now - startRef.current;
      const t = Math.min(1, elapsed / duration);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // simple easeInOut
      const current = Math.round(from + (to - from) * eased);
      setValue(current);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [from, to, duration]);

  return <span>{value}{suffix}</span>;
}
