"use server";

import { Resend } from "resend";
import ServiceMail from "../ServiceMail";

export async function sendServiceEmail(
  _prevState: { success: boolean; error?: string },
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const serviceType = formData.get("serviceType") as string;
    const description = formData.get("description") as string;

    const { renderToStaticMarkup } = await import("react-dom/server");

    const renderedHTML = renderToStaticMarkup(
      <ServiceMail name={name} phone={phone} email={email} serviceType={serviceType} description={description} />,
    );

    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("Resend API key not found in environment variables");
    }

    const resend = new Resend(process.env.RESEND_API_KEY!);

    const { data, error } = await resend.emails.send({
      from: "Deepintaj <noreply@deepintaj.sa>",
      to: process.env.SMTP_USER || "deepintaj@gmail.com",
      subject: "طلب خدمة جديدة",
      html: renderedHTML,
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        success: false,
        error: error.message,
      };
    }

    console.log("Email sent successfully:", data?.id);
    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
