import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  // TODO: Fetch blog posts from Prisma
  return NextResponse.json({
    posts: [],
    pagination: { page, limit, total: 0 },
    category,
  });
}
