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
        className="flex h-9 items-center gap-1.5 rounded-md border border-rule-dark px-2.5 text-[13px] font-medium text-on-dark-2 transition-colors hover:border-on-dark-2 hover:text-on-dark"
        aria-expanded={open}
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[148px] rounded-[10px] border border-rule-dark bg-graphite-2 p-1.5">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                router.replace(pathname, { locale: l.code });
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-white/5 hover:text-on-dark ${
                l.code === locale ? "text-on-dark" : "text-on-dark-2"
              }`}
            >
              <span>{l.label}</span>
              {l.code === locale && <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
