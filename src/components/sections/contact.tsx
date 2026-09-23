import { ArrowUpRight, Mail } from "lucide-react";
import { FigmaMark, GithubMark, LinkedinMark } from "@/components/ui/brand-icons";
import { GlassPanel } from "@/components/ui/glass-panel";
import { GlassButton } from "@/components/ui/glass-button";
import { Reveal } from "@/components/ui/reveal";
import { Shapes } from "@/components/ui/shapes";
import { Magnetic } from "@/components/hero/magnetic";
import { BorderBeam } from "@/components/magicui/border-beam";
import { socials } from "@/data/content";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: socials.email,
    href: `mailto:${socials.email}`,
  },
  {
    icon: LinkedinMark,
    label: "LinkedIn",
    value: "in/vitor-klein",
    href: socials.linkedin,
  },
  {
    icon: GithubMark,
    label: "GitHub",
    value: "Vitor-Klein",
    href: socials.github,
  },
  {
    icon: FigmaMark,
    label: "Figma",
    value: "@vitorKlein",
    href: socials.figma,
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative isolate px-4 py-32 sm:px-6">
      <Shapes set="contact" />

      <div className="mx-auto max-w-5xl">
        <Reveal className="relative rounded-2xl">
          <GlassPanel spotlight className="overflow-hidden p-10 sm:p-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-lg">
                <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-400">
                  <span className="tabular-nums text-ink-faint">04</span>
                  <span className="h-px w-10 bg-accent-400/50" />
                  Contato
                </span>
                <h2 className="mt-4 text-balance font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
                  Vamos construir a próxima ideia juntos.
                </h2>
                <p className="mt-4 text-pretty text-base text-ink-dim sm:text-lg">
                  Aberto a oportunidades, projetos freelance e boas
                  conversas sobre produto e código. Me chama.
                </p>
                <div className="mt-8">
                  <Magnetic>
                    <GlassButton href={`mailto:${socials.email}`} className="group/btn">
                      Enviar um email
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </GlassButton>
                  </Magnetic>
                </div>
              </div>

              <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-sm">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="glass glass-tight group relative flex flex-col gap-2 rounded-xl p-4 transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent-400/40"
                  >
                    <ArrowUpRight
                      className="absolute right-3 top-3 h-4 w-4 -translate-x-1 translate-y-1 text-accent-300 opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <channel.icon className="h-4 w-4 text-accent-400" />
                    <span className="text-xs text-ink-faint">{channel.label}</span>
                    <span className="truncate text-sm text-ink transition-colors duration-200 group-hover:text-accent-300">
                      {channel.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </GlassPanel>
          <BorderBeam size={220} duration={9} colorFrom="#ffe28a" colorTo="#d99a1b" borderWidth={1.5} />
          <BorderBeam size={220} duration={9} delay={4.5} colorFrom="#ffc94a" colorTo="#f0ad0f" borderWidth={1.5} reverse />
        </Reveal>
      </div>
    </section>
  );
}
