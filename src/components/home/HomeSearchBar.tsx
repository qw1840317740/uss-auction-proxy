"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Search } from "lucide-react";
import { vehicleMakes } from "@/lib/brands";
import { useVehiclePrice } from "@/components/providers/CurrencyProvider";
import { formatUsd } from "@/lib/currency";
import { formatPrice } from "@/lib/utils";

const priceBands = [
  { key: "", label: "any", to: "" },
  { key: "2m", label: "to2m", to: "2000000" },
  { key: "3m", label: "to3m", to: "3000000" },
  { key: "5m", label: "to5m", to: "5000000" },
  { key: "10m", label: "to10m", to: "10000000" },
];

// English site: budget bands in US$ (the vehicles page reads priceTo in the display currency).
const usdPriceBands = [
  { key: "", label: "any", to: "" },
  { key: "25k", label: "to25k", to: "25000" },
  { key: "50k", label: "to50k", to: "50000" },
  { key: "100k", label: "to100k", to: "100000" },
  { key: "200k", label: "to200k", to: "200000" },
];

export function HomeSearchBar() {
  const t = useTranslations("home.search");
  const router = useRouter();
  const [q, setQ] = useState("");
  const [make, setMake] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const { showUsd } = useVehiclePrice();
  const bands = showUsd ? usdPriceBands : priceBands;
  const formatBand = (amount: string) => (showUsd ? formatUsd(Number(amount)) : formatPrice(Number(amount)));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (make) params.set("make", make);
    if (priceTo) params.set("priceTo", priceTo);
    const qs = params.toString();
    router.push(`/vehicles${qs ? `?${qs}` : ""}`);
  };

  return (
    <section className="border-b border-rule bg-paper-2">
      <div className="container-main py-5">
        <form
          onSubmit={submit}
          className="grid grid-cols-1 items-end gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_auto]"
        >
          <label className="flex min-w-0 flex-col gap-1.5">
            <span className="cc-label">{t("keyword")}</span>
            <span className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" aria-hidden="true" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("keywordPlaceholder")}
                className="cc-field pl-9 placeholder:text-ink-3"
              />
            </span>
          </label>

          <label className="flex min-w-0 flex-col gap-1.5">
            <span className="cc-label">{t("make")}</span>
            <select value={make} onChange={(e) => setMake(e.target.value)} className="cc-field">
              <option value="">{t("anyMake")}</option>
              {vehicleMakes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>

          <label className="flex min-w-0 flex-col gap-1.5">
            <span className="cc-label">{t("price")}</span>
            <select value={priceTo} onChange={(e) => setPriceTo(e.target.value)} className="cc-field cc-data">
              {bands.map((b) => (
                <option key={b.key || "any"} value={b.to}>
                  {b.to ? t("underPrice", { amount: formatBand(b.to) }) : t("anyPrice")}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className="cc-btn cc-btn--ink sm:col-span-2 lg:col-span-1">
            <Search className="h-4 w-4" aria-hidden="true" />
            {t("search")}
          </button>
        </form>
      </div>
    </section>
  );
}
