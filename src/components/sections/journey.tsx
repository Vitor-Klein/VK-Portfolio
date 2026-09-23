import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { journey } from "@/data/content";

export function Journey() {
  return (
    <section id="trajetoria" className="px-4 py-28 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Trajetória"
            title="Formação e experiência."
            description="Um retrato de onde venho e no que estou trabalhando agora."
          />
        </Reveal>

        <ol className="relative flex flex-col gap-6 border-l border-glass-border pl-8 sm:pl-10">
          {journey.map((item, index) => (
            <li key={`${item.org}-${item.period}`} className="relative">
              <span
                className="absolute -left-[2.6rem] top-2 flex h-4 w-4 items-center justify-center rounded-full border border-accent-400/50 bg-bg sm:-left-[3.1rem]"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              </span>

              <Reveal delay={index * 0.08}>
                <GlassPanel spotlight className="p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-lg font-medium text-ink">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-dim">
                    {item.org}
                    {item.location && (
                      <span className="text-ink-faint"> · {item.location}</span>
                    )}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                    {item.description}
                  </p>
                </GlassPanel>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
