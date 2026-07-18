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
      host: process.env.SMTP_HOST || "127.0.0.1",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // modify later
      // auth: {
      //   user: process.env.SMTP_USER || 'deepintaj@example.com',
      //   pass: process.env.SMTP_PASSWORD || 'deepintaj@example.com',
      // },
    });

    const { renderToStaticMarkup } = await import("react-dom/server");

    const renderedHTML = renderToStaticMarkup(
      <ServiceMail name={name} phone={phone} email={email} serviceType={serviceType} description={description} />,
    );

    await transporter.sendMail({
      from: process.env.SMTP_USER || "deepintaj@gmail.com",
      to: process.env.SMTP_USER || "you@example.com",
      subject: "طلب خدمة جديدة",
      html: renderedHTML,
    });
  }