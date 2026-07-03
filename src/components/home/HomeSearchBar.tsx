"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Search } from "lucide-react";
import { vehicleMakes } from "@/lib/brands";

const priceBands = [
  { key: "", label: "any", to: "" },
  { key: "2m", label: "to2m", to: "2000000" },
  { key: "3m", label: "to3m", to: "3000000" },
  { key: "5m", label: "to5m", to: "5000000" },
  { key: "10m", label: "to10m", to: "10000000" },
];

export function HomeSearchBar() {
  const t = useTranslations("home.search");
  const router = useRouter();
  const [q, setQ] = useState("");
  const [make, setMake] = useState("");
  const [priceTo, setPriceTo] = useState("");

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
    <section className="relative z-20 -mt-16 pb-2">
      <div className="container-main">
        <form
          onSubmit={submit}
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto] gap-3 items-end"
        >
          {/* Keyword */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500 px-1">
              {t("keyword")}
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("keywordPlaceholder")}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Make */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500 px-1">
              {t("make")}
            </label>
            <select
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-colors"
            >
              <option value="">{t("anyMake")}</option>
              {vehicleMakes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500 px-1">
              {t("price")}
            </label>
            <select
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-colors"
            >
              {priceBands.map((b) => (
                <option key={b.key || "any"} value={b.to}>
                  {b.to ? t("underPrice", { amount: b.to }) : t("anyPrice")}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <Search className="w-4 h-4" />
            {t("search")}
          </button>
        </form>
      </div>
    </section>
  );
}
