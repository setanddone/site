import type { Metadata } from "next";
import { Wordmark } from "@/components/brand/wordmark";
import { Mark } from "@/components/brand/mark";
import { Stamp } from "@/components/brand/stamp";
import { Hairline } from "@/components/ui/hairline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";

/**
 * Design system showcase.
 *
 * Visual catalog of every Step 2 component. Used for QA during the
 * build. **Delete this route before launch** — it should not be
 * discoverable from production navigation.
 *
 * Search engines are blocked via the robots meta below to keep it
 * out of the index in the meantime.
 */
export const metadata: Metadata = {
  title: "Design System — Set & Done",
  robots: { index: false, follow: false },
};

function Group({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
        {label}
      </p>
      {children}
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <>
      {/* ---------- Page header ---------- */}
      <Section tone="stone" padding="default" width="wide">
        <PageHeader
          eyebrow="Internal · QA Only"
          headline={
            <>
              Design system<span className="text-oxblood">.</span>
            </>
          }
          lede="Every brand component, every variant, on one page. Delete before launch."
        />
      </Section>

      {/* ---------- Brand: Wordmark ---------- */}
      <Section tone="stone-light" topRule padding="default" width="wide">
        <Group label="01 · Wordmark">
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs uppercase tracking-small-cap text-stone-dark">
                size = xl (hero)
              </span>
              <Wordmark size="xl" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs uppercase tracking-small-cap text-stone-dark">
                size = lg (page header)
              </span>
              <Wordmark size="lg" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs uppercase tracking-small-cap text-stone-dark">
                size = md (default)
              </span>
              <Wordmark size="md" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs uppercase tracking-small-cap text-stone-dark">
                size = sm (nav / footer)
              </span>
              <Wordmark size="sm" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs uppercase tracking-small-cap text-stone-dark">
                inverted (on Ink)
              </span>
              <div className="bg-ink p-8">
                <Wordmark size="lg" inverted />
              </div>
            </div>
          </div>
        </Group>
      </Section>

      {/* ---------- Brand: Mark ---------- */}
      <Section topRule padding="default" width="wide">
        <Group label="02 · The Mark">
          <p className="max-w-2xl font-body text-sm text-ink">
            The Oxblood period inside a hairline circle. Used for favicons,
            avatars, foil stamps, and standalone brand moments. It&apos;s not
            punctuation — it&apos;s the brand.
          </p>
          <div className="flex flex-wrap items-end gap-8">
            <div className="flex flex-col items-center gap-2">
              <Mark size="sm" />
              <span className="font-body text-xs uppercase tracking-small-cap text-stone-dark">
                sm
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mark size="md" />
              <span className="font-body text-xs uppercase tracking-small-cap text-stone-dark">
                md
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mark size="lg" />
              <span className="font-body text-xs uppercase tracking-small-cap text-stone-dark">
                lg
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mark size="xl" />
              <span className="font-body text-xs uppercase tracking-small-cap text-stone-dark">
                xl
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-ink p-4">
                <Mark size="md" inverted />
              </div>
              <span className="font-body text-xs uppercase tracking-small-cap text-stone-dark">
                inverted
              </span>
            </div>
          </div>
        </Group>
      </Section>

      {/* ---------- Brand: Stamp ---------- */}
      <Section tone="stone-light" topRule padding="default" width="wide">
        <Group label="03 · Numbered Edition Stamp">
          <p className="max-w-2xl font-body text-sm text-ink">
            For recurring events — the third Harvest Market, the fifth annual
            holiday program. Sits quietly as a label, not a logo.
          </p>
          <div className="flex flex-wrap gap-6">
            <Stamp edition="III" />
            <Stamp edition="VOL. II" label="Volume" />
            <Stamp edition="05" label="Year" />
            <Stamp edition="2026" label="Edition" />
          </div>
        </Group>
      </Section>

      {/* ---------- Layout: Hairline ---------- */}
      <Section topRule padding="default" width="wide">
        <Group label="04 · Hairline">
          <p className="max-w-2xl font-body text-sm text-ink">
            0.5px Stone Dark. The visual rhythm of the brand. Use generously.
          </p>
          <Hairline />
          <p className="font-body text-sm text-stone-dark">
            ↑ Horizontal hairline above this line.
          </p>
          <div className="flex h-24 items-center gap-6">
            <span className="font-body text-sm text-ink">Left side</span>
            <Hairline orientation="vertical" as="div" />
            <span className="font-body text-sm text-ink">Right side</span>
          </div>
        </Group>
      </Section>

      {/* ---------- UI: Buttons ---------- */}
      <Section tone="stone-light" topRule padding="default" width="wide">
        <Group label="05 · Button">
          <p className="max-w-2xl font-body text-sm text-ink">
            Primary = Oxblood. The brand&apos;s one and only fill.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col gap-3">
              <Label>Primary</Label>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">
                  Tell us more →
                </Button>
                <Button variant="primary" size="md">
                  Tell us more →
                </Button>
                <Button variant="primary" size="lg">
                  Tell us more →
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Secondary (Ink outline)</Label>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="md">
                  Learn more →
                </Button>
                <Button variant="secondary" size="md" href="/the-work">
                  See all of it →
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Ghost (inline link)</Label>
              <p className="font-body text-base text-ink">
                We work across Frederick County and the DMV.{" "}
                <Button variant="ghost" size="sm" href="/about">
                  Read more →
                </Button>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Inverted (on Ink/Oxblood)</Label>
              <div className="flex flex-wrap gap-4 bg-ink p-8">
                <Button variant="inverted" size="md">
                  Download the deck →
                </Button>
                <Button variant="primary" size="md">
                  Get in touch →
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Disabled</Label>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="md" disabled>
                  One moment…
                </Button>
              </div>
            </div>
          </div>
        </Group>
      </Section>

      {/* ---------- UI: Form fields ---------- */}
      <Section topRule padding="default" width="wide">
        <Group label="06 · Form Fields">
          <p className="max-w-2xl font-body text-sm text-ink">
            Stone Light field, hairline beneath. No rounded rectangles, no
            shadows. Reads like a letterpress order form.
          </p>

          <div className="grid max-w-2xl gap-6">
            <div>
              <Label htmlFor="ds-name" required>
                Name
              </Label>
              <Input
                id="ds-name"
                className="mt-2"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <Label htmlFor="ds-email" required>
                Email
              </Label>
              <Input
                id="ds-email"
                type="email"
                className="mt-2"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <Label htmlFor="ds-event">What kind of event?</Label>
              <Select id="ds-event" className="mt-2" defaultValue="">
                <option value="" disabled>
                  Pick one
                </option>
                <option value="community">
                  Community event (festival, market, downtown activation)
                </option>
                <option value="milestone">
                  Milestone (birthday, anniversary, retirement)
                </option>
                <option value="wedding">
                  Wedding (microwedding, farm wedding, casual)
                </option>
                <option value="corporate">
                  Corporate (grand opening, ribbon cutting, party)
                </option>
                <option value="other">Something else</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="ds-message" required>
                What are you putting together?
              </Label>
              <Textarea
                id="ds-message"
                className="mt-2"
                placeholder="The more specific, the better. Date, location, rough guest count, what you're hoping for."
              />
            </div>

            <div>
              <Label htmlFor="ds-error">Field with error</Label>
              <Input
                id="ds-error"
                className="mt-2"
                hasError
                hint="Something didn't go through. Try again."
                defaultValue="not-an-email"
              />
            </div>
          </div>
        </Group>
      </Section>

      {/* ---------- Layout: PageHeader (sample) ---------- */}
      <Section tone="stone-light" topRule padding="default" width="wide">
        <Group label="07 · PageHeader (sample)">
          <div className="border-[0.5px] border-rule p-8 bg-stone">
            <PageHeader
              eyebrow="What We Do"
              as="h2"
              headline={
                <>
                  Four lanes. One standard<span className="text-oxblood">.</span>
                </>
              }
              lede="We produce community events first, milestones second, weddings third, and the occasional one-off we couldn't pass up."
            />
          </div>
        </Group>
      </Section>

      {/* ---------- Layout: Section tones ---------- */}
      <Section topRule padding="default" width="wide">
        <Group label="08 · Section tones">
          <p className="max-w-2xl font-body text-sm text-ink">
            70 / 25 / 5. Stone dominates. Stone Light alternates. Ink and
            Oxblood are reserved for the brand-moment hero sections.
          </p>

          <div className="space-y-1">
            <div className="bg-stone px-6 py-8 border-[0.5px] border-rule">
              <p className="font-body text-sm font-medium uppercase tracking-small-cap text-stone-dark">
                Stone — the ground (default)
              </p>
              <p className="mt-3 font-display text-3xl text-ink">
                The work that makes the event work<span className="text-oxblood">.</span>
              </p>
            </div>
            <div className="bg-stone-light px-6 py-8 border-[0.5px] border-rule">
              <p className="font-body text-sm font-medium uppercase tracking-small-cap text-stone-dark">
                Stone Light — alternating
              </p>
              <p className="mt-3 font-display text-3xl text-ink">
                The work that makes the event work<span className="text-oxblood">.</span>
              </p>
            </div>
            <div className="bg-ink px-6 py-8">
              <p className="font-body text-sm font-medium uppercase tracking-small-cap text-stone-dark">
                Ink — footer CTA / hero moments
              </p>
              <p className="mt-3 font-display text-3xl text-cream">
                The work that makes the event work<span className="text-oxblood">.</span>
              </p>
            </div>
            <div className="bg-oxblood px-6 py-8">
              <p className="font-body text-sm font-medium uppercase tracking-small-cap text-cream/70">
                Oxblood — the rare brand-moment hero
              </p>
              <p className="mt-3 font-display text-3xl text-cream italic">
                We set. It&apos;s done<span className="text-stone">.</span>
              </p>
            </div>
          </div>
        </Group>
      </Section>

      {/* ---------- Typography scale ---------- */}
      <Section tone="stone-light" topRule padding="default" width="wide">
        <Group label="09 · Typography scale">
          <div className="space-y-8">
            <div>
              <p className="font-body text-xs uppercase tracking-small-cap text-stone-dark mb-2">
                text-display-xl · Fraunces 500
              </p>
              <p className="font-display text-display-xl font-medium leading-[0.95] tracking-tight text-ink">
                Hierarchy through size.
              </p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-small-cap text-stone-dark mb-2">
                text-display-lg · Fraunces 400
              </p>
              <p className="font-display text-display-lg text-ink">
                A market that knows the season it&apos;s in.
              </p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-small-cap text-stone-dark mb-2">
                text-display-md · Fraunces 400
              </p>
              <p className="font-display text-display-md text-ink">
                Set the table. Open the doors. Done.
              </p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-small-cap text-stone-dark mb-2">
                Fraunces italic · pull-quote / lede
              </p>
              <p className="font-display text-xl italic text-stone-dark">
                A small house in Frederick, Maryland, producing the events that
                make a town feel like a town.
              </p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-small-cap text-stone-dark mb-2">
                Inter regular · body
              </p>
              <p className="font-body text-base text-ink">
                Forty makers, six farmers, two cider houses, and a pie contest
                decided by the public. The third Carroll Creek Harvest Market,
                presented by Set &amp; Done, returns to the linear park.
              </p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-small-cap text-stone-dark mb-2">
                Inter · small-cap eyebrow (tracking-small-cap)
              </p>
              <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
                Community Events · Primary
              </p>
            </div>
          </div>
        </Group>
      </Section>

      {/* ---------- Color tokens ---------- */}
      <Section topRule padding="default" width="wide">
        <Group label="10 · Color tokens">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Swatch name="Oxblood" hex="#6B2A2A" bgClass="bg-oxblood" textClass="text-cream" />
            <Swatch name="Stone" hex="#D9D2C2" bgClass="bg-stone" textClass="text-ink" />
            <Swatch name="Ink" hex="#1A1814" bgClass="bg-ink" textClass="text-cream" />
            <Swatch name="Stone Light" hex="#E8E2D2" bgClass="bg-stone-light" textClass="text-ink" />
            <Swatch name="Stone Dark" hex="#A89F8A" bgClass="bg-stone-dark" textClass="text-ink" />
            <Swatch name="Linen" hex="#C9BFA8" bgClass="bg-linen" textClass="text-ink" />
            <Swatch name="Cream" hex="#F4EEE0" bgClass="bg-cream" textClass="text-ink" />
            <Swatch name="Brass" hex="#A8824A" bgClass="bg-brass" textClass="text-cream" />
          </div>
          <p className="font-body text-xs text-stone-dark italic">
            Brass is foil only — never use as a digital fill in production
            compositions.
          </p>
        </Group>
      </Section>

      {/* ---------- Footer note ---------- */}
      <Section tone="ink" topRule padding="tight" width="wide">
        <div className="text-center">
          <Wordmark size="md" inverted />
          <p className="mt-4 font-body text-xs uppercase tracking-small-cap text-stone-dark">
            Design System · Internal · Delete before launch
          </p>
        </div>
      </Section>
    </>
  );
}

function Swatch({
  name,
  hex,
  bgClass,
  textClass,
}: {
  name: string;
  hex: string;
  bgClass: string;
  textClass: string;
}) {
  return (
    <div
      className={`${bgClass} ${textClass} flex aspect-square flex-col justify-between p-4 border-[0.5px] border-rule`}
    >
      <span className="font-body text-xs font-medium uppercase tracking-small-cap">
        {name}
      </span>
      <span className="font-body text-xs uppercase tracking-small-cap-tight opacity-80">
        {hex}
      </span>
    </div>
  );
}
