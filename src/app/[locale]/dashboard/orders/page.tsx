"use client";

import { useTranslations } from "next-intl";
import { cn, formatPrice, formatDate } from "@/lib/utils";
import {
  Package,
  CheckCircle2,
  Truck,
  CreditCard,
  FileCheck,
  Clock,
  Eye,
} from "lucide-react";

const demoOrders = [
  {
    id: "ORD-20250526-001",
    vehicle: "2021 Honda Civic (FK7)",
    stockNo: "VJ-0234",
    totalPrice: 1925000,
    paymentStatus: "paid",
    currentStep: 4,
    steps: ["confirmed", "paid", "processing", "shipping", "delivered"],
    orderDate: "2025-05-26",
  },
  {
    id: "ORD-20250520-002",
    vehicle: "2023 Toyota Yaris (MXPH10)",
    stockNo: "VJ-0789",
    totalPrice: 1534000,
    paymentStatus: "paid",
    currentStep: 2,
    steps: ["confirmed", "paid", "processing", "shipping", "delivered"],
    orderDate: "2025-05-20",
  },
  {
    id: "ORD-20250515-003",
    vehicle: "2020 Toyota HiAce (TRH200K)",
    stockNo: "VJ-0345",
    totalPrice: 3200000,
    paymentStatus: "pending",
    currentStep: 0,
    steps: ["confirmed", "paid", "processing", "shipping", "delivered"],
    orderDate: "2025-05-15",
  },
  {
    id: "ORD-20250510-004",
    vehicle: "2019 Nissan Caravan (E26)",
    stockNo: "VJ-0678",
    totalPrice: 1850000,
    paymentStatus: "paid",
    currentStep: 4,
    steps: ["confirmed", "paid", "processing", "shipping", "delivered"],
    orderDate: "2025-05-10",
  },
];

const stepIcons = [FileCheck, CreditCard, Clock, Truck, CheckCircle2];

export default function OrdersPage() {
  const t = useTranslations("dashboard");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{t("orders")}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {demoOrders.length} orders total
        </p>
      </div>

      {/* Order Cards */}
      <div className="space-y-4">
        {demoOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow"
          >
            {/* Order Header */}
            <div className="px-5 py-4 border-b border-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-gray-900">{order.id}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{order.vehicle}</p>
                <p className="text-sm text-gray-400">{order.stockNo}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">{formatPrice(order.totalPrice)}</p>
                <p className="text-sm text-gray-400">{formatDate(order.orderDate)}</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="px-5 py-5">
              <div className="flex items-center justify-between">
                {order.steps.map((step, idx) => {
                  const StepIcon = stepIcons[idx];
                  const isCompleted = idx < order.currentStep;
                  const isCurrent = idx === order.currentStep;
                  const isLast = idx === order.steps.length - 1;

                  return (
                    <div key={step} className="flex items-center flex-1 last:flex-none">
                      {/* Step node */}
                      <div className="flex flex-col items-center relative">
                        <div
                          className={cn(
                            "w-9 h-9 rounded-full flex items-center justify-center border-2 transition-colors",
                            isCompleted
                              ? "bg-green-500 border-green-500 text-white"
                              : isCurrent
                                ? "bg-primary/10 border-primary text-primary"
                                : "bg-gray-50 border-gray-200 text-gray-300"
                          )}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <StepIcon className="w-4 h-4" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-sm mt-1.5 font-medium whitespace-nowrap",
                            isCompleted ? "text-green-600" : isCurrent ? "text-primary" : "text-gray-400"
                          )}
                        >
                          {t(`orderStatus.${step}`)}
                        </span>
                      </div>

                      {/* Connector line */}
                      {!isLast && (
                        <div
                          className={cn(
                            "flex-1 h-0.5 mx-2 mt-[-1.25rem]",
                            isCompleted ? "bg-green-500" : "bg-gray-200"
                          )}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-gray-50/50 border-t border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
                    order.paymentStatus === "paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  )}
                >
                  {order.paymentStatus === "paid"
                    ? t("orderStatus.paid")
                    : t("orderStatus.pending")}
                </span>
              </div>
              <button className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark transition-colors font-medium">
                <Eye className="w-4 h-4" />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
