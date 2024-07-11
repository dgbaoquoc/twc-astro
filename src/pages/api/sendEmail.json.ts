import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { to, html } = body;
    const send = await resend.emails.send({
      from: "TWC <noreply@contact.twccom.co>",
      to,
      subject: "Thank you for contacting us.",
      html,
    });

    if (send.error) {
      console.error(send.error);
      return new Response(JSON.stringify(send.error), {
        status: 400,
        statusText: "Bad Request",
      });
    }

    return new Response(JSON.stringify(send.data), {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};
