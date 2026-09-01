import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Cog,
  Cpu,
  Factory,
  Lightbulb,
  Settings,
  AlertTriangle,
  Wrench,
} from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

interface HowItWorksItem {
  title: string;
  description: string;
}

interface Solution {
  title: string;
  description: string;
}

interface Industry {
  title: string;
  description: string;

  image: string;

  aboutTitle: string;
  about: string;

  overviewDescription: string;
  overviewImage: string;

  howItWorks: HowItWorksItem[];

  challengesDescription: string;
  challenges: string[];

  technologiesDescription: string;
  technologies: string[];

  technologyImage?: string;

  applicationsDescription: string;
  applications: string[];

  solutionsDescription: string;
  solutions: Solution[];

  benefitDescription: string;
  benefits: string[];

  benefitImage: string;
}

interface Props {
  industry: Industry;
}

export default function IndustryDetails({
  industry,
}: Props) {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative min-h-[550px] overflow-hidden py-18">
        <Image
          src={industry.image}
          alt={`${industry.title} automation`}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />

        <Container className="relative z-10 flex min-h-[550px] items-center pt-16">
          <div className="max-w-3xl text-white">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
              Industries We Serve
            </span>

            <h1 className="mt-7 font-serif text-5xl font-bold leading-tight md:text-6xl">
              Automation Solutions for{" "}
              <span className="text-primary">
                {industry.title}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              {industry.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton href="/contact#contact-form">
                Discuss Your Project
              </PrimaryButton>

              <SecondaryButton href="#industry-overview">
                Explore Industry
              </SecondaryButton>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= OVERVIEW ================= */}

      <section
        id="industry-overview"
        className="bg-base-100 py-16 md:py-20"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Industry Overview
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--heading)] md:text-4xl">
                {industry.aboutTitle}
              </h2>

              <p className="mt-6 leading-8 text-[var(--text)]">
                {industry.about}
              </p>

              <p className="mt-5 leading-8 text-[var(--text)]">
                {industry.overviewDescription}
              </p>

              <div className="mt-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Factory size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--heading)]">
                    Industry-Focused Automation
                  </h3>

                  <p className="mt-2 leading-7 text-[var(--text)]">
                    Our solutions are designed according to the
                    specific production processes, equipment and
                    operational requirements of the {industry.title}{" "}
                    industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-3xl">
              <Image
                src={industry.overviewImage}
                alt={`${industry.title} industry`}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-sm text-white/70">
                  KP Automation
                </p>

                <p className="mt-1 text-xl font-semibold text-white">
                  Smart Industrial Solutions
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="bg-base-200 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              How It Works
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[var(--heading)] md:text-4xl">
              Automation in the {industry.title} Industry
            </h2>

            <p className="mt-5 leading-7 text-[var(--text)]">
              Industrial automation connects equipment, control
              systems and real-time data to create more efficient
              and reliable operations.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industry.howItWorks.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-base-300 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[var(--heading)]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--text)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ================= APPLICATIONS ================= */}

      <section className="bg-base-100 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Applications
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[var(--heading)] md:text-4xl">
              Where Automation Makes a Difference
            </h2>

            <p className="mt-5 leading-7 text-[var(--text)]">
              {industry.applicationsDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industry.applications.map((application) => (
              <div
                key={application}
                className="rounded-2xl border border-base-300 bg-white p-6"
              >
                <CheckCircle2
                  size={23}
                  className="text-primary"
                />

                <p className="mt-4 font-medium leading-7 text-[var(--heading)]">
                  {application}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ================= TECHNOLOGIES ================= */}

      <section className="bg-base-200 py-16 md:py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Technology Stack
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--heading)] md:text-4xl">
                Technologies Used in{" "}
                <span className="text-primary">
                  {industry.title}
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[var(--text)]">
                {industry.technologiesDescription}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {industry.technologies.map((technology) => (
                  <div
                    key={technology}
                    className="flex items-center gap-3 rounded-xl border border-base-300 bg-white p-4"
                  >
                    <Cpu
                      size={20}
                      className="shrink-0 text-primary"
                    />

                    <span className="font-medium text-[var(--heading)]">
                      {technology}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {industry.technologyImage && (
              <div className="relative min-h-[450px] overflow-hidden rounded-3xl">
                <Image
                  src={industry.technologyImage}
                  alt={`${industry.title} automation technology`}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm text-white/70">
                    Modern Industrial Technology
                  </p>

                  <p className="mt-2 text-xl font-semibold">
                    Connected. Intelligent. Reliable.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ================= CHALLENGES ================= */}

      <section className="bg-base-100 py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Industry Challenges
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--heading)] md:text-4xl">
                Challenges in{" "}
                <span className="text-primary">
                  {industry.title}
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[var(--text)]">
                {industry.challengesDescription}
              </p>
            </div>

            <div className="space-y-2 grid grid-cols-2 gap-3">
              {industry.challenges.map((challenge) => (
                <div
                  key={challenge}
                  className="flex items-start gap-4 rounded-xl border border-base-300 bg-base-100 p-5"
                >
                  <AlertTriangle
                    size={21}
                    className="mt-1 shrink-0 text-primary"
                  />

                  <p className="leading-7 text-[var(--text)]">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
     

      {/* ================= SOLUTIONS ================= */}

      <section className="bg-base-200 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Solutions
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[var(--heading)] md:text-4xl">
              Automation Solutions for Your Operations
            </h2>

            <p className="mt-5 leading-7 text-[var(--text)]">
              {industry.solutionsDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industry.solutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-2xl border border-base-300 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Wrench size={23} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[var(--heading)]">
                  {solution.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--text)]">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= BENEFITS ================= */}

      <section className="bg-base-100 py-16 md:py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Benefits
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--heading)] md:text-4xl">
                Benefits of Automation
              </h2>

              <p className="mt-6 leading-8 text-[var(--text)]">
                {industry.benefitDescription}
              </p>

              <div className="relative mt-10 h-[330px] overflow-hidden rounded-3xl">
                <Image
                  src={industry.benefitImage}
                  alt={`${industry.title} automation benefits`}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-5 left-6 right-6">
                  <div className="flex items-center gap-3 text-white">
                    <Lightbulb
                      size={22}
                      className="text-primary"
                    />

                    <p className="font-semibold">
                      Smarter Automation. Better Results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-2 grid grid-cols-2">
                {industry.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-primary"
                    />

                    <p className="leading-7 text-[var(--text)]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-[var(--heading)]/90 p-8 text-white md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
                <Settings size={27} />
              </div>

              <h3 className="mt-7 text-3xl font-bold">
                Build a Smarter Industrial Operation
              </h3>

              <p className="mt-5 leading-8 text-white/70">
                Every industry has unique processes and technical
                requirements. We help design automation solutions
                based on your actual operational workflow.
              </p>

              <div className="mt-8 space-y-5">
                <div className="border-b border-white/10 pb-5">
                  <p className="font-semibold">
                    Customized Automation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Solutions designed around your industrial
                    requirements.
                  </p>
                </div>

                <div className="border-b border-white/10 pb-5">
                  <p className="font-semibold">
                    Modern Technologies
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    PLC, SCADA, industrial networking and intelligent
                    automation systems.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    Expert Engineering Support
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    From planning and system integration to
                    commissioning and support.
                  </p>
                </div>
              </div>

              <PrimaryButton
                href="/contact#contact-form"
                className="mt-9"
              >
                Talk to Our Experts
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-base-200 py-16 md:py-20">
        <Container>
          <div className="rounded-3xl bg-primary px-8 py-12 text-center text-white md:px-16">
            <Cog
              size={38}
              className="mx-auto"
            />

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold md:text-4xl">
              Ready to Improve Your {industry.title} Operations?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/85">
              Discuss your industrial automation requirements with
              our team and discover the right solution for your
              operations.
            </p>

            <div className="mt-8 flex justify-center">
              <PrimaryButton
                href="/contact#contact-form"
                className="bg-white text-[var(--heading)] hover:bg-white/90"
              >
                Get Free Consultation
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}