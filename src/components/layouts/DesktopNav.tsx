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
        {navigation.map((item) => (
          <li
            key={item.label}
            className={item.children ? "dropdown dropdown-hover relative" : "relative"}
          >
            {!item.children ? (
              <Link
                href={item.href}
                className={`group relative flex items-center py-2 text-[15px] font-medium transition-all duration-300 ${
                  pathname === item.href ? "text-primary" : navTextColor
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                    pathname === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ) : (
              <>
                <label
                  tabIndex={0}
                  className={`group flex cursor-pointer items-center gap-1 py-2 text-[15px] font-medium transition-all duration-300 ${
                    pathname.startsWith(item.href)
                      ? "text-primary"
                      : navTextColor
                  }`}
                >
                  {item.label}

                  <ChevronDown
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu mt-4 w-60 rounded-2xl border border-base-300 bg-white p-2 shadow-xl"
                >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className={`rounded-xl py-2 transition-all duration-200 ${
                          pathname === child.href
                            ? "bg-primary text-white"
                            : "hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>

      <PrimaryButton href="/contact#contact-form">
        Get Free Consultation
      </PrimaryButton>
    </div>
  );
}