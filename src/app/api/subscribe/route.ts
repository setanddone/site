import { Resend } from "resend";
import { z } from "zod";
import { CONTACT } from "@/lib/site";

/**
 * POST /api/subscribe — Field Notes Phase 1 email capture.
 *
 * If RESEND_AUDIENCE_ID is set, the address is added to that Resend
 * audience. Otherwise we email Kimberly the new subscriber so no signup
 * is lost before the audience is created. Either way needs RESEND_API_KEY.
 *
 * Config (env):
 *   RESEND_API_KEY      required (503 without it)
 *   RESEND_AUDIENCE_ID  optional — when set, contacts are added here
 *   INQUIRY_TO          optional — notification recipient (default kim@)
 *   RESEND_FROM         optional — verified-domain sender
 */

const FROM = process.env.RESEND_FROM ?? "Set & Done <noreply@setanddone.co>";
const TO = process.env.INQUIRY_TO ?? CONTACT.email;

const schema = z.object({ email: z.string().email() });

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[subscribe] RESEND_API_KEY not set — signup not stored.");
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

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Valid email required." }, { status: 400 });
  }

  const { email } = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  try {
    if (audienceId) {
      await resend.contacts.create({
        email,
        audienceId,
        unsubscribed: false,
      });
    } else {
      // No audience yet — don't lose the signup; tell Kimberly.
      await resend.emails.send({
        from: FROM,
        to: TO,
        subject: "New Field Notes subscriber",
        text: `Someone signed up for Field Notes: ${email}`,
      });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("[subscribe] failed:", err);
    return Response.json({ error: "Subscribe failed." }, { status: 502 });
  }
}
