"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4 [&_span]:!text-white [&_svg]:brightness-0 [&_svg]:invert">
              <Logo size="default" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">{t("description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">{nav("home")}</Link></li>
              <li><Link href="/vehicles" className="hover:text-white transition-colors">{nav("vehicles")}</Link></li>
              <li><Link href="/export-guide" className="hover:text-white transition-colors">{nav("exportGuide")}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{nav("about")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{nav("contact")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/export" className="hover:text-white transition-colors">{nav("export")}</Link></li>
              <li><Link href="/services/maintenance" className="hover:text-white transition-colors">{nav("maintenance")}</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">{nav("faq")}</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">{nav("blog")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("contactInfo")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-light" />
                <span>info@velocityjapan.jp</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-light" />
                <span>+81-XX-XXXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-light mt-0.5" />
                <span>Tokyo, Japan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-main py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">{t("privacy")}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t("terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
