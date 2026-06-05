"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { formatPrice, formatMileage } from "@/lib/utils";
import { Heart, Eye } from "lucide-react";
import Image from "next/image";
import { useScrollReveal, useStaggerReveal } from "@/lib/useScrollReveal";

const demoVehicles = [
  { id: "1", make: "Toyota", model: "Land Cruiser 300", year: 2022, mileage: 25000, price: 6500000, image: "/images/cars/toyota-land-cruiser.jpg", bodyType: "SUV" },
  { id: "2", make: "Toyota", model: "Harrier", year: 2023, mileage: 12000, price: 3800000, image: "/images/cars/toyota-harrier.jpg", bodyType: "SUV" },
  { id: "3", make: "Honda", model: "Civic", year: 2023, mileage: 8000, price: 2800000, image: "/images/cars/honda-civic.jpg", bodyType: "Sedan" },
  { id: "4", make: "Nissan", model: "Note Aura", year: 2022, mileage: 18000, price: 1800000, image: "/images/cars/nissan-note.jpg", bodyType: "Hatchback" },
  { id: "5", make: "Toyota", model: "Prius", year: 2023, mileage: 5000, price: 3200000, image: "/images/cars/toyota-prius.jpg", bodyType: "Sedan" },
  { id: "6", make: "Mazda", model: "CX-5", year: 2022, mileage: 30000, price: 2500000, image: "/images/cars/mazda-cx5.jpg", bodyType: "SUV" },
];

export function VehicleShowcase() {
  const t = useTranslations("home.showcase");
  const vt = useTranslations("vehicles.vehicle");
  const title = useScrollReveal();
  const { containerRef, isChildVisible } = useStaggerReveal(demoVehicles.length, 60);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <div
          ref={title.ref}
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 reveal reveal-up ${title.isVisible ? "revealed" : ""}`}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t("title")}</h2>
            <p className="text-gray-500 text-lg">{t("subtitle")}</p>
          </div>
          <Link
            href="/vehicles"
            className="hidden sm:inline-flex items-center px-6 py-3 mt-4 sm:mt-0 text-sm font-medium text-primary border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
          >
            {vt("viewDetail")} →
          </Link>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoVehicles.map((v, i) => (
            <div
              key={v.id}
              className={`reveal-stagger bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 group premium-card ${isChildVisible(i) ? "revealed" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                <Image
                  src={v.image}
                  alt={`${v.year} ${v.make} ${v.model}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Body type badge */}
                <span className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {v.bodyType}
                </span>
                <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 shadow-sm transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <Link href={`/vehicles/${v.id}`} className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-primary shadow-sm transition-colors">
                    <Eye className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {v.year} {v.make} {v.model}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                  <span>{formatMileage(v.mileage)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(v.price)}
                  </span>
                  <Link
                    href={`/vehicles/${v.id}`}
                    className="text-sm font-medium text-white bg-primary hover:bg-primary-dark px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20"
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
