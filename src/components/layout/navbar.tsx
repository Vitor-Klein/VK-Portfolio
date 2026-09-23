"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/content";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "glass glass-tight flex w-full max-w-3xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-shadow duration-500 sm:px-6",
          scrolled && "shadow-[0_20px_50px_-24px_rgba(0,0,0,0.85)]"
        )}
      >
        <a
          href="#top"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-400 font-display text-sm font-bold text-[#17140a]"
        >
          {profile.initials}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-ink-dim transition-colors hover:bg-glass-strong hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden items-center gap-1.5 rounded-full bg-accent-400 px-4 py-2 text-sm font-medium text-[#17140a] transition-colors hover:bg-accent-300 md:inline-flex"
        >
          Vamos falar
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass absolute inset-x-4 top-[4.25rem] z-40 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-ink-dim transition-colors hover:bg-glass-strong hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
