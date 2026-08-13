"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import PrimaryButton from "@/components/common/PrimaryButton";

export default function MobileNav() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="btn btn-ghost btn-circle lg:hidden"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}

      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-80 bg-base-100 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b px-5 py-5">
          <h2 className="text-xl font-semibold">Menu</h2>

          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}

        <nav className="p-5">

          <ul className="space-y-2">

            {navigation.map((item) => (

              <li key={item.label}>

                {!item.children ? (

                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 transition-colors duration-300 ${
                      pathname === item.href
                        ? "bg-primary text-white"
                        : "hover:bg-info/10 hover:text-info"
                    }`}
                  >
                    {item.label}
                  </Link>

                ) : (

                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 hover:bg-base-200"
                    >
                      <span>{item.label}</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openDropdown === item.label && (

                      <ul className="mt-2 ml-4 space-y-2">

                        {item.children.map((child) => (

                          <li key={child.label}>

                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className={`block rounded-lg px-4 py-2 text-sm transition-colors duration-300 ${
                                pathname === child.href
                                  ? "bg-info text-white"
                                  : "hover:bg-info/10 hover:text-white"
                              }`}
                            >
                              {child.label}
                            </Link>

                          </li>

                        ))}

                      </ul>

                    )}

                  </>

                )}

              </li>

            ))}

          </ul>

          <div className="mt-8">

            <PrimaryButton
              href="/contact"
              className="w-full justify-center"
            >
              Get Free Consultation
            </PrimaryButton>

          </div>

        </nav>
      </aside>
    </>
  );
}