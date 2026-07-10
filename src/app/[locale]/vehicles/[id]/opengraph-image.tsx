import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { demoVehicles } from "@/lib/demo-vehicles";

export const alt = "ClickCar — Vehicle Export from Japan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Per-vehicle social card. Layout: hero photo on the left, vehicle info on the
 * right, ClickCar wordmark footer. Falls back to a generic card when the
 * vehicle isn't found.
 *
 * Next.js 16: `params` is a Promise that resolves to the dynamic segments.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const vehicle = demoVehicles.find((v) => v.id === id);

  // Optional Geist font for cleaner text rendering.
  let fontData: ArrayBuffer | undefined;
  try {
    fontData = await fetch(
      "https://github.com/vercel/geist-font/raw/main/fonts/Geist/Geist-SemiBold.ttf",
    ).then((r) => (r.ok ? r.arrayBuffer() : undefined));
  } catch {
    /* ignore */
  }
  const fonts = fontData
    ? [{ name: "Geist", data: fontData, style: "normal" as const, weight: 600 as const }]
    : undefined;

  if (!vehicle) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0f172a",
            color: "#f8fafc",
            fontFamily: "Geist, sans-serif",
            fontSize: 64,
            fontWeight: 700,
          }}
        >
          ClickCar — Vehicle not found
        </div>
      ),
      { ...size, ...(fonts ? { fonts } : {}) },
    );
  }

  // Try to load the hero image. Two cases:
  //   1) Local /images/cars/... — read from disk via fs/promises
  //   2) Remote https://... — fetch the URL
  // If both fail, render the right-side info column without a hero.
  let heroData: ArrayBuffer | undefined;
  const heroSrc = vehicle.images[0];
  try {
    if (heroSrc.startsWith("http")) {
      const r = await fetch(heroSrc);
      if (r.ok) heroData = await r.arrayBuffer();
    } else {
      const localPath = heroSrc.startsWith("/") ? heroSrc.slice(1) : heroSrc;
      const buf = await readFile(join(process.cwd(), "public", localPath));
      heroData = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
    }
  } catch {
    /* ignore — fall back to text-only card */
  }

  const priceJpy = new Intl.NumberFormat("ja-JP").format(vehicle.price);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0f172a",
          color: "#f8fafc",
          fontFamily: "Geist, sans-serif",
        }}
      >
        {/* Left: hero image (or empty panel) */}
        <div
          style={{
            width: 660,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#020617",
            overflow: "hidden",
          }}
        >
          {heroData ? (
            // @ts-expect-error Satori accepts ArrayBuffer for <img src>
            <img src={heroData} alt={`${vehicle.make} ${vehicle.model}`} width={660} height={630} style={{ objectFit: "cover" }} />
          ) : (
            <div style={{ fontSize: 36, color: "#64748b" }}>ClickCar</div>
          )}
        </div>

        {/* Right: info column */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "56px 56px 48px 48px",
          }}
        >
          {/* Brand chip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              color: "#94a3b8",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ display: "flex" }}>ClickCar</div>
            <div style={{ display: "flex", color: "#475569" }}>·</div>
            <div style={{ display: "flex" }}>Saitama, Japan</div>
          </div>

          {/* Name */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
            <div style={{ display: "flex", fontSize: 30, color: "#cbd5e1", fontWeight: 500 }}>
              {vehicle.year} · {vehicle.bodyType}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.05,
                marginTop: 8,
                letterSpacing: "-0.02em",
              }}
            >
              {vehicle.make} {vehicle.model}
            </div>
          </div>

          {/* Specs grid */}
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 32,
              fontSize: 26,
              color: "#cbd5e1",
            }}
          >
            <div style={{ display: "flex" }}>{vehicle.displacement}</div>
            <div style={{ display: "flex", color: "#475569" }}>·</div>
            <div style={{ display: "flex" }}>{vehicle.fuel}</div>
            <div style={{ display: "flex", color: "#475569" }}>·</div>
            <div style={{ display: "flex" }}>{vehicle.transmission}</div>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#cbd5e1", marginTop: 12 }}>
            {new Intl.NumberFormat("ja-JP").format(vehicle.mileage)} km · {vehicle.exteriorColor}
          </div>

          {/* Spacer pushes price + footer to bottom */}
          <div style={{ flex: 1, display: "flex" }} />

          {/* Price badge */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 12,
              padding: "20px 28px",
              background: "linear-gradient(90deg, #ef4444 0%, #f97316 100%)",
              borderRadius: 16,
              alignSelf: "flex-start",
            }}
          >
            <div style={{ display: "flex", fontSize: 26, color: "#fef2f2" }}>JPY</div>
            <div style={{ display: "flex", fontSize: 56, fontWeight: 700, color: "#ffffff" }}>
              ¥{priceJpy}
            </div>
          </div>

          {/* Footer URL */}
          <div style={{ display: "flex", fontSize: 24, color: "#64748b", marginTop: 24 }}>
            clickcar.jp / {vehicle.id}
          </div>
        </div>
      </div>
    ),
    { ...size, ...(fonts ? { fonts } : {}) },
  );
}