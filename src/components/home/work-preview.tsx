import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ProjectTile } from "@/components/work/project-tile";
import { getFeatured } from "@/lib/projects";

/**
 * Home "The Work" preview.
 *
 * Eyebrow "THE WORK", headline "Recent goings-on.", three featured tiles,
 * then "See all of it →".
 *
 * Desktop: 3-column grid. Mobile: horizontal snap-scroll (per
 * INSTRUCTIONS) so the tiles stay full-bleed-ish and swipeable.
 */
export function WorkPreview() {
  const featured = getFeatured(3);

  return (
    <Section topRule width="wide">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
        <div>
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
            The Work
          </p>
          <h2 className="font-display text-display-md font-normal text-ink">
            Recent goings-on<span className="text-oxblood">.</span>
          </h2>
        </div>
        <Button href="/the-work" variant="secondary" size="md">
          See all of it →
        </Button>
      </div>

      {/* Mobile: horizontal snap-scroll. Desktop: 3-col grid. */}
      <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
        {featured.map((project) => (
          <ProjectTile
            key={project.slug}
            project={project}
            className="w-[80%] shrink-0 snap-start md:w-auto"
            sizes="(min-width: 768px) 33vw, 80vw"
          />
        ))}
      </div>
    </Section>
  );
}
