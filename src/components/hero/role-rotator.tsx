"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const roles = [
  "apps mobile em Flutter",
  "interfaces em React & Next.js",
  "APIs em Node.js",
  "produtos com IA aplicada",
];

export function RoleRotator({ delay = 0 }: { delay?: number }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    }, delay * 1000);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [delay, reduce]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-wrap items-baseline gap-x-2.5 font-display text-2xl text-ink-dim sm:text-3xl"
    >
      <span className="sr-only">Eu crio {roles.join(", ")}.</span>
      <span aria-hidden="true">Eu crio</span>
      <span className="relative inline-grid" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={roles[index]}
            initial={{ opacity: 0, y: "0.5em", filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: "-0.4em", filter: "blur(6px)", transition: { duration: 0.18 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="whitespace-nowrap text-ink"
          >
            {roles[index]}
            <span className="text-accent-400">.</span>
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.p>
  );
}
