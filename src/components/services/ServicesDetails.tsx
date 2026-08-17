import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";

interface Service {
  slug: string;
  title: string;
  description: string;
  overview: string;
  href: string;
  icon: React.ElementType;
  overviewImage: string;
  features: string[];
  applications: string[];
  technologies: string[];
}

interface Props {
  service: Service;
}

export default function ServiceDetail({ service }: Props) {
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-neutral py-18">
        <Image
          src="/bg3.jpeg"
          alt="KP Automation Industrial Automation"
          fill
          priority
          className="object-center"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/70 to-black/75 " />

        <Container className="relative z-10 pt-20 md:pt-24">
          <div className="max-w-4xl text-white">
            <div className="flex items-center gap-2 text-sm text-white/75">
              <Link
                href="/services"
                className="transition hover:text-primary"
              >
                Services
              </Link>

              <ChevronRight size={15} />

              <span>{service.title}</span>
            </div>

            <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white/80">
              <Icon size={30} />
            </div>

            <h1 className="mt-8 max-w-4xl font-serif text-5xl font-bold leading-tight lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              {service.description}
            </p>

            <div className="mt-10">
              <PrimaryButton href="/contact">
                Discuss Your Requirement
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-base-100 py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative h-[420px] overflow-hidden rounded-3xl">
              <Image
                src={service.overviewImage}
                alt={`${service.title} - KP Automation`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-black/50 px-5 py-4 text-white backdrop-blur-md">
                <p className="text-sm text-white/60">
                  KP Automation
                </p>

                <p className="mt-1 font-semibold">
                  {service.title}
                </p>
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Service Overview
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[var(--heading)] lg:text-5xl">
                Engineering Solutions
                <span className="text-primary">
                  {" "}Built for Industry
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[var(--text)]">
                {service.overview}
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
                >
                  Talk to Our Engineers
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-base-200 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              What We Provide
            </span>

            <h2 className="mt-3 font-serif text-4xl font-bold text-[var(--heading)] lg:text-5xl">
              Key Capabilities
            </h2>

            <p className="mt-5 leading-7 text-[var(--text)]">
              Our service covers the key engineering requirements needed
              to implement reliable and scalable industrial solutions.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-base-300 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-primary"
                />

                <span className="font-medium text-[var(--heading)]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-base-100 py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Applications
              </span>

              <h2 className="mt-3 font-serif text-4xl font-bold text-[var(--heading)]">
                Where We Apply
                <span className="text-primary"> Our Expertise</span>
              </h2>

              <p className="mt-5 leading-7 text-[var(--text)]">
                Our solutions can be adapted to different industrial
                environments, production processes and operational
                requirements.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.applications.map((application) => (
                  <div
                    key={application}
                    className="flex items-center gap-3 rounded-xl border border-base-300 p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-primary"
                    />

                    <span className="font-medium text-[var(--heading)]">
                      {application}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-base-200 p-8 lg:p-10">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Technologies
              </span>

              <h2 className="mt-3 font-serif text-3xl font-bold text-[var(--heading)]">
                Technology We Work With
              </h2>

              <p className="mt-4 leading-7 text-[var(--text)]">
                We select technologies according to your machine,
                process, existing infrastructure and project goals.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-base-300 bg-white px-4 py-2.5 text-sm font-medium text-[var(--heading)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-12">
        <Container>
          <div className="flex flex-col items-center justify-between gap-7 text-center text-white lg:flex-row lg:text-left">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider border border-white/50 rounded-full w-42 text-center px-2 py-2">
                Start Your Project
              </p>

              <h2 className="mt-5 font-serif text-3xl font-bold lg:text-4xl">
                Looking for {service.title}?
              </h2>

              <p className="mt-2 text-white/80">
                Tell us about your requirement and our team will help
                you find the right automation solution.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-neutral-content px-6 py-3.5 font-semibold text-black/85 transition hover:bg-white/5 hover:border border-white/60 hover:text-zinc-50"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}