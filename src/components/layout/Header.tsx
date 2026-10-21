"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";
import { useState } from "react";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { Logo, LogoMark } from "./Logo";
import { useFavorites } from "@/lib/useFavorites";

type NavChild = { href: string; label: string };
type NavItem = { href?: string; label: string; children?: NavChild[] };

export function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const { favorites } = useFavorites();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    { href: "/vehicles", label: t("vehicles") },
    {
      label: t("services"),
      children: [
        { href: "/services/auction", label: t("auction") },
        { href: "/services/export", label: t("export") },
        { href: "/services/maintenance", label: t("maintenance") },
      ],
    },
    {
      label: t("guides"),
      children: [
        { href: "/export-guide", label: t("exportGuide") },
        { href: "/faq", label: t("faq") },
        { href: "/blog", label: t("blog") },
      ],
    },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  const isActive = (href?: string) => !!href && (pathname === href || pathname.startsWith(`${href}/`));
  const groupActive = (item: NavItem) => !!item.children?.some((c) => isActive(c.href));

  const linkCls = (active: boolean) =>
    `relative whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      active ? "text-on-dark" : "text-on-dark-2 hover:text-on-dark"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-rule-dark bg-graphite/95 backdrop-blur-md">
      <div className="container-main">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center" aria-label="ClickCar">
            <span className="block sm:hidden">
              <LogoMark className="h-8 w-8 rounded-md" />
            </span>
            <span className="hidden sm:block">
              <Logo size="sm" />
            </span>
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Main">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button type="button" className={`${linkCls(groupActive(item))} inline-flex items-center gap-1`} aria-haspopup="true">
                    {item.label}
                    <ChevronDown
                      className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  </button>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[220px] rounded-[10px] border border-rule-dark bg-graphite-2 p-1.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors ${
                            isActive(child.href) ? "bg-white/5 text-on-dark" : "text-on-dark-2 hover:bg-white/5 hover:text-on-dark"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={linkCls(isActive(item.href))}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  {isActive(item.href) && <span className="absolute inset-x-3 -bottom-[13px] h-px bg-signal" aria-hidden="true" />}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-1.5">
            <LanguageSwitcher locale={locale} />

            <Link
              href="/favorites"
              className="relative flex h-9 w-9 items-center justify-center rounded-md text-on-dark-2 transition-colors hover:text-on-dark"
              aria-label={t("favorites")}
              title={t("favorites")}
            >
              <Heart className="h-[18px] w-[18px]" />
              {favorites.length > 0 && (
                <span className="cc-data absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-sm bg-signal px-1 text-[10px] font-semibold text-white">
                  {favorites.length}
                </span>
              )}
            </Link>

            <Link href="/contact" className="cc-btn cc-btn--signal ml-1 hidden min-h-9 px-3.5 text-[13px] md:inline-flex">
              {t("requestQuote")}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-on-dark-2 transition-colors hover:text-on-dark lg:hidden"
              aria-expanded={mobileOpen}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <MobileNav
          items={[{ href: "/", label: t("home") }, ...navItems]}
          onClose={() => setMobileOpen(false)}
          ctaLabel={t("requestQuote")}
        />
      )}
    </header>
  );
}
