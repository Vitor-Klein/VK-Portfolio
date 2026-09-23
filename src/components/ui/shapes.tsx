"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

type Orbit = {
  /** Position + size; keep most of the circle off-canvas so it only grazes a corner. */
  className: string;
  rings: number;
  reverse?: boolean;
  duration: number;
};

type Contour = {
  orbits: Orbit[];
  wave?: "top" | "bottom";
};

// Selected by name: server components can't read plain values exported from a "use client" file.
const sets = {
  about: {
    orbits: [{ className: "-right-[24rem] -top-[20rem] size-[46rem]", rings: 7, duration: 120 }],
    wave: "bottom",
  },
  projects: {
    orbits: [
      { className: "-left-[26rem] top-[20%] size-[44rem]", rings: 6, duration: 140, reverse: true },
      { className: "-right-[14rem] -bottom-[16rem] size-[28rem]", rings: 4, duration: 90 },
    ],
  },
  journey: {
    orbits: [{ className: "-right-[26rem] top-[30%] size-[48rem]", rings: 8, duration: 160 }],
    wave: "top",
  },
  contact: {
    orbits: [
      { className: "-left-[18rem] -top-[14rem] size-[34rem]", rings: 5, duration: 110, reverse: true },
      { className: "-right-[20rem] -bottom-[22rem] size-[40rem]", rings: 6, duration: 130 },
    ],
  },
  footer: {
    orbits: [{ className: "-right-[20rem] -top-[24rem] size-[40rem]", rings: 6, duration: 150, reverse: true }],
  },
} satisfies Record<string, Contour>;

const ringStroke = "rgba(244,241,234,0.07)";

function OrbitRings({ orbit }: { orbit: Orbit }) {
  const radii = Array.from({ length: orbit.rings }, (_, i) => 98 - i * (60 / orbit.rings));
  const cometA = radii[1];
  const cometB = radii[Math.min(orbit.rings - 2, 4)];

  return (
    <div
      className={cn("contour-spin absolute", orbit.className)}
      style={{
        animationDuration: `${orbit.duration}s`,
        animationDirection: orbit.reverse ? "reverse" : "normal",
      }}
    >
      <svg viewBox="0 0 200 200" className="size-full overflow-visible" fill="none">
        {radii.map((r, i) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            stroke={i === 2 ? "rgba(255,201,74,0.22)" : ringStroke}
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            pathLength={100}
            strokeDasharray={i === 2 ? "0.35 1.4" : undefined}
          />
        ))}
        <circle
          className="contour-comet"
          cx="100"
          cy="100"
          r={cometA}
          stroke="url(#contour-glow)"
          strokeWidth={1.75}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          pathLength={100}
          strokeDasharray="16 84"
          style={{ animationDuration: `${orbit.duration / 6}s` }}
        />
        <circle
          className="contour-comet"
          cx="100"
          cy="100"
          r={cometB}
          stroke="url(#contour-glow)"
          strokeWidth={1.25}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          pathLength={100}
          strokeDasharray="9 91"
          style={{ animationDuration: `${orbit.duration / 4}s`, animationDirection: "reverse" }}
        />
        <defs>
          <linearGradient id="contour-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffe28a" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ffc94a" stopOpacity="0.9" />
            <stop offset="1" stopColor="#d99a1b" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

const waveD = "M0 60 C 240 12, 480 108, 720 60 S 1200 12, 1440 60";

function Wave({ edge }: { edge: "top" | "bottom" }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      fill="none"
      className={cn("absolute inset-x-0 h-28 w-full", edge === "top" ? "top-0" : "bottom-0")}
    >
      {[0, 16, 32].map((dy) => (
        <path
          key={dy}
          d={waveD}
          transform={`translate(0 ${dy - 16})`}
          stroke={ringStroke}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <path
        className="contour-comet"
        d={waveD}
        stroke="rgba(255,201,74,0.7)"
        strokeWidth={1.5}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength={100}
        strokeDasharray="10 90"
        style={{ animationDuration: "9s" }}
      />
    </svg>
  );
}

export function Shapes({ set, className }: { set: keyof typeof sets; className?: string }) {
  const contour: Contour = sets[set];
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        {contour.orbits.map((orbit, i) => (
          <OrbitRings key={i} orbit={orbit} />
        ))}
      </motion.div>
      {contour.wave && <Wave edge={contour.wave} />}
    </div>
  );
}
