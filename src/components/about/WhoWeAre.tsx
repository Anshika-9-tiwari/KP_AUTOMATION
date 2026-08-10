"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const points = [
  "Industrial automation and control solutions",
  "PLC, SCADA, HMI and IIoT expertise",
  "Industry-focused engineering approach",
  "Technical support and corporate training",
];

export default function WhoWeAre() {
  return (
    <section className="bg-base-100 py-22">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}

          <div className="relative h-[480px] overflow-hidden rounded-3xl">
            <Image
              src="/industrial-automation.png"
              alt="KP Automation Industrial Engineering"
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="absolute bottom-4 left-6 rounded-2xl border border-white/20 bg-black/50 px-6 py-4 text-white backdrop-blur-md">
              <p className="text-sm text-white/70">
                Industrial Automation
              </p>

              <p className="mt-1 text-xl font-semibold">
                Engineering Solutions
              </p>
            </div>
          </div>

          {/* Content */}

          <div>
            <SectionHeader
              align="left"
              badge="Who We Are"
              title="Engineering Smarter "
              highlight="Industrial Solutions"
              description="KP Automation provides industrial automation solutions designed to help manufacturing and process industries improve productivity, reliability and operational efficiency."
              className="mb-0"
            />

            <div className="space-y-3 ">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-primary"
                  />

                  <span className="text-[var(--text)]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-xl leading-7 text-[var(--text)]">
              From automation engineering and control systems to smart
              manufacturing technologies and professional training, our
              focus is on practical solutions that meet real industrial
              requirements.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}