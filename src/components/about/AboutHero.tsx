"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden py-20">
      {/* Background */}
      <Image
        src="/aumation/industrialautomation.jpeg"
        alt="Industrial Automation"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />

      <Container className="relative z-10 pt-20">
        <div className="max-w-3xl text-white">

          {/* Badge */}
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
            About KP Automation
          </span>

          {/* Heading */}
          <h1 className="mt-8 max-w-2xl font-serif text-5xl font-bold leading-[1.1] tracking-tight lg:text-6xl">
            Powering Industries
            <br />
            <span className="text-neutral-content">
              Through Automation
            </span>
          </h1>

          {/* Description */}
          <p className="mt-10 max-w-2xl text-lg leading-8 text-white/80">
            KP Automation delivers industrial automation and smart
            manufacturing solutions that help businesses improve
            productivity, reliability and operational efficiency.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">
            <PrimaryButton href="/services">
              Explore Our Services
            </PrimaryButton>

            <SecondaryButton href="/contact">
              Talk to Our Experts
            </SecondaryButton>
          </div>

        </div>
      </Container>
    </section>
  );
}