"use client";

import { useTranslations } from "next-intl";
import { ClipboardList, Search, CheckCircle, Truck } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/lib/useScrollReveal";

const steps = [
  { key: "step1", icon: ClipboardList, number: "01" },
  { key: "step2", icon: Search, number: "02" },
  { key: "step3", icon: CheckCircle, number: "03" },
  { key: "step4", icon: Truck, number: "04" },
];

export function HowItWorks() {
  const t = useTranslations("home.howItWorks");
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { containerRef, isChildVisible } = useStaggerReveal(steps.length, 100);

  return (
    <section className="py-24">
      <div className="container-main">
        <div
          ref={titleRef}
          className={`text-center mb-16 reveal reveal-blur ${titleVisible ? "revealed" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t("title")}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <div
              key={step.key}
              className={`reveal-stagger relative text-center ${isChildVisible(i) ? "revealed" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-primary/5" />
              )}
              <div className="relative z-10 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-1 -right-1 w-7 h-7 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(`${step.key}.title`)}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t(`${step.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
