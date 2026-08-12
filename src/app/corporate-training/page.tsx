import CorporateTrainingHero from "@/components/corporate-training/CorporateTrainingHero";
import TrainingPrograms from "@/components/corporate-training/TrainingProgram";
import WhyTraining from "@/components/corporate-training/WhyTraining";
import HomeCTA from "@/components/home/HomeCTA";

export default function CorporateTrainingPage() {
  return (
    <>
      <CorporateTrainingHero />
      <TrainingPrograms />
      <WhyTraining/>
      <HomeCTA/>
    </>
  );
}