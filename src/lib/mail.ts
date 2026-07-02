import nodemailer from "nodemailer";
import { Resend } from "resend";

export type ContactInquiry = {
  name?: string;
  email: string;
  phone?: string;
  preferredLanguage?: string;
  inquiryType: "general" | "specificVehicle" | "rental";
  vehicleType?: string;
  brand?: string;
  budget?: string;
  conditions?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  vehicleMileage?: string;
  vehicleColor?: string;
  vehicleTrans?: string;
  rentalCar?: string;
  usage?: string;
  rentalDate?: string;
  rentalDuration?: string;
  pickupLocation?: string;
  message?: string;
};

const fieldLabels: Record<keyof ContactInquiry, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  preferredLanguage: "Preferred language",
  inquiryType: "Inquiry type",
  vehicleType: "Vehicle type",
  brand: "Brand",
  budget: "Budget",
  conditions: "Condition",
  vehicleModel: "Vehicle model",
  vehicleYear: "Vehicle year",
  vehicleMileage: "Mileage",
  vehicleColor: "Color",
  vehicleTrans: "Transmission",
  rentalCar: "Rental car",
  usage: "Usage",
  rentalDate: "Rental date",
  rentalDuration: "Rental duration",
  pickupLocation: "Pickup location",
  message: "Message",
};

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing email environment variable: ${name}`);
  return value;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function rows(data: ContactInquiry) {
  return (Object.keys(fieldLabels) as (keyof ContactInquiry)[])
    .map((key) => [fieldLabels[key], data[key]] as const)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "");
}

function createContactEmail(data: ContactInquiry) {
  const safeRows = rows(data);
  const text = safeRows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2 style="margin:0 0 16px">New ClickCar inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px">
        ${safeRows
          .map(
            ([label, value]) => `
              <tr>
                <th style="text-align:left;border:1px solid #e5e7eb;background:#f9fafb;padding:8px 10px;width:190px">${escapeHtml(label)}</th>
                <td style="border:1px solid #e5e7eb;padding:8px 10px">${escapeHtml(String(value))}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
  const subject = `New ClickCar inquiry: ${data.inquiryType} - ${data.email}`;

  return { html, subject, text };
}

async function sendWithResend(data: ContactInquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const to = requireEnv("CONTACT_TO_EMAIL");
  const from = process.env.RESEND_FROM_EMAIL || "ClickCar <onboarding@resend.dev>";
  const { html, subject, text } = createContactEmail(data);
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject,
    text,
    html,
  });

  if (error) {
    throw new Error(`Resend email failed: ${error.message}`);
  }

  return true;
}

async function sendWithSmtp(data: ContactInquiry) {
  const host = requireEnv("SMTP_HOST");
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");
  const to = requireEnv("CONTACT_TO_EMAIL");
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const from = process.env.CONTACT_FROM_EMAIL || user;
  const servername = process.env.SMTP_TLS_SERVERNAME;
  const authMethod = process.env.SMTP_AUTH_METHOD;
  const { html, subject, text } = createContactEmail(data);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    authMethod,
    tls: servername ? { servername } : undefined,
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: data.email,
    subject,
    text,
    html,
  });
}

export async function sendContactNotification(data: ContactInquiry) {
  if (await sendWithResend(data)) return;
  await sendWithSmtp(data);
}
