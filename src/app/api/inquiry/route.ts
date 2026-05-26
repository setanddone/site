import { Resend } from "resend";
import { inquirySchema, EVENT_TYPE_OPTIONS } from "@/lib/inquiry-schema";
import { CONTACT } from "@/lib/site";

/**
 * POST /api/inquiry — handle the Get In Touch form.
 *
 * 1. Re-validate the payload with the shared zod schema.
 * 2. Email Kimberly the inquiry (reply-to = inquirer).
 * 3. Send the inquirer an auto-response.
 *
 * Configuration (env):
 *   RESEND_API_KEY   required — without it the route returns 503 so the
 *                    form shows its "email us directly" fallback.
 *   INQUIRY_TO       optional — defaults to kim@setanddone.co
 *   RESEND_FROM      optional — defaults to "Set & Done <noreply@…>"
 *                    NOTE: the from-domain must be verified in Resend.
 */

const FROM = process.env.RESEND_FROM ?? "Set & Done <noreply@setanddone.co>";
const REPLY_FROM = "Kimberly Nick <kim@setanddone.co>";
const TO = process.env.INQUIRY_TO ?? CONTACT.email;

function eventTypeLabel(value: string): string {
  return EVENT_TYPE_OPTIONS.find((o) => o.value === value)?.label ?? value;
}

export async function POST(request: Request) {
  // Guard: no key means the form isn't wired yet. Fail honestly.
  if (!process.env.RESEND_API_KEY) {
    console.warn("[inquiry] RESEND_API_KEY not set — inquiry not delivered.");
    return Response.json(
      { error: "Email is not configured yet." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const firstName = data.name.split(" ")[0];

  try {
    // 1. Notify Kimberly.
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: data.email,
      subject: `New inquiry — ${eventTypeLabel(data.eventType)} — ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "—"}`,
        `Event type: ${eventTypeLabel(data.eventType)}`,
        `Date: ${data.date || "—"}`,
        `Budget: ${data.budget || "—"}`,
        `Source: ${data.source || "—"}`,
        "",
        "What they're putting together:",
        data.description,
      ].join("\n"),
    });

    // 2. Auto-response to the inquirer.
    await resend.emails.send({
      from: REPLY_FROM,
      to: data.email,
      subject: "Got it — Kimberly here",
      text: [
        `Hi ${firstName},`,
        "",
        `Got your note. I'll be back to you within two business days, usually faster. If it's urgent, you can also reach me directly at ${CONTACT.phoneDashed}.`,
        "",
        "Pull up a chair.",
        "",
        "— Kimberly",
        "Set & Done.",
        "The work that makes the event work.",
      ].join("\n"),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("[inquiry] Resend send failed:", err);
    return Response.json({ error: "Send failed." }, { status: 502 });
  }
}
