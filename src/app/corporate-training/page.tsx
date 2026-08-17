import CorporateTrainingHero from "@/components/corporate-training/CorporateTrainingHero";
import TrainingMethodology from "@/components/corporate-training/TrainingMethodology";
import TrainingPrograms from "@/components/corporate-training/TrainingProgram";
import WhyTraining from "@/components/corporate-training/WhyTraining";
import HomeCTA from "@/components/home/HomeCTA";

export default function CorporateTrainingPage() {
  return (
    <>
      <CorporateTrainingHero />
      <TrainingPrograms />
      <TrainingMethodology/>
      <WhyTraining/>
      <HomeCTA/>
    </>
  );
}