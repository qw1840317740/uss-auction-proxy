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
        <span className={`${s.sub} font-semibold tracking-[0.18em] text-gray-400 uppercase`}>
          JAPAN AUTO EXPORT
        </span>
      </div>
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`w-auto flex-shrink-0 ${className || "h-10"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ClickCar mark"
    >
      <circle cx="24" cy="24" r="21" fill="url(#clickcar-badge)" />
      <path
        d="M30.6 14.9A12.6 12.6 0 1 0 30.6 33"
        stroke="white"
        strokeWidth="4.6"
        strokeLinecap="round"
      />
      <path
        d="M31.2 19.1A7.4 7.4 0 1 0 31.2 28.9"
        stroke="white"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <path d="M19.5 24h15.8" stroke="#ef4444" strokeWidth="3.8" strokeLinecap="round" />
      <path d="M31 19.8 35.6 24 31 28.2" stroke="#ef4444" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.4 36.2h23.2" stroke="#111827" strokeWidth="2.8" strokeLinecap="round" opacity="0.55" />
      <defs>
        <linearGradient id="clickcar-badge" x1="7.5" y1="6" x2="39.5" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0f172a" />
          <stop offset="0.55" stopColor="#1f2937" />
          <stop offset="1" stopColor="#4b5563" />
        </linearGradient>
      </defs>
    </svg>
  );
}