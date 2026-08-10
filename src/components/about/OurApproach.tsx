"use client";

import {
  Search,
  PencilRuler,
  Code2,
  PlayCircle,
  Headset,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We understand your process, challenges and automation requirements.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Design",
    description:
      "Our team develops the right automation architecture and engineering approach.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description:
      "PLC, SCADA, HMI, control and software solutions are developed and tested.",
  },
  {
    number: "04",
    icon: PlayCircle,
    title: "Commission",
    description:
      "We implement, integrate and commission the solution for reliable operation.",
  },
  {
    number: "05",
    icon: Headset,
    title: "Support",
    description:
      "Ongoing technical support helps keep your automation systems performing.",
  },
];

export default function OurApproach() {
  return (
    <section className="bg-base-200 py-20">
      <Container>
        <SectionHeader
          badge="Our Approach"
          title="From Requirement to"
          highlight="Reliable Results"
          description="A structured engineering process helps us deliver practical automation solutions that are aligned with your operational goals."
        />

        <div className="relative mt-16">
          {/* Connecting Line */}

          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-primary/20 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center"
                >
                  {/* Number / Icon */}

                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-base-200 bg-primary text-white shadow-md">
                    <Icon size={22} />
                  </div>

                  <span className="mt-5 block text-sm font-semibold text-primary">
                    {step.number}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold text-[var(--heading)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text)]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}