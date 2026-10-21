"use client";

import { createContext, useCallback, useContext, type ReactNode } from "react";
import { useLocale } from "next-intl";
import { FALLBACK_FX, formatUsd, jpyToUsd, type FxRate } from "@/lib/currency";
import { formatPrice } from "@/lib/utils";

const FxContext = createContext<FxRate>(FALLBACK_FX);

export function CurrencyProvider({ fx, children }: { fx: FxRate; children: ReactNode }) {
  return <FxContext.Provider value={fx}>{children}</FxContext.Provider>;
}

export function useFxRate(): FxRate {
  return useContext(FxContext);
}

/**
 * Locale-aware vehicle price formatter: USD (approx.) on the English site,
 * JPY everywhere else.
 */
export function useVehiclePrice() {
  const locale = useLocale();
  const fx = useFxRate();
  const showUsd = locale === "en";
  const format = useCallback(
    (jpy: number) => (showUsd ? formatUsd(jpyToUsd(jpy, fx)) : formatPrice(jpy)),
    [showUsd, fx],
  );
  return { format, showUsd, fx };
}
