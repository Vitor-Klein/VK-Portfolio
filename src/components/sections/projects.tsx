import { ExternalLink } from "lucide-react";
import { GithubMark } from "@/components/ui/brand-icons";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projetos" className="px-4 py-28 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Projetos"
            title="Coisas que eu construí e continuo construindo."
            description="Uma seleção de projetos pessoais e acadêmicos — do backend ao pixel final da interface."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.06}
              className={cn(project.featured && "md:col-span-2")}
            >
              <GlassPanel spotlight className="flex h-full flex-col gap-5 p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass-strong text-xl">
                      {project.emoji}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-ink">
                        {project.name}
                      </h3>
                      <span className="font-mono text-xs text-ink-faint">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Abrir ${project.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border text-ink-dim transition-colors hover:border-accent-400/40 hover:text-accent-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver código de ${project.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border text-ink-dim transition-colors hover:border-accent-400/40 hover:text-accent-300"
                      >
                        <GithubMark className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-balance text-sm leading-relaxed text-ink-dim sm:text-base">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Chip key={tag} accent>
                      {tag}
                    </Chip>
                  ))}
                </div>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
