"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CONTACT } from "@/lib/site";

/**
 * EmailCapture — the Field Notes Phase 1 sign-up.
 *
 * A single email field + "Sign me up →". Validates the address client-side
 * and posts to /api/subscribe (route lands in Step 9, which adds the
 * subscriber to a Resend audience / notifies Kimberly). Until then a
 * submit surfaces the error state; validation works now.
 */

const emailSchema = z.string().email();
type Status = "idle" | "success" | "error";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [invalid, setInvalid] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");

    const parsed = emailSchema.safeParse(email.trim());
    if (!parsed.success) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setPending(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: parsed.data }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setPending(false);
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-md border-l-[0.5px] border-rule pl-6">
        <p className="font-display text-xl italic text-ink">
          You&apos;re on the list.
        </p>
        <p className="mt-2 font-body text-base text-stone-dark">
          We&apos;ll be in touch when the first one drops.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-md">
      <Label htmlFor="fn-email">Just an email.</Label>
      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end">
        <Input
          id="fn-email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          hasError={invalid}
          hint={invalid ? "That doesn't look like an email." : undefined}
          className="sm:flex-1"
        />
        <Button type="submit" variant="primary" size="md" disabled={pending}>
          {pending ? "One moment…" : "Sign me up →"}
        </Button>
      </div>

      {status === "error" && (
        <p className="mt-4 font-body text-sm text-oxblood" role="alert">
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
    </form>
  );
}
