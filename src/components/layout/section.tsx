import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Section — consistent vertical rhythm for every page section.
 *
 * Brand floor: py-16 → py-24 between sections (per INSTRUCTIONS).
 * Optional top hairline divider, optional surface background tint.
 *
 *   <Section>
 *     <SectionHeader eyebrow="..." headline={...} />
 *     ...
 *   </Section>
 *
 * Tone variants change the background; tone="stone" is the default
 * (Stone). Stone Light is the alternating section, Ink is for the
 * footer CTA / hero moments, Oxblood is reserved for the brand-moment
 * hero (rare).
 */

type Tone = "stone" | "stone-light" | "ink" | "oxblood";

type SectionProps = {
  children: ReactNode;
  /** Anchor id for in-page navigation (e.g. "community-events"). */
  id?: string;
  /** Background tone. Defaults to "stone". */
  tone?: Tone;
  /** Render a Stone Dark hairline above the section. */
  topRule?: boolean;
  /** Render as <section> by default. Override when nesting. */
  as?: "section" | "div" | "article" | "aside";
  /** Override the default vertical padding. */
  padding?: "default" | "tight" | "hero" | "none";
  /** Maximum content width. Defaults to "wide" (max-w-6xl) — the brand wants room. */
  width?: "narrow" | "default" | "wide" | "full";
  className?: string;
  /** Optional inner container className passthrough. */
  innerClassName?: string;
};

const toneClasses: Record<Tone, string> = {
  stone: "bg-stone text-ink",
  "stone-light": "bg-stone-light text-ink",
  ink: "bg-ink text-cream",
  oxblood: "bg-oxblood text-cream",
};

const paddingClasses: Record<Required<SectionProps>["padding"], string> = {
  none: "py-0",
  tight: "py-12 md:py-16",
  default: "py-16 md:py-24",
  hero: "py-24 md:py-36",
};

const widthClasses: Record<Required<SectionProps>["width"], string> = {
  narrow: "max-w-2xl",
  default: "max-w-4xl",
  wide: "max-w-6xl",
  full: "max-w-none",
};

export function Section({
  children,
  id,
  tone = "stone",
  topRule = false,
  as = "section",
  padding = "default",
  width = "wide",
  className,
  innerClassName,
}: SectionProps) {
  const Tag = as;

  return (
    <Tag
      id={id}
      className={cn(
        toneClasses[tone],
        topRule && "border-t-[0.5px] border-rule",
        // Offset anchored scroll so headings clear the sticky nav.
        id && "scroll-mt-20 md:scroll-mt-24",
        paddingClasses[padding],
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full px-6 md:px-12",
          widthClasses[width],
          innerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
