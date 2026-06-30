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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <LogoMark className="sm:hidden" />
            <Logo size="default" className="hidden sm:block" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-50">
                    {item.label}
                  </button>
                  <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
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
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-50"
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
              className="relative p-2 text-gray-700 hover:text-primary transition-colors"
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
                    className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    {t("dashboard")}
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: `/${locale}` })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    {t("logout")}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    {t("login")}
                  </Link>
                  <Link
                    href="/auth/register"
                    className="px-4 py-1.5 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
                  >
                    {t("register")}
                  </Link>
                </>
              )}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary"
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
