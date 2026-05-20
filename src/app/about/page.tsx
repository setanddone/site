import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/layout/page-header";
import { ImageFrame } from "@/components/ui/image-frame";
import { FooterCta } from "@/components/layout/footer-cta";

export const metadata: Metadata = {
  title: "About — Kimberly Nick · Set & Done · Frederick",
  description:
    "Set & Done is run by Kimberly Nick, a Frederick native producing community events across the DMV.",
};

/**
 * About — copy verbatim from site_copy.md Page 4.
 *
 * NOTE: Kimberly's bio is the PLACEHOLDER DRAFT, shipped as-is per the
 * build decision. The bracketed options (e.g. "[her family / her dog /
 * a small library of cookbooks]") and quick-fact brackets are intentional
 * — Kimberly fills these in at review before public launch.
 */

const PILLARS = [
  {
    n: "01",
    title: "Community First",
    body: "We produce the events that make towns feel like towns. Frederick first, the DMV second. Always in that order.",
  },
  {
    n: "02",
    title: "Craft Over Flash",
    body: "Every detail on purpose. Nothing accidental, nothing extra. We refuse anything trendy.",
  },
  {
    n: "03",
    title: "Quietly Confident",
    body: "We don't oversell. We deliver. The work speaks first; we speak last.",
  },
  {
    n: "04",
    title: "Rooted in Place",
    body: "Frederick is the headquarters and the heart. Our references are local. Our vendors are local.",
  },
  {
    n: "05",
    title: "Set, Then Forgotten",
    body: "Our highest compliment is a guest who never noticed us at all. The infrastructure should disappear.",
  },
];

const QUICK_FACTS = [
  { label: "Born and raised", value: "Frederick County, MD" },
  { label: "Based", value: "Downtown Frederick" },
  { label: "Background", value: "Festival and nonprofit operations · 10+ years" },
  { label: "Favorite Frederick spot", value: "Carroll Creek at dusk" },
];

export default function AboutPage() {
  return (
    <>
      <Section width="wide" padding="hero">
        <PageHeader
          eyebrow="About"
          headline={
            <>
              A small house with one job: do the work that makes the event
              work<span className="text-oxblood">.</span>
            </>
          }
        />
      </Section>

      {/* Section 1 — Kimberly */}
      <Section tone="stone-light" topRule width="wide">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-16">
          {/* Left: portrait + quick facts */}
          <div className="md:col-span-2">
            <ImageFrame
              src=""
              alt="Kimberly Nick, owner of Set & Done"
              ratio="aspect-[4/5]"
              fallbackLabel="Portrait — Kimberly Nick"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <dl className="mt-8 border-t-[0.5px] border-rule">
              {QUICK_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 border-b-[0.5px] border-rule py-4"
                >
                  <dt className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
                    {fact.label}
                  </dt>
                  <dd className="font-body text-sm text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: bio */}
          <div className="md:col-span-3">
            <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
              The Owner
            </p>
            <h2 className="mt-4 font-display text-display-md font-normal text-ink">
              Kimberly Nick<span className="text-oxblood">.</span>
            </h2>
            <div className="mt-6 flex flex-col gap-6 font-body text-lg leading-relaxed text-ink">
              <p>
                Kimberly grew up in Frederick County. She spent a decade working
                in and around events — first behind the scenes for a regional
                nonprofit, then running operations for a series of festivals and
                markets across the DMV. She started Set &amp; Done in 2026
                because she kept ending up in the same conversation: a town or a
                brewery or a family that wanted to put on something good, and
                didn&apos;t quite know who to call.
              </p>
              <p>
                She&apos;s the one you call. She runs the shop, runs the day,
                and shows up when she says she will.
              </p>
              <p>
                Kimberly lives in Frederick with [her family / her dog / a small
                library of cookbooks]. On weekends she&apos;s usually at a
                market somewhere in the county, either working it or just
                walking through.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2 — Brand pillars */}
      <Section topRule width="wide">
        <div className="mb-12 md:mb-16">
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
            What We Believe
          </p>
          <h2 className="font-display text-display-md font-normal text-ink">
            Five things we always are<span className="text-oxblood">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border-[0.5px] border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.n} className="flex flex-col gap-3 bg-stone p-8">
              <span className="font-display text-3xl italic text-oxblood">
                {pillar.n}
              </span>
              <h3 className="font-display text-xl text-ink">{pillar.title}</h3>
              <p className="font-body text-base leading-relaxed text-ink">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 3 — Why Frederick */}
      <Section tone="stone-light" topRule width="default">
        <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          Why Here
        </p>
        <h2 className="mt-4 font-display text-display-md font-normal text-ink">
          Because the town deserves it<span className="text-oxblood">.</span>
        </h2>
        <div className="mt-6 flex flex-col gap-6 font-body text-lg leading-relaxed text-ink">
          <p>
            Frederick is one of the fastest-growing places in Maryland. It has
            Main Street that still functions like a Main Street, a downtown
            people actually walk in, a creek with a park along it, a market
            every Saturday morning, and breweries that have become community
            living rooms. It deserves event production to match.
          </p>
          <p>
            We&apos;re here because the work is here. We&apos;re staying for the
            same reason.
          </p>
        </div>
      </Section>

      <FooterCta
        headline="Want to put on something good?"
        ctaLabel="Get in touch →"
        ctaHref="/get-in-touch"
      />
    </>
  );
}
