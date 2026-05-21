import { ProjectTile } from "@/components/work/project-tile";
import type { Project } from "@/lib/projects";

/**
 * ProjectGrid — responsive grid of case-study tiles.
 * 1 column on mobile, 2 on tablet, 3 on desktop. Generous gaps; the
 * tiles carry their own hairline-free composition.
 */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectTile
          key={project.slug}
          project={project}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      ))}
    </div>
  );
}
