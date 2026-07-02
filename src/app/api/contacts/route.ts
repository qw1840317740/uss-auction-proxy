import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/db";
import { sendContactNotification, type ContactInquiry } from "@/lib/mail";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  preferredLanguage: z.string().optional(),
  inquiryType: z.enum(["general", "specificVehicle", "rental"]).default("general"),
  vehicleType: z.string().optional(),
  brand: z.string().optional(),
  budget: z.string().optional(),
  conditions: z.string().optional(),
  vehicleModel: z.string().optional(),
  vehicleYear: z.string().optional(),
  vehicleMileage: z.string().optional(),
  vehicleColor: z.string().optional(),
  vehicleTrans: z.string().optional(),
  preferredModel: z.string().optional(),
  year: z.string().optional(),
  mileage: z.string().optional(),
  color: z.string().optional(),
  transmission: z.string().optional(),
  rentalCar: z.string().optional(),
  usage: z.string().optional(),
  rentalDate: z.string().optional(),
  rentalDuration: z.string().optional(),
  pickupLocation: z.string().optional(),
  message: z.string().optional(),
});

function normalizeInquiry(data: z.infer<typeof contactSchema>): ContactInquiry {
  return {
    name: data.name,
    email: data.email,
    phone: data.phone,
    preferredLanguage: data.preferredLanguage,
    inquiryType: data.inquiryType,
    vehicleType: data.vehicleType,
    brand: data.brand,
    budget: data.budget,
    conditions: data.conditions,
    vehicleModel: data.vehicleModel || data.preferredModel,
    vehicleYear: data.vehicleYear || data.year,
    vehicleMileage: data.vehicleMileage || data.mileage,
    vehicleColor: data.vehicleColor || data.color,
    vehicleTrans: data.vehicleTrans || data.transmission,
    rentalCar: data.rentalCar,
    usage: data.usage,
    rentalDate: data.rentalDate,
    rentalDuration: data.rentalDuration,
    pickupLocation: data.pickupLocation,
    message: data.message,
  };
}

function describeError(error: unknown) {
  if (!(error instanceof Error)) return error;
  const smtpError = error as Error & {
    code?: string;
    command?: string;
    response?: string;
    responseCode?: number;
  };

  return {
    name: smtpError.name,
    message: smtpError.message,
    code: smtpError.code,
    command: smtpError.command,
    responseCode: smtpError.responseCode,
    response: smtpError.response,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.parse(body);
    const inquiry = normalizeInquiry(parsed);

    try {
      await prisma.contactMessage.create({
        data: {
          name: inquiry.name,
          email: inquiry.email,
          phone: inquiry.phone,
          preferredLanguage: inquiry.preferredLanguage,
          inquiryType: inquiry.inquiryType,
          vehicleType: inquiry.vehicleType,
          brand: inquiry.brand,
          budget: inquiry.budget,
          conditions: inquiry.conditions,
          vehicleModel: inquiry.vehicleModel,
          vehicleYear: inquiry.vehicleYear,
          vehicleMileage: inquiry.vehicleMileage,
          vehicleColor: inquiry.vehicleColor,
          vehicleTrans: inquiry.vehicleTrans,
          message: inquiry.message,
          status: "pending",
        },
      });
    } catch (error) {
      console.warn("Contact inquiry database save failed:", describeError(error));
    }

    await sendContactNotification(inquiry);

    return NextResponse.json({ message: "Inquiry sent successfully" }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }

    const details = describeError(error);
    console.error("Contact form submission failed:", details);
    return NextResponse.json(
      {
        error: "Inquiry submission failed",
        details: process.env.CONTACT_DEBUG_ERRORS === "true" ? details : undefined,
      },
      { status: 500 },
    );
  }
}
