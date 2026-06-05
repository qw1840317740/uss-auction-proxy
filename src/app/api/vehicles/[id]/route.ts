import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // TODO: Fetch vehicle from Prisma
  return NextResponse.json({
    id,
    message: "Vehicle detail - connect database to enable",
  });
}
