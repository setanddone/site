import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/work/case-study";
import { getProject, getProjectSlugs } from "@/lib/projects";

/**
 * Single case study — /the-work/[slug].
 *
 * All projects are known at build time, so we pre-render every slug via
 * generateStaticParams and disable dynamic params (unknown slugs 404).
 *
 * Next 16: `params` is a Promise and must be awaited.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Not found — Set & Done" };
  }

  return {
    title: `${project.title} — Set & Done`,
    description: project.oneLineDescription,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudy project={project} />;
}
