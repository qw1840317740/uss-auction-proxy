"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

type TabKey = "general" | "specificVehicle";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [activeTab, setActiveTab] = useState<TabKey>("general");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [wechatCopied, setWechatCopied] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({
    // General
    vehicleType: "",
    brand: "",
    budget: "",
    conditions: "",
    // Specific Vehicle
    preferredModel: "",
    year: "",
    mileage: "",
    color: "",
    transmission: "",
    // Common
    message: "",
    email: "",
    name: "",
    phone: "",
    preferredLanguage: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, inquiryType: activeTab }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  const tabs: { key: TabKey; label: string }[] = [
    { key: "general", label: t("tabs.general") },
    { key: "specificVehicle", label: t("tabs.specificVehicle") },
  ];

  const selectClasses =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white";
  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-black text-white">
        <div className="container-main py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-neutral-100">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6"
              >
                {/* Tab Bar */}
                <div className="flex border-b border-gray-200">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                        activeTab === tab.key
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab 1: General Inquiry */}
                {activeTab === "general" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.vehicleType")}
                      </label>
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">--</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="van">Van / Minivan</option>
                        <option value="truck">Truck</option>
                        <option value="coupe">Coupe</option>
                        <option value="wagon">Wagon</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.brand")}
                      </label>
                      <select
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">--</option>
                        <option value="toyota">Toyota</option>
                        <option value="honda">Honda</option>
                        <option value="nissan">Nissan</option>
                        <option value="mazda">Mazda</option>
                        <option value="subaru">Subaru</option>
                        <option value="mitsubishi">Mitsubishi</option>
                        <option value="suzuki">Suzuki</option>
                        <option value="lexus">Lexus</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.budget")}
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">--</option>
                        <option value="under1m">Under ¥1,000,000</option>
                        <option value="1m-2m">¥1,000,000 - ¥2,000,000</option>
                        <option value="2m-3m">¥2,000,000 - ¥3,000,000</option>
                        <option value="3m-5m">¥3,000,000 - ¥5,000,000</option>
                        <option value="5m-plus">¥5,000,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.conditions")}
                      </label>
                      <select
                        name="conditions"
                        value={formData.conditions}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">--</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="any">Any Condition</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.message")}
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={inputClasses + " resize-y"}
                        placeholder=""
                      />
                    </div>
                  </div>
                )}

                {/* Tab 2: Specific Vehicle */}
                {activeTab === "specificVehicle" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.preferredModel")}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="preferredModel"
                        type="text"
                        required
                        value={formData.preferredModel}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.year")}
                      </label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">--</option>
                        {Array.from({ length: 15 }, (_, i) => 2026 - i).map(
                          (yr) => (
                            <option key={yr} value={yr}>
                              {yr}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.mileage")}
                      </label>
                      <select
                        name="mileage"
                        value={formData.mileage}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">--</option>
                        <option value="under30k">Under 30,000 km</option>
                        <option value="30k-60k">30,000 - 60,000 km</option>
                        <option value="60k-100k">60,000 - 100,000 km</option>
                        <option value="100k-plus">100,000+ km</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.color")}
                      </label>
                      <select
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">--</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="silver">Silver</option>
                        <option value="gray">Gray</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.transmission")}
                      </label>
                      <select
                        name="transmission"
                        value={formData.transmission}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">--</option>
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                        <option value="cvt">CVT</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.budget")}
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">--</option>
                        <option value="under1m">Under ¥1,000,000</option>
                        <option value="1m-2m">¥1,000,000 - ¥2,000,000</option>
                        <option value="2m-3m">¥2,000,000 - ¥3,000,000</option>
                        <option value="3m-5m">¥3,000,000 - ¥5,000,000</option>
                        <option value="5m-plus">¥5,000,000+</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.message")}
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={inputClasses + " resize-y"}
                      />
                    </div>
                  </div>
                )}

                {/* Divider */}
                <div className="border-t border-gray-100 pt-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Email (required) */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.email")}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    {/* Name (optional) */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.name")}{" "}
                        <span className="text-xs text-gray-400">
                          ({t("form.optional")})
                        </span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    {/* Phone (optional) */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.phone")}{" "}
                        <span className="text-xs text-gray-400">
                          ({t("form.optional")})
                        </span>
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    {/* Preferred Language (optional) */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("form.preferredLanguage")}{" "}
                        <span className="text-xs text-gray-400">
                          ({t("form.optional")})
                        </span>
                      </label>
                      <select
                        name="preferredLanguage"
                        value={formData.preferredLanguage}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">--</option>
                        <option value="ja">Japanese</option>
                        <option value="en">English</option>
                        <option value="zh">Chinese</option>
                      </select>
                    </div>
                  </div>
                </div>

                {submitError && (
                  <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Unable to send your inquiry. Please contact us by phone or messenger.
                  </div>
                )}

                {/* Submit */}
                <div className="pt-2">
                  {submitted ? (
                    <div className="inline-flex items-center gap-2 px-8 py-3 bg-green-100 text-green-700 font-semibold rounded-xl">
                      {t("success")}
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      {t("form.submit")}
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {t("info.address")}
                      </div>
                      <div className="text-sm text-gray-500">
                        埼玉県入間郡三芳町北永井500番地2
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {t("info.phone")}
                      </div>
                      <a href="tel:+81492574332" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        049-257-4332
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {t("info.hours")}
                      </div>
                      <div className="text-sm text-gray-500">
                        {t("info.hoursValue")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messenger Links */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  {t("messenger.title")}
                </h3>
                <div className="space-y-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/81492574332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      {t("messenger.whatsapp")}
                    </span>
                  </a>

                  {/* WeChat */}
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText("ks75995");
                      setWechatCopied(true);
                      setTimeout(() => setWechatCopied(false), 2000);
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors w-full text-left"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">
                      {t("messenger.wechat")}
                    </span>
                    <span className="text-xs text-emerald-500 ml-auto">
                      {wechatCopied ? t("messenger.copied") : t("messenger.clickToCopy")}
                    </span>
                  </button>

                  {/* LINE */}
                  <a
                    href="https://lin.ee/xxxxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-neutral-100 text-neutral-800 hover:bg-red-100 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">
                      {t("messenger.line")}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
