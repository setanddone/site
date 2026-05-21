import { Section } from "@/components/layout/section";
import { ImageFrame } from "@/components/ui/image-frame";
import { FooterCta } from "@/components/layout/footer-cta";
import type { Project } from "@/lib/projects";

/**
 * CaseStudy — the single-project template (site_copy.md Page 3a).
 *
 * Structure: title block → hero image → The Brief → What We Did (scope) →
 * How It Went (outcome) → Photo Gallery (only when images exist) →
 * Credits → footer CTA.
 *
 * Editorial layout (title block above the image rather than overlaid) so
 * it reads cleanly with OR without photography. When real photos land in
 * project.hero / project.gallery, the ImageFrames swap from the branded
 * fallback to the actual images automatically.
 */
export function CaseStudy({ project }: { project: Project }) {
  const hasGallery = project.gallery.length > 0;

  return (
    <article>
      {/* Title block */}
      <Section width="wide" padding="hero">
        <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          {project.type} · {project.date}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-display-lg font-normal text-ink">
          {project.title}
          <span className="text-oxblood">.</span>
        </h1>
        <p className="mt-6 font-body text-base uppercase tracking-small-cap-tight text-stone-dark">
          {project.location}
        </p>
        <p className="mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-stone-dark">
          {project.oneLineDescription}
        </p>
      </Section>

      {/* Hero image */}
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
        <ImageFrame
          src={project.hero}
          alt={`${project.title} — ${project.location}`}
          ratio="aspect-[16/9]"
          fallbackLabel={project.type}
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
        />
      </div>

      {/* The Brief */}
      <Section topRule width="default">
        <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          The Brief
        </p>
        <p className="mt-4 font-body text-lg leading-relaxed text-ink">
          {project.brief}
        </p>
      </Section>

      {/* What We Did */}
      <Section tone="stone-light" topRule width="default">
        <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          What We Did
        </p>
        <ul className="mt-4">
          {project.scope.map((item) => (
            <li
              key={item}
              className="border-b-[0.5px] border-rule py-3 font-body text-base text-ink first:border-t-[0.5px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* How It Went */}
      <Section topRule width="default">
        <p className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          How It Went
        </p>
        <p className="mt-4 font-body text-lg leading-relaxed text-ink">
          {project.outcome}
        </p>
      </Section>

      {/* Photo Gallery — only when images exist */}
      {hasGallery && (
        <Section tone="stone-light" topRule width="wide">
          <p className="mb-8 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
            Photo Gallery
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((src, i) => (
              <ImageFrame
                key={src}
                src={src}
                alt={`${project.title} — photo ${i + 1}`}
                ratio="aspect-[3/2]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </Section>
      )}

      {/* Credits */}
      <Section topRule width="wide">
        <p className="mb-8 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          Credits
        </p>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Client", value: project.credits.client },
            { label: "Photography", value: project.credits.photographer },
            { label: "Venue", value: project.credits.venue },
            { label: "Year", value: project.credits.year },
          ].map((credit) => (
            <div
              key={credit.label}
              className="flex flex-col gap-1 border-t-[0.5px] border-rule pt-4"
            >
              <dt className="font-body text-xs font-medium uppercase tracking-small-cap text-stone-dark">
                {credit.label}
              </dt>
              <dd className="font-body text-base text-ink">{credit.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Footer CTA */}
      <FooterCta
        headline="Putting together something similar?"
        ctaLabel="Tell us what you're working on →"
        ctaHref="/get-in-touch"
      />
    </article>
  );
}
