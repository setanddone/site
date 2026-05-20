"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  inquirySchema,
  type InquiryInput,
  EVENT_TYPE_OPTIONS,
  BUDGET_OPTIONS,
  SOURCE_OPTIONS,
} from "@/lib/inquiry-schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site";

/**
 * InquiryForm — the Get In Touch form.
 *
 * Client component: react-hook-form + zod validation. Posts JSON to
 * /api/inquiry (route handler lands in Step 9, which sends the
 * notification + auto-response via Resend). Until then a submit will
 * surface the error state — validation is fully functional now.
 *
 * Microcopy verbatim from site_copy.md (loading / success / error +
 * field placeholders + the after-submission confirmation).
 */

type Status = "idle" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
  });

  async function onSubmit(data: InquiryInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  // After-submission confirmation — replaces the form.
  if (status === "success") {
    return (
      <div className="border-[0.5px] border-rule bg-stone-light p-8 md:p-12">
        <h2 className="font-display text-display-md font-normal text-ink">
          Got it<span className="text-oxblood">.</span>
        </h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-ink">
          Thanks for the note. We&apos;ll be back to you within two business
          days, usually faster. In the meantime, you can find us on Instagram
          @setanddone or just call.
        </p>
        <p className="mt-6 font-display text-xl italic text-stone-dark">
          — Kimberly
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
      {/* Name */}
      <div>
        <Label htmlFor="name" required>
          Name
        </Label>
        <Input
          id="name"
          className="mt-2"
          placeholder="Your name"
          autoComplete="name"
          hasError={Boolean(errors.name)}
          hint={errors.name?.message}
          {...register("name")}
        />
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input
          id="email"
          type="email"
          className="mt-2"
          placeholder="you@email.com"
          autoComplete="email"
          hasError={Boolean(errors.email)}
          hint={errors.email?.message}
          {...register("email")}
        />
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          className="mt-2"
          placeholder="Optional"
          autoComplete="tel"
          {...register("phone")}
        />
      </div>

      {/* Event type */}
      <div>
        <Label htmlFor="eventType" required>
          What kind of event?
        </Label>
        <Select
          id="eventType"
          className="mt-2"
          defaultValue=""
          hasError={Boolean(errors.eventType)}
          hint={errors.eventType?.message}
          {...register("eventType")}
        >
          <option value="" disabled>
            Pick one
          </option>
          {EVENT_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      </div>

      {/* Description */}
      <div>
        <Label htmlFor="description" required>
          What are you putting together?
        </Label>
        <Textarea
          id="description"
          className="mt-2"
          rows={6}
          placeholder="The more specific, the better. Date, location, rough guest count, what you're hoping for. If you don't know yet, that's fine — just tell us what you do know."
          hasError={Boolean(errors.description)}
          hint={errors.description?.message}
          {...register("description")}
        />
      </div>

      {/* When */}
      <div>
        <Label htmlFor="date">When?</Label>
        <Input
          id="date"
          className="mt-2"
          placeholder="Date or 'still figuring it out'"
          {...register("date")}
        />
      </div>

      {/* Budget */}
      <div>
        <Label htmlFor="budget">Budget range</Label>
        <Select id="budget" className="mt-2" defaultValue="" {...register("budget")}>
          <option value="">Not sure yet</option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
      </div>

      {/* Source */}
      <div>
        <Label htmlFor="source">How did you hear about us?</Label>
        <Select id="source" className="mt-2" defaultValue="" {...register("source")}>
          <option value="">—</option>
          {SOURCE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
      </div>

      {/* Error state */}
      {status === "error" && (
        <p className="font-body text-sm text-oxblood" role="alert">
          Something didn&apos;t go through. Try again, or just email us
          directly:{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="underline decoration-[0.5px] underline-offset-4"
          >
            {CONTACT.email}
          </a>
        </p>
      )}

      <div>
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "One moment…" : "Send it →"}
        </Button>
      </div>
    </form>
  );
}
