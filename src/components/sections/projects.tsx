import { ExternalLink } from "lucide-react";
import { GithubMark } from "@/components/ui/brand-icons";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Shapes } from "@/components/ui/shapes";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import { projects } from "@/data/content";

const linkClass =
  "flex size-10 items-center justify-center rounded-full border border-glass-border bg-bg/40 text-ink-dim transition-[color,border-color,background-color,transform] duration-200 hover:border-accent-400/50 hover:bg-accent-400/10 hover:text-accent-300 active:scale-95";

export function Projects() {
  return (
    <section id="projetos" className="relative isolate px-4 py-32 sm:px-6">
      <Shapes set="projects" />

      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <Reveal>
          <SectionHeading
            index="02"
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
              className={cn("relative rounded-2xl", project.featured && "md:col-span-2")}
            >
              <GlassPanel
                spotlight
                className="h-full overflow-hidden transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent-400/30"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7.5rem] font-semibold leading-none tabular-nums text-ink/4 transition-colors duration-300 group-hover:text-accent-400/10"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-full flex-col gap-5 p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-accent-400/20 to-accent-600/5 text-2xl ring-1 ring-accent-400/25">
                        {project.emoji}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-medium text-ink transition-colors duration-200 group-hover:text-accent-300 sm:text-2xl">
                          {project.name}
                        </h3>
                        <span className="font-mono text-xs tabular-nums text-ink-faint">
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
                          className={linkClass}
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
                          className={linkClass}
                        >
                          <GithubMark className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="max-w-2xl text-pretty text-sm leading-relaxed text-ink-dim sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Chip key={tag} accent>
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </div>
              </GlassPanel>
              {project.featured && (
                <BorderBeam size={180} duration={10} colorFrom="#ffe28a" colorTo="#d99a1b" borderWidth={1.5} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
