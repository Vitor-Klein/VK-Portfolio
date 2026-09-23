"use client";

import { motion } from "motion/react";
import { skills } from "@/data/content";

const items = skills.flatMap((group) => group.items);

function Row() {
  return (
    <ul className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 whitespace-nowrap">
          <span className="font-display text-lg text-ink-faint transition-colors duration-200 hover:text-ink">
            {item}
          </span>
          <span className="size-1 rounded-full bg-accent-400/60" />
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      className="group relative flex overflow-hidden mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
    >
      <span className="sr-only">Tecnologias: {items.join(", ")}</span>
      <div className="hero-marquee flex group-hover:[animation-play-state:paused]" aria-hidden="true">
        <Row />
        <Row />
      </div>
    </motion.div>
  );
}
