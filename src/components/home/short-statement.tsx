import { Section } from "@/components/layout/section";

/**
 * Home "A Short Statement" — Stone Light, centered, large display type.
 * Three sentences then a two-word landing line. Copy verbatim from
 * site_copy.md.
 */
export function ShortStatement() {
  return (
    <Section tone="stone-light" topRule padding="hero" width="default">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-display-md font-normal leading-tight text-ink">
          We believe in the events that hold a community together. The farmers
          market that knows your name. The summer concert your kids will tell
          their kids about. The wedding that felt like a Saturday at a
          friend&apos;s house, but better.
        </p>
        <p className="mt-10 font-display text-2xl italic text-oxblood">
          That&apos;s the work.
        </p>
      </div>
    </Section>
  );
}
