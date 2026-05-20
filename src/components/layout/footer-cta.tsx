import type { ReactNode } from "react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

/**
 * FooterCta — the recurring centered call-to-action band that closes
 * most pages (Home §6, About §4, What We Do sections).
 *
 * Shared here in layout/ rather than home/ because three+ pages reuse it
 * with different copy. Prop-driven: headline (often Fraunces italic),
 * optional body, and a single primary button.
 *
 * Default tone is Stone Light — the calm alternating neutral that lets
 * the Oxblood button carry the 5%.
 */

type FooterCtaProps = {
  headline: ReactNode;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  /** Render the headline in Fraunces italic (the warm, social register). */
  italic?: boolean;
  tone?: "stone" | "stone-light";
};

export function FooterCta({
  headline,
  body,
  ctaLabel,
  ctaHref,
  italic = true,
  tone = "stone-light",
}: FooterCtaProps) {
  return (
    <Section tone={tone} topRule padding="hero" width="default">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className={`font-display text-display-md font-normal text-ink ${
            italic ? "italic" : ""
          }`}
        >
          {headline}
        </h2>
        {body && (
          <p className="mt-6 font-body text-lg text-stone-dark">{body}</p>
        )}
        <div className="mt-10 flex justify-center">
          <Button href={ctaHref} variant="primary" size="lg">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
}
