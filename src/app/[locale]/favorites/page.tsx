"use client";

import { useTranslations } from "next-intl";
import { formatPrice, formatMileage } from "@/lib/utils";
import { Heart, Trash2, Eye, Gauge, ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { demoVehicles } from "@/lib/demo-vehicles";
import { useFavorites } from "@/lib/useFavorites";

export default function FavoritesPage() {
  const t = useTranslations("dashboard");
  const tVehicles = useTranslations("vehicles");
  const tc = useTranslations("common");
  const { favorites, toggle } = useFavorites();

  const savedVehicles = favorites
    .map((id) => demoVehicles.find((v) => v.id === id))
    .filter((v): v is (typeof demoVehicles)[number] => Boolean(v));

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="container-main py-6 sm:py-8">
        {/* Back link */}
        <Link
          href="/vehicles"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          {tc("back")}
        </Link>

        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Heart className="h-7 w-7 text-red-500" fill="currentColor" />
            {t("favorites")}
          </h1>
          <p className="text-sm text-gray-500 mt-1">{savedVehicles.length} {t("vehiclesSaved")}</p>
        </div>

        {savedVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedVehicles.map((fav) => (
              <div key={fav.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl hover:border-gray-300 transition-all group">
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <Image
                    src={fav.images[0] || "/images/cars/car-side-1.jpg"}
                    alt={`${fav.year} ${fav.make} ${fav.model}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <button
                    onClick={() => toggle(fav.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                    title={t("removeFromFavorites")}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors">
                    {fav.year} {fav.make} {fav.model}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Gauge className="w-3.5 h-3.5" />{formatMileage(fav.mileage)}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">{tVehicles("vehicle.price")}</p>
                      <p className="text-base font-bold text-gray-900">{formatPrice(fav.price)}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Link href={`/vehicles/${fav.id}`} className="p-2 text-gray-400 hover:text-primary transition-colors"><Eye className="w-4 h-4" /></Link>
                      <button onClick={() => toggle(fav.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Heart className="w-4 h-4 fill-current" /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
            <Heart className="w-12 h-12 text-gray-300 mx-auto" />
            <p className="text-gray-500 mt-3">{t("noFavoritesYet")}</p>
            <Link href="/vehicles" className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors">
              {t("browseVehicles")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
