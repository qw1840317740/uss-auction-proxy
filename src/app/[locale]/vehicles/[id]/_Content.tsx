"use client";

import { useVehiclePrice } from "@/components/providers/CurrencyProvider";
import React, { useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { GlassBreadcrumb } from "@/components/layout/GlassBreadcrumb";
import { formatMileage, formatPrice, cn } from "@/lib/utils";
import {
  Heart,
  Share2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { demoVehicles, getVehicleText, getVehicleList } from "@/lib/demo-vehicles";
import { useFavorites } from "@/lib/useFavorites";

// ---------------------------------------------------------------------------
// Demo vehicle lookup
// ---------------------------------------------------------------------------

const vehicles: Record<string, (typeof demoVehicles)[number]> = {};
for (const v of demoVehicles) {
  vehicles[v.id] = v;
}

const defaultVehicle = vehicles["1"];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function VehicleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const t = useTranslations("vehicles");
  const vt = useTranslations("vehicles.vehicle");
  const { format: formatVehiclePrice, showUsd, fx } = useVehiclePrice();
  const ct = useTranslations("common");
  const locale = useLocale();

  const vehicle = vehicles[id] ?? { ...defaultVehicle, id };
  const { toggle, isFavorite, favorites } = useFavorites();

  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState<"condition" | "equipment" | "catalog">("condition");
  const [toast, setToast] = useState<{ msg: string; saved: boolean } | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  // Wrap toggle so we surface an obvious toast on every click
  const handleToggle = (vehicleId: string) => {
    const willSave = !isFavorite(vehicleId);
    toggle(vehicleId);
    setToast({ msg: willSave ? vt("addedToFavorites") : vt("removedFromFavorites"), saved: willSave });
    if (toastTimeoutRef.current) window.clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = window.setTimeout(() => setToast(null), 2500);
  };

  const images = vehicle.images?.length ? vehicle.images : ["/images/cars/car-side-1.jpg"];
  const highlights = getVehicleList(vehicle.highlights, locale);
  const description = getVehicleText(vehicle.description, locale);
  const conditionNotes = vehicle.conditionNotes ? getVehicleText(vehicle.conditionNotes, locale) : "";

  const goPrev = () => setActiveImg((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setActiveImg((i) => (i + 1) % images.length);
  const onGalleryKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share({ title, url });
        return;
      }
    } catch {
      // user cancelled or share failed → fall through to clipboard
    }
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setToast({ msg: vt("linkCopied"), saved: true });
        if (toastTimeoutRef.current) window.clearTimeout(toastTimeoutRef.current);
        toastTimeoutRef.current = window.setTimeout(() => setToast(null), 2500);
        return;
      }
    } catch {
      // clipboard blocked (insecure context / permissions) → last-resort fallback below
    }
    // Last-resort fallback: temporary textarea + execCommand for older / insecure contexts
    try {
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setToast({ msg: vt("linkCopied"), saved: true });
      if (toastTimeoutRef.current) window.clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = window.setTimeout(() => setToast(null), 2500);
    } catch {
      // give up silently
    }
  };

  const hasPrice = vehicle.price > 0;

  // Similar vehicles: same make or body type, excluding current
  const similarVehicles = demoVehicles
    .filter((v) => v.id !== vehicle.id && v.status === "available" && (v.make === vehicle.make || v.bodyType === vehicle.bodyType))
    .slice(0, 3);

  const repairLabel =
    vehicle.repairHistory === "none"
      ? vt("repairNone")
      : vehicle.repairHistory === "yes"
        ? vt("repairYes")
        : vt("repairUnknown");

  const quickSpecs: { label: string; value: string; tone?: "good" | "warn" }[] = [
    { label: vt("year"), value: String(vehicle.year) },
    { label: vt("mileage"), value: formatMileage(vehicle.mileage) },
    { label: vt("transmission"), value: [vehicle.steering, vehicle.transmission].filter(Boolean).join(" · ") },
    { label: vt("inspection"), value: vehicle.inspection || "—" },
    {
      label: vt("repairHistory"),
      value: repairLabel,
      tone: vehicle.repairHistory === "none" ? "good" : vehicle.repairHistory === "yes" ? "warn" : undefined,
    },
    { label: vt("region"), value: vehicle.region },
  ];

  const conditionSpecs = [
    { label: vt("year"), value: String(vehicle.year) },
    { label: vt("mileage"), value: formatMileage(vehicle.mileage) },
    { label: vt("inspection"), value: vehicle.inspection || "—" },
    { label: vt("repairHistory"), value: repairLabel },
    { label: vt("transmission"), value: vehicle.transmission },
    { label: t("filters.drive"), value: vehicle.drive },
    { label: vt("fuel"), value: vehicle.fuel },
    { label: vt("displacement"), value: vehicle.displacement },
    { label: t("filters.color"), value: vehicle.exteriorColor },
    { label: t("filters.bodyType"), value: vehicle.bodyType },
    { label: vt("seats"), value: `${vehicle.seats}` },
    { label: vt("region"), value: vehicle.region },
  ];

  const catalogSpecs = [
    { label: t("filters.bodyType"), value: vehicle.bodyType },
    { label: vt("doors"), value: `${vehicle.doors}` },
    { label: vt("seats"), value: `${vehicle.seats}` },
    { label: vt("dimensions"), value: vehicle.dimensions },
    { label: vt("weight"), value: vehicle.weight },
    { label: vt("maxPower"), value: vehicle.maxPower },
    { label: vt("displacement"), value: vehicle.displacement },
    { label: vt("fuelEconomy"), value: vehicle.fuelEconomy },
    { label: vt("fuel"), value: vehicle.fuel },
  ];

  const tabs = [
    { key: "condition", label: vt("condition") },
    { key: "equipment", label: vt("equipment") },
    { key: "catalog", label: vt("catalog") },
  ] as const;

  const iconBtn =
    "flex h-9 w-9 items-center justify-center rounded-md border border-rule bg-paper-raised/90 text-ink-2 transition-colors hover:border-ink-3 hover:text-ink";

  return (
    <div className="min-h-screen bg-paper">
      <div className="border-b border-rule bg-paper-raised">
        <div className="container-main py-3">
          <GlassBreadcrumb backHref="/vehicles" backLabel={ct("back")} current={t("title")} />
        </div>
      </div>

      <div className="container-main py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
          {/* LEFT: main content */}
          <div className="min-w-0 space-y-10">
            {/* Gallery */}
            <div
              className="cc-card overflow-hidden"
              tabIndex={0}
              onKeyDown={onGalleryKey}
              aria-roledescription="image-carousel"
            >
              <div className="group relative aspect-[16/10] overflow-hidden bg-paper-2">
                <Image
                  src={images[activeImg]}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="cc-data pointer-events-none absolute bottom-3 left-3 rounded-md bg-graphite/85 px-2 py-1 text-[11px] text-on-dark">
                  {String(activeImg + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </div>
                {images.length > 1 && (
                  <>
                    <button type="button" onClick={goPrev} aria-label="Previous image" className={`${iconBtn} absolute left-3 top-1/2 -translate-y-1/2`}>
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button type="button" onClick={goNext} aria-label="Next image" className={`${iconBtn} absolute right-3 top-1/2 -translate-y-1/2`}>
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
                <div className="absolute right-3 top-3 flex gap-2">
                  <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleToggle(vehicle.id); }}
                    aria-label={isFavorite(vehicle.id) ? vt("savedToFavorites") : vt("addToFavorites")}
                    aria-pressed={isFavorite(vehicle.id)}
                    className={cn(iconBtn, isFavorite(vehicle.id) && "text-signal hover:text-signal")}
                  >
                    <Heart className="h-4 w-4" fill={isFavorite(vehicle.id) ? "currentColor" : "none"} />
                  </button>
                  <button type="button" onClick={handleShare} aria-label={vt("share")} className={iconBtn}>
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto border-t border-rule p-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImg(idx)}
                      aria-label={`Image ${idx + 1}`}
                      aria-current={activeImg === idx}
                      className={cn(
                        "relative h-14 w-20 shrink-0 overflow-hidden rounded-md border transition-[border-color,opacity] sm:h-16 sm:w-24",
                        activeImg === idx ? "border-ink" : "border-rule opacity-70 hover:opacity-100",
                      )}
                    >
                      <Image src={img} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} — ${idx + 1}`} fill className="object-cover" sizes="96px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title + spec readout */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="cc-label cc-tick">{vehicle.make}</p>
                {vehicle.status === "sold" && (
                  <span className="cc-label rounded-sm bg-ink px-2 py-0.5 !text-paper">{vt("sold")}</span>
                )}
              </div>
              <h1 className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink [overflow-wrap:anywhere] sm:text-[2.5rem]">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <p className="cc-data mt-3 text-sm text-ink-2">
                {[vehicle.displacement, vehicle.fuel, vehicle.drive, vehicle.exteriorColor].filter(Boolean).join("  ·  ")}
              </p>

              <dl className="mt-7 grid grid-cols-2 border-t border-ink sm:grid-cols-3">
                {quickSpecs.map((spec) => (
                  <div key={spec.label} className="min-w-0 border-b border-rule py-3.5 pr-3">
                    <dt className="cc-label">{spec.label}</dt>
                    <dd className="cc-data mt-1.5 flex items-center gap-2 truncate text-[15px] text-ink">
                      {spec.tone && (
                        <span
                          className={cn("h-1.5 w-1.5 shrink-0", spec.tone === "good" ? "bg-emerald-600" : "bg-signal")}
                          aria-hidden="true"
                        />
                      )}
                      <span className="truncate">{spec.value}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Highlights */}
            {highlights.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink">{vt("highlights")}</h2>
                <ul className="mt-4 grid border-t border-rule sm:grid-cols-2 sm:gap-x-8">
                  {highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 border-b border-rule py-3 text-sm leading-6 text-ink-2">
                      <span className="mt-2.5 h-1 w-3 shrink-0 bg-signal" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Specification tabs */}
            <section>
              <div role="tablist" className="flex gap-6 overflow-x-auto overflow-y-hidden border-b border-rule [scrollbar-width:none]">
                {tabs.map(({ key, label }) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === key}
                    onClick={() => setActiveTab(key)}
                    className={cn(
                      "-mb-px whitespace-nowrap border-b-2 py-3 text-sm font-medium transition-colors",
                      activeTab === key ? "border-signal text-ink" : "border-transparent text-ink-3 hover:text-ink",
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="pt-2" role="tabpanel">
                {activeTab === "condition" && <SpecTable rows={conditionSpecs} />}
                {activeTab === "catalog" && <SpecTable rows={catalogSpecs} />}
                {activeTab === "equipment" && (
                  <ul className="grid sm:grid-cols-2 sm:gap-x-8">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 border-b border-rule py-3 text-sm text-ink-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ink-3" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>

            {/* Overview */}
            {description && (
              <section>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink">{vt("overview")}</h2>
                <p className="mt-4 max-w-[70ch] text-[15px] leading-7 text-ink-2">{description}</p>
                {conditionNotes && (
                  <div className="mt-6 max-w-[70ch] rounded-[10px] border border-rule bg-paper-raised p-5">
                    <h3 className="cc-label cc-tick !font-mono !tracking-[0.08em]">{vt("conditionNotes")}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink-2">{conditionNotes}</p>
                  </div>
                )}
              </section>
            )}

            {/* Similar vehicles */}
            {similarVehicles.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink">{vt("similar")}</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {similarVehicles.map((sv) => (
                    <Link key={sv.id} href={`/vehicles/${sv.id}`} className="cc-card group min-w-0 overflow-hidden">
                      <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
                        <Image
                          src={sv.images[0]}
                          alt={`${sv.year} ${sv.make} ${sv.model}`}
                          fill
                          sizes="(max-width: 640px) 100vw, 260px"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="p-3.5">
                        <p className="cc-label">{sv.make}</p>
                        <h3 className="mt-1 line-clamp-1 text-sm font-semibold text-ink">{sv.year} {sv.model}</h3>
                        <div className="cc-data mt-2 flex items-center justify-between gap-2 text-xs text-ink-2">
                          <span className="truncate">{formatMileage(sv.mileage)}</span>
                          <span className="text-sm font-semibold text-ink">
                            {sv.price > 0 ? formatVehiclePrice(sv.price) : vt("priceOnRequest")}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT: price & contact */}
          <aside className="min-w-0">
            <div className="cc-card p-6 lg:sticky lg:top-24">
              {vehicle.status !== "sold" && <p className="cc-label">{hasPrice ? vt("bodyPrice") : vt("price")}</p>}
              <p className="cc-data mt-2 text-[2rem] font-semibold leading-none tracking-[-0.03em] text-ink">
                {vehicle.status === "sold" ? vt("sold") : hasPrice ? formatVehiclePrice(vehicle.price) : vt("priceOnRequest")}
              </p>

              <div className="mt-4 space-y-1.5 border-b border-rule pb-5">
                {vehicle.status === "sold" ? (
                  <p className="text-sm leading-6 text-ink-2">{vt("soldNote")}</p>
                ) : hasPrice ? (
                  <>
                    {showUsd && (
                      <p className="cc-data text-xs leading-5 text-ink-2">
                        {vt("fxNote", { jpy: formatPrice(vehicle.price), rate: fx.jpyPerUsd.toFixed(2), date: fx.date })}
                      </p>
                    )}
                    <p className="text-xs leading-5 text-ink-3">{vt("feeNote")}</p>
                  </>
                ) : (
                  <p className="text-sm leading-6 text-ink-2">{vt("priceOnRequestNote")}</p>
                )}
              </div>

              <div className="mt-5 grid gap-2.5">
                {vehicle.status === "sold" ? (
                  <Link href="/vehicles" className="cc-btn cc-btn--ink w-full">
                    {vt("browseAvailable")}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <>
                    <Link href="/contact" className="cc-btn cc-btn--signal w-full">
                      {vt("requestQuote")}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link href="/contact" className="cc-btn cc-btn--line w-full">
                      {vt("inquire")}
                    </Link>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleToggle(vehicle.id)}
                  aria-pressed={isFavorite(vehicle.id)}
                  className={cn("cc-btn cc-btn--line w-full", isFavorite(vehicle.id) && "!border-signal text-signal")}
                >
                  <Heart className="h-4 w-4" fill={isFavorite(vehicle.id) ? "currentColor" : "none"} aria-hidden="true" />
                  {isFavorite(vehicle.id) ? vt("savedToFavorites") : vt("addToFavorites")}
                </button>
              </div>

              <dl className="mt-6 grid gap-4 border-t border-rule pt-5">
                <div>
                  <dt className="cc-label">{ct("contactUs")}</dt>
                  <dd className="cc-data mt-1.5 text-base text-ink">
                    <a href="tel:+81492574332" className="cc-link">049-257-4332</a>
                  </dd>
                </div>
                <div>
                  <dt className="cc-label">JST</dt>
                  <dd className="cc-data mt-1.5 text-sm text-ink-2">Mon–Fri 9:00–18:00</dd>
                </div>
              </dl>

              {favorites.length > 0 && (
                <Link
                  href="/favorites"
                  className="mt-5 flex items-center justify-between gap-2 border-t border-rule pt-4 text-xs text-ink-3 transition-colors hover:text-ink"
                >
                  <span className="cc-data">{favorites.length} {vt("savedCountLabel")}</span>
                  <span className="whitespace-nowrap">{vt("viewFavorites")} →</span>
                </Link>
              )}
            </div>
          </aside>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2" role="status">
          <div className="flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper">
            {toast.saved ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <Heart className="h-4 w-4" />}
            {toast.msg}
            {toast.saved && (
              <Link href="/favorites" className="ml-2 text-on-dark-2 underline-offset-2 hover:underline">
                {vt("viewFavorites")}
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SpecTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="grid sm:grid-cols-2 sm:gap-x-8">
      {rows.map((row) => (
        <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-rule py-3">
          <dt className="text-sm text-ink-3">{row.label}</dt>
          <dd className="cc-data min-w-0 break-words text-right text-sm text-ink">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
