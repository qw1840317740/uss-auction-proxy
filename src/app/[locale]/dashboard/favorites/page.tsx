"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { formatPrice } from "@/lib/utils";
import { Heart, Trash2, Eye, Gauge } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const carImages = [
  "/images/cars/toyota-harrier.jpg",
  "/images/cars/car-white.jpg",
  "/images/cars/mazda-cx5.jpg",
  "/images/cars/car-side-1.jpg",
  "/images/cars/toyota-prius.jpg",
  "/images/cars/car-suv.jpg",
];

const demoFavorites = [
  { id: 1, vehicle: "2022 Toyota Camry (AXVH70)", mileage: 35000, price: 2200000 },
  { id: 2, vehicle: "2023 Honda Fit (GR5)", mileage: 12000, price: 980000 },
  { id: 3, vehicle: "2021 Mazda CX-5 (KF5P)", mileage: 48000, price: 1850000 },
  { id: 4, vehicle: "2022 Nissan Leaf (ZE1)", mileage: 20000, price: 1450000 },
  { id: 5, vehicle: "2023 Toyota Prius (ZVW60)", mileage: 5000, price: 2800000 },
  { id: 6, vehicle: "2021 Subaru Forester (SK9)", mileage: 42000, price: 1650000 },
];

export default function FavoritesPage() {
  const t = useTranslations("dashboard");
  const tVehicles = useTranslations("vehicles");
  const [favorites, setFavorites] = useState(demoFavorites);

  const handleRemove = (id: number) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{t("favorites")}</h1>
        <p className="text-sm text-gray-500 mt-1">{favorites.length} {t("vehiclesSaved")}</p>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((fav, idx) => (
            <div key={fav.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow group">
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <Image
                  src={carImages[idx % carImages.length]}
                  alt={fav.vehicle}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <button
                  onClick={() => handleRemove(fav.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 rounded-full text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                  title={t("removeFromFavorites")}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors">{fav.vehicle}</h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Gauge className="w-3.5 h-3.5" />{fav.mileage.toLocaleString()} km</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">{tVehicles("vehicle.price")}</p>
                    <p className="text-base font-bold text-gray-900">{formatPrice(fav.price)}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Link href={`/vehicles/${fav.id}`} className="p-2 text-gray-400 hover:text-primary transition-colors"><Eye className="w-4 h-4" /></Link>
                    <button className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"><Heart className="w-4 h-4 fill-primary" /></button>
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
  );
}
