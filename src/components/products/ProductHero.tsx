"use client";
import Image from "next/image";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

export default function ProductHero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden">
      <Image
        src="/industrialautomation.jpeg"
        alt="Industrial automation products"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

      <Container className="relative z-10 flex min-h-[620px] items-center py-24">
        <div className="max-w-3xl text-white">
          <span className="inline-flex rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
            Industrial Automation Products
          </span>

          <h1 className="mt-7 font-serif text-5xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
            Reliable Products
            <span className="block text-primary">
              for Smarter Automation
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            Explore industrial automation products and components
            designed to support reliable machine control, process
            automation, monitoring and industrial connectivity.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton href="#products">
              Explore Products
            </PrimaryButton>

            <SecondaryButton href="/contact#contact-form">
              Get Product Enquiry
            </SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}