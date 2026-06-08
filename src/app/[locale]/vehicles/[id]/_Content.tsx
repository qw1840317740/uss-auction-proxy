"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { formatPrice, formatMileage, cn } from "@/lib/utils";
import {
  ArrowLeft,
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
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { demoVehicles } from "@/lib/demo-vehicles";
import { useFavorites } from "@/lib/useFavorites";

// ---------------------------------------------------------------------------
// Demo vehicle lookup
// ---------------------------------------------------------------------------

const vehicles: Record<string, (typeof demoVehicles)[number]> = {};
for (const v of demoVehicles) {
  vehicles[v.id] = v;
}

// Default vehicle for unknown ids
const defaultVehicle = vehicles["1"];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function VehicleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap params via React.use() for Next.js 16 async params
  const { id } = React.use(params);

  const t = useTranslations("vehicles");
  const vt = useTranslations("vehicles.vehicle");
  const ct = useTranslations("common");

  const vehicle = vehicles[id] ?? { ...defaultVehicle, id };

  const { toggle, isFavorite } = useFavorites();

  const [activeTab, setActiveTab] = useState<"specs" | "features">("specs");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-main py-4">
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {ct("back")} — {t("title")}
          </Link>
        </div>
      </div>

      <div className="container-main py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ============================================================ */}
          {/* LEFT: Main content (2 cols on desktop) */}
          {/* ============================================================ */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vehicle header */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Image area */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                <Image
                  src={vehicle.images[0] || "/images/cars/car-side-1.jpg"}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(vehicle.id); }} className={`w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm ${isFavorite(vehicle.id) ? "text-red-500" : "text-gray-600"} hover:text-red-500`}>
                    <Heart className="h-5 w-5" fill={isFavorite(vehicle.id) ? "currentColor" : "none"} />
                  </button>
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-primary shadow-sm">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Title area */}
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                      {vehicle.displacement} &middot; {vehicle.fuel} &middot; {vehicle.drive}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400">
                      {vt("price")}
                    </span>
                    <p className="text-2xl font-bold text-primary">
                      {formatPrice(vehicle.price)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab navigation */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex border-b border-gray-100">
                {(
                  [
                    { key: "specs", label: vt("specs"), icon: Gauge },
                    { key: "features", label: vt("features"), icon: CheckCircle2 },
                  ] as const
                ).map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() =>
                      setActiveTab(key as "specs" | "features")
                    }
                    className={cn(
                      "flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                      activeTab === key
                        ? "border-primary text-primary bg-primary/5"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Specs tab */}
                {activeTab === "specs" && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <SpecItem
                      icon={<Calendar className="h-4 w-4" />}
                      label={vt("year")}
                      value={String(vehicle.year)}
                    />
                    <SpecItem
                      icon={<Gauge className="h-4 w-4" />}
                      label={vt("mileage")}
                      value={formatMileage(vehicle.mileage)}
                    />
                    <SpecItem
                      icon={<Cog className="h-4 w-4" />}
                      label={vt("displacement")}
                      value={vehicle.displacement}
                    />
                    <SpecItem
                      icon={<Fuel className="h-4 w-4" />}
                      label={vt("fuel")}
                      value={vehicle.fuel}
                    />
                    <SpecItem
                      icon={<Cog className="h-4 w-4" />}
                      label={vt("transmission")}
                      value={vehicle.transmission}
                    />
                    <SpecItem
                      icon={<CircleDot className="h-4 w-4" />}
                      label={t("filters.drive")}
                      value={vehicle.drive}
                    />
                    <SpecItem
                      icon={<Palette className="h-4 w-4" />}
                      label={t("filters.color")}
                      value={vehicle.exteriorColor}
                    />
                    <SpecItem
                      icon={<Car className="h-4 w-4" />}
                      label={t("filters.bodyType")}
                      value={vehicle.bodyType}
                    />
                  </div>
                )}

                {/* Features tab */}
                {activeTab === "features" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 py-2 px-3 rounded-lg bg-gray-50"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT: Price card & contact sidebar */}
          {/* ============================================================ */}
          <div className="space-y-6">
            {/* Price card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <div className="mb-6">
                <span className="text-sm text-gray-500">{vt("price")}</span>
                <p className="text-3xl font-bold text-primary mt-1">
                  {formatPrice(vehicle.price)}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  FOB Japan — Subject to final confirmation
                </p>
              </div>

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
                <h4 className="text-sm font-semibold text-gray-900">
                  {ct("contactUs")}
                </h4>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                  <span>kaiseisg@kaiseisg.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                  <span>+81-3-1234-5678</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Globe className="h-4 w-4 text-gray-400 shrink-0" />
                  <span>Mon-Fri 9:00-18:00 (JST)</span>
                </div>
              </div>

              {/* Favorite button */}
              <button onClick={() => toggle(vehicle.id)} className={`mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium transition-colors ${isFavorite(vehicle.id) ? "text-red-500" : "text-gray-700"} hover:bg-gray-50`}>
                <Heart className="h-4 w-4" fill={isFavorite(vehicle.id) ? "currentColor" : "none"} />
                {vt("addToFavorites")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SpecItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
      <span className="text-gray-400 mt-0.5">{icon}</span>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
}
