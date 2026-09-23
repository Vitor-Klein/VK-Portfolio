"use client";

import type { ElementType, ReactNode } from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  spotlight?: boolean;
  tight?: boolean;
};

/**
 * Core "liquid glass" surface. With `spotlight` it becomes a Magic UI card whose
 * border and fill light up in amber around the pointer.
 */
export function GlassPanel({
  children,
  className,
  as: Tag = "div",
  spotlight = false,
  tight = false,
}: GlassPanelProps) {
  if (spotlight) {
    return (
      <MagicCard
        gradientSize={320}
        gradientColor="rgba(255, 201, 74, 0.09)"
        gradientOpacity={1}
        gradientFrom="#ffc94a"
        gradientTo="#d99a1b"
        className={cn(
          "rounded-2xl backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(244,241,234,0.1),0_24px_60px_-28px_rgba(0,0,0,0.75)]",
          className
        )}
      >
        {children}
      </MagicCard>
    );
  }

  return (
    <Tag className={cn("glass relative rounded-2xl", tight && "glass-tight", className)}>
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
