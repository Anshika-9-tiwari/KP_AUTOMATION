"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Settings2,
  Package,
  UtensilsCrossed,
  FlaskConical,
  Gauge,
} from "lucide-react";

import Container from "@/components/common/Container";

const industries = {
  left: [
    {
      title: "Automotive",
      description:
        "Automation solutions for production, assembly, inspection and material handling.",
      href: "/industries/automotive",
      icon: Factory,
    },
    {
      title: "Packaging",
      description:
        "Machine automation, conveyor control, sensors and packaging line integration.",
      href: "/industries/packaging",
      icon: Package,
    },
    {
      title: "Food & Beverage",
      description:
        "Process automation, instrumentation, monitoring and production control.",
      href: "/industries/food-and-beverage",
      icon: UtensilsCrossed,
    },
  ],
  right: [
    {
      title: "Manufacturing",
      description:
        "PLC, HMI, SCADA and machine automation for modern manufacturing facilities.",
      href: "/industries/manufacturing",
      icon: Settings2,
    },
    {
      title: "Water Management",
      description:
        "Reliable process control, instrumentation and monitoring solutions.",
      href: "/industries/water-management",
      icon: FlaskConical,
    },
    {
      title: "Oil & Gas ",
      description:
        "Industrial control, instrumentation, SCADA and plant monitoring solutions.",
      href: "/industries/oil-gas",
      icon: Gauge,
    },
  ],
};

function IndustryItem({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}) {
  return (
    <Link
      href={href}
      className="group block"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon size={22} />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <h3 className="text-xl font-bold text-[var(--heading)] transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>

        <ArrowRight
          size={17}
          className="translate-x-0 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        />
      </div>

      <p className="mt-2 leading-7 text-[var(--text)]">
        {description}
      </p>
    </Link>
  );
}

export default function IndustryWeServe() {
  return (
    <section
      id="industries"
      className="bg-base-100 py-16 md:py-18 lg:py-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Industries We Serve
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[var(--heading)] md:text-4xl lg:text-5xl">
            Automation Solutions Across
            <span className="text-primary"> Diverse Industries</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--text)]">
            We deliver practical automation and control solutions
            tailored to the operational requirements of different
            industrial environments.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_380px_1fr] lg:gap-12">
          <div className="space-y-12">
            {industries.left.map((industry) => (
              <IndustryItem
                key={industry.title}
                {...industry}
              />
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <div className="relative h-[500px]  overflow-hidden rounded-3xl">
            
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/aumation/industries-bg.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <span className="text-sm font-medium uppercase tracking-wider text-white/70">
                  KP Automation
                </span>

                <h3 className="mt-2 text-2xl font-bold leading-tight">
                  Engineering Automation for Real-World Industry
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  From machine control to industrial monitoring,
                  we build solutions focused on performance,
                  reliability and efficiency.
                </p>

                <Link
                  href="/contact#contact-form"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 hover:gap-3"
                >
                  Discuss Your Requirement
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {industries.right.map((industry) => (
              <IndustryItem
                key={industry.title}
                {...industry}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}