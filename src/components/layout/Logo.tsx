import Image from "next/image";

export function Logo({
  className = "",
  size = "default",
  variant = "light",
}: {
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "light" | "dark";
}) {
  const sizes: Record<string, { box: string; image: string; width: number; height: number }> = {
    sm: { box: "h-9", image: "h-7 w-auto", width: 185, height: 28 },
    default: { box: "h-12", image: "h-9 w-auto", width: 238, height: 36 },
    lg: { box: "h-14", image: "h-11 w-auto", width: 291, height: 44 },
  };
  const s = sizes[size];

  return (
    <span
      className={`inline-flex items-center ${s.box} ${className}`}
      data-variant={variant}
      aria-label="ClickCar"
    >
      <Image
        src="/images/clickcar-logo.png"
        alt="ClickCar"
        width={s.width}
        height={s.height}
        className={s.image}
        style={{ width: "auto" }}
        priority
      />
    </span>
  );
}

export function LogoMark({
  className = "",
}: {
  className?: string;
}) {
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
