"use client";
import Image from "next/image";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

export default function IndustryHero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden py-18">
      <Image
        src="/bg3.jpeg"
        alt="Industrial automation solutions"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

      <Container className="relative z-10 flex min-h-[620px] items-center pt-18">
        <div className="max-w-[850px] text-white">
          <span className="inline-flex rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
            Industries We Serve
          </span>

          <h1 className="mt-7 font-serif text-5xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
            Automation Solutions
            <span className="block text-primary">
              Built for Every Industry
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            KP Automation delivers reliable industrial automation,
            control and digital solutions designed to improve
            productivity, efficiency and operational performance
            across diverse industrial environments.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton href="#industries">
              Explore Industries
            </PrimaryButton>

            <SecondaryButton href="/contact#contact-form">
              Get Consultation
            </SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}