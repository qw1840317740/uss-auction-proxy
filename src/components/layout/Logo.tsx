export function Logo({ className = "", size = "default" }: { className?: string; size?: "sm" | "default" | "lg" }) {
  const sizes: Record<string, { text: string; dot: string; dotTop: string }> = {
    sm: { text: "text-2xl", dot: "h-2 w-2", dotTop: "top-[0.02em]" },
    default: { text: "text-4xl", dot: "h-3 w-3", dotTop: "top-[0.04em]" },
    lg: { text: "text-5xl", dot: "h-3.5 w-3.5", dotTop: "top-[0.05em]" },
  };
  const s = sizes[size];

  return (
    <div className={`inline-flex items-center leading-none ${className}`} aria-label="ClickCar">
      <span className={`${s.text} font-black tracking-normal text-[#050814]`}>
        Cl
        <span className="relative inline-block">
          i
          <span
            className={`absolute ${s.dotTop} left-1/2 ${s.dot} -translate-x-1/2 rounded-full bg-secondary`}
            aria-hidden="true"
          />
        </span>
        ckCar
      </span>
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
      <rect x="4" y="4" width="40" height="40" rx="10" fill="white" />
      <rect x="4" y="4" width="40" height="40" rx="10" stroke="#e5e7eb" />
      <path
        d="M28.7 16.3A9.8 9.8 0 1 0 28.7 31.7"
        stroke="#050814"
        strokeWidth="5.2"
        strokeLinecap="round"
      />
      <circle cx="33.4" cy="14.2" r="3" fill="#dc2626" />
    </svg>
  );
}