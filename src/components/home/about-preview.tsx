import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ImageFrame } from "@/components/ui/image-frame";

/**
 * Home "About" preview — two columns.
 * Left: portrait of Kimberly (fallback until a real photo lands).
 * Right: eyebrow / headline / body / CTA. Copy verbatim from site_copy.md.
 */
export function AboutPreview() {
  return (
    <Section tone="stone-light" topRule width="wide">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Portrait */}
        <ImageFrame
          src=""
          alt="Kimberly Nick, owner of Set & Done"
          ratio="aspect-[4/5]"
          fallbackLabel="Portrait — Kimberly Nick"
          sizes="(min-width: 768px) 50vw, 100vw"
        />

        {/* Copy */}
        <div>
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
            Who Runs This
          </p>
          <h2 className="font-display text-display-md font-normal text-ink">
            Kimberly Nick<span className="text-oxblood">.</span>
          </h2>
          <p className="mt-6 max-w-prose font-body text-lg leading-relaxed text-ink">
            Set &amp; Done is run by Kimberly Nick — a Frederick native
            who&apos;s spent the better part of the last decade building events
            that don&apos;t feel like events. The community calendar. The third
            anniversary dinner. The market that runs whether it rains or not.
            She&apos;s the one you call. She&apos;s the one who shows up.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary" size="md">
              Read more about Kimberly →
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
