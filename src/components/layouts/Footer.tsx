"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

import Container from "@/components/common/Container";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

const services = [
  {
    label: "PLC Programming",
    href: "/services/plc-programming",
  },
  {
    label: "SCADA & HMI",
    href: "/services/scada-hmi",
  },
  {
    label: "Machine Vision",
    href: "/services/machine-vision",
  },
  {
    label: "Industrial Automation",
    href: "/services/industrial-automation",
  },
  {
    label: "IIOT Solutions",
    href: "/services/iiot",
  },
  {
    label: "Control Panels",
    href: "/services/control-panels",
  },
];

const trainings = [
  { label: "Industrial Automation", href: "/corporate-training/industrial-automation-training"},
  { label: "PLC Training", href: "/corporate-training/plc-training"},
  { label: "SCADA & HMI Training", href: "/corporate-training/scada-and-hmi"},
  { label: "Drives & Motors", href: "/corporate-training/drives-motors"},
  { label: "Process Instrumentation", href: "/corporate-training/process-instrumentation"},
];

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">

      <Container>
        
        <div className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[2fr_1fr_1fr_1fr_1.6fr]">
          {/* Company */}

          <div>
            <Image
              src="/kp_automation.png"
              alt="KP Automation"
              width={230}
              height={70}
              className="h-16 w-auto"
            />

            <p className="mt-6 max-w-sm leading-7 text-gray-400">
              KP Automation delivers complete Industrial Automation,
              PLC Programming, SCADA, HMI, IIOT, Machine Vision,
              Robotics and Corporate Training solutions for modern
              manufacturing industries across India.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="https://www.linkedin.com/in/nikkirajput/" target="_blank" rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-primary hover:bg-primary"
              >
                <FaLinkedin size={18} />
              </Link>

              <Link
                href="https://wa.me/916397206850"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-primary hover:bg-primary"
              >
                <FaWhatsapp size={18} />
              </Link>

              <Link
                href="https://instagram.com/kp_automation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-primary hover:bg-primary"
              >
                <FaInstagram size={18} />
              </Link>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((item) => (

                <li key={item.label}>

                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-primary"
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3">

              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-gray-400 transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Training */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Corporate Training
            </h3>

            <ul className="space-y-3">

              {trainings.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-gray-400 transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
           <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50">
                  <Phone size={18} />
                </div>

                <div>

                  <p className="font-medium text-white">
                    Call Us
                  </p>

                  <a
                    href="tel:+917464871880"
                    className="text-gray-400 transition hover:text-primary"
                  >
                    +91 74648 71880
                  </a>

                  <br />

                  <a
                    href="tel:+916397206850"
                    className="text-gray-400 transition hover:text-primary"
                  >
                    +91 63972 06850
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50">
                  <Mail size={18} />
                </div>

                <div>

                  <p className="font-medium text-white">
                    Email
                  </p>

                  <a
                    href="mailto:info@kpautomation.co.in"
                    className="text-gray-400 transition hover:text-primary"
                  >
                    info@kpautomation.co.in
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50">
                  <MapPin size={18} />
                </div>

                <div>

                  <p className="font-medium text-white">
                    Office Address
                  </p>

                  <p className="leading-6 text-gray-400">
                    Block-C, Village Shalimar,
                    Near Indra Park,
                    <br />
                    New Delhi – 110088, India
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
        
        {/* copy rights */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center text-sm text-gray-500 md:flex-row">

         <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white/60">
              KP Automation
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

      </Container>

    </footer>
  );
}