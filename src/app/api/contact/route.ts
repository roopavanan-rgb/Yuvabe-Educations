import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const LIMITS = { name: 100, email: 254, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Field = "name" | "email" | "message";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );

/** Same rules as the form, re-checked here because client checks can be skipped. */
function validate(body: Record<string, unknown>) {
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const errors: Partial<Record<Field, string>> = {};

  if (name.length < 2) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) errors.name = `Name must be under ${LIMITS.name} characters.`;

  if (!email) errors.email = "Please enter your email.";
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address.";

  if (message.length < 10) errors.message = "Please write a message of at least 10 characters.";
  else if (message.length > LIMITS.message)
    errors.message = `Message must be under ${LIMITS.message} characters.`;

  return { name, email, message, errors };
}

export async function POST(req: Request) {
  const { RESEND_API_KEY, EMAIL_FROM, RECEIVER_EMAIL } = process.env;
  if (!RESEND_API_KEY || !EMAIL_FROM || !RECEIVER_EMAIL) {
    console.error("Contact form: RESEND_API_KEY, EMAIL_FROM or RECEIVER_EMAIL is not set");
    return NextResponse.json(
      { message: "The contact form is not configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots
  // move on. (Named "_gotcha" rather than e.g. "company" so browser autofill
  // never fills it for real visitors.)
  if (typeof body._gotcha === "string" && body._gotcha.trim() !== "") {
    console.warn("Contact form: honeypot filled, message dropped");
    return NextResponse.json({ ok: true });
  }

  const { name, email, message, errors } = validate(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ message: "Please fix the highlighted fields.", errors }, { status: 422 });
  }

  const resend = new Resend(RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: RECEIVER_EMAIL.split(",").map((s) => s.trim()).filter(Boolean),
    replyTo: email,
    subject: `New contact message from ${name.replace(/[\r\n]+/g, " ")}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:Arial,sans-serif;font-size:15px;color:#111;line-height:1.6">
        <h2 style="color:#592AC7;margin:0 0 12px">New message from the website</h2>
        <p style="margin:0"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 16px"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <div style="padding:16px;background:#F7F3FF;border-radius:8px;white-space:pre-wrap">${escapeHtml(message)}</div>
        <p style="color:#888;font-size:12px;margin-top:16px">Sent from the Connect With Us form. Reply to this email to answer ${escapeHtml(name)} directly.</p>
      </div>`,
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return NextResponse.json(
      { message: "We couldn't send your message right now. Please try again later." },
      { status: 502 }
    );
  }

  console.info("Contact form: sent via Resend, id", data?.id);
  return NextResponse.json({ ok: true });
}
