import Link from "next/link";
import { cn } from "@/lib/cn";
import { ImageFrame } from "@/components/ui/image-frame";
import type { Project } from "@/lib/projects";

/**
 * ProjectTile — a single case-study tile.
 *
 * Used in the Home "Recent goings-on" preview and The Work grid.
 * Structure per site_copy.md:
 *   image · type eyebrow · client + event title · date and location ·
 *   one-line description
 *
 * The whole tile is a link to the case study. Hover lifts the type to
 * Oxblood — no shadows, no scale transforms; restraint.
 */

type ProjectTileProps = {
  project: Project;
  /** Sizes hint for responsive image loading. */
  sizes?: string;
  className?: string;
};

export function ProjectTile({ project, sizes, className }: ProjectTileProps) {
  return (
    <Link
      href={`/the-work/${project.slug}`}
      className={cn("group flex flex-col", className)}
    >
      <ImageFrame
        src={project.hero}
        alt={`${project.title} — ${project.location}`}
        ratio="aspect-[3/2]"
        fallbackLabel={project.type}
        sizes={sizes ?? "(min-width: 768px) 33vw, 100vw"}
      />

      <div className="mt-5">
        <span className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
          {project.type}
        </span>
        <h3 className="mt-2 font-display text-2xl text-ink transition-colors group-hover:text-oxblood">
          {project.title}
        </h3>
        <p className="mt-1 font-body text-sm text-stone-dark">
          {project.date} · {project.location}
        </p>
        <p className="mt-3 font-body text-base leading-relaxed text-ink">
          {project.oneLineDescription}
        </p>
      </div>
    </Link>
  );
}
