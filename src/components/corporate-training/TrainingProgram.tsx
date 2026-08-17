import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { trainings } from "@/data/training";

export default function TrainingPrograms() {
  return (
    <section
      id="training-programs"
      className="bg-base-100 py-20"
    >
      <Container>
        <SectionHeader
          badge="Training Programs"
          title="Learn Automation Through"
          highlight="Practice"
          description="Our training programs are designed around practical industrial applications, helping professionals and teams build skills they can apply directly in real-world automation environments."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainings.map((training) => {
            const Icon = training.icon;

            return (
              <Link
                key={training.slug}
                href={training.href}
                className="group rounded-3xl border border-base-300 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[var(--heading)]">
                  {training.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--text)]">
                  {training.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View Training
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}