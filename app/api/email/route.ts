import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const result =  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "coolage512@gmail.com",
    subject: "Contact Form",
    text: `${name} / ${email} / ${message}`,
  });
  return Response.json({ ok: true });
}