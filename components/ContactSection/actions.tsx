"use server";

import nodemailer from "nodemailer";
import ServiceMail from "../ServiceMail";

export async function sendServiceEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const serviceType = formData.get("serviceType") as string;
  const description = formData.get("description") as string;

  const { renderToStaticMarkup } = await import("react-dom/server");

  const renderedHTML = renderToStaticMarkup(
    <ServiceMail name={name} phone={phone} email={email} serviceType={serviceType} description={description} />,
  );

  if (process.env.NODE_ENV === "development") {
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.SMTP_USER || "deepintaj@gmail.com",
          pass: process.env.SMTP_PASSWORD || "deepintaj@example.com",
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER || "deepintaj@gmail.com",
        to: process.env.SMTP_USER || "deepintaj@gmail.com",
        subject: "طلب خدمة جديدة",
        html: renderedHTML,
      });
    } catch (error) {
      console.error("Email sending failed (dev):", error);
      // return { success: false, message: "فشل إرسال البريد الإلكتروني. يرجى المحاولة مرة أخرى." };
    }
  } else {
    try {
      const { WorkerMailer } = await import("worker-mailer");

      // Establishes a direct outbound TCP connection via cloudflare:sockets
      const mailer = await WorkerMailer.connect({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // set false for 587 (uses STARTTLS), true for 465
        credentials: {
          username: process.env.SMTP_USER!,
          password: process.env.SMTP_PASSWORD!,
        },
      });

      await mailer.send({
        from: { email: process.env.SMTP_USER! },
        to: { email: process.env.SMTP_USER! },
        subject: "طلب خدمة جديدة",
        html: renderedHTML,
      });
    } catch (error) {
      console.error("Email sending failed (production):", error);
      // return { success: false, message: "فشل إرسال البريد الإلكتروني. يرجى المحاولة مرة أخرى." };
    }
  }

  // return { success: true, message: "تم إرسال الرسالة بنجاح!" };
}
