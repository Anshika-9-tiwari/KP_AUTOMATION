"use client"

import {
  Settings2,
  Gauge,
  ShieldCheck,
  Headset,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const benefits = [
  {
    icon: Settings2,
    title: "Application-Focused Engineering",
    description:
      "We design automation solutions around your machines, processes and actual production requirements.",
  },
  {
    icon: Gauge,
    title: "Improve Productivity",
    description:
      "Automation helps streamline processes, improve machine performance and reduce avoidable downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Implementation",
    description:
      "Our solutions focus on stable control, proper integration and dependable industrial operation.",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description:
      "From commissioning to ongoing assistance, our team remains available to support your automation systems.",
  },
];

export default function WhyServices() {
  return (
    <section className="bg-base-200 py-20">
      <Container>
        <SectionHeader
          badge="Why Our Services"
          title="Automation Designed Around"
          highlight=" Your Industry"
          description="We combine industrial engineering knowledge with modern automation technologies to build practical solutions that deliver measurable operational value."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (  
              <div
                key={item.title}
                className="rounded-3xl border border-base-300 bg-white p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
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