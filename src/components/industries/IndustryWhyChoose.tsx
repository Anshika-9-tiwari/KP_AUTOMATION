"use client";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  Factory,
  Headphones,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";

const leftPoints = [
  {
    title: "Industry Expertise",
    description:
      "Practical automation solutions designed around real industrial requirements.",
    icon: Factory,
  },
  {
    title: "Proven Automation",
    description:
      "Reliable PLC, SCADA, HMI, drives and control solutions for modern industries.",
    icon: Settings2,
  },
  {
    title: "Quality Engineering",
    description:
      "Engineering-focused solutions built for performance, reliability and maintainability.",
    icon: Award,
  },
];

const rightPoints = [
  {
    title: "Reliable Solutions",
    description:
      "Automation systems designed to improve productivity, control and operational efficiency.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Support",
    description:
      "Technical assistance from system development through commissioning and troubleshooting.",
    icon: Headphones,
  },
  {
    title: "End-to-End Automation",
    description:
      "Integrated solutions covering control, visualization, networking and industrial digitalization.",
    icon: CheckCircle2,
  },
];

function FeatureItem({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="group">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:scale-105">
        <Icon size={25} strokeWidth={2} />
      </div>

      <h3 className="mt-5 text-xl font-bold text-[var(--heading)]">
        {title}
      </h3>

      <p className="mt-3 max-w-sm leading-7 text-[var(--text)]">
        {description}
      </p>
    </div>
  );
}

export default function IndustryWhyChoose() {
  return (
    <section className="bg-base-200 py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[var(--heading)] md:text-4xl lg:text-5xl">
            Built Around
            <span className="text-primary"> Industrial Excellence</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--text)]">
            We combine industrial knowledge, engineering expertise and
            modern automation technologies to deliver reliable solutions
            for demanding industrial environments.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_390px_1fr] lg:gap-10">
          <div className="space-y-12">
            {leftPoints.map((point) => (
              <FeatureItem
                key={point.title}
                title={point.title}
                description={point.description}
                icon={point.icon}
              />
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <div className="relative h-[500px]">
              <Image
                src="/industry.jpg"
                alt="Industrial automation solutions by KP Automation"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <span className="text-sm font-medium text-white/70">
                  KP Automation
                </span>

                <h3 className="mt-2 text-2xl font-bold leading-tight">
                  Engineering Automation for Real-World Industry
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  Practical automation solutions for manufacturing,
                  process and industrial applications.
                </p>

                <PrimaryButton
                  href="#industries"
                  className="mt-6 bg-white text-[var(--heading)] hover:bg-white/90"
                >
                  Explore Industries
                </PrimaryButton>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {rightPoints.map((point) => (
              <FeatureItem
                key={point.title}
                title={point.title}
                description={point.description}
                icon={point.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}