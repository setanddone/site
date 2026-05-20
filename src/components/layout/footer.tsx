import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";
import { NAV_LINKS, CONTACT, BRAND } from "@/lib/site";

/**
 * Footer — bottom of every page.
 *
 * Copy + structure per site_copy.md "Footer":
 *   Left   — Wordmark + tagline
 *   Center — Frederick · Maryland / email / phone
 *   Right  — nav links
 *   Bottom — © Set & Done · Frederick, MD · Pull up a chair.
 *
 * Tone: Stone Light (not Ink) so the wordmark's Oxblood period stays
 * Oxblood — the brand mark is never inverted here. A top hairline
 * separates the footer from the content above.
 *
 * Server Component — no interactivity.
 */
export function Footer() {
  return (
    <footer className="border-t-[0.5px] border-rule bg-stone-light">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Left — wordmark + tagline */}
          <div>
            <Wordmark size="md" />
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-stone-dark">
              {BRAND.tagline}
            </p>
          </div>

          {/* Center — contact */}
          <div className="flex flex-col gap-3">
            <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
              Find us
            </p>
            <p className="font-body text-sm text-ink">
              {CONTACT.city} · {CONTACT.state}
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-body text-sm text-ink underline decoration-[0.5px] underline-offset-4 transition-colors hover:text-oxblood"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="font-body text-sm text-ink transition-colors hover:text-oxblood"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Right — nav */}
          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
              Pages
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-ink transition-colors hover:text-oxblood"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom rule */}
        <div className="mt-16 border-t-[0.5px] border-rule pt-6">
          <p className="font-body text-xs uppercase tracking-small-cap-tight text-stone-dark">
            © {BRAND.name} · {CONTACT.city}, {CONTACT.stateAbbr} ·{" "}
            <span className="italic normal-case tracking-normal">
              {BRAND.warmTagline}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
