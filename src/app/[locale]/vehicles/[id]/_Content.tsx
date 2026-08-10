"use client";

import React, { useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { GlassBreadcrumb } from "@/components/layout/GlassBreadcrumb";
import { formatPrice, formatMileage, cn } from "@/lib/utils";
import {
  Heart,
  Share2,
  CheckCircle2,
  Calendar,
  Gauge,
  Fuel,
  Cog,
  Car,
  Palette,
  CircleDot,
  Phone,
  Globe,
  MapPin,
  ShieldCheck,
  Ruler,
  Weight,
  DoorOpen,
  Users,
  Zap,
  Droplet,
  ChevronLeft,
  ChevronRight,
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
  // Estimated total price (body + ~10% fees) when a public body price exists.
  const totalPrice = hasPrice ? vehicle.price + Math.round(vehicle.price * 0.1) : 0;

  // Similar vehicles: same make or body type, excluding current
  const similarVehicles = demoVehicles
    .filter((v) => v.id !== vehicle.id && (v.make === vehicle.make || v.bodyType === vehicle.bodyType))
    .slice(0, 3);

  const repairLabel = vehicle.repairHistory === "none" ? vt("repairNone") : vt("repairYes");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-white/60 bg-gradient-to-r from-gray-50 via-white to-red-50/40">
        <div className="container-main py-4">
          <GlassBreadcrumb backHref="/vehicles" backLabel={ct("back")} current={t("title")} />
        </div>
      </div>

      <div className="container-main py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ============================================================ */}
          {/* LEFT: Main content (2 cols on desktop) */}
          {/* ============================================================ */}
          <div className="lg:col-span-2 space-y-6">
            {/* ---------- Image gallery ---------- */}
            <div
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              tabIndex={0}
              onKeyDown={onGalleryKey}
              aria-roledescription="image-carousel"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 group">
                <Image
                  src={images[activeImg]}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  fill
                  className="object-contain"
                  priority
                />
                {/* Photo counter */}
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full font-mono pointer-events-none">
                  {activeImg + 1} / {images.length}
                </div>
                {/* Prev / Next buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-white/85 hover:bg-white text-gray-700 hover:text-primary rounded-full flex items-center justify-center shadow-md backdrop-blur-sm transition-all opacity-80 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-white/85 hover:bg-white text-gray-700 hover:text-primary rounded-full flex items-center justify-center shadow-md backdrop-blur-sm transition-all opacity-80 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleToggle(vehicle.id); }}
                    className={`w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm ${isFavorite(vehicle.id) ? "text-red-500" : "text-gray-600"} hover:text-red-500`}
                  >
                    <Heart className="h-5 w-5" fill={isFavorite(vehicle.id) ? "currentColor" : "none"} />
                  </button>
                  <button
                    type="button"
                    onClick={handleShare}
                    aria-label={vt("share")}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-primary shadow-sm"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 p-3 overflow-x-auto">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImg(idx)}
                      className={cn(
                        "relative w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all",
                        activeImg === idx ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                      )}
                    >
                      <Image src={img} alt={`thumb ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ---------- Title + quick spec badges ---------- */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm text-gray-400 font-mono">{vehicle.make}</p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-0.5">
                    {vehicle.model}
                  </h1>
                  <p className="mt-1.5 text-sm text-gray-500">
                    {vehicle.year} &middot; {vehicle.displacement} &middot; {vehicle.fuel} &middot; {vehicle.drive}
                  </p>
                </div>
              </div>

              {/* Quick spec badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <QuickBadge icon={<Calendar className="h-4 w-4" />} label={vt("year")} value={String(vehicle.year)} />
                <QuickBadge icon={<Gauge className="h-4 w-4" />} label={vt("mileage")} value={formatMileage(vehicle.mileage)} />
                <QuickBadge icon={<ShieldCheck className="h-4 w-4" />} label={vt("inspection")} value={vehicle.inspection} />
                <QuickBadge
                  icon={<ShieldCheck className="h-4 w-4" />}
                  label={vt("repairHistory")}
                  value={repairLabel}
                  accent={vehicle.repairHistory === "none" ? "green" : "red"}
                />
                <QuickBadge icon={<MapPin className="h-4 w-4" />} label={vt("region")} value={vehicle.region} />
              </div>
            </div>

            {/* ---------- Highlights ---------- */}
            {highlights.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {vt("highlights")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 py-1.5">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ---------- Tabs ---------- */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex border-b border-gray-100 overflow-x-auto">
                {(
                  [
                    { key: "condition", label: vt("condition"), icon: Gauge },
                    { key: "equipment", label: vt("equipment"), icon: CheckCircle2 },
                    { key: "catalog", label: vt("catalog"), icon: Car },
                  ] as const
                ).map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as "condition" | "equipment" | "catalog")}
                    className={cn(
                      "flex-1 min-w-[7rem] inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                      activeTab === key
                        ? "border-primary text-primary bg-primary/5"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Condition tab */}
                {activeTab === "condition" && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <SpecItem icon={<Calendar className="h-4 w-4" />} label={vt("year")} value={String(vehicle.year)} />
                    <SpecItem icon={<Gauge className="h-4 w-4" />} label={vt("mileage")} value={formatMileage(vehicle.mileage)} />
                    <SpecItem icon={<ShieldCheck className="h-4 w-4" />} label={vt("inspection")} value={vehicle.inspection} />
                    <SpecItem
                      icon={<ShieldCheck className="h-4 w-4" />}
                      label={vt("repairHistory")}
                      value={repairLabel}
                      valueClass={vehicle.repairHistory === "none" ? "text-green-600" : "text-red-600"}
                    />
                    <SpecItem icon={<Cog className="h-4 w-4" />} label={vt("transmission")} value={vehicle.transmission} />
                    <SpecItem icon={<CircleDot className="h-4 w-4" />} label={t("filters.drive")} value={vehicle.drive} />
                    <SpecItem icon={<Fuel className="h-4 w-4" />} label={vt("fuel")} value={vehicle.fuel} />
                    <SpecItem icon={<Cog className="h-4 w-4" />} label={vt("displacement")} value={vehicle.displacement} />
                    <SpecItem icon={<Palette className="h-4 w-4" />} label={t("filters.color")} value={vehicle.exteriorColor} />
                    <SpecItem icon={<Car className="h-4 w-4" />} label={t("filters.bodyType")} value={vehicle.bodyType} />
                    <SpecItem icon={<Users className="h-4 w-4" />} label={vt("seats")} value={`${vehicle.seats}`} />
                    <SpecItem icon={<MapPin className="h-4 w-4" />} label={vt("region")} value={vehicle.region} />
                  </div>
                )}

                {/* Equipment tab */}
                {activeTab === "equipment" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 py-2 px-3 rounded-lg bg-gray-50">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Catalog tab */}
                {activeTab === "catalog" && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <SpecItem icon={<Car className="h-4 w-4" />} label={t("filters.bodyType")} value={vehicle.bodyType} />
                    <SpecItem icon={<DoorOpen className="h-4 w-4" />} label={vt("doors")} value={`${vehicle.doors}`} />
                    <SpecItem icon={<Users className="h-4 w-4" />} label={vt("seats")} value={`${vehicle.seats}`} />
                    <SpecItem icon={<Ruler className="h-4 w-4" />} label={vt("dimensions")} value={vehicle.dimensions} />
                    <SpecItem icon={<Weight className="h-4 w-4" />} label={vt("weight")} value={vehicle.weight} />
                    <SpecItem icon={<Zap className="h-4 w-4" />} label={vt("maxPower")} value={vehicle.maxPower} />
                    <SpecItem icon={<Cog className="h-4 w-4" />} label={vt("displacement")} value={vehicle.displacement} />
                    <SpecItem icon={<Droplet className="h-4 w-4" />} label={vt("fuelEconomy")} value={vehicle.fuelEconomy} />
                    <SpecItem icon={<Fuel className="h-4 w-4" />} label={vt("fuel")} value={vehicle.fuel} />
                  </div>
                )}
              </div>
            </div>

            {/* ---------- Overview ---------- */}
            {description && (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">{vt("overview")}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            )}

            {/* ---------- Similar vehicles ---------- */}
            {similarVehicles.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">{vt("similar")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {similarVehicles.map((sv) => (
                    <Link
                      key={sv.id}
                      href={`/vehicles/${sv.id}`}
                      className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all"
                    >
                      <div className="relative h-32 overflow-hidden bg-gray-100">
                        <Image
                          src={sv.images[0]}
                          alt={`${sv.year} ${sv.make} ${sv.model}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-gray-400 font-mono">{sv.make}</p>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                          {sv.model}
                        </h3>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-xs text-gray-400">{sv.year} · {formatMileage(sv.mileage)}</span>
                          <span className="text-sm font-bold text-primary">
                            {sv.price > 0 ? formatPrice(sv.price) : vt("priceOnRequest")}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ============================================================ */}
          {/* RIGHT: Price card & contact sidebar */}
          {/* ============================================================ */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:sticky lg:top-6">
              {/* Total price */}
              <div className="mb-1">
                <span className="text-sm text-gray-500">{hasPrice ? vt("totalPrice") : vt("price")}</span>
                <p className="text-3xl font-bold text-primary mt-0.5">
                  {hasPrice ? formatPrice(totalPrice) : vt("priceOnRequest")}
                </p>
              </div>
              {hasPrice ? (
                <>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xs text-gray-400">{vt("bodyPrice")}</span>
                    <span className="text-sm font-medium text-gray-700 line-through-0">{formatPrice(vehicle.price)}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-6">{vt("feeNote")}</p>
                </>
              ) : (
                <p className="text-sm leading-6 text-gray-500 mb-6">{vt("priceOnRequestNote")}</p>
              )}

              {/* Action buttons */}
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block w-full text-center rounded-lg bg-primary text-white px-4 py-3 text-sm font-bold hover:bg-primary-dark transition-colors"
                >
                  {vt("requestQuote")}
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center rounded-lg border-2 border-primary text-primary px-4 py-3 text-sm font-bold hover:bg-primary/5 transition-colors"
                >
                  {vt("inquire")}
                </Link>
              </div>

              {/* Quick contact info */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <h4 className="text-sm font-semibold text-gray-900">{ct("contactUs")}</h4>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                  <span>049-257-4332</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Globe className="h-4 w-4 text-gray-400 shrink-0" />
                  <span>Mon-Fri 9:00-18:00 (JST)</span>
                </div>
              </div>

              {/* Favorite button */}
              <button
                onClick={() => handleToggle(vehicle.id)}
                className={`mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium transition-colors ${isFavorite(vehicle.id) ? "text-red-500 border-red-200 bg-red-50" : "text-gray-700"} hover:bg-gray-50`}
              >
                <Heart className="h-4 w-4" fill={isFavorite(vehicle.id) ? "currentColor" : "none"} />
                {isFavorite(vehicle.id) ? vt("savedToFavorites") : vt("addToFavorites")}
              </button>

              {/* Link to saved list */}
              {favorites.length > 0 && (
                <Link
                  href="/favorites"
                  className="mt-2 w-full inline-flex items-center justify-between gap-2 rounded-lg px-4 py-2 text-xs text-gray-400 hover:text-primary transition-colors"
                >
                  <span>{favorites.length} {vt("savedCountLabel")}</span>
                  <span className="inline-flex items-center gap-1">{vt("viewFavorites")} →</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Toast feedback for favorite toggle */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] animate-in fade-in slide-in-from-bottom-2">
          <div
            className={cn(
              "flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium shadow-lg",
              toast.saved ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700"
            )}
          >
            {toast.saved ? (
              <CheckCircle2 className="h-4 w-4 text-green-400" />
            ) : (
              <Heart className="h-4 w-4" />
            )}
            {toast.msg}
            {toast.saved && (
              <Link
                href="/favorites"
                className="ml-2 underline-offset-2 hover:underline text-primary-foreground/80"
              >
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

function QuickBadge({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: "green" | "red";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm",
        accent === "green" && "bg-green-50 border-green-200 text-green-700",
        accent === "red" && "bg-red-50 border-red-200 text-red-700",
        !accent && "bg-gray-50 border-gray-200 text-gray-700"
      )}
    >
      <span className={cn(
        "shrink-0",
        accent === "green" && "text-green-500",
        accent === "red" && "text-red-500",
        !accent && "text-gray-400"
      )}>
        {icon}
      </span>
      <span className="text-gray-400 text-xs">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function SpecItem({
  icon,
  label,
  value,
  valueClass,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
      <span className="text-gray-400 mt-0.5">{icon}</span>
      <div className="min-w-0">
        <p className="text-sm text-gray-500">{label}</p>
        <p className={cn("text-sm font-medium text-gray-900 break-words", valueClass)}>{value}</p>
      </div>
    </div>
  );
}
