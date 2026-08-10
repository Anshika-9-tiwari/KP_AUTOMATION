"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  brand: string;
  image: string;
  icon: LucideIcon;
  href?: string;
}

export default function ProductCard({
  title,
  brand,
  image,
  icon: Icon,
  href = "/products",
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-base-300 bg-white transition-all duration-300 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md">
          <Icon size={22} className="text-primary" />
        </div>
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-semibold text-[var(--heading)]">
          {title}
        </h3>

        <p className="mt-2 text-sm text-[var(--text)]">
          {brand}
        </p>

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 font-medium text-primary"
        >
          View Product

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>
    </div>
  );
}