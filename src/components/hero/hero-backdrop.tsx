"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 120, damping: 24, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    function onMove(e: PointerEvent) {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect || rect.bottom < 0) return;
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="hero-aurora absolute left-[-15%] top-[-20%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(circle,rgba(255,201,74,0.16),transparent_60%)]" />
      <div className="hero-aurora hero-aurora--alt absolute right-[-20%] bottom-[-35%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(217,154,27,0.12),transparent_60%)]" />

      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute left-0 top-0 -ml-72 -mt-72 size-144 rounded-full bg-[radial-gradient(circle,rgba(255,201,74,0.11),transparent_65%)]"
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-bg" />
    </div>
  );
}
