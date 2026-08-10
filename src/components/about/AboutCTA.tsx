"use client";

import { ArrowRight, PhoneCall } from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-16">
      {/* Decorative Elements */}

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center text-white">

          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
            Let's Work Together
          </span>

          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight lg:text-5xl">
            Ready to Build a  Smarter Future for Your Industry? 
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Talk to our automation experts about your project,
            training requirements or industrial automation needs.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <PrimaryButton
              href="/contact"
              className="bg-white text-primary hover:bg-base-200"
            >
              Get Free Consultation
            </PrimaryButton>

            <SecondaryButton
              href="https://wa.me/916397206850"
              rel="noopener noreferrer"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              DM on  WhatsApp
            </SecondaryButton>

          </div>

        </div>
      </Container>
    </section>
  );
}