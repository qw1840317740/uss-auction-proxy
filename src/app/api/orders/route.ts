import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // TODO: Fetch user's orders from Prisma
  return NextResponse.json({ orders: [] });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // TODO: Create order with Prisma
  return NextResponse.json({ message: "Order created", order: body }, { status: 201 });
}
