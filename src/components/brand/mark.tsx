import { cn } from "@/lib/cn";

/**
 * The Mark — the Oxblood period inside a hairline circle.
 *
 * Brand Book §10: "It's not punctuation. It's the brand."
 * Used wherever the wordmark is too big or too literal:
 *   - Favicon
 *   - Social profile avatars
 *   - Foil-stamped collateral, embroidered hats
 *   - Loading states, "back to top" buttons
 *   - The hover-state stamp on links
 *
 * Sizes follow the same tiering as Wordmark; the period is sized so
 * that its visual weight matches the wordmark period of the next size up.
 */

type MarkSize = "sm" | "md" | "lg" | "xl";

type MarkProps = {
  size?: MarkSize;
  className?: string;
  /**
   * When true, the circle border switches to Stone (light on Ink/Oxblood
   * backgrounds). The period itself stays Oxblood unless overridden.
   */
  inverted?: boolean;
  /** Override the default Oxblood period (e.g. Cream on Oxblood field). */
  periodClassName?: string;
};

const containerSizes: Record<MarkSize, string> = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

// The period inside the circle is oversized relative to the body of an
// 'M'-height glyph at the same point size — that's the brand mark.
const periodSizes: Record<MarkSize, string> = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-6xl",
  xl: "text-8xl",
};

export function Mark({
  size = "md",
  className,
  inverted = false,
  periodClassName,
}: MarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        // 0.5px Stone Dark hairline — Stone on inverted fields
        inverted ? "border-[0.5px] border-stone" : "border-[0.5px] border-rule",
        containerSizes[size],
        className,
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          "font-display font-medium leading-none",
          // Nudge upward so the period sits visually centered in the
          // circle (descenders push glyphs low by default).
          "-mt-[0.35em]",
          "text-oxblood",
          periodSizes[size],
          periodClassName,
        )}
      >
        .
      </span>
    </span>
  );
}
