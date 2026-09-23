"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export function ScrollLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} aria-hidden="true" className={cn("absolute w-px bg-glass-border", className)}>
      <motion.div
        style={{ scaleY }}
        className="absolute inset-0 origin-top bg-linear-to-b from-accent-300 via-accent-400 to-accent-600 shadow-[0_0_12px_rgba(255,201,74,0.6)]"
      />
    </div>
  );
}
