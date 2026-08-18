
'use client'
import {
  Search,
  PencilRuler,
  Code2,
  Settings2,
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
      "We understand your process, machines, challenges and automation requirements.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Design",
    description:
      "Our engineers create the right control architecture and solution approach.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description:
      "PLC, SCADA, HMI, IIoT and automation systems are developed and tested.",
  },
  {
    number: "04",
    icon: Settings2,
    title: "Commission",
    description:
      "We integrate, test and commission the solution for reliable operation.",
  },
  {
    number: "05",
    icon: Headset,
    title: "Support",
    description:
      "We provide technical support to keep your automation systems performing.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="bg-base-100 py-20" id="our-process">
      <Container>
        <SectionHeader
          badge="Our Process"
          title="From Concept to"
          highlight="Commissioning"
          description="A structured engineering approach helps us deliver reliable automation solutions from initial requirements through implementation and ongoing support."
        />

        <div className="relative mt-16">
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-primary/20 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-md ring-8 ring-base-100">
                    <Icon size={22} />
                  </div>

                  <span className="mt-6 block text-sm font-semibold text-primary">
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