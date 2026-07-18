"use server";

import ServiceMail from "../ServiceMail";
import nodemailer from "nodemailer";

export async function sendServiceEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const serviceType = formData.get("serviceType") as string;
  const description = formData.get("description") as string;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SMTP_USER || "deepintaj@gmail.com",
      pass: process.env.SMTP_PASSWORD || "deepintaj@example.com",
    },
  });

  const { renderToStaticMarkup } = await import("react-dom/server");

  const renderedHTML = renderToStaticMarkup(
    <ServiceMail name={name} phone={phone} email={email} serviceType={serviceType} description={description} />,
  );

  await transporter.sendMail({
    from: process.env.SMTP_USER || "deepintaj@gmail.com",
    to: process.env.SMTP_USER || "deepintaj@gmail.com",
    subject: "طلب خدمة جديدة",
    html: renderedHTML,
  });
}
