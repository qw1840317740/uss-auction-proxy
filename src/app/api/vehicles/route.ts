import { NextRequest, NextResponse } from "next/server";

// Placeholder API routes - connect to database when ready

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const make = searchParams.get("make");
  const model = searchParams.get("model");
  const yearFrom = searchParams.get("yearFrom");
  const yearTo = searchParams.get("yearTo");
  const priceFrom = searchParams.get("priceFrom");
  const priceTo = searchParams.get("priceTo");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");

  // TODO: Replace with actual Prisma query
  return NextResponse.json({
    vehicles: [],
    pagination: { page, limit, total: 0, totalPages: 0 },
    filters: { make, model, yearFrom, yearTo, priceFrom, priceTo },
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // TODO: Create vehicle with Prisma
  return NextResponse.json({ message: "Vehicle created", vehicle: body }, { status: 201 });
}
