import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  preferredLanguage: z.string().optional(),
  inquiryType: z.enum(["general", "specificVehicle", "rental"]).default("general"),
  // General inquiry fields
  vehicleType: z.string().optional(),
  brand: z.string().optional(),
  budget: z.string().optional(),
  conditions: z.string().optional(),
  // Specific vehicle fields
  vehicleModel: z.string().optional(),
  vehicleYear: z.string().optional(),
  vehicleMileage: z.string().optional(),
  vehicleColor: z.string().optional(),
  vehicleTrans: z.string().optional(),
  // Rental fields
  rentalCar: z.string().optional(),
  usage: z.string().optional(),
  rentalDate: z.string().optional(),
  rentalDuration: z.string().optional(),
  pickupLocation: z.string().optional(),
  // Common
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // TODO: Save to database via Prisma + send email notification
    console.log("Contact form submission:", data);

    return NextResponse.json({ message: "Inquiry sent successfully" }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
