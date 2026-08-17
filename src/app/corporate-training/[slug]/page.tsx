import { notFound } from "next/navigation";

import TrainingDetail from "@/components/corporate-training/TrainingDetails";
import { trainings } from "@/data/training";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return trainings.map((training) => ({
    slug: training.slug,
  }));
}

export default async function TrainingPage({
  params,
}: Props) {
  const { slug } = await params;

  const training = trainings.find(
    (item) => item.slug === slug
  );

  if (!training) {
    notFound();
  }

  return <TrainingDetail training={training} />;
}