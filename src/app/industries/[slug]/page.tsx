import { notFound } from "next/navigation";

import { industries} from "@/data/industries";
import IndustryDetails from "@/components/industries/IndustryDetails";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;

  const industry = industries.find(
    (industry) => industry.slug === slug
  );

  if (!industry) {
    notFound();
  }

  return <IndustryDetails industry={industry} />;
}