"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const locales = [
  { code: "zh", label: "中文" },
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
] as const;

export function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = locales.find((l) => l.code === locale) || locales[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/7 px-3 py-1.5 text-sm font-medium text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-colors hover:border-white/25 hover:bg-white/12 hover:text-white"
        aria-expanded={open}
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[148px] overflow-hidden rounded-xl border border-white/15 bg-[#080b12]/88 py-1.5 shadow-[0_18px_46px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                router.replace(pathname, { locale: l.code });
                setOpen(false);
              }}
              className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/10 hover:text-white ${
                l.code === locale ? "bg-red-500/14 font-semibold text-white" : "text-white/74"
              }`}
            >
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
