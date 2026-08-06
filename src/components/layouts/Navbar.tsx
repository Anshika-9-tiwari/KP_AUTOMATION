"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/common/Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="navbar h-20 px-0">

          <div className="navbar-start">

            <Link href="/">
              <Image
                src="/kp_automation.png"
                alt="KP Automation"
                width={220}
                height={70}
                priority
                className="h-15 w-auto object-contain"
              />
            </Link>

          </div>

          <div className="navbar-center">

            <DesktopNav isScrolled={isScrolled} />

          </div>

          <div className="navbar-end lg:hidden">

            <MobileNav />

          </div>

        </div>
      </Container>
    </header>
  );
}