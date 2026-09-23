import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
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
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-400">
        {eyebrow}
      </span>
      <h2 className="text-balance font-display text-3xl font-medium text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-balance text-base text-ink-dim sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
