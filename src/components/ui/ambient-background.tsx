/**
 * Fixed backdrop behind the whole page: a flat dark base and a grain veil
 * so it never reads as a flat, generated surface.
 */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="noise-veil" aria-hidden="true" />
    </div>
  );
}
