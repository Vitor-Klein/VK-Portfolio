"use client";

import { motion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { delayChildren: delay, staggerChildren: 0.08 },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.45em", filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

const greeting = ["Olá,", "eu", "sou"];
const name = ["Vitor", "Klein."];

export function AnimatedHeadline({ delay = 0 }: { delay?: number }) {
  const underlineDelay = delay + (greeting.length + name.length) * 0.08 + 0.45;

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
      className="text-balance font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.25rem]"
    >
      {greeting.map((w) => (
        <span key={w}>
          <motion.span variants={word} className="inline-block will-change-transform">
            {w}
          </motion.span>{" "}
        </span>
      ))}
      <span className="relative block w-fit pb-2">
        {name.map((w, i) => (
          <span key={w}>
            <motion.span
              variants={word}
              className="hero-name-shimmer inline-block bg-linear-to-r from-accent-300 via-accent-400 to-accent-600 bg-clip-text text-transparent"
            >
              {w}
            </motion.span>
            {i < name.length - 1 && " "}
          </span>
        ))}
        <svg
          viewBox="0 0 300 14"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-3 w-[96%] overflow-visible text-accent-400/80"
        >
          <motion.path
            d="M3 10 C 70 3, 160 2, 297 7"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: underlineDelay, duration: 0.9, ease: EASE }}
          />
        </svg>
      </span>
    </motion.h1>
  );
}
