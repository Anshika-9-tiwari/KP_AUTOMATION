"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { navigation } from "@/data/navigation";
import PrimaryButton from "@/components/common/PrimaryButton";

interface DesktopNavProps {
  isScrolled: boolean;
}

export default function DesktopNav({
  isScrolled,
}: DesktopNavProps) {
  const pathname = usePathname();

  const navTextColor = isScrolled
    ? "text-neutral hover:text-primary"
    : "text-white hover:text-primary";

  return (
    <div className="hidden items-center gap-10 lg:flex">
      <ul className="flex items-center gap-8">
        {navigation.map((item) => {
          const hasChildren = Boolean(item.children?.length);
          const isActive = hasChildren
            ? pathname.startsWith(item.href)
            : pathname === item.href;

          return (
            <li
              key={item.label}
              className={`relative ${
                hasChildren ? "group" : ""
              }`}
            >
              {!hasChildren ? (
                <Link
                  href={item.href}
                  className={`group relative flex items-center py-2 text-[15px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : navTextColor
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 py-2 text-[15px] font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : navTextColor
                    }`}
                  >
                    {item.label}

                    <ChevronDown
                      size={17}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  <div
                    className="
                      invisible absolute left-1/2 top-full z-50
                      w-64 -translate-x-1/2
                      translate-y-2
                      opacity-0
                      transition-all duration-200
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <ul className="mt-2 rounded-2xl border border-base-300 bg-white p-2 shadow-xl">
                      {item.children?.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className={`block rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                              pathname === child.href
                                ? "bg-primary text-white"
                                : "text-neutral hover:bg-primary/10 hover:text-primary"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>

      <PrimaryButton href="/contact#contact-form">
        Get Free Consultation
      </PrimaryButton>
    </div>
  );
}