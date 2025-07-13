/* eslint-disable @typescript-eslint/no-unused-vars */
// app/[locale]/contact/email.ts
import nodemailer from "nodemailer";
import { getTranslations } from "next-intl/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASSWORD, 
  },
});

export async function sendEmail(to: string, subject: string, text: string, html?: string) {
  const t = await getTranslations("Email.error");
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  try {
    
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error(t("sendFailed"));
  }
}