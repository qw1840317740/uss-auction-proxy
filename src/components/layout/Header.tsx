"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";
import { useState } from "react";
import { Menu, X, Heart, LogOut } from "lucide-react";
import { Logo, LogoMark } from "./Logo";
import { useSession, signOut } from "next-auth/react";
import { useFavorites } from "@/lib/useFavorites";

export function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const { status } = useSession();
  const { favorites } = useFavorites();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAuthenticated = status === "authenticated";

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/vehicles", label: t("vehicles") },
    {
      label: t("services"),
      children: [
        { href: "/services/export", label: t("export") },
        { href: "/services/maintenance", label: t("maintenance") },
      ],
    },
    { href: "/export-guide", label: t("exportGuide") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
    { href: "/faq", label: t("faq") },
    { href: "/blog", label: t("blog") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#05070b]/90 shadow-[0_18px_44px_rgba(0,0,0,0.28)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[#05070b]/84">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/28 via-black/12 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="container-main relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex h-12 shrink-0 items-center">
            <span className="block sm:hidden">
              <LogoMark />
            </span>
            <span className="hidden sm:block">
              <Logo size="default" />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/10">
                    {item.label}
                  </button>
                  <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="min-w-[200px] rounded-lg border border-white/10 bg-[#080b12] py-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
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
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher locale={locale} />

            {/* Favorites entry */}
            <Link
              href="/favorites"
              className="relative p-2 text-gray-300 transition-colors hover:text-white"
              aria-label={t("favorites")}
              title={t("favorites")}
            >
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>

            <div className="hidden sm:flex items-center gap-2">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    className="px-3 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                  >
                    {t("dashboard")}
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: `/${locale}` })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:text-red-400"
                  >
                    <LogOut className="w-4 h-4" />
                    {t("logout")}
                  </button>
                </>
              ) : null}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-300 transition-colors hover:text-white lg:hidden"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && <MobileNav items={navItems} onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
