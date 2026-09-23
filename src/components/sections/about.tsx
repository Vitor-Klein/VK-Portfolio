import { GlassPanel } from "@/components/ui/glass-panel";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { certifications, profile, skills } from "@/data/content";

export function About() {
  return (
    <section id="sobre" className="px-4 py-28 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Sobre"
            title="Curiosidade técnica, orientada a produto."
            description={profile.bio}
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.06}>
              <GlassPanel spotlight className="h-full p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </GlassPanel>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <GlassPanel className="p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
              Certificações &amp; cursos
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  );
}
