/**
 * Fixed backdrop behind the whole page: a flat dark base, a faint structural
 * grid, and a grain veil so it never reads as a flat, generated surface.
 */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,241,234,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="noise-veil" aria-hidden="true" />
    </div>
  );
}
