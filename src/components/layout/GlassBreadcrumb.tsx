"use client";

import { ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";

type GlassBreadcrumbProps = {
  backHref: string;
  backLabel: string;
  current?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function GlassBreadcrumb({
  backHref,
  backLabel,
  current,
  tone = "light",
  className = "",
}: GlassBreadcrumbProps) {
  const isDark = tone === "dark";

  return (
    <nav className={`inline-flex max-w-full items-center ${className}`} aria-label="Breadcrumb">
      <div
        className={
          isDark
            ? "inline-flex min-w-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-sm text-white shadow-[0_12px_35px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            : "inline-flex min-w-0 items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3.5 py-2 text-sm text-gray-700 shadow-[0_12px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl"
        }
      >
        <Link
          href={backHref}
          className={
            isDark
              ? "inline-flex shrink-0 items-center gap-1.5 text-white/80 transition-colors hover:text-white"
              : "inline-flex shrink-0 items-center gap-1.5 text-gray-500 transition-colors hover:text-primary"
          }
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        {current ? (
          <>
            <ChevronRight className={isDark ? "h-4 w-4 shrink-0 text-white/35" : "h-4 w-4 shrink-0 text-gray-300"} />
            <span className={isDark ? "truncate font-medium text-white" : "truncate font-medium text-gray-900"}>
              {current}
            </span>
          </>
        ) : null}
      </div>
    </nav>
  );
}
