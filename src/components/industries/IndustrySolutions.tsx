"use client";
import Image from "next/image";
import {
  Bot,
  Eye,
  Gauge,
  Network,
  Settings2,
  Workflow,
} from "lucide-react";

import Container from "@/components/common/Container";

const solutions = [
  {
    title: "Machine Automation",
    description:
      "Automate machine operations with PLC-based control, sequencing, sensors and industrial control systems.",
    icon: Settings2,
  },
  {
    title: "Process Automation",
    description:
      "Improve process control through instrumentation, PLC, SCADA and integrated monitoring systems.",
    icon: Workflow,
  },
  {
    title: "Industrial IoT",
    description:
      "Connect industrial equipment and collect operational data for monitoring, analytics and decision-making.",
    icon: Network,
  },
  {
    title: "Motion & Drive Systems",
    description:
      "Implement VFD and servo-based motion solutions for accurate, efficient and reliable machine operation.",
    icon: Gauge,
  },
  {
    title: "Machine Vision",
    description:
      "Automate inspection and quality control using industrial vision and image-based inspection systems.",
    icon: Eye,
  },
  {
    title: "Robotics & Integration",
    description:
      "Integrate automation equipment and robotic systems into modern production and manufacturing environments.",
    icon: Bot,
  },
];

export default function IndustrySolutions() {
  return (
    <section className="bg-base-100 py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="/industrial-automation.png"
              alt="Industrial automation solutions"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Industry Solutions
              </span>

              <h3 className="mt-3 max-w-lg text-3xl font-bold leading-tight md:text-4xl">
                Practical Automation for Modern Industry
              </h3>

              <p className="mt-4 max-w-lg leading-7 text-white/75">
                From machine-level control to connected industrial
                systems, we deliver automation solutions built around
                real operational requirements.
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Solutions
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[var(--heading)] md:text-4xl lg:text-5xl">
              Engineering Solutions That
              <span className="text-primary"> Drive Industry Forward</span>
            </h2>

            <p className="mt-5 leading-7 text-[var(--text)]">
              We combine industrial automation technologies and
              engineering expertise to create reliable solutions for
              different production and process environments.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {solutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <div
                    key={solution.title}
                    className="group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon size={21} />
                      </div>

                      <h3 className="font-bold text-[var(--heading)]">
                        {solution.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-[var(--text)]">
                      {solution.description}
                    </p>
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