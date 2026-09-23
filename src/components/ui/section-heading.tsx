import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-400">
        {index && <span className="tabular-nums text-ink-faint">{index}</span>}
        {index && <span className="h-px w-10 bg-accent-400/50" />}
        {eyebrow}
      </span>
      <h2 className="text-balance font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-pretty text-base text-ink-dim sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
