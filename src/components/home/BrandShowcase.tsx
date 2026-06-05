"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const brands = [
  "Toyota",
  "Honda",
  "Nissan",
  "Mazda",
  "Subaru",
  "Lexus",
  "Mitsubishi",
  "Suzuki",
  "Daihatsu",
  "Isuzu",
];

export function BrandShowcase() {
  const t = useTranslations("home.brands");

  return (
    <section className="py-16">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t("title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand}
              href={`/vehicles?make=${brand}`}
              className="group flex items-center justify-center bg-white rounded-xl py-6 px-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all hover:-translate-y-0.5"
            >
              <span className="text-lg font-semibold text-gray-700 group-hover:text-primary transition-colors">
                {brand}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
