import { BadgeCheck, Braces, Globe, GraduationCap, MapPin, Smartphone, Wrench } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Shapes } from "@/components/ui/shapes";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { certifications, profile, skills } from "@/data/content";

const skillIcons = [Braces, Smartphone, Globe, Wrench];
const innerOrbit = ["Flutter", "React", "Node"];
const outerOrbit = ["Dart", "Next.js", "TS", "Vue", "IA", "Figma"];

function OrbitBadge({ label }: { label: string }) {
  return (
    <span className="glass glass-tight flex size-full items-center justify-center rounded-full font-mono text-[0.65rem] text-ink">
      {label}
    </span>
  );
}

export function About() {
  return (
    <section id="sobre" className="relative isolate px-4 py-32 sm:px-6">
      <Shapes set="about" />

      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Sobre"
            title="Curiosidade técnica, orientada a produto."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          <Reveal className="sm:col-span-2 lg:col-span-7">
            <GlassPanel spotlight className="flex h-full flex-col gap-8 p-8 sm:p-10">
              <p className="text-pretty text-lg leading-relaxed text-ink-dim sm:text-xl sm:leading-relaxed">
                {profile.bio}
              </p>
              <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 border-t border-glass-border pt-6 text-sm text-ink-faint">
                <span className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-accent-400" />
                  Ciência da Computação · UTFPR
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-400" />
                  {profile.location}
                </span>
              </div>
            </GlassPanel>
          </Reveal>

          <Reveal className="sm:col-span-2 lg:col-span-5" delay={0.08}>
            <GlassPanel className="h-full overflow-hidden">
              <div className="relative flex h-96 items-center justify-center">
                <span className="relative z-10 flex size-20 items-center justify-center rounded-full bg-bg shadow-[0_0_0_1px_rgba(255,201,74,0.35),0_0_40px_-4px_rgba(255,201,74,0.45)]">
                  <img src={profile.avatar} alt="" className="size-12 object-contain" />
                </span>
                <OrbitingCircles radius={78} duration={24} iconSize={52}>
                  {innerOrbit.map((tech) => (
                    <OrbitBadge key={tech} label={tech} />
                  ))}
                </OrbitingCircles>
                <OrbitingCircles radius={150} duration={40} iconSize={60} reverse>
                  {outerOrbit.map((tech) => (
                    <OrbitBadge key={tech} label={tech} />
                  ))}
                </OrbitingCircles>
                <span className="absolute bottom-5 left-6 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
                  Stack em órbita
                </span>
              </div>
            </GlassPanel>
          </Reveal>

          {skills.map((group, index) => {
            const Icon = skillIcons[index % skillIcons.length];
            return (
              <Reveal key={group.category} delay={0.12 + index * 0.06} className="lg:col-span-3">
                <GlassPanel
                  spotlight
                  className="h-full p-6 transition-transform duration-300 ease-out hover:-translate-y-1"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400 ring-1 ring-accent-400/25">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs tabular-nums text-ink-faint">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mb-4 font-display text-lg font-medium text-ink">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </GlassPanel>
              </Reveal>
            );
          })}

          <Reveal className="sm:col-span-2 lg:col-span-12" delay={0.2}>
            <GlassPanel className="p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
                Certificações &amp; cursos
              </h3>
              <ul className="mt-4 grid gap-x-10 md:grid-cols-2">
                {certifications.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-glass-border py-3 text-sm text-ink-dim"
                  >
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
