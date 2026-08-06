"use client";

import Image from "next/image";
import { BadgeCheck, CircleCheckBig } from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import HeroForm from "./HeroForm";

const highlights = [
  "Complete PLC, SCADA & HMI Integration",
  "Industry 4.0 & IIoT Smart Factory Solutions",
  "On-site Commissioning, Support & Corporate Training",
];

export default function Hero() {
  return (
    <section className="relative min-h-[720px] lg:min-h-[680px] flex items-center overflow-hidden py-16 lg:py-16">
  
      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/aumation/industries-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />

      {/* Additional Left Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" /> */}

      <Container className="relative z-10 pt-18 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-5">
          {/* Left */}

          <div className="space-y-7 text-white lg:col-span-3">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full text-white/80 border border-primary/30 bg-primary/10 px-5 py-2 backdrop-blur-md">
              <BadgeCheck size={16} className="text-primary" />

              <span className="text-xs font-medium">
                Trusted Industrial Automation Partner
              </span>
            </div>

            {/* Heading */}

            <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.09] tracking-tight lg:text-6xl">
              Industrial Automation
              <span className="block">
                That Drives Growth
              </span>
            </h1>
 
            {/* Description */}

            <p className="max-w-2xl text-lg leading-8 text-white/80">
              Delivering PLC Programming, SCADA, HMI, IIoT and complete
              industrial automation solutions that increase productivity,
              reduce downtime and accelerate digital transformation.
            </p>

            {/* Highlights */}

            <div className="space-y-3">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <CircleCheckBig
                      size={14}
                      className="text-white"
                    />
                  </div>
                  <span className="text-base font-medium text-white/90">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 pt-3">

              <PrimaryButton href="/services">
                Explore Services
              </PrimaryButton>

              <SecondaryButton href="/contact">
                Get Free Consultation
              </SecondaryButton>

            </div>

          </div>

          {/* Right */}

          <div className="relative lg:col-span-2">

            <div className="relative rounded-[30px] border border-white/15  p-2 shadow-2xl backdrop-blur-md">
              <HeroForm />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}