"use client";

import { useRef } from "react";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  spotlight?: boolean;
  tight?: boolean;
};

/**
 * Core "liquid glass" surface: translucent layered background, blurred
 * backdrop, specular top sheen and (optionally) a soft glow that tracks the
 * pointer — the web equivalent of an interactive glassEffect().
 */
export function GlassPanel({
  children,
  className,
  as: Tag = "div",
  spotlight = false,
  tight = false,
}: GlassPanelProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!spotlight || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty("--spot-x", `${x}%`);
    ref.current.style.setProperty("--spot-y", `${y}%`);
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "glass group relative rounded-2xl",
        tight && "glass-tight",
        className
      )}
    >
      {spotlight && <span className="glass-spot" aria-hidden="true" />}
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
