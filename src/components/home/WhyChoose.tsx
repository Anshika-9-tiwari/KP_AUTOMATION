"use client";

import Image from "next/image";
import {
  Award,
  Factory,
  Headset,
  ShieldCheck,
  TimerReset,
  Users,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const features = [
  {
    icon: Users,
    title: "Corporate Training",
    description:
      "Hands-on industrial automation training for engineers and teams.",
  },
  {
    icon: Award,
    title: "Experienced Engineers",
    description:
      "Skilled automation experts with years of industrial experience.",
  },
  {
    icon: Factory,
    title: "Complete Automation Solutions",
    description:
      "PLC, SCADA, HMI, Robotics, Panels and IIoT under one roof.",
  },
  {
    icon: TimerReset,
    title: "On-Time Delivery",
    description:
      "Efficient execution with timely project completion.",
  },
  {
    icon: ShieldCheck,
    title: "Industry 4.0 Expertise",
    description:
      "Modern smart factory solutions built for future-ready industries.",
  },
  {
    icon: Headset,
    title: "Reliable Support",
    description:
      "Quick technical assistance and dependable after-sales service.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-base-200 py-20">
      <Container>
        <SectionHeader
          badge="Why Choose Us"
          title="Why Industries Trust"
          highlight="KP Automation"
          description="We deliver reliable industrial automation solutions backed by experienced engineers, quality products and dedicated customer support."
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-3">

          {/* Left */}

          <div className="space-y-6">
            {features.slice(0, 3).map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-base-300 bg-white p-5 transition hover:border-primary hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={24} className="text-primary" />
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

          {/* Center Image */}

          <div className="relative h-[520px] overflow-hidden rounded-3xl">
            {/* <Image
              src="/people.png"
              alt="Why Choose KP Automation"
              fill
              className="object-cover"
            /> */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/aumation/industry-bg.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Right */}

          <div className="space-y-6">
            {features.slice(3).map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-base-300 bg-white p-5 transition hover:border-primary hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={24} className="text-primary" />
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
      </Container>
    </section>
  );
}