import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/layout/page-header";
import { InquiryForm } from "@/components/inquiry-form";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get In Touch — Set & Done · Frederick Events",
  description:
    "Tell us what you're putting together. First conversation's free. Frederick, MD.",
};

/**
 * Get In Touch — copy verbatim from site_copy.md Page 6.
 * Two columns on desktop: form (60%) left, direct contact (40%) right.
 * The form submission (Resend) is wired in Step 9; validation works now.
 */
export default function GetInTouchPage() {
  return (
    <>
      <Section width="wide" padding="hero">
        <PageHeader
          eyebrow="Get In Touch"
          headline={
            <>
              Tell us what you&apos;re putting together
              <span className="text-oxblood">.</span>
            </>
          }
          lede="The more specific, the better. First conversation's free. Coffee's on us. We respond within two business days — usually faster."
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-16">
          {/* Form — 60% */}
          <div className="md:col-span-3">
            <InquiryForm />
          </div>

          {/* Direct contact — 40% */}
          <aside className="md:col-span-2">
            <div className="border-t-[0.5px] border-rule pt-8 md:border-l-[0.5px] md:border-t-0 md:pl-12 md:pt-0">
              <h2 className="font-display text-2xl text-ink">
                Or just reach out directly<span className="text-oxblood">.</span>
              </h2>

              <dl className="mt-8 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <dt className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="font-body text-base text-ink underline decoration-[0.5px] underline-offset-4 transition-colors hover:text-oxblood"
                    >
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>

                <div className="flex flex-col gap-1">
                  <dt className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={CONTACT.phoneHref}
                      className="font-body text-base text-ink transition-colors hover:text-oxblood"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </dd>
                </div>

                <div className="flex flex-col gap-1">
                  <dt className="font-body text-xs font-medium uppercase tracking-small-cap text-oxblood">
                    Office hours
                  </dt>
                  <dd className="font-body text-base text-ink">
                    {CONTACT.officeHours}
                  </dd>
                </div>

                <div className="flex flex-col gap-1 border-t-[0.5px] border-rule pt-6">
                  <dd className="font-body text-base text-ink">
                    {CONTACT.city} · {CONTACT.state}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
