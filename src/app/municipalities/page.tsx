import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site";

/**
 * For Municipalities — hidden B2B page (site_copy.md Page 7).
 *
 * Not in the main nav (absent from NAV_LINKS). noindex for launch so it
 * stays out of Google; linked directly from outreach emails, LinkedIn,
 * and RFP cover letters. Remove the robots flag when it's ready to index.
 *
 * The capabilities deck PDF isn't built yet (Month 2 per the deployment
 * checklist), so the deck CTAs request it by email. Once the PDF lands at
 * /docs/capabilities-deck.pdf, swap DECK_HREF to that path + add download.
 */

export const metadata: Metadata = {
  title: "Municipal Event Production · Set & Done · Frederick MD",
  description:
    "Festival, market, and civic event production for towns, BIDs, and Main Street programs across the DMV.",
  robots: { index: false, follow: true },
};

const DECK_HREF = `mailto:${CONTACT.email}?subject=Capabilities%20Deck%20Request`;

const CAPABILITIES = [
  {
    title: "Production Management",
    body: "We run the day. Run-of-show, vendor coordination, staffing, troubleshooting.",
  },
  {
    title: "Vendor Sourcing & Contracts",
    body: "40-vendor markets to 200-vendor festivals. We source, contract, and manage.",
  },
  {
    title: "Sponsorship Strategy",
    body: "Sponsorship is revenue. We build the deck, make the asks, and manage activation.",
  },
  {
    title: "Permitting & Liaison",
    body: "Special event permits, COIs, alcohol permits, road closures. We handle the paperwork and the calls.",
  },
  {
    title: "Marketing & PR",
    body: "Event branding, signage, press outreach, social, paid promotion when it earns it.",
  },
  {
    title: "Day-of Staffing",
    body: "Trained crew, in uniform, on-time, on-site. We run the day so your team doesn't have to.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Brief",
    body: "A 60-minute call. We learn your event, your budget, your constraints, your community.",
  },
  {
    n: "02",
    title: "Plan",
    body: "A written production plan within two weeks. Scope, timeline, deliverables, fee, and any open questions.",
  },
  {
    n: "03",
    title: "Build",
    body: "We execute. Weekly check-ins. Open dashboard for budget and vendor status. Nothing happens you don't see.",
  },
  {
    n: "04",
    title: "Run",
    body: "We're on-site, in uniform, running the day. After the event, you get a wrap report with what worked, what didn't, and what to repeat.",
  },
];

const CASE_FOR = [
  {
    title: "Community-first design.",
    body: "Every event we produce is designed around the community it serves. We don't drop in a templated festival. We learn the town first.",
  },
  {
    title: "Frederick-rooted.",
    body: "We're based in Frederick County, fluent in the region, and built to serve the DMV. Local crew. Local vendor relationships. Local accountability.",
  },
  {
    title: "Single point of accountability.",
    body: "Kimberly Nick runs every contract. You always know who's responsible. You always have a direct line.",
  },
];

const PRICING = [
  {
    n: "01",
    title: "Flat-fee production",
    body: "We quote a fixed production fee against a defined scope. Best for one-off events with clear deliverables.",
  },
  {
    n: "02",
    title: "Percentage of event budget",
    body: "Typically 15–20% of total event budget. Best for larger productions with significant vendor and sponsorship spend.",
  },
  {
    n: "03",
    title: "Retainer + day-of",
    body: "A monthly retainer with day-of execution costs separate. Best for recurring programs — weekly markets, monthly events, year-round community programs.",
  },
];

export default function MunicipalitiesPage() {
  return (
    <>
      {/* Hero */}
      <Section width="wide" padding="hero">
        <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          For Municipalities, BIDs, and Main Street Programs
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-display-lg font-normal text-ink">
          Festival, market, and civic event production. Built for towns
          <span className="text-oxblood">.</span>
        </h1>
        <p className="mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-stone-dark">
          Set &amp; Done is a Frederick-based event production house that works
          exclusively on hired contracts. We don&apos;t run our own festivals.
          We run yours.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={DECK_HREF} variant="primary" size="lg" external>
            Download our capabilities deck →
          </Button>
          <Button href="/get-in-touch" variant="secondary" size="lg">
            Talk to us directly →
          </Button>
        </div>
      </Section>

      {/* Capabilities */}
      <Section tone="stone-light" topRule width="wide">
        <div className="mb-12 md:mb-16">
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
            Capabilities
          </p>
          <h2 className="font-display text-display-md font-normal text-ink">
            End-to-end production. One point of contact
            <span className="text-oxblood">.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden border-[0.5px] border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className="flex flex-col gap-3 bg-stone-light p-8">
              <h3 className="font-display text-xl text-ink">{cap.title}</h3>
              <p className="font-body text-base leading-relaxed text-ink">
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section topRule width="wide">
        <div className="mb-12 md:mb-16">
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
            Process
          </p>
          <h2 className="font-display text-display-md font-normal text-ink">
            Four steps. No surprises<span className="text-oxblood">.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-3 border-t-[0.5px] border-rule pt-5"
            >
              <span className="font-display text-3xl italic text-oxblood">
                {step.n}
              </span>
              <h3 className="font-display text-xl text-ink">{step.title}</h3>
              <p className="font-body text-base leading-relaxed text-ink">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* The case for Set & Done */}
      <Section tone="stone-light" topRule width="wide">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {CASE_FOR.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-4 font-body text-base leading-relaxed text-ink">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section topRule width="wide">
        <div className="mb-12 md:mb-16">
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
            Fees
          </p>
          <h2 className="font-display text-display-md font-normal text-ink">
            Three ways to work with us<span className="text-oxblood">.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING.map((model) => (
            <div
              key={model.n}
              className="flex flex-col gap-3 border-[0.5px] border-rule p-8"
            >
              <span className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
                Model {model.n}
              </span>
              <h3 className="font-display text-xl text-ink">{model.title}</h3>
              <p className="font-body text-base leading-relaxed text-ink">
                {model.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl font-body text-sm italic text-stone-dark">
          All fees fully transparent. No hidden markups. Sponsorship revenue
          split clearly outlined in every contract.
        </p>
      </Section>

      {/* Capabilities deck */}
      <Section tone="ink" topRule width="default">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-small-cap text-stone-dark">
          The Full Pitch
        </p>
        <h2 className="font-display text-display-md font-normal text-cream">
          The 12-page version<span className="text-oxblood">.</span>
        </h2>
        <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/90">
          Our capabilities deck has the full overview, sample case studies,
          references, insurance information, and pricing models for municipal
          contracts. Download below or email {CONTACT.email}.
        </p>
        <div className="mt-10">
          <Button href={DECK_HREF} variant="inverted" size="lg" external>
            Download the capabilities deck (PDF) →
          </Button>
        </div>
      </Section>

      {/* Contact */}
      <Section topRule width="default">
        <div className="flex flex-col gap-2">
          <p className="font-display text-2xl text-ink">Kimberly Nick</p>
          <p className="font-body text-sm uppercase tracking-small-cap-tight text-stone-dark">
            Owner · Set &amp; Done
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-body text-base text-ink underline decoration-[0.5px] underline-offset-4 transition-colors hover:text-oxblood"
          >
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.phoneHref}
            className="font-body text-base text-ink transition-colors hover:text-oxblood"
          >
            {CONTACT.phoneDisplay}
          </a>
        </div>
        <p className="mt-8 max-w-2xl border-t-[0.5px] border-rule pt-6 font-body text-base text-ink">
          For RFPs and procurement, email {CONTACT.email} with &ldquo;RFP&rdquo;
          in the subject line.
        </p>
      </Section>
    </>
  );
}
