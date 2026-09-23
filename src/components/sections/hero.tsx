import { ArrowUpRight, FileDown, MapPin } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { GlassButton } from "@/components/ui/glass-button";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center px-4 pb-20 pt-32 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="flex flex-col gap-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-accent-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              {profile.availableForWork ? "Aberto a novos projetos" : "Full stack developer"}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl md:text-7xl">
              Olá, eu sou <span className="text-accent-400">Vitor Klein</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-xl text-balance text-lg text-ink-dim sm:text-xl">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-faint">
              <span>{profile.role}</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="flex flex-wrap items-center gap-3">
              <GlassButton href="#projetos">
                Ver projetos
                <ArrowUpRight className="h-4 w-4" />
              </GlassButton>
              <GlassButton href={profile.resumeUrl} variant="ghost" download>
                Baixar currículo
                <FileDown className="h-4 w-4" />
              </GlassButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto w-full max-w-sm">
          <GlassPanel spotlight className="p-3">
            <div className="relative overflow-hidden rounded-[1.4rem]">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="aspect-square w-full object-cover"
              />
            </div>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  );
}
