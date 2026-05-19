import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";
import { Mark } from "@/components/brand/mark";
import { Hairline } from "@/components/ui/hairline";

/**
 * Home — placeholder.
 *
 * Step 2 keeps this minimal — Wordmark, Mark, hairline, and a small
 * Inter line. The real Home hero (full-bleed, Section grid, etc.)
 * lands in Step 4.
 *
 * The `/design-system` route renders the full visual catalog of every
 * Step 2 component. Delete that route before launch.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <p className="mb-10 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          Frederick · Maryland · Est. 2026
        </p>

        <Wordmark size="xl" asHeading />

        <Hairline className="mt-10 max-w-[6rem]" />

        <p className="mt-10 max-w-md font-display text-xl italic leading-relaxed text-stone-dark">
          The work that makes the event work.
        </p>

        <Mark size="md" className="mt-16" />

        <p className="mt-8 font-body text-xs uppercase tracking-small-cap text-stone-dark">
          Site under construction · Step 2 ·{" "}
          <Link
            href="/design-system"
            className="text-ink underline decoration-[0.5px] underline-offset-4 hover:text-oxblood"
          >
            Design system
          </Link>
        </p>
      </div>
    </main>
  );
}
