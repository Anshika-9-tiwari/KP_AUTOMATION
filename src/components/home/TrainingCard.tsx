"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Laptop } from "lucide-react";

interface TrainingCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  featured?: boolean;
}

export default function TrainingCard({
  title,
  description,
  image,
  featured = false,
  href = "/corporate-training",
}: TrainingCardProps) {
  return (
    <div className={`group overflow-hidden rounded-3xl border border-base-300 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${featured ? "lg:col-span-2" : ""}`}>
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 badge badge-primary gap-2 px-3 py-3">
          <Laptop size={14} />
          Online
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--heading)]">
          {title}
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-[var(--text)]">
          {description}
        </p>

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 font-medium text-primary"
        >
          Learn More
          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}