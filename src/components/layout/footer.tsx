"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { Shapes } from "@/components/ui/shapes";
import { profile, socials } from "@/data/content";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

const channels = [
  { href: socials.github, label: "GitHub" },
  { href: socials.linkedin, label: "LinkedIn" },
  { href: socials.figma, label: "Figma" },
  { href: `mailto:${socials.email}`, label: "Email" },
];

const clockFormat = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  hour: "2-digit",
  minute: "2-digit",
});

const wordmark: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const letter: Variants = {
  hidden: { y: "100%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(clockFormat.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums text-ink">{time ?? "--:--"}</span>;
}

const linkClass =
  "group/link inline-flex items-center gap-1.5 py-1 text-ink-dim transition-colors duration-200 hover:text-accent-300";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-glass-border px-4 pt-20 sm:px-6">
      <Shapes set="footer" />

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="flex max-w-sm flex-col gap-5">
          <p className="text-balance font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            Apps e produtos web feitos com cuidado, do backend ao pixel.
          </p>
          <p className="flex items-center gap-2.5 text-sm text-ink-faint">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-50 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-400" />
            </span>
            Missal, PR · <LocalTime /> BRT
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
            Navegação
          </h3>
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  <span className="h-px w-0 bg-accent-400 transition-[width] duration-200 group-hover/link:w-3" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
            Redes
          </h3>
          <ul className="flex flex-col gap-1">
            {channels.map((item) => {
              const external = item.href.startsWith("http");
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className={linkClass}
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-[transform,opacity] duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-glass-border pt-6 font-mono text-xs text-ink-faint sm:flex-row sm:justify-between">
        <span>
          © {year} {profile.name}
        </span>
        <span>Next.js · Tailwind · Motion · Lottie</span>
      </div>

      <motion.p
        aria-hidden="true"
        variants={wordmark}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto mt-6 flex max-w-6xl select-none justify-center overflow-hidden font-display text-[17vw] font-semibold leading-[0.82] tracking-tighter xl:text-[13rem]"
      >
        {Array.from(profile.name).map((char, i) => (
          <motion.span
            key={i}
            variants={letter}
            className="inline-block bg-linear-to-b from-ink/25 via-ink/10 to-transparent bg-clip-text pb-[0.08em] text-transparent"
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </motion.p>
    </footer>
  );
}
