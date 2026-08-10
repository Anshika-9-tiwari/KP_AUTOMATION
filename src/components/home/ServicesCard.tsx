
"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  featured?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href = "/services",
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={`group rounded-3xl border border-base-300 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
        <Icon
          size={28}
          className="text-primary transition-all duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-[var(--heading)]">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-[var(--text)]">
        {description}
      </p>

      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 font-medium text-primary"
      >
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}