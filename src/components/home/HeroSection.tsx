"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Car, Award, Globe, Clock } from "lucide-react";
import Image from "next/image";

const stats = [
  { key: "vehicles", icon: Car, value: "50,000+" },
  { key: "brands", icon: Award, value: "20+" },
  { key: "countries", icon: Globe, value: "60+" },
  { key: "years", icon: Clock, value: "15+" },
];

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/car-showroom.jpg"
          alt="Velocity JAPAN Showroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-blue-900/90" />
      </div>

      <div className="container-main relative py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            {t("subtitle")}
          </p>

          {/* Two CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/vehicles"
              className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-secondary-light text-gray-900 font-semibold rounded-xl text-base transition-colors shadow-lg"
            >
              {t("exploreVehicles")}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 border-2 border-white/40 hover:border-white text-white font-semibold rounded-xl text-base transition-colors"
            >
              {t("contactUs")}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {stats.map((stat) => (
              <div key={stat.key} className="text-center">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-blue-200">{t(`stats.${stat.key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
