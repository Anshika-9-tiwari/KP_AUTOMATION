import Image from "next/image";
import { ArrowRight, GraduationCap } from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

export default function CorporateTrainingHero() {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden py-20">
      <Image
        src="/certificate.jpeg"
        alt="Industrial Automation Corporate Training"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />

      <Container className="relative z-10 pt-20">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
            <GraduationCap size={18} className="text-primary" />
            Industrial Automation Training
          </span>

          <h1 className="mt-8 font-serif text-5xl font-bold leading-[1.1] lg:text-6xl">
            Build Practical
            <span className="text-primary"> Automation Skills</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Industry-focused training programs designed to develop
            practical skills in PLC, SCADA, HMI, drives, instrumentation,
            networking and modern industrial automation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href="#training-programs">
              Explore Training
            </PrimaryButton>

            <SecondaryButton href="/contact">
              Enquire About Training
            </SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}