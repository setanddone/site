import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { FooterCta } from "@/components/layout/footer-cta";

export const metadata: Metadata = {
  title: "Services — Set & Done · Frederick Event Production",
  description:
    "Festival production, community events, milestone celebrations, and selective weddings. Frederick, MD and the DMV.",
};

/**
 * What We Do — single long page, four sections separated by hairlines.
 * Copy verbatim from site_copy.md Page 2. Section ids match the Home
 * "What We Do" card anchors (#community-events, #milestones, etc.).
 */

/** A labeled list block — "What we handle", "What we do", "What we don't do". */
function LabeledList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
        {label}
      </p>
      <ul className="mt-4">
        {items.map((item) => (
          <li
            key={item}
            className="border-b-[0.5px] border-rule py-3 font-body text-base text-ink first:border-t-[0.5px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A note block — "What this looks like", "Whose budget this is". */
function Note({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
        {label}
      </p>
      <p className="mt-4 font-body text-base leading-relaxed text-ink">
        {children}
      </p>
    </div>
  );
}

export default function WhatWeDoPage() {
  return (
    <>
      <Section width="wide" padding="hero">
        <PageHeader
          eyebrow="What We Do"
          headline={
            <>
              Four lanes. One standard<span className="text-oxblood">.</span>
            </>
          }
          lede="We produce community events first, milestones second, weddings third, and the occasional one-off we couldn't pass up. Every event gets the same treatment — small crew, careful plan, nothing accidental."
        />
      </Section>

      {/* 1 — Community Events (primary) */}
      <Section id="community-events" tone="stone-light" topRule width="wide">
        <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          Community Events · Primary
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-display-md font-normal text-ink">
          The events that hold a community together
          <span className="text-oxblood">.</span>
        </h2>
        <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-ink">
          We produce festivals, markets, downtown activations, holiday
          programs, summer concert series, and the recurring community events
          that make a town feel like a town. We work with Main Street programs,
          Business Improvement Districts, parks departments, town governments,
          chambers of commerce, breweries and wineries, and anyone else trying
          to bring people together in public.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <LabeledList
            label="What we handle"
            items={[
              "Production management end-to-end",
              "Vendor sourcing, contracts, and day-of coordination",
              "Sponsorship strategy and outreach",
              "Permitting, COIs, and municipal liaison",
              "Marketing, signage, and event PR",
              "On-site staffing and run-of-show",
            ]}
          />
          <div className="flex flex-col gap-10">
            <Note label="What this looks like">
              A 60-vendor harvest market at Carroll Creek Park. A summer
              concert series in a downtown plaza. A holiday market that runs
              four weekends in December. A grand opening that brings 800 people
              to a new brewery&apos;s first weekend.
            </Note>
            <Note label="Whose budget this is">
              Cities. Towns. BIDs. Parks departments. Nonprofits. Chambers.
              Breweries and wineries. Real estate developers activating public
              spaces.
            </Note>
          </div>
        </div>

        <div className="mt-12">
          <Button href="/get-in-touch" variant="primary" size="md">
            Talk to us about a community event →
          </Button>
        </div>
      </Section>

      {/* 2 — Milestones */}
      <Section id="milestones" topRule width="wide">
        <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          Milestones · Secondary
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-display-md font-normal text-ink">
          The parties that mark a life<span className="text-oxblood">.</span>
        </h2>
        <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-ink">
          Fortieth birthdays. Fiftieth anniversaries. Retirement parties.
          Family reunions. Baby showers that don&apos;t look like baby showers.
          We take the planning off your hands and run the day so you can
          actually be at your own party.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              tier: "Day-of coordination",
              copy: "You've planned it. We run it.",
              price: "Starting at $1,800.",
            },
            {
              tier: "Partial planning",
              copy: "You've started. We finish.",
              price: "Starting at $4,500.",
            },
            {
              tier: "Full-service",
              copy: "Tell us what you want. We do the rest.",
              price: "Starting at $8,500.",
            },
          ].map((t) => (
            <div
              key={t.tier}
              className="flex flex-col gap-3 border-[0.5px] border-rule p-6"
            >
              <h3 className="font-display text-xl text-ink">{t.tier}</h3>
              <p className="font-body text-base text-ink">{t.copy}</p>
              <p className="mt-auto font-body text-sm font-medium text-oxblood">
                {t.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Note label="Whose budget this is">
            Hosts in their forties, fifties, and sixties, putting together a
            meaningful private event for forty to two hundred guests.
          </Note>
        </div>

        <div className="mt-12">
          <Button href="/get-in-touch" variant="primary" size="md">
            Talk to us about a milestone →
          </Button>
        </div>
      </Section>

      {/* 3 — Weddings */}
      <Section id="weddings" tone="stone-light" topRule width="wide">
        <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          Weddings · Selectively
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-display-md font-normal text-ink">
          We take a few each year<span className="text-oxblood">.</span>
        </h2>
        <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-ink">
          We&apos;re not a wedding planner. We&apos;re an event house that takes
          a small number of weddings every year — the casual ones, the farm
          ones, the microweddings, the second weddings that feel like a really
          good dinner party. If your wedding sounds more like a Saturday than a
          production, we should talk.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <LabeledList
            label="What we do"
            items={[
              "Microweddings (10–40 guests)",
              "Farm and outdoor weddings",
              "Backyard and private-property weddings",
              "Elopements and small destination weddings within the DMV",
            ]}
          />
          <LabeledList
            label="What we don't do"
            items={[
              "Ballroom weddings of 300+",
              "Plated five-course traditional banquets",
              'Anything with the word "princess" in the brief',
            ]}
          />
        </div>

        <div className="mt-12">
          <Button href="/get-in-touch" variant="primary" size="md">
            Talk to us about a wedding →
          </Button>
        </div>
      </Section>

      {/* 4 — Custom */}
      <Section id="custom" topRule width="wide">
        <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          Custom · If It Fits
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-display-md font-normal text-ink">
          If it doesn&apos;t fit a category, tell us anyway
          <span className="text-oxblood">.</span>
        </h2>
        <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-ink">
          Grand openings. Ribbon cuttings. Broker opens. Holiday parties for
          small companies. The Saturday-night-only pop-up dinner. The kind of
          event that doesn&apos;t have a category yet. If you&apos;re trying to
          put together something that needs craft and a small crew, send us a
          note. We&apos;ll either say yes or point you somewhere good.
        </p>

        <div className="mt-12">
          <Button href="/get-in-touch" variant="primary" size="md">
            Tell us what you&apos;re putting together →
          </Button>
        </div>
      </Section>

      <FooterCta
        headline="Want to put on something good?"
        ctaLabel="Get In Touch →"
        ctaHref="/get-in-touch"
      />
    </>
  );
}
