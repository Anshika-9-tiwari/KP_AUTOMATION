"use client";
import Image from "next/image";
import {
  Cpu,
  MonitorCog,
  Eye,
  Network,
  Gauge,
  PanelsTopLeft,
} from "lucide-react";

import Container from "@/components/common/Container";

const applications = [
  {
    title: "PLC Programming",
    description:
      "PLC programming and control logic for machines, production lines and industrial processes.",
    icon: Cpu,
  },
  {
    title: "SCADA & HMI",
    description:
      "Industrial visualization, monitoring, alarms, trends and operator interface development.",
    icon: MonitorCog,
  },
  {
    title: "Machine Vision",
    description:
      "Vision-based inspection and quality control solutions for automated manufacturing processes.",
    icon: Eye,
  },
  {
    title: "Industrial Networking",
    description:
      "Reliable communication between PLCs, HMIs, drives, sensors and industrial control systems.",
    icon: Network,
  },
  {
    title: "Drives & Motion Control",
    description:
      "VFD, servo and motion control solutions for precise and efficient machine operation.",
    icon: Gauge,
  },
  {
    title: "Control Panels",
    description:
      "Industrial control panel design, integration and automation system implementation.",
    icon: PanelsTopLeft,
  },
];

export default function AutomationApplications() {
  return (
    <section className="bg-base-200 py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Automation Applications
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[var(--heading)] md:text-4xl lg:text-5xl">
            What We
            <span className="text-primary"> Automate</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--text)]">
            From machine control to industrial monitoring, KP
            Automation delivers practical automation solutions
            designed for real-world industrial applications.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => {
            const Icon = application.icon;

            return (
              <div
                key={application.title}
                className="group rounded-3xl border border-base-300 bg-base-100 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[var(--heading)]">
                  {application.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--text)]">
                  {application.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}