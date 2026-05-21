import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/layout/page-header";
import { EmailCapture } from "@/components/email-capture";

export const metadata: Metadata = {
  title: "Field Notes — Set & Done · Frederick Event Production",
  description:
    "Behind-the-build posts, vendor spotlights, venue features, and seasonal notes from Set & Done.",
};

/**
 * Field Notes — Phase 1 holding screen.
 *
 * Copy verbatim from site_copy.md Page 5 (Phase 1). The slug is reserved
 * and the email capture builds a list ahead of Phase 2 (the full
 * markdown blog), which activates once 5–8 articles are queued.
 */
export default function FieldNotesPage() {
  return (
    <Section width="default" padding="hero">
      <PageHeader
        eyebrow="Field Notes"
        headline={
          <>
            The journal is coming<span className="text-oxblood">.</span>
          </>
        }
      />

      <div className="max-w-2xl">
        <div className="flex flex-col gap-6 font-body text-lg leading-relaxed text-ink">
          <p>
            Field Notes will be where we write about the work — the
            behind-the-build posts, the vendor and venue spotlights, the
            seasonal notes, and the long memos about the towns we love.
            We&apos;re saving up a few stories before we open the doors.
          </p>
          <p>
            If you want to know when the first one drops, leave us your email
            below.
          </p>
        </div>

        <div className="mt-10">
          <EmailCapture />
        </div>
      </div>
    </Section>
  );
}
