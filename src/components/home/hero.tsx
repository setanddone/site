import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * Home hero.
 *
 * Copy (site_copy.md):
 *   Headline — "The work that makes / the event work."
 *   Sub      — "A small house in Frederick, Maryland, producing the
 *               events that make a town feel like a town."
 *   CTA      — "Tell us what you're putting together →"
 *
 * Two states:
 *  - With a photo (`image` set): full-bleed background, Ink/30 overlay,
 *    Cream text, bottom-left composition — per INSTRUCTIONS.
 *  - Without a photo (launch state): a type-forward Stone hero with the
 *    Ink headline and the Oxblood period kept vivid (the brand mark is
 *    most legible on Stone, never washed out on Ink). Big Fraunces does
 *    the work, per "Typography over imagery for hierarchy."
 *
 * Drop a hero photo into /public/images and pass its path as `image`
 * to switch to the full-bleed treatment.
 */

type HeroProps = {
  image?: string;
};

export function Hero({ image }: HeroProps) {
  const headline = (
    <>
      The work that makes
      <br />
      the event work<span className="text-oxblood">.</span>
    </>
  );

  if (image) {
    return (
      <section className="relative flex min-h-[75vh] items-end overflow-hidden md:min-h-[90vh]">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="relative z-10 w-full px-6 pb-16 md:px-16 md:pb-24">
          <h1 className="max-w-4xl font-display text-display-xl font-normal leading-[0.95] tracking-tight text-cream">
            {headline}
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-cream/90">
            A small house in Frederick, Maryland, producing the events that
            make a town feel like a town.
          </p>
          <div className="mt-10">
            <Button href="/get-in-touch" variant="primary" size="lg">
              Tell us what you&apos;re putting together →
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Launch state — type-forward Stone hero.
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden border-b-[0.5px] border-rule md:min-h-[85vh]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-12">
        <p className="mb-6 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          Frederick · Maryland · Est. 2026
        </p>
        <h1 className="max-w-4xl font-display text-display-xl font-normal leading-[0.95] tracking-tight text-ink">
          {headline}
        </h1>
        <p className="mt-8 max-w-xl font-display text-xl italic leading-relaxed text-stone-dark">
          A small house in Frederick, Maryland, producing the events that make
          a town feel like a town.
        </p>
        <div className="mt-10">
          <Button href="/get-in-touch" variant="primary" size="lg">
            Tell us what you&apos;re putting together →
          </Button>
        </div>
      </div>
    </section>
  );
}
