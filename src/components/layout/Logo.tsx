import Image from "next/image";

export function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "sm" | "default" | "lg";
}) {
  const sizes: Record<string, { box: string; image: string; width: number; height: number }> = {
    sm: { box: "h-9 px-2", image: "h-6 w-auto", width: 160, height: 24 },
    default: { box: "h-12 px-3", image: "h-8 w-auto", width: 212, height: 32 },
    lg: { box: "h-14 px-4", image: "h-10 w-auto", width: 265, height: 40 },
  };
  const s = sizes[size];

  return (
    <span
      className={`inline-flex items-center rounded-md bg-[#05070b] shadow-sm ${s.box} ${className}`}
      aria-label="ClickCar"
    >
      <Image
        src="/images/clickcar-logo.png"
        alt="ClickCar"
        width={s.width}
        height={s.height}
        className={s.image}
        priority
      />
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/clickcar-mark.png"
      alt="ClickCar"
      width={48}
      height={48}
      className={`h-10 w-10 rounded-xl object-cover ${className}`}
      priority
    />
  );
}
