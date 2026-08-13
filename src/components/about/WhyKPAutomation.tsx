"use client";

import Image from "next/image";
import {
  BadgeCheck,
  CheckCircle2,
  Headset,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const strengths = [
  {
    icon: BadgeCheck,
    title: "Industry-Focused Expertise",
    description:
      "Solutions are designed around practical manufacturing and industrial requirements.",
  },
  {
    icon: Lightbulb,
    title: "Modern Technology",
    description:
      "We work with automation, IIoT and Industry 4.0 technologies to support smarter operations.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    description:
      "A focus on dependable engineering, quality implementation and long-term performance.",
  },
  {
    icon: Users,
    title: "Skilled Engineering",
    description:
      "Technical expertise across automation, control systems and industrial applications.",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description:
      "Continued technical assistance to help businesses keep their automation systems running.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Approach",
    description:
      "From understanding requirements and engineering to commissioning and support.",
  },
];

export default function WhyKPAutomation() {
  return (
    <section className="bg-base-100 py-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}

          <div className="relative h-[560px] overflow-hidden rounded-3xl">
            <Image
              src="/aumation/plc-program.jpg"
              alt="KP Automation Engineering"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-black/50 p-6 text-white backdrop-blur-lg">
              <p className="text-sm font-medium text-primary tracking-wider">
                KP Automation
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Engineering Solutions That Move Industry Forward
              </h3>
            </div>
          </div>

          {/* Content */}

          <div>
            <SectionHeader
              align="left"
              badge="Why KP Automation"
              title="Built Around Engineering"
              highlight="Driven by Results"
              description="Our approach combines practical industrial knowledge, modern automation technologies and customer-focused engineering to deliver solutions built around real operational needs."
              className="mb-10"
            />

            <div className="grid gap-6 sm:grid-cols-2">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[var(--heading)]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[var(--text)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}