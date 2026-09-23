import { Briefcase, GraduationCap } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ScrollLine } from "@/components/ui/scroll-line";
import { Shapes } from "@/components/ui/shapes";
import { journey } from "@/data/content";

export function Journey() {
  return (
    <section id="trajetoria" className="relative isolate px-4 py-32 sm:px-6">
      <Shapes set="journey" />

      <div className="mx-auto flex max-w-4xl flex-col gap-14">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Trajetória"
            title="Formação e experiência."
            description="Um retrato de onde venho e no que estou trabalhando agora."
          />
        </Reveal>

        <ol className="relative flex flex-col gap-6 pl-14 sm:pl-16">
          <ScrollLine className="bottom-6 left-5 top-6" />

          {journey.map((item, index) => {
            const Icon = item.type === "education" ? GraduationCap : Briefcase;
            return (
              <li key={`${item.org}-${item.period}`} className="relative">
                <Reveal delay={index * 0.08}>
                  <span
                    className="absolute -left-14 top-5 flex size-10 items-center justify-center rounded-full border border-accent-400/40 bg-bg text-accent-400 shadow-[0_0_0_6px_var(--color-bg)] sm:-left-16"
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  <GlassPanel
                    spotlight
                    className="p-6 transition-transform duration-300 ease-out hover:translate-x-1 sm:p-7"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-display text-lg font-medium text-ink sm:text-xl">
                        {item.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-accent-400/10 px-3 py-1 font-mono text-xs uppercase tabular-nums tracking-wider text-accent-300 ring-1 ring-accent-400/20">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-ink-dim">
                      {item.org}
                      {item.location && (
                        <span className="text-ink-faint"> · {item.location}</span>
                      )}
                    </p>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-dim">
                      {item.description}
                    </p>
                  </GlassPanel>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
