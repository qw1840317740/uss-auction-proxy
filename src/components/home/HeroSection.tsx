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
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/car-showroom.jpg"
          alt="Velocity JAPAN Showroom"
          fill
          className="object-cover"
          priority
        />
        {/* Dark blue to transparent gradient overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0f2044]/85 to-[#1e3a8a]/60" />
        {/* Subtle shimmer animation overlay */}
        <div className="absolute inset-0 hero-shimmer" />
      </div>

      <div className="container-main relative py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 drop-shadow-md">
            {t("subtitle")}
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/vehicles"
              className="w-full sm:w-auto px-10 py-4.5 bg-secondary hover:bg-secondary-light text-gray-900 font-bold rounded-xl text-lg transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              {t("exploreVehicles")}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4.5 border-2 border-white/30 hover:border-white/80 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm bg-white/5 hover:bg-white/10"
            >
              {t("contactUs")}
            </Link>
          </div>

          {/* Enhanced Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl py-6 px-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/15"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold tracking-tight">{stat.value}</div>
                <div className="text-sm text-blue-200 mt-1">{t(`stats.${stat.key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
