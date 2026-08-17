"use client"

import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[480px] items-center overflow-hidden py-20">
      {/* Background */}
      <Image
        src="/bg2.jpeg"
        alt="KP Automation Industrial Automation"
        fill
        priority
        className="object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/60 to-black/70 " />

      <Container className="relative z-10 pt-20 md:pt-24">
        <div className="max-w-3xl text-white">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-primary/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
            <MessageCircle size={17} className="text-white/40" />
            Let's Work Together
          </span>

          {/* Heading */}
          <h1 className="mt-10 font-serif text-5xl font-bold leading-[1.1] tracking-tight lg:text-6xl">
            Let's Build Your
            <br />
            <span>
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
            <SecondaryButton href="#contact-form" icon={false}>
              Send an Enquiry
              <ArrowDown size={18} />
            </SecondaryButton>
          </div>

        </div>
      </Container>
    </section>
  );
}