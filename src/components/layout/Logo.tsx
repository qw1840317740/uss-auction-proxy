export function Logo({ className = "", size = "default" }: { className?: string; size?: "sm" | "default" | "lg" }) {
  const sizes: Record<string, { icon: string; text: string; sub: string }> = {
    sm: { icon: "h-8", text: "text-lg", sub: "text-[9px]" },
    default: { icon: "h-10", text: "text-2xl", sub: "text-[10px]" },
    lg: { icon: "h-14", text: "text-3xl", sub: "text-xs" },
  };
  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* V icon only - clean, no decorations */}
      <svg
        viewBox="0 0 40 48"
        className={`${s.icon} w-auto flex-shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main V shape */}
        <path d="M4 4 L20 44 L28 44 L12 4 Z" fill="url(#v-grad)" />
        {/* Gold accent slash */}
        <path d="M16 12 L32 44 L38 44 L22 6 Z" fill="#f59e0b" opacity="0.85" />
        <defs>
          <linearGradient id="v-grad" x1="4" y1="4" x2="28" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e40af" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      {/* Text rendered as HTML - no SVG text issues */}
      <div className="flex flex-col leading-none">
        <span className={`${s.text} font-extrabold tracking-tight text-gray-900`}>
          <span className="text-primary">V</span>elocit<span className="text-primary">y</span>
        </span>
        <span className={`${s.sub} font-semibold tracking-[0.3em] text-gray-400 uppercase`}>
          JAPAN
        </span>
      </div>
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 48"
      className={`h-10 w-auto flex-shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4 L20 44 L28 44 L12 4 Z" fill="url(#mark-grad)" />
      <path d="M16 12 L32 44 L38 44 L22 6 Z" fill="#f59e0b" opacity="0.85" />
      <defs>
        <linearGradient id="mark-grad" x1="4" y1="4" x2="28" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e40af" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
