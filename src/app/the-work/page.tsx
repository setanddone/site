import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/layout/page-header";
import { ProjectGrid } from "@/components/work/project-grid";
import { FooterCta } from "@/components/layout/footer-cta";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "The Work — Recent Events · Set & Done · Frederick",
  description:
    "Recent festivals, markets, milestones, and weddings produced by Set & Done in Frederick, MD and the DMV.",
};

/**
 * The Work — project grid + the honest launch note.
 * Copy verbatim from site_copy.md Page 3.
 */
export default function TheWorkPage() {
  return (
    <>
      <Section width="wide" padding="hero">
        <PageHeader
          eyebrow="The Work"
          headline={
            <>
              What we&apos;ve been up to<span className="text-oxblood">.</span>
            </>
          }
          lede="Recent events, recent clients, recent Saturdays."
        />

        {/* Launch note — in voice */}
        <div className="mb-16 max-w-2xl border-l-[0.5px] border-rule pl-6">
          <p className="font-display text-lg italic leading-relaxed text-stone-dark">
            A short note — we&apos;re new. The portfolio is small on purpose. We
            started Set &amp; Done in 2026 to do the work we think this town
            deserves. The case studies below are early. More to come. Pull up a
            chair.
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </Section>

      <FooterCta
        headline="Want to put on something good?"
        ctaLabel="Tell us what you're putting together →"
        ctaHref="/get-in-touch"
      />
    </>
  );
}
