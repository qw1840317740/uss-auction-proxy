import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, currency: string = "JPY"): string {
  const symbols: Record<string, string> = { JPY: "¥", USD: "$", EUR: "€", CNY: "¥" };
  const symbol = symbols[currency] ?? currency;
  return `${symbol}${new Intl.NumberFormat("ja-JP").format(amount)}`;
}

export function formatMileage(km: number): string {
  return new Intl.NumberFormat("ja-JP").format(km) + " km";
}

export function formatDate(date: Date | string, locale: string = "zh"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString(locale === "zh" ? "zh-CN" : locale === "ja" ? "ja-JP" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
