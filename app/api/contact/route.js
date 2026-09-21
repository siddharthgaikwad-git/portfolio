import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message, website } = await req.json();

    // honeypot: bots fill hidden field 
    if (website) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (message.length > 3000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `${message}\n\nFrom: ${name} (${email})`,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}