"use client";

import { ArrowUpRight, FileDown, MapPin } from "lucide-react";
import { MotionConfig } from "motion/react";
import { GlassButton } from "@/components/ui/glass-button";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedHeadline } from "@/components/hero/animated-headline";
import { CodeCard } from "@/components/hero/code-card";
import { HeroBackdrop } from "@/components/hero/hero-backdrop";
import { Magnetic } from "@/components/hero/magnetic";
import { RoleRotator } from "@/components/hero/role-rotator";
import { ScrollCue } from "@/components/hero/scroll-cue";
import { TechMarquee } from "@/components/hero/tech-marquee";
import { profile } from "@/data/content";

const iconNudge =
  "h-4 w-4 transition-transform duration-200 ease-out group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5";

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="top"
        className="relative isolate flex min-h-svh flex-col overflow-hidden px-4 pt-32 sm:px-6"
      >
        <HeroBackdrop />

        <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col gap-7">
            <AnimatedHeadline delay={0.15} />

            <RoleRotator delay={0.7} />

            <Reveal delay={0.85} y={16}>
              <p className="max-w-xl text-pretty text-lg text-ink-dim sm:text-xl">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.95} y={16}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-faint">
                <span>{profile.role}</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {profile.location}
                </span>
              </div>
            </Reveal>

            <Reveal delay={1.05} y={16}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Magnetic>
                  <GlassButton href="#projetos" className="group/btn">
                    Ver projetos
                    <ArrowUpRight className={iconNudge} />
                  </GlassButton>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <GlassButton
                    href={profile.resumeUrl}
                    variant="ghost"
                    download
                    className="group/btn"
                  >
                    Baixar currículo
                    <FileDown className="h-4 w-4 transition-transform duration-200 ease-out group-hover/btn:translate-y-0.5" />
                  </GlassButton>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <div className="hidden lg:block">
            <CodeCard delay={1.1} />
          </div>
        </div>

        <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col items-center gap-8 pb-10">
          <ScrollCue delay={1.8} />
          <TechMarquee delay={1.5} />
        </div>
      </section>
    </MotionConfig>
  );
}
