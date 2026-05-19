/**
 * Smoke-test page — Step 1 only.
 *
 * Proves the design system is wired correctly:
 *   - Stone (#D9D2C2) background from <body> in layout.tsx
 *   - Ink (#1A1814) default text color
 *   - Fraunces loaded (display) + Inter loaded (body)
 *   - Oxblood (#6B2A2A) period — the brand mark
 *   - text-display-xl clamp() responsive scaling
 *   - tracking-small-cap (0.18em) on the eyebrow
 *   - .hairline rule via the brand utility
 *
 * Replaced in Step 4 with the real Home hero.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <p className="mb-10 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          Frederick · Maryland · Est. 2026
        </p>

        <h1 className="font-display text-display-xl font-medium leading-[0.95] tracking-tight text-ink">
          SET &amp; DONE<span className="text-oxblood">.</span>
        </h1>

        <hr className="hairline mt-10 w-24" />

        <p className="mt-10 max-w-md font-display text-xl italic leading-relaxed text-stone-dark">
          The work that makes the event work.
        </p>

        <p className="mt-12 font-body text-xs uppercase tracking-small-cap text-stone-dark">
          Scaffold · Step 1 · Smoke Test
        </p>
      </div>
    </main>
  );
}
