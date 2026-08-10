"use client";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import SecondaryButton from "@/components/common/SecondaryButton";

import TrainingCard from "./TrainingCard";
import { trainings } from "@/data/training";
import PrimaryButton from "../common/PrimaryButton";

export default function CorporateTraining() {
  return (
    <section className="bg-base-200 py-20">
      <Container>
        <div className="mb-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <SectionHeader
            align="left"
            badge="Corporate Training"
            title="Industry-Oriented"
            highlight="Training Programs"
            description="Practical training programs designed for engineers, technicians and manufacturing professionals."
            className="mb-0 max-w-2xl"
          />

          <PrimaryButton href="/corporate-training">
            View All Courses
          </PrimaryButton>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trainings.map((training, index) => (
            <TrainingCard key={training.title} {...training} featured={index === 4} />
          ))}
        </div>
      </Container>
    </section>
  );
}