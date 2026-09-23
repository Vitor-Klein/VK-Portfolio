import { Mail, ArrowUp } from "lucide-react";
import { GithubMark, LinkedinMark } from "@/components/ui/brand-icons";
import { profile, socials } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <a
          href="#top"
          className="glass glass-tight flex h-11 w-11 items-center justify-center rounded-full text-ink-dim transition-colors hover:text-accent-300"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-4 w-4" />
        </a>

        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="glass glass-tight flex h-10 w-10 items-center justify-center rounded-full text-ink-dim transition-colors hover:text-accent-300"
            aria-label="GitHub"
          >
            <GithubMark className="h-4 w-4" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass glass-tight flex h-10 w-10 items-center justify-center rounded-full text-ink-dim transition-colors hover:text-accent-300"
            aria-label="LinkedIn"
          >
            <LinkedinMark className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="glass glass-tight flex h-10 w-10 items-center justify-center rounded-full text-ink-dim transition-colors hover:text-accent-300"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="font-mono text-xs text-ink-faint">
          © {year} {profile.name} — construído com Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
