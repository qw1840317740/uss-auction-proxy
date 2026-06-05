"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { formatPrice, formatMileage } from "@/lib/utils";
import { Heart, Eye } from "lucide-react";
import Image from "next/image";

const demoVehicles = [
  { id: "1", make: "Toyota", model: "Land Cruiser 300", year: 2022, mileage: 25000, price: 6500000, image: "/images/cars/toyota-land-cruiser.jpg" },
  { id: "2", make: "Toyota", model: "Harrier", year: 2023, mileage: 12000, price: 3800000, image: "/images/cars/toyota-harrier.jpg" },
  { id: "3", make: "Honda", model: "Civic", year: 2023, mileage: 8000, price: 2800000, image: "/images/cars/honda-civic.jpg" },
  { id: "4", make: "Nissan", model: "Note Aura", year: 2022, mileage: 18000, price: 1800000, image: "/images/cars/nissan-note.jpg" },
  { id: "5", make: "Toyota", model: "Prius", year: 2023, mileage: 5000, price: 3200000, image: "/images/cars/toyota-prius.jpg" },
  { id: "6", make: "Mazda", model: "CX-5", year: 2022, mileage: 30000, price: 2500000, image: "/images/cars/mazda-cx5.jpg" },
];

export function VehicleShowcase() {
  const t = useTranslations("home.showcase");
  const vt = useTranslations("vehicles.vehicle");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-main">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t("title")}</h2>
            <p className="text-gray-600">{t("subtitle")}</p>
          </div>
          <Link
            href="/vehicles"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            {vt("viewDetail")} &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoVehicles.map((v) => (
            <div key={v.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all group">
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                <Image
                  src={v.image}
                  alt={`${v.year} ${v.make} ${v.model}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500">
                    <Heart className="w-4 h-4" />
                  </button>
                  <Link href={`/vehicles/${v.id}`} className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-primary">
                    <Eye className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {v.year} {v.make} {v.model}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span>{formatMileage(v.mileage)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(v.price)}
                  </span>
                  <Link
                    href={`/vehicles/${v.id}`}
                    className="text-sm font-medium text-white bg-primary hover:bg-primary-dark px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {vt("viewDetail")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
