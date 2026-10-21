"use client";

import { Link } from "@/i18n/routing";

interface NavItem {
  href?: string;
  label: string;
  children?: { href: string; label: string }[];
}

export function MobileNav({
  items,
  onClose,
  ctaLabel,
}: {
  items: NavItem[];
  onClose: () => void;
  ctaLabel: string;
}) {
  return (
    <div className="border-t border-rule-dark bg-graphite lg:hidden">
      <nav className="container-main py-3" aria-label="Mobile">
        {items.map((item) =>
          item.children ? (
            <div key={item.label} className="border-b border-rule-dark py-2 last:border-b-0">
              <div className="cc-label px-1 py-2 !text-on-dark-2">{item.label}</div>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="block whitespace-nowrap rounded-md px-1 py-2.5 text-[15px] text-on-dark-2 transition-colors hover:text-on-dark"
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
              className="block whitespace-nowrap border-b border-rule-dark px-1 py-3 text-[15px] font-medium text-on-dark transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ),
        )}
        <Link href="/contact" onClick={onClose} className="cc-btn cc-btn--signal mt-4 w-full">
          {ctaLabel}
        </Link>
      </nav>
    </div>
  );
}
