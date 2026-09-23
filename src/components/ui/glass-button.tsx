import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-[transform,background-color,box-shadow,border-color,color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-400 text-[#17140a] shadow-[0_18px_40px_-16px_rgba(255,201,74,0.55)] hover:bg-accent-300 hover:shadow-[0_20px_46px_-14px_rgba(255,201,74,0.7)]",
  ghost:
    "glass glass-tight text-ink hover:border-accent-400/40 hover:text-accent-300",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function GlassButton(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
