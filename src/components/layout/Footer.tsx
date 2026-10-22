"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Logo } from "./Logo";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const groups = [
    {
      title: t("quickLinks"),
      links: [
        { href: "/vehicles", label: nav("vehicles") },
        { href: "/export-guide", label: nav("exportGuide") },
        { href: "/about", label: nav("about") },
        { href: "/contact", label: nav("contact") },
      ],
    },
    {
      title: t("services"),
      links: [
        { href: "/services/auction", label: nav("auction") },
        { href: "/services/export", label: nav("export") },
        { href: "/services/maintenance", label: nav("maintenance") },
        { href: "/faq", label: nav("faq") },
        { href: "/blog", label: nav("blog") },
      ],
    },
    {
      title: nav("guides"),
      links: [
        { href: "/buying/used-cars-from-japan", label: t("buyingUsed") },
        { href: "/buying/japan-car-auction", label: t("buyingAuction") },
        { href: "/buying/japan-export-costs", label: t("buyingCosts") },
      ],
    },
  ];

  return (
    <footer className="bg-graphite text-on-dark-2">
      {/* Masthead: brand + contact */}
      <div className="container-main grid gap-10 border-b border-rule-dark py-14 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-end">
        <div>
          <Logo size="default" variant="dark" />
          <p className="mt-5 max-w-md text-sm leading-6">{t("description")}</p>
        </div>
        <dl className="grid gap-5 sm:grid-cols-2">
          <div>
            <dt className="cc-label !text-on-dark-2/70">{t("contactInfo")}</dt>
            <dd className="cc-data mt-2 text-lg text-on-dark">
              <a href="tel:+817092869587" className="cc-link">070-9286-9587</a>
            </dd>
          </div>
          <div>
            <dt className="cc-label !text-on-dark-2/70">Saitama, Japan</dt>
            <dd className="mt-2 text-sm leading-6 text-on-dark">埼玉県入間郡三芳町北永井500番地2</dd>
          </div>
        </dl>
      </div>

      {/* Link groups */}
      <div className="container-main grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className="min-w-0">
            <h3 className="cc-label !font-sans !text-[11px] !text-on-dark-2/70">{group.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="cc-link whitespace-nowrap transition-colors hover:text-on-dark">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-rule-dark">
        <div className="container-main flex flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="cc-data">{t("copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="cc-link whitespace-nowrap hover:text-on-dark">{t("privacy")}</Link>
            <Link href="/terms" className="cc-link whitespace-nowrap hover:text-on-dark">{t("terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
