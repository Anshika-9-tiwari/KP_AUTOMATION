"use client"

import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <div>
      <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
        Get In Touch
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[var(--heading)] lg:text-5xl">
        Let's Discuss Your
        <br />
        <span className="text-primary">Automation Needs</span>
      </h2>

      <p className="mt-5 max-w-xl leading-7 text-[var(--text)]">
        Whether you need a complete automation solution, technical
        consultation, industrial products or corporate training, our team
        is ready to understand your requirements.
      </p>

      <div className="mt-10 space-y-6">
        {/* Phone */}

        <a
          href="tel:+917464871880"
          className="group flex items-start gap-4"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
            <Phone size={21} />
          </div>

          <div>
            <p className="font-semibold text-[var(--heading)]">
              Call Us
            </p>

            <p className="mt-1 text-[var(--text)] transition group-hover:text-primary">
              +91 74648 71880
            </p>

            <p className="text-[var(--text)] transition group-hover:text-primary">
              +91 63972 06850
            </p>
          </div>
        </a>

        {/* Email */}

        <a
          href="mailto:info@kpautomation.co.in"
          className="group flex items-start gap-4"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
            <Mail size={21} />
          </div>

          <div>
            <p className="font-semibold text-[var(--heading)]">
              Email Us
            </p>

            <p className="mt-1 text-[var(--text)] transition group-hover:text-primary">
              info@kpautomation.co.in
            </p>
          </div>
        </a>

        {/* WhatsApp */}

        <a
          href="https://wa.me/916397206850"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
            <MessageCircle size={21} />
          </div>

          <div>
            <p className="font-semibold text-[var(--heading)]">
              WhatsApp
            </p>

            <p className="mt-1 text-[var(--text)] transition group-hover:text-primary">
              Chat with our team
            </p>
          </div>
        </a>

        {/* Address */}

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <MapPin size={21} />
          </div>

          <div>
            <p className="font-semibold text-[var(--heading)]">
              Office Address
            </p>

            <p className="mt-1 leading-7 text-[var(--text)]">
              Block-C, Village Salimar, Near Indra Park,
              <br />
              New Delhi – 110088, India
            </p>
          </div>
        </div>
      </div>

      {/* Directions */}

      <Link
        href="https://www.google.com/maps/dir/?api=1&destination=Indra+Park,+Village+Salimar+Bagh,+New+Delhi,+Delhi+110088"
        target="_blank"
        className="mt-8 inline-flex items-center rounded-xl border border-primary px-5 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
      >
        Get Directions
      </Link>
    </div>
  );
}