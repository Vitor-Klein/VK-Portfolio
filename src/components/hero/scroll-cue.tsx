"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import scrollCue from "./scroll-cue.json";

// lottie-web touches `document` on import, so it must never prerender.
const Lottie = dynamic(() => import("lottie-react").then((m) => m.LottieLight), {
  ssr: false,
  loading: () => <div className="h-20 w-12" />,
});

export function ScrollCue({ delay = 0 }: { delay?: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href="#sobre"
      aria-label="Rolar para a seção Sobre"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col items-center gap-1 rounded-full px-3 py-1 text-ink-faint transition-colors duration-200 hover:text-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60"
    >
      <Lottie
        src={scrollCue}
        loop={!reduce}
        autoplay={!reduce}
        className="h-20 w-12"
        aria-hidden="true"
      />
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">
        Explore
      </span>
    </motion.a>
  );
}
