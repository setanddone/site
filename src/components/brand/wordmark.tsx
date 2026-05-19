import { cn } from "@/lib/cn";

/**
 * The Wordmark — SET & DONE. — the brand on the page.
 *
 * Brand rules (Brand Book §11):
 *   - The period is ALWAYS Oxblood. Never any other color.
 *   - The wordmark itself is Ink (or Cream on Ink/Oxblood backgrounds).
 *   - Set in Fraunces Medium (500), tracking tight.
 *   - Minimum size 18px digital — below that, use <Mark /> instead.
 *
 * Sizes:
 *   sm  → nav, footer, body inline use
 *   md  → page sub-marks, business-card scale
 *   lg  → page headers / about hero
 *   xl  → hero on home page, full-bleed brand moments
 */

type WordmarkSize = "sm" | "md" | "lg" | "xl";

type WordmarkProps = {
  /** Size token. Defaults to "md". */
  size?: WordmarkSize;
  /** Extra classes — use sparingly; the brand wants restraint. */
  className?: string;
  /** Cream wordmark for Ink / Oxblood backgrounds. */
  inverted?: boolean;
  /** Render as <h1>; otherwise renders an inline <span>. */
  asHeading?: boolean;
};

const sizeClasses: Record<WordmarkSize, string> = {
  sm: "text-base",
  md: "text-2xl",
  lg: "text-4xl md:text-5xl",
  xl: "text-6xl md:text-8xl",
};

export function Wordmark({
  size = "md",
  className,
  inverted = false,
  asHeading = false,
}: WordmarkProps) {
  const Tag = asHeading ? "h1" : "span";
  const wordColor = inverted ? "text-cream" : "text-ink";
  // Inverted: the period stays oxblood on Ink, but on a full Oxblood
  // background it has to shift to Cream/Stone so it remains visible.
  // We expose the simple two-state rule here; pages on Oxblood
  // backgrounds should override via className.
  const periodColor = inverted ? "text-stone" : "text-oxblood";

  return (
    <Tag
      className={cn(
        "font-display font-medium tracking-tight leading-[0.95]",
        wordColor,
        sizeClasses[size],
        className,
      )}
    >
      SET &amp; DONE
      <span className={periodColor} aria-hidden="true">
        .
      </span>
      <span className="sr-only">.</span>
    </Tag>
  );
}
