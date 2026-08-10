"use client";

import {
  Cpu,
  Factory,
  Network,
  ScanSearch,
  GraduationCap,
  Settings2,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const expertise = [
  {
    icon: Cpu,
    title: "Automation Engineering",
    description:
      "PLC programming, control systems and automation engineering for reliable industrial operations.",
  },
  {
    icon: Factory,
    title: "Smart Manufacturing",
    description:
      "Modern solutions that connect machines, processes and data to improve manufacturing efficiency.",
  },
  {
    icon: Network,
    title: "IIoT & Industry 4.0",
    description:
      "Connected industrial systems that enable monitoring, data visibility and smarter decision-making.",
  },
  {
    icon: ScanSearch,
    title: "Machine Vision",
    description:
      "Vision-based inspection and quality control solutions for automated manufacturing processes.",
  },
  {
    icon: Settings2,
    title: "Control Systems",
    description:
      "Integrated PLC, HMI, SCADA and control panel solutions designed around industrial requirements.",
  },
  {
    icon: GraduationCap,
    title: "Technical Training",
    description:
      "Practical corporate training programs focused on real-world industrial automation applications.",
  },
];

export default function OurExpertise() {
  return (
    <section className="bg-base-200 py-20">
      <Container>
        <SectionHeader
          badge="Our Expertise"
          title="Engineering Capabilities"
          highlight="Built for Industry"
          description="Combining automation engineering, connected technologies and practical industrial knowledge to deliver solutions that work in real-world environments."
        />

        <div className="mt-15 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-base-300 bg-white p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[var(--heading)]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--text)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}