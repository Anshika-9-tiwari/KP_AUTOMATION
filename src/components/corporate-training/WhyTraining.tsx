import {
  Wrench,
  GraduationCap,
  Factory,
  Users,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const benefits = [
  {
    icon: Wrench,
    title: "Hands-On Learning",
    description:
      "Learn through practical exercises, real automation workflows and industrial applications.",
  },
  {
    icon: Factory,
    title: "Industry-Focused Training",
    description:
      "Training is aligned with the technologies and challenges used in modern manufacturing environments.",
  },
  {
    icon: GraduationCap,
    title: "Experienced Trainers",
    description:
      "Learn from professionals with practical experience in PLC, SCADA, HMI and industrial automation.",
  },
  {
    icon: Users,
    title: "Corporate Programs",
    description:
      "Customized training programs designed around your team's machines, processes and skill requirements.",
  },
];

export default function WhyTraining() {
  return (
    <section className="bg-base-100 py-20">
      <Container>
        <SectionHeader
          badge="Why KP Automation"
          title="Training That Builds"
          highlight="Real-World Skills"
          description="We focus on practical knowledge that helps professionals and industrial teams confidently work with modern automation technologies."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-base-300 bg-white p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[var(--heading)]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--text)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}