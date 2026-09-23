import { ArrowUpRight, Mail } from "lucide-react";
import { FigmaMark, GithubMark, LinkedinMark } from "@/components/ui/brand-icons";
import { GlassPanel } from "@/components/ui/glass-panel";
import { GlassButton } from "@/components/ui/glass-button";
import { Reveal } from "@/components/ui/reveal";
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
    <section id="contato" className="px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <GlassPanel spotlight className="overflow-hidden p-10 sm:p-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-lg">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-400">
                  Contato
                </span>
                <h2 className="mt-4 text-balance font-display text-3xl font-medium text-ink sm:text-4xl md:text-5xl">
                  Vamos construir a próxima ideia juntos.
                </h2>
                <p className="mt-4 text-balance text-base text-ink-dim sm:text-lg">
                  Aberto a oportunidades, projetos freelance e boas
                  conversas sobre produto e código. Me chama.
                </p>
                <div className="mt-8">
                  <GlassButton href={`mailto:${socials.email}`}>
                    Enviar um email
                    <ArrowUpRight className="h-4 w-4" />
                  </GlassButton>
                </div>
              </div>

              <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-sm">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="glass glass-tight group flex flex-col gap-2 rounded-xl p-4 transition-colors hover:border-accent-400/40"
                  >
                    <channel.icon className="h-4 w-4 text-accent-400" />
                    <span className="text-xs text-ink-faint">{channel.label}</span>
                    <span className="truncate text-sm text-ink group-hover:text-accent-300">
                      {channel.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  );
}
