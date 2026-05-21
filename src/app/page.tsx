import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { WhatWeDoCards } from "@/components/home/what-we-do-cards";
import { ShortStatement } from "@/components/home/short-statement";
import { WorkPreview } from "@/components/home/work-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { FooterCta } from "@/components/layout/footer-cta";
import { BRAND, CONTACT } from "@/lib/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? BRAND.url;

/** LocalBusiness structured data for rich results + local SEO. */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BRAND.name,
  description:
    "Event production company in Frederick, MD serving the DMV region.",
  url: SITE_URL,
  telephone: `+1-${CONTACT.phoneDashed}`,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Frederick",
    addressRegion: "MD",
    addressCountry: "US",
  },
  areaServed: [
    "Frederick County, MD",
    "Washington DC",
    "Maryland",
    "Northern Virginia",
  ],
  priceRange: "$$-$$$",
};

export const metadata: Metadata = {
  title: "Set & Done — Event Production in Frederick, MD",
  description:
    "A community-rooted event house producing festivals, markets, milestones, and the occasional wedding. Frederick, Maryland.",
};

/**
 * Home — the six sections per site_copy.md / INSTRUCTIONS:
 *   1. Hero
 *   2. What We Do (four cards)
 *   3. A Short Statement (Stone Light)
 *   4. The Work preview (three featured tiles)
 *   5. About preview (two-column)
 *   6. Footer CTA — "Pull up a chair."
 *
 * Photography is absent for launch; Hero + tiles render branded fallbacks.
 * Pass an `image` path to <Hero /> once a hero photo is in /public/images.
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <WhatWeDoCards />
      <ShortStatement />
      <WorkPreview />
      <AboutPreview />
      <FooterCta
        headline="Pull up a chair."
        body="First conversation's free. Coffee's on us."
        ctaLabel="Get In Touch →"
        ctaHref="/get-in-touch"
      />
    </>
  );
}
