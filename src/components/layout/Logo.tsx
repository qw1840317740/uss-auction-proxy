export function Logo({ className = "", size = "default" }: { className?: string; size?: "sm" | "default" | "lg" }) {
  const sizes: Record<string, { icon: string; text: string; sub: string }> = {
    sm: { icon: "h-8", text: "text-lg", sub: "text-[9px]" },
    default: { icon: "h-10", text: "text-2xl", sub: "text-[10px]" },
    lg: { icon: "h-14", text: "text-3xl", sub: "text-xs" },
  };
  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="ClickCar">
      <LogoMark className={s.icon} />
      <div className="flex flex-col leading-none">
        <span className={`${s.text} font-extrabold tracking-tight text-gray-900`}>
          <span className="text-primary">Click</span>Car
        </span>
        <span className={`${s.sub} font-semibold tracking-[0.22em] text-gray-400 uppercase`}>
          JAPAN AUTO EXPORT
        </span>
      </div>
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={`w-auto flex-shrink-0 ${className || "h-10"}`} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ClickCar mark">
      <rect x="4" y="7" width="40" height="34" rx="10" fill="url(#clickcar-mark-bg)" />
      <path d="M14.5 28.5c1.55 3.78 5.25 6.45 9.55 6.45 4.05 0 7.55-2.35 9.25-5.78" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M33.35 18.85c-1.7-3.38-5.2-5.8-9.3-5.8-4.33 0-8.04 2.69-9.58 6.5" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M17 24h19" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
      <path d="M31 18l6 6-6 6" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="35" r="3.2" fill="#111827" />
      <circle cx="32" cy="35" r="3.2" fill="#111827" />
      <defs>
        <linearGradient id="clickcar-mark-bg" x1="4" y1="7" x2="44" y2="41" gradientUnits="userSpaceOnUse">
          <stop stopColor="#111827" />
          <stop offset="1" stopColor="#374151" />
        </linearGradient>
      </defs>
    </svg>
  );
}
