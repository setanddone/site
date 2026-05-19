import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * PageHeader — the eyebrow / headline / lede pattern.
 *
 * Used on every page hero except the home page (which has its own
 * full-bleed treatment). Lives at the top of the content column,
 * sets the tone, then yields to the body.
 *
 * Structure:
 *   - Eyebrow:  Inter, small-caps, Oxblood
 *   - Headline: Fraunces, display-lg, Ink
 *   - Lede:     Fraunces italic, xl, Stone Dark
 *
 * The lede is intentionally Stone Dark (not Ink) — it's a sotto-voce
 * line, half-spoken; the headline carries the room.
 */

type PageHeaderProps = {
  eyebrow?: string;
  /** ReactNode so callers can break lines or italicize a word. */
  headline: ReactNode;
  lede?: ReactNode;
  className?: string;
  /** Render headline as <h2> instead of <h1>. Use when the page already has an h1. */
  as?: "h1" | "h2";
};

export function PageHeader({
  eyebrow,
  headline,
  lede,
  className,
  as = "h1",
}: PageHeaderProps) {
  const Heading = as;
  return (
    <header className={cn("mb-12 md:mb-20", className)}>
      {eyebrow && (
        <div className="mb-4 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          {eyebrow}
        </div>
      )}
      <Heading className="font-display text-display-lg font-normal text-ink">
        {headline}
      </Heading>
      {lede && (
        <p className="mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-stone-dark">
          {lede}
        </p>
      )}
    </header>
  );
}
