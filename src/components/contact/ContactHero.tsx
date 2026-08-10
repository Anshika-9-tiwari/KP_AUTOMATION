"use client"

import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[480px] items-center overflow-hidden py-20">
      {/* Background */}
      <Image
        src="/contactbanner.jpeg"
        alt="KP Automation Industrial Automation"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/35" />

      <Container className="relative z-10 pt-20">
        <div className="max-w-3xl text-white">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
            <MessageCircle size={17} className="text-primary" />
            Let's Work Together
          </span>

          {/* Heading */}
          <h1 className="mt-8 font-serif text-5xl font-bold leading-[1.3] tracking-tight lg:text-6xl">
            Let's Build Your
            <br />
            <span className="text-primary">
              Automation Solution
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Have an automation project, training requirement or technical
            challenge? Talk to our experts and let us find the right solution
            for your industry.
          </p>

          {/* CTA */}
          <div className="mt-11 flex flex-wrap gap-4">
            <PrimaryButton href="#contact-form" icon={false}>
              Send an Enquiry
              <ArrowDown size={18} />
            </PrimaryButton>
          </div>

        </div>
      </Container>
    </section>
  );
}