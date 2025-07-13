// app/[locale]/contact/action.ts
"use server";

import { getTranslations } from "next-intl/server";
import { ngoContactTemplate, userContactTemplate } from "./emailTemplates";
import { sendEmail } from "./email";


export async function sendContactEmail(formData: FormData): Promise<{ success?: boolean; error?: string }> {
  try {
    const t = await getTranslations("ContactPage.Form.error");
    const locale = formData.get("locale") as string || "en";

    const firstName = formData.get("firstName") as string;
    const email = formData.get("email") as string;
    const organization = formData.get("organization") as string | null;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Server-side validation   
    
    if (!firstName || !email || !subject || !message) {
      return { error: t("allFieldsRequired") };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { error: t("invalidEmail") };
    }

    // Send email to NGO
    const ngoSubject = `New Contact Form Submission from ${firstName}`;
    const ngoText = `Name: ${firstName}\nEmail: ${email}\nOrganization: ${organization || "N/A"}\nSubject: ${subject}\nMessage: ${message}`;
    const ngoHtml = await ngoContactTemplate(firstName, email, organization, subject, message, locale);

    await sendEmail("gracedyssa@gmail.com", ngoSubject, ngoText, ngoHtml);

    // Send confirmation email to user
    const tUser = await getTranslations({ locale, namespace: "Email.UserContactTemplate" });
    const userSubject = tUser("subject");
    const userText = `Dear ${firstName},\n\nThank you for contacting ALLEN+ (Aid Life Learn Environment). We have received your message and will respond within 24-48 hours.\n\nBest regards,\nThe ALLEN+ Team`;
    const userHtml = await userContactTemplate(firstName, locale);

    await sendEmail(email, userSubject, userText, userHtml);

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    const t = await getTranslations("ContactPage.Form.error");
    return { error: t("genericError") };
  }
}