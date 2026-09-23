import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  className?: string;
  accent?: boolean;
};

export function Chip({ children, className, accent = false }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-wide",
        accent
          ? "border-accent-400/40 bg-accent-400/10 text-accent-300"
          : "border-glass-border bg-glass text-ink-dim",
        className
      )}
    >
      {children}
    </span>
  );
}
