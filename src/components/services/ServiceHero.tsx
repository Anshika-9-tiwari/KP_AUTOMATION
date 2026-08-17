"use client"
import Image from "next/image";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { Settings2 } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-[500px] items-center overflow-hidden py-20">
      {/* Background */}
      <Image
        src="/aumation/industry-bg.jpg"
        alt="KP Automation Services"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/75 to-black/60" />

      <Container className="relative z-10 pt-20">
        <div className="max-w-3xl text-white">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
            <Settings2 size={17} className="text-white" />
            Industrial Automation Services
          </span>

          {/* Heading */}
          <h1 className="mt-8 font-serif text-5xl font-bold leading-[1.1] tracking-tight lg:text-6xl">
            Automation Solutions
            <br />
            <span className="text-primary">
              Built for Industry
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            From PLC programming and SCADA development to IIoT,
            machine vision and complete industrial automation,
            KP Automation delivers practical solutions for modern
            manufacturing environments.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href="#our-process">
              Explore our process
            </PrimaryButton>

            <SecondaryButton href="/contact">
              Get Free Consultation
            </SecondaryButton>
          </div>

        </div>
      </Container>
    </section>
  );
}