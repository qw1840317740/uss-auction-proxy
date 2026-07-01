import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { authOptions } from "@/auth";
import { cn, formatDate } from "@/lib/utils";
import prisma from "@/lib/db";
import { Mail, MessageSquare, Phone } from "lucide-react";

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  quoted: "bg-red-50 text-red-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-gray-100 text-gray-600",
};

function displayStatus(status: string) {
  return statusColors[status] ? status : "pending";
}

function vehicleLabel(inquiry: {
  vehicleModel: string | null;
  brand: string | null;
  vehicleType: string | null;
}) {
  return [inquiry.brand, inquiry.vehicleModel, inquiry.vehicleType].filter(Boolean).join(" ") || "General inquiry";
}

export default async function InquiriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const session = await getServerSession(authOptions);

  if (!session || !["ADMIN", "STAFF"].includes(session.user.role)) {
    redirect(`/${locale}/dashboard`);
  }

  const t = await getTranslations({ locale, namespace: "dashboard" });

  const inquiries = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{t("inquiries")}</h1>
        <p className="mt-1 text-sm text-gray-500">
          {inquiries.length} inquiries total
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white">
        {inquiries.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <MessageSquare className="mx-auto h-10 w-10 text-gray-300" />
            <p className="mt-3 text-sm font-medium text-gray-900">No inquiries yet</p>
            <p className="mt-1 text-sm text-gray-500">New contact form submissions will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium uppercase tracking-wider text-gray-500">
                  <th className="px-5 py-3">{t("vehicle")}</th>
                  <th className="px-5 py-3">Customer</th>
                  <th className="px-5 py-3">{t("status")}</th>
                  <th className="px-5 py-3">{t("date")}</th>
                  <th className="px-5 py-3">{t("description")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-gray-50/50">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-primary/10 p-2">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{vehicleLabel(inquiry)}</p>
                          <p className="text-xs text-gray-500">{inquiry.inquiryType}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-900">{inquiry.name || "Guest"}</p>
                        <a
                          href={`mailto:${inquiry.email}`}
                          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          {inquiry.email}
                        </a>
                        {inquiry.phone ? (
                          <a
                            href={`tel:${inquiry.phone}`}
                            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            {inquiry.phone}
                          </a>
                        ) : null}
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                          statusColors[displayStatus(inquiry.status)],
                        )}
                      >
                        {t(`inquiryStatus.${displayStatus(inquiry.status)}`)}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-500">
                      {formatDate(inquiry.createdAt, locale)}
                    </td>
                    <td className="max-w-sm px-5 py-3.5">
                      <p className="line-clamp-2 text-sm text-gray-500">
                        {inquiry.message || inquiry.conditions || "-"}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
