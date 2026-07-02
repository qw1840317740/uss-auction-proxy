"use client";

import { Link } from "@/i18n/routing";

interface NavItem {
  href?: string;
  label: string;
  children?: { href: string; label: string }[];
}

export function MobileNav({ items, onClose }: { items: NavItem[]; onClose: () => void }) {
  return (
    <div className="border-t border-white/10 bg-[#05070b] lg:hidden">
      <nav className="container-main py-4 space-y-1">
        {items.map((item) =>
          item.children ? (
            <div key={item.label}>
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                {item.label}
              </div>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="block rounded-md px-6 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href!}
              onClick={onClose}
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
