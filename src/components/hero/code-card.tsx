"use client";

import { useEffect, useMemo, useState, type PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

type Kind = "kw" | "id" | "key" | "str" | "pun" | "com";
type Token = [Kind, string];

const tone: Record<Kind, string> = {
  kw: "text-accent-500",
  id: "text-ink",
  key: "text-ink-dim",
  str: "text-accent-300",
  pun: "text-ink-faint",
  com: "text-ink-faint italic",
};

const code: Token[][] = [
  [["kw", "const "], ["id", "vitor"], ["pun", " = {"]],
  [["key", "  role"], ["pun", ": "], ["str", '"Mobile & Web Dev"'], ["pun", ","]],
  [["key", "  stack"], ["pun", ": ["], ["str", '"Flutter"'], ["pun", ", "], ["str", '"React"'], ["pun", ", "], ["str", '"Node"'], ["pun", "],"]],
  [["key", "  estuda"], ["pun", ": "], ["str", '"Computação @ UTFPR"'], ["pun", ","]],
  [["key", "  foco"], ["pun", ": "], ["str", '"IA em produtos reais"'], ["pun", ","]],
  [["key", "  base"], ["pun", ": "], ["str", '"Paraná, BR"'], ["pun", ","]],
  [["pun", "};"]],
  [],
  [["com", "// role para ver o que já construí ↓"]],
];

const total = code.flat().reduce((n, [, text]) => n + text.length, 0);

function sliceCode(typed: number) {
  let offset = 0;
  let caretRow = -1;
  const lines = code.map((line, row) => {
    const parts = line.map(([kind, text]): Token => {
      const visible = text.slice(0, Math.max(0, typed - offset));
      offset += text.length;
      return [kind, visible];
    });
    if (caretRow === -1 && typed <= offset) caretRow = row;
    return parts;
  });
  return { lines, caretRow: caretRow === -1 ? code.length - 1 : caretRow };
}

export function CodeCard({ delay = 0 }: { delay?: number }) {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (reduce) {
      setTyped(total);
      return;
    }
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setTyped((n) => {
          if (n >= total) {
            clearInterval(interval);
            return n;
          }
          return n + 1;
        });
      }, 24);
    }, delay * 1000);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [delay, reduce]);

  const { lines, caretRow } = useMemo(() => sliceCode(typed), [typed]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), { stiffness: 160, damping: 18 });

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const rx = (e.clientX - rect.left) / rect.width;
    const ry = (e.clientY - rect.top) / rect.height;
    px.set(rx - 0.5);
    py.set(ry - 0.5);
    e.currentTarget.style.setProperty("--spot-x", `${rx * 100}%`);
    e.currentTarget.style.setProperty("--spot-y", `${ry * 100}%`);
  }

  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: Math.max(0, delay - 0.5), ease: [0.22, 1, 0.36, 1] }}
      className="relative perspective-[1200px]"
    >
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative"
      >
        <div className="glass overflow-hidden rounded-2xl">
          <div className="glass-spot" />

          <div className="relative flex items-center gap-2 border-b border-glass-border px-5 py-3.5">
            <span className="size-3 rounded-full bg-[#ff5f57]/80" />
            <span className="size-3 rounded-full bg-[#febc2e]/80" />
            <span className="size-3 rounded-full bg-[#28c840]/80" />
            <span className="ml-3 font-mono text-xs text-ink-faint">vitor.ts</span>
          </div>

          <pre
            className="relative overflow-hidden px-5 py-5 font-mono text-[0.8rem] leading-7 sm:text-sm"
            aria-label="Resumo do perfil em código"
          >
            {lines.map((line, row) => (
              <div key={row} className="flex whitespace-pre">
                <span className="mr-5 w-4 select-none text-right tabular-nums text-ink-faint/50">
                  {row + 1}
                </span>
                <span>
                  {line.map(([kind, text], i) => (
                    <span key={i} className={tone[kind]}>
                      {text}
                    </span>
                  ))}
                  {row === caretRow && (
                    <span className="hero-caret ml-px inline-block h-[1.1em] w-0.5 translate-y-[0.2em] bg-accent-400" />
                  )}
                  {"​"}
                </span>
              </div>
            ))}
          </pre>
        </div>

        <span
          className="absolute -left-6 top-10 hidden sm:block"
          style={{ transform: "translateZ(60px)" }}
          aria-hidden="true"
        >
          <span className="hero-float glass glass-tight block rounded-full px-3.5 py-1.5 font-mono text-xs text-ink">
            <span className="mr-1.5 inline-block size-1.5 rounded-full bg-[#54c5f8] align-middle" />
            Flutter
          </span>
        </span>
        <span
          className="absolute -right-5 bottom-12 hidden sm:block"
          style={{ transform: "translateZ(80px)" }}
          aria-hidden="true"
        >
          <span className="hero-float hero-float--alt glass glass-tight block rounded-full px-3.5 py-1.5 font-mono text-xs text-ink">
            <span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent-400 align-middle" />
            IA aplicada
          </span>
        </span>
      </motion.div>
    </motion.div>
  );
}
