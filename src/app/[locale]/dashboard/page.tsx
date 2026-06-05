"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { cn, formatPrice, formatDate } from "@/lib/utils";
import {
  MessageSquare,
  Package,
  CreditCard,
  Heart,
  Plus,
  Search,
  Eye,
  TrendingUp,
} from "lucide-react";

const stats = [
  { key: "activeInquiries", value: 3, icon: MessageSquare, color: "bg-blue-50 text-blue-600" },
  { key: "completedOrders", value: 12, icon: Package, color: "bg-green-50 text-green-600" },
  { key: "totalSpent", value: 4850000, icon: CreditCard, color: "bg-purple-50 text-purple-600", isPrice: true },
  { key: "savedVehicles", value: 8, icon: Heart, color: "bg-amber-50 text-amber-600" },
];

const recentInquiries = [
  { id: 1, vehicle: "2022 Toyota Camry (AXVH70)", status: "pending", date: "2025-05-27" },
  { id: 2, vehicle: "2021 Honda Civic (FK7)", status: "quoted", date: "2025-05-26" },
  { id: 3, vehicle: "2023 Mazda CX-5 (KF5P)", status: "confirmed", date: "2025-05-25" },
  { id: 4, vehicle: "2020 Nissan Note (E13)", status: "completed", date: "2025-05-24" },
  { id: 5, vehicle: "2021 Toyota Prius (ZVW50)", status: "cancelled", date: "2025-05-23" },
];

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  quoted: "bg-blue-100 text-blue-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-gray-100 text-gray-600",
};

export default function DashboardPage() {
  const t = useTranslations("dashboard");
  const tc = useTranslations("common");

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t("welcome")}</h1>
          <p className="text-sm text-gray-500 mt-1">John Doe</p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Search className="w-4 h-4" />
            {tc("search")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Plus className="w-4 h-4" />
            {tc("contactUs")}
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.key}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className={cn("p-2.5 rounded-lg", stat.color)}>
                  <Icon className="w-5 h-5" />
                </div>
                <TrendingUp className="w-4 h-4 text-gray-400" />
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold text-gray-900">
                  {stat.isPrice ? formatPrice(stat.value) : stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">{t(`stats.${stat.key}`)}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Inquiries Table */}
      <div className="bg-white rounded-xl border border-gray-100">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">{t("inquiries")}</h2>
          <Link
            href="/dashboard/inquiries"
            className="text-sm text-primary hover:text-primary-dark transition-colors"
          >
            {tc("viewAll")}
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                <th className="px-5 py-3">Vehicle</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50/50">
                  <td className="px-5 py-3.5 text-sm font-medium text-gray-900">{inquiry.vehicle}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        statusColors[inquiry.status]
                      )}
                    >
                      {t(`inquiryStatus.${inquiry.status}`)}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-gray-500">{formatDate(inquiry.date)}</td>
                  <td className="px-5 py-3.5">
                    <button className="p-1.5 text-gray-400 hover:text-primary transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { href: "/dashboard/orders", icon: Package, label: t("orders") },
          { href: "/dashboard/favorites", icon: Heart, label: t("favorites") },
          { href: "/dashboard/inquiries", icon: MessageSquare, label: t("inquiries") },
          { href: "/vehicles", icon: Search, label: tc("search") },
        ].map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.href}
              href={action.href}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-sm hover:border-primary/20 transition-all text-center"
            >
              <Icon className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-gray-700">{action.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
