"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Car, Award, Globe } from "lucide-react";
import Image from "next/image";

const stats = [
  { key: "vehicles", icon: Car, value: "50,000+" },
  { key: "brands", icon: Award, value: "20+" },
  { key: "countries", icon: Globe, value: "60+" },
];

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/car-showroom.jpg"
          alt="Velocity JAPAN Showroom"
          fill
          className="object-cover"
          priority
        />
        {/* Dark charcoal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#161616]/85 to-[#2d2d2d]/60" />
        <div className="absolute inset-0 hero-shimmer" />
      </div>

      <div className="container-main relative py-20 md:py-32 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title with blur-in animation */}
          <h1
            className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg hero-title-animate"
            dangerouslySetInnerHTML={{ __html: t("title") }}
          />
          <p className="text-lg md:text-xl text-neutral-100 mb-10 drop-shadow-md hero-title-animate-delay-1 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 hero-title-animate-delay-2">
            <Link
              href="/vehicles"
              className="w-full sm:w-auto px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-xl text-lg transition-all duration-300 shadow-xl shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-0.5 btn-premium"
            >
              {t("exploreVehicles")}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 border-2 border-white/30 hover:border-white/80 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm bg-white/5 hover:bg-white/10"
            >
              {t("contactUs")}
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 hero-title-animate-delay-3">
            {stats.map((stat, i) => (
              <div
                key={stat.key}
                className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl py-6 px-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/15"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold tracking-tight stat-animate" style={{ animationDelay: `${0.3 + i * 0.06}s` }}>
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-300 mt-1 stat-animate" style={{ animationDelay: `${0.36 + i * 0.06}s` }}>
                  {t(`stats.${stat.key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
