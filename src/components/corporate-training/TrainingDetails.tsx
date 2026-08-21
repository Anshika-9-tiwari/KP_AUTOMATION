
import Image from "next/image";
import {
  ArrowRight,
  Factory,
  Users,
  Wrench,
  BriefcaseBusiness,
  CircleCheckBig,
} from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import TrainingEnquiryForm from "./TrainingEnquiryForm";

interface TrainingFaq {
  question: string;
  answer: string;
}

interface Training {
  title: string;
  description: string;
  heroPoints: string[];
  overview: string;
  overviewImage: string;
  overviewPoints: string[];
  topics: string[];
  technologies: string[];
  audience: string[];
  careerOutcomes: string[];
  industries: string[];
  applications: string[];
  faqs: TrainingFaq[];
}

interface Props {
  training: Training;
}

export default function TrainingDetail({ training }: Props) {
  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden py-16 md:py-16">
        <Image
          src="/bg2.jpeg"
          alt={training.title}
          fill
          priority
          className="object-center "
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/60 to-black/50" />

        <Container className="relative z-10 pt-20 md:pt-22">
          <div className="grid items-center gap-12 lg:grid-cols-6">
            <div className="text-white lg:col-span-4">
              <span className="inline-flex rounded-full border border-white/60 bg-primary/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
                Corporate Training
              </span>

              <h1 className="mt-8 font-serif text-5xl font-bold leading-[1.1] lg:text-6xl">
                {training.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                {training.description} 
              </p>

              <div className="mt-6 space-y-3">
                {training.heroPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 text-sm font-medium text-white/80 md:text-base"
                  >
                    <CircleCheckBig
                      size={18}
                      className="shrink-0 text-white/80"
                    />

                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <PrimaryButton href="/services">
                  Explore Services
                </PrimaryButton>

                <SecondaryButton href="#training-topics">
                  Topics You&apos;ll Learn
                </SecondaryButton>
              </div>
            </div>

            <div className="lg:col-span-2">
              <TrainingEnquiryForm service={training.title} />
            </div>
          </div>
        </Container>
      </section>

      {/* Overview SEction */}
      <section className="bg-base-100 py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Training Overview
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[var(--heading)] lg:text-4xl">
                Develop Practical
                <span className="text-primary"> Industry Skills</span>
              </h2>

              <p className="mt-6 leading-8 text-[var(--text)]">
                {training.overview}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {training.overviewPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-base-300 bg-base-100 p-4"
                  >
                     <CircleCheckBig
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />

                    <p className="text-sm font-medium leading-6 text-[var(--heading)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[380px] overflow-hidden rounded-3xl">
              <Image
                src={training.overviewImage}
                alt={`${training.title} training`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm text-white/70">
                  KP Automation
                </p>

                <p className="mt-1 text-xl font-semibold">
                  Practical Industrial Training
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Training-topics */}
      <section
        id="training-topics"
        className="bg-base-200 py-16 md:py-20"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Training Topics
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[var(--heading)]">
                What You Will Learn
              </h2>

              <div className="mt-8 space-y-3">
                {training.topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-start gap-3"
                  >
                    <CircleCheckBig
                      size={20}
                      className="mt-1 shrink-0 text-primary"
                    />

                    <p className="text-[var(--text)]">
                      {topic}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Technologies
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[var(--heading)]">
                Tools & Technologies
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {training.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-base-300 bg-white px-5 py-3 text-sm font-medium text-[var(--heading)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-12">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Wrench size={22} />
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--heading)]">
                    Practical Training
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-[var(--text)]">
                  Training focuses on practical implementation,
                  troubleshooting and industrial application rather
                  than theory alone.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* wh-can-attend */}
      <section className="bg-base-100 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Who Should Attend
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[var(--heading)] lg:text-4xl">
              Designed For Industry Professionals
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--text)]">
              Our programs are suitable for professionals,
              engineers, technicians and teams looking to improve
              their industrial automation skills.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {training.audience.map((person) => (
              <div
                key={person}
                className="rounded-2xl border border-base-300 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Users size={22} />
                </div>

                <p className="mt-4 font-medium text-[var(--heading)]">
                  {person}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* Career-outcomes */}
      <section className="bg-base-200 py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Career Outcomes
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[var(--heading)] lg:text-4xl">
                Build Skills For Your
                <span className="text-primary"> Career</span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-[var(--text)]">
                Develop practical technical skills that can help you
                pursue automation and industrial engineering
                opportunities.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {training.careerOutcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-center gap-3 rounded-2xl border border-base-300 bg-white p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <BriefcaseBusiness size={19} />
                    </div>

                    <span className="font-medium text-[var(--heading)]">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl bg-[var(--heading)] p-8 flex flex-col justify-center items-center text-white lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center  rounded-2xl bg-white text-primary">
                <ArrowRight size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Industry-Ready Knowledge
              </h3>

              <p className="mt-4 leading-7 text-white/70 text-center">
                Our training focuses on the practical knowledge
                required to understand, operate and troubleshoot
                modern industrial automation systems.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-base-100 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Industries & Applications
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[var(--heading)] lg:text-4xl">
              Where These Skills Are Applied
            </h2>

            <p className="mx-auto mt-5 leading-7 text-[var(--text)]">
              Learn skills that can be applied across different
              manufacturing and industrial environments.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-base-300 bg-base-100 p-7 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Factory size={22} />
                </div>

                <h3 className="text-xl font-bold text-[var(--heading)]">
                  Industries
                </h3>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {training.industries.map((industry) => (
                  <div
                    key={industry}
                    className="rounded-xl bg-base-200 px-4 py-3 text-sm font-medium text-[var(--heading)]"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-base-300 bg-base-100 p-7 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Wrench size={22} />
                </div>

                <h3 className="text-xl font-bold text-[var(--heading)]">
                  Applications
                </h3>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {training.applications.map((application) => (
                  <div
                    key={application}
                    className="rounded-xl bg-base-200 px-4 py-3 text-sm font-medium text-[var(--heading)]"
                  >
                    {application}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-base-200 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Frequently Asked Questions
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[var(--heading)] lg:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-5 leading-7 text-[var(--text)]">
              Find answers to common questions about this training
              program.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {training.faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="collapse collapse-arrow border border-base-300 bg-white"
              >
                <input
                  type="radio"
                  name={`training-faq-${training.title}`}
                  defaultChecked={index === 0}
                />

                <div className="collapse-title pr-12 text-base font-semibold text-[var(--heading)] md:text-lg">
                  {faq.question}
                </div>

                <div className="collapse-content">
                  <p className="leading-7 text-[var(--text)]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}