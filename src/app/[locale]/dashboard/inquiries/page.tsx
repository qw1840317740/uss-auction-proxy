"use client";

import { useTranslations } from "next-intl";
import { cn, formatDate } from "@/lib/utils";
import { MessageSquare, Eye } from "lucide-react";

const demoInquiries = [
  { id: "1", vehicle: "2022 Toyota Land Cruiser 300", date: "2025-05-28", status: "pending", message: "Interested in this vehicle. Could you provide more details about the condition and export timeline?" },
  { id: "2", vehicle: "2023 Toyota Harrier", date: "2025-05-26", status: "quoted", message: "Please send me the FOB price and shipping cost to Port of Manila." },
  { id: "3", vehicle: "2023 Honda Civic", date: "2025-05-24", status: "confirmed", message: "I'd like to confirm the order. What are the next steps for payment?" },
  { id: "4", vehicle: "2022 Nissan Note Aura", date: "2025-05-20", status: "completed", message: "Thank you for the quick delivery. The car arrived in great condition." },
  { id: "5", vehicle: "2023 Toyota Prius", date: "2025-05-18", status: "completed", message: "Can you provide a quote including insurance and inspection fees?" },
];

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  quoted: "bg-blue-100 text-blue-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-emerald-100 text-emerald-700",
};

export default function InquiriesPage() {
  const t = useTranslations("dashboard");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{t("inquiries")}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {demoInquiries.length} inquiries total
        </p>
      </div>

      {/* Inquiries List */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th className="px-5 py-3">{t("vehicle")}</th>
                <th className="px-5 py-3">{t("status")}</th>
                <th className="px-5 py-3">{t("date")}</th>
                <th className="px-5 py-3">{t("description")}</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {demoInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50/50">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MessageSquare className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{inquiry.vehicle}</span>
                    </div>
                  </td>
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
                  <td className="px-5 py-3.5 text-sm text-gray-500 max-w-xs truncate">{inquiry.message}</td>
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
    </div>
  );
}
