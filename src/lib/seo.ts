// Centralized SEO helpers — single source of truth for site config, URL builders,
// hreflang languages map, and vehicle enum mappers for schema.org Vehicle JSON-LD.

import { routing } from "@/i18n/routing";

/**
 * Site-wide configuration. Anything that needs the canonical URL, brand name,
 * logo, phone, or address should import from here rather than hard-coding.
 */
export const siteConfig = {
  name: "ClickCar",
  legalName: "ClickCar (Kaisei Sangyo LLC)",
  tagline:
    "Premium Japanese used vehicles, exported worldwide from Saitama, Japan.",
  description:
    "Premium Japanese used vehicle sales and global export service from Saitama, Japan.",
  baseUrl: "https://clickcar.jp",
  logo: "/images/clickcar-logo.png",
  phone: "+81-49-257-4332",
  address: {
    street: "200-2 Kitanagaido",
    locality: "Miyoshi-machi",
    region: "Saitama",
    postalCode: "354-0045",
    country: "JP",
  },
  geo: { latitude: 35.8326, longitude: 139.5197 },
  social: {
    // Add real handles as the business opens social profiles.
    // Empty array keeps AutoDealer.sameAs free of broken links.
  },
  openingHours: {
    weekdays: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    saturday: { days: ["Saturday"], opens: "10:00", closes: "15:00" },
  },
  currenciesAccepted: "JPY",
  paymentAccepted: "Cash, Bank Transfer",
  priceRange: "$$",
  foundingDate: "2020",
  // Countries we commonly export to. Used in AutoDealer.areaServed.
  areaServedCountries: ["JP", "CN", "HK", "TW", "SG", "MY", "TH", "PH", "AU", "NZ", "GB", "US", "CA", "ZA", "KE", "AE"],
} as const;

/** Build an absolute URL from a relative path. */
export function getAbsoluteUrl(path = ""): string {
  return `${siteConfig.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Map app locale → OpenGraph locale string. */
export function getOgLocale(locale: string): string {
  switch (locale) {
    case "zh":
      return "zh_CN";
    case "ja":
      return "ja_JP";
    default:
      return "en_US";
  }
}

/** Canonical URL for a page in the given locale. `path` should NOT include the locale segment. */
export function buildCanonical(locale: string, path = ""): string {
  return getAbsoluteUrl(`/${locale}${path.startsWith("/") ? path : `/${path}`}`);
}

/**
 * Build the `alternates.languages` map for hreflang. Always includes
 * every locale variant and an `x-default` pointing at the default locale.
 *
 * @param locale  Current page locale
 * @param path    Path suffix after the locale segment (e.g. "/vehicles", "/about")
 */
export function localizedHreflangLanguages(locale: string, path = ""): Record<string, string> {
  const cleaned = path.startsWith("/") ? path : `/${path}`;
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `${siteConfig.baseUrl}/${l}${cleaned}`]),
  );
  languages["x-default"] = `${siteConfig.baseUrl}/${routing.defaultLocale}${cleaned}`;
  return languages;
}

/** ISO 8601 date (YYYY-MM-DD) one year from today. Used for Offer.priceValidUntil. */
export function priceValidUntilISO(): string {
  const d = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
  return d.toISOString().slice(0, 10);
}

// ---------------------------------------------------------------------------
// Vehicle enum mappers (raw Vehicle field → schema.org Google recommended enum)
// ---------------------------------------------------------------------------

/** Map raw `fuel` value → schema.org `vehicleFuelType` enum URL. */
export function mapFuel(raw: string): string {
  const v = raw.toLowerCase();
  if (v.includes("electric") || v.includes("ev")) return "https://schema.org/ElectricVehicle";
  if (v.includes("plugin") || v.includes("plug-in")) return "https://schema.org/HybridPlugin";
  if (v.includes("hybrid")) return "https://schema.org/Hybrid";
  if (v.includes("diesel")) return "https://schema.org/Diesel";
  if (v.includes("gasoline") || v.includes("petrol")) return "https://schema.org/Gasoline";
  return "https://schema.org/OtherFuel";
}

/** Map raw `transmission` value → schema.org `vehicleTransmission` ("Automatic" | "Manual"). */
export function mapTransmission(raw: string): "Automatic" | "Manual" {
  const v = raw.toUpperCase();
  // CVT is technically automatic in Google's enum
  if (v === "MT" || v === "MANUAL") return "Manual";
  return "Automatic";
}

/**
 * Map raw `drive` value → schema.org `vehicleDrivenWheels` enum URL.
 * Note: `2WD` is genuinely ambiguous (FR vs RR depends on make/year), so we
 * best-effort: AWD/4WD → AllWheelDrive; FWD → FrontWheelDrive; RWD → RearWheelDrive;
 * 2WD defaults to RearWheelDrive (older convention; flag for follow-up).
 */
export function mapDrive(raw: string): string {
  const v = raw.toUpperCase();
  if (v === "AWD" || v === "4WD" || v === "4X4") return "https://schema.org/AllWheelDrive";
  if (v === "FWD" || v === "FF") return "https://schema.org/FrontWheelDrive";
  if (v === "RWD" || v === "FR" || v === "RR" || v === "2WD") return "https://schema.org/RearWheelDrive";
  return "https://schema.org/AllWheelDrive";
}

/** Parse engine CC out of a free-form displacement string like "2,487cc". Returns a number, or null. */
export function parseDisplacementCc(raw: string): number | null {
  const m = raw.replace(/,/g, "").match(/(\d+)\s*cc/i);
  return m ? Number(m[1]) : null;
}