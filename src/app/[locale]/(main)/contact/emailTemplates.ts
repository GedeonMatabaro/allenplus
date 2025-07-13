// app/[locale]/contact/emailTemplates.ts
import { getTranslations } from "next-intl/server";

export async function ngoContactTemplate(
  firstName: string,
  email: string,
  organization: string | null,
  subject: string,
  message: string,
  locale: string
): Promise<string> {
  const t = await getTranslations({ locale, namespace: "Email.NgoContactTemplate" });

  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; color: #333; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border-top: 5px solid #16a34a; }
          h1 { color: #16a34a; text-align: center; font-size: 28px; margin-bottom: 20px; }
          p { line-height: 1.6; font-size: 16px; margin: 10px 0; }
          .field { background: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 15px; }
          .field strong { color: #16a34a; display: block; margin-bottom: 5px; }
          .footer { text-align: center; font-size: 12px; color: #888; margin-top: 30px; }
          .footer a { color: #16a34a; text-decoration: none; }
          @media (max-width: 600px) {
            .container { padding: 20px; margin: 20px; }
            h1 { font-size: 24px; }
            p, .field { font-size: 14px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${t("heading")}</h1>
          <p>${t("intro")}</p>
          <div class="field">
            <strong>${t("nameLabel")}</strong> ${firstName}
          </div>
          <div class="field">
            <strong>${t("emailLabel")}</strong> <a href="mailto:${email}">${email}</a>
          </div>
          <div class="field">
            <strong>${t("organizationLabel")}</strong> ${organization || "N/A"}
          </div>
          <div class="field">
            <strong>${t("subjectLabel")}</strong> ${subject}
          </div>
          <div class="field">
            <strong>${t("messageLabel")}</strong> ${message}
          </div>
          <p>${t("responsePrompt")}</p>
          <div class="footer">
            <p>${t.raw("footer")}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function userContactTemplate(firstName: string, locale: string): Promise<string> {
  const t = await getTranslations({ locale, namespace: "Email.UserContactTemplate" });

  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; color: #333; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border-top: 5px solid #16a34a; }
          h1 { color: #16a34a; text-align: center; font-size: 28px; margin-bottom: 20px; }
          p { line-height: 1.6; font-size: 16px; margin: 10px 0; }
          .footer { text-align: center; font-size: 12px; color: #888; margin-top: 30px; }
          .footer a { color: #16a34a; text-decoration: none; }
          @media (max-width: 600px) {
            .container { padding: 20px; margin: 20px; }
            h1 { font-size: 24px; }
            p { font-size: 14px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${t("heading")}</h1>
          <p>${t("greeting", { firstName })}</p>
          <p>${t("intro")}</p>
          <p>${t("responsePrompt")}</p>
          <div class="footer">
            <p>${t.raw("footer")}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}