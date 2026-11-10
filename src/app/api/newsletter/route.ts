import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Newsletter sign-up: stores the address as a Resend contact (so it can be
 * reached later with Resend Broadcasts) and tells the team by email.
 *
 * Env: RESEND_API_KEY, EMAIL_FROM, RECEIVER_EMAIL, and optionally
 * RESEND_SEGMENT_ID to add new subscribers to a specific segment.
 */
export async function POST(req: Request) {
  const { RESEND_API_KEY, EMAIL_FROM, RECEIVER_EMAIL, RESEND_SEGMENT_ID } = process.env;
  if (!RESEND_API_KEY) {
    console.error("Newsletter: RESEND_API_KEY is not set");
    return NextResponse.json(
      { message: "Sign-up isn't available right now. Please try again later." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: hidden from people, so only bots fill it. Pretend success.
  if (typeof body._gotcha === "string" && body._gotcha.trim() !== "") {
    console.warn("Newsletter: honeypot filled, sign-up dropped");
    return NextResponse.json({ ok: true });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 422 });
  }

  const resend = new Resend(RESEND_API_KEY);

  // contacts.create() silently upserts, so look the address up first to tell
  // existing subscribers apart (and avoid re-notifying the team).
  const existing = await resend.contacts.get({ email });
  if (existing.data && !existing.data.unsubscribed) {
    return NextResponse.json({ ok: true, alreadySubscribed: true });
  }

  const { data, error } = await resend.contacts.create({
    email,
    unsubscribed: false,
    ...(RESEND_SEGMENT_ID ? { segments: [{ id: RESEND_SEGMENT_ID }] } : {}),
  });

  if (error) {
    console.error("Newsletter: Resend contacts error", error);
    return NextResponse.json(
      { message: "We couldn't sign you up right now. Please try again later." },
      { status: 502 }
    );
  }
  console.info("Newsletter: contact created, id", data?.id);

  // Team notification is best-effort: the sign-up is already saved.
  if (EMAIL_FROM && RECEIVER_EMAIL) {
    const { error: mailError } = await resend.emails.send({
      from: EMAIL_FROM,
      to: RECEIVER_EMAIL.split(",").map((s) => s.trim()).filter(Boolean),
      subject: "New newsletter sign-up",
      text: `${email} signed up for the newsletter on the website.`,
      html: `<div style="font-family:Arial,sans-serif;font-size:15px;color:#111">
        <h2 style="color:#592AC7;margin:0 0 12px">New newsletter sign-up</h2>
        <p style="margin:0"><strong>${email.replace(/[<>&"']/g, "")}</strong> signed up on the website.</p>
        <p style="color:#888;font-size:12px;margin-top:16px">Saved to your Resend contacts.</p>
      </div>`,
    });
    if (mailError) console.error("Newsletter: team notification failed", mailError);
  }

  return NextResponse.json({ ok: true });
}
