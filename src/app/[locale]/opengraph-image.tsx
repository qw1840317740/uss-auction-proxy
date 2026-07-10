import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "ClickCar — Premium Japanese Used Cars & Global Export";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Site-wide social card. 1200×630 with the ClickCar wordmark, a tagline and
// a ClickCar badge. Background is a dark slate gradient with a subtle accent.
//
// Next.js 16: `params` is a Promise that resolves to the dynamic segment.
export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params; // locale is accepted but the card content is locale-agnostic

  // Try to load the Geist font and the brand mark from the project. Both are
  // optional — if either fails, fall back gracefully (system font + missing
  // mark image) so the card still renders.
  let fontData: ArrayBuffer | undefined;
  let markData: ArrayBuffer | undefined;
  try {
    fontData = await fetch(
      "https://github.com/vercel/geist-font/raw/main/fonts/Geist/Geist-SemiBold.ttf",
    ).then((r) => (r.ok ? r.arrayBuffer() : undefined));
  } catch {
    /* ignore — system font fallback */
  }
  try {
    markData = await readFile(
      join(process.cwd(), "public/images/clickcar-mark.png"),
    ).then((b) => b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer);
  } catch {
    /* ignore — mark is decorative */
  }

  const fonts = fontData
    ? [{ name: "Geist", data: fontData, style: "normal" as const, weight: 600 as const }]
    : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%)",
          color: "#f8fafc",
          fontFamily: "Geist, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background:
              "linear-gradient(90deg, #ef4444 0%, #f59e0b 50%, #ef4444 100%)",
            display: "flex",
          }}
        />

        {/* Brand mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {markData ? (
            // @ts-expect-error Satori accepts ArrayBuffer for <img src>
            <img src={markData} alt="ClickCar mark" width={88} height={88} />
          ) : null}
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em" }}>
            ClickCar
          </div>
        </div>

        {/* Spacer pushes the headline toward center */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 900,
              display: "flex",
            }}
          >
            Premium Japanese Used Cars
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 500,
              color: "#cbd5e1",
              marginTop: 24,
              display: "flex",
            }}
          >
            Exported Worldwide from Saitama, Japan
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 32,
            color: "#94a3b8",
          }}
        >
          <div style={{ display: "flex" }}>clickcar.jp</div>
          <div style={{ display: "flex", color: "#f87171", fontWeight: 600 }}>
            Toyota · Honda · Nissan · Mazda · Subaru · Lexus
          </div>
        </div>
      </div>
    ),
    { ...size, ...(fonts ? { fonts } : {}) },
  );
}