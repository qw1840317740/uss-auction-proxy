// Vehicle prices are stored and invoiced in JPY. The English site shows an
// approximate USD conversion using the daily ECB reference rate (Frankfurter).

export interface FxRate {
  /** Yen per 1 US dollar */
  jpyPerUsd: number;
  /** Rate date (YYYY-MM-DD) as published by the ECB */
  date: string;
}

// Used only if the rate API is unreachable at build/revalidate time.
export const FALLBACK_FX: FxRate = { jpyPerUsd: 158, date: "2026-10-20" };

/** Server-only: fetch the latest USD→JPY rate, cached and refreshed once a day. */
export async function getJpyPerUsd(): Promise<FxRate> {
  try {
    const res = await fetch("https://api.frankfurter.dev/v1/latest?from=USD&to=JPY", {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return FALLBACK_FX;
    const data = (await res.json()) as { date?: string; rates?: { JPY?: number } };
    const rate = data.rates?.JPY;
    if (!rate || !Number.isFinite(rate) || rate <= 0) return FALLBACK_FX;
    return { jpyPerUsd: rate, date: data.date ?? FALLBACK_FX.date };
  } catch {
    return FALLBACK_FX;
  }
}

/** JPY amount → approximate USD, rounded to the nearest $100. */
export function jpyToUsd(jpy: number, fx: FxRate): number {
  return Math.round(jpy / fx.jpyPerUsd / 100) * 100;
}

export function formatUsd(usd: number): string {
  return `US$${new Intl.NumberFormat("en-US").format(usd)}`;
}
