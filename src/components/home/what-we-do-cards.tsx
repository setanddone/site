import Link from "next/link";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/cn";

/**
 * Home "What We Do" — four cards.
 *
 * Copy verbatim from site_copy.md. Community Events leads (largest, full
 * width); the other three sit in an equal row below. All cards link to
 * the relevant section of /what-we-do.
 *
 * Cards are bordered with hairlines, no fills — the lead card gets a
 * Stone Light fill to signal primacy without adding color.
 */

type Card = {
  title: string;
  body: string;
  href: string;
};

const LEAD: Card = {
  title: "Community Events",
  body: "Festivals. Farmers markets. Holiday markets. Summer concert series. Downtown activations. The work that makes a Saturday in town feel like an event.",
  href: "/what-we-do#community-events",
};

const CARDS: Card[] = [
  {
    title: "Milestones",
    body: "Fortieth birthdays. Anniversaries. Retirements. The parties that mark a life.",
    href: "/what-we-do#milestones",
  },
  {
    title: "Weddings",
    body: "Selectively. We take a few each year. Microweddings, farm weddings, the casual ones.",
    href: "/what-we-do#weddings",
  },
  {
    title: "Custom",
    body: "If it doesn't fit a category, tell us anyway.",
    href: "/what-we-do#custom",
  },
];

function CardLink({
  card,
  lead = false,
}: {
  card: Card;
  lead?: boolean;
}) {
  return (
    <Link
      href={card.href}
      className={cn(
        "group flex flex-col justify-between border-[0.5px] border-rule p-8 transition-colors",
        lead ? "bg-stone-light md:p-12" : "bg-transparent hover:bg-stone-light",
      )}
    >
      <div>
        <h3
          className={cn(
            "font-display text-ink transition-colors group-hover:text-oxblood",
            lead ? "text-display-md" : "text-2xl",
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "mt-4 font-body leading-relaxed text-ink",
            lead ? "max-w-xl text-lg" : "text-base",
          )}
        >
          {card.body}
        </p>
      </div>
      <span className="mt-8 font-body text-xs font-medium uppercase tracking-small-cap-tight text-oxblood">
        Learn more →
      </span>
    </Link>
  );
}

export function WhatWeDoCards() {
  return (
    <Section topRule width="wide">
      <div className="mb-12 md:mb-16">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          What We Do
        </p>
        <h2 className="font-display text-display-md font-normal text-ink">
          Four things. We do them well<span className="text-oxblood">.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <CardLink card={LEAD} lead />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CARDS.map((card) => (
            <CardLink key={card.title} card={card} />
          ))}
        </div>
      </div>
    </Section>
  );
}
