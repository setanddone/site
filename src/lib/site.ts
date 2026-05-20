/**
 * Site-wide constants — single source of truth for navigation, contact
 * details, and brand metadata. Imported by Nav, Footer, metadata, and the
 * JSON-LD schema so nothing drifts out of sync.
 *
 * No "use client" — this is a plain module, safe to import on the server
 * and the client.
 */

/** Primary navigation. Order matters: it's the order shown in the nav bar.
 *  Municipalities is intentionally absent — it's a hidden B2B page. */
export const NAV_LINKS = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/the-work", label: "The Work" },
  { href: "/about", label: "About" },
  { href: "/field-notes", label: "Field Notes" },
  { href: "/get-in-touch", label: "Get In Touch" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

/** The link the nav/footer treats as the primary CTA. */
export const PRIMARY_CTA = {
  href: "/get-in-touch",
  label: "Get In Touch",
} as const;

/** Contact details. Phone stored canonical (digits) + display (spaced). */
export const CONTACT = {
  email: "kimberly@setanddone.co",
  phoneDisplay: "240 · 483 · 7564",
  phoneDigits: "2404837564",
  phoneHref: "tel:+12404837564",
  city: "Frederick",
  state: "Maryland",
  stateAbbr: "MD",
  officeHours: "Monday through Friday, 9 to 5",
} as const;

/** Brand-level strings reused across the site. */
export const BRAND = {
  name: "Set & Done",
  tagline: "The work that makes the event work.",
  primaryTagline: "We set. It's done.",
  warmTagline: "Pull up a chair.",
  est: "Est. 2026",
  // Default canonical domain — both domains are owned; flip here if the
  // canonical is changed at deploy time.
  url: "https://setanddone.co",
} as const;
