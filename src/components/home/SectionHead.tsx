import type { ReactNode } from "react";

/**
 * Left-aligned section header used across the home page: optional mono label,
 * display heading, optional lede, and an optional action pinned right on desktop.
 */
export function SectionHead({
  label,
  title,
  lede,
  action,
  tone = "light",
}: {
  label?: string;
  title: string;
  lede?: string;
  action?: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="min-w-0 max-w-2xl">
        {label && <p className={`cc-label cc-tick ${dark ? "!text-on-dark-2" : ""}`}>{label}</p>}
        <h2
          className={`text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] [overflow-wrap:anywhere] md:text-[2.25rem] ${
            label ? "mt-4" : ""
          } ${dark ? "text-on-dark" : "text-ink"}`}
        >
          {title}
        </h2>
        {lede && <p className={`mt-3 text-base leading-7 ${dark ? "text-on-dark-2" : "text-ink-2"}`}>{lede}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
