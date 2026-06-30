"use client";

import { Link } from "@/i18n/routing";

interface NavItem {
  href?: string;
  label: string;
  children?: { href: string; label: string }[];
}

export function MobileNav({ items, onClose }: { items: NavItem[]; onClose: () => void }) {
  return (
    <div className="lg:hidden border-t border-gray-100 bg-white">
      <nav className="container-main py-4 space-y-1">
        {items.map((item) =>
          item.children ? (
            <div key={item.label}>
              <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {item.label}
              </div>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
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
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
