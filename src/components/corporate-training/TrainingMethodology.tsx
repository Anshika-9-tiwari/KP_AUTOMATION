'use client'
import {
  BookOpenCheck,
  Laptop,
  Factory,
  Users,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const methodology = [
  {
    icon: BookOpenCheck,
    number: "01",
    title: "Concept & Fundamentals",
    description:
      "Build a strong foundation in automation concepts, control systems and industrial technologies.",
  },
  {
    icon: Laptop,
    number: "02",
    title: "Hands-On Practice",
    description:
      "Apply concepts through practical programming, configuration and troubleshooting exercises.",
  },
  {
    icon: Factory,
    number: "03",
    title: "Industrial Applications",
    description:
      "Understand how automation technologies are implemented in real manufacturing environments.",
  },
  {
    icon: Users,
    number: "04",
    title: "Project-Based Learning",
    description:
      "Work through practical automation scenarios that connect training with real-world requirements.",
  },
];

export default function TrainingMethodology() {
  return (
    <section className="bg-base-200 py-20">
      <Container>
        <SectionHeader
          badge="Our Training Approach"
          title="Learn. Practice."
          highlight="Apply."
          description="Our training methodology combines technical concepts with hands-on practice and real industrial applications."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-base-300 lg:block" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {methodology.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="relative"
                >
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-base-300 bg-white text-primary shadow-sm">
                    <Icon size={28} />
                  </div>

                  <span className="mt-6 block text-sm font-semibold tracking-widest text-primary">
                    {item.number}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold text-[var(--heading)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[var(--text)]">
                    {item.description}
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