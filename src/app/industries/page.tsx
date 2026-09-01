import AutomationApplications from "@/components/industries/AutomationApplications";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustrySolutions from "@/components/industries/IndustrySolutions";
import IndustryWeServe from "@/components/industries/IndustryWeServe";
import IndustryWhyChoose from "@/components/industries/IndustryWhyChoose";

export default function IndustriesPage() {
  return (
    <>
      <IndustryHero />

      <IndustryWeServe />

      <AutomationApplications />

      <IndustrySolutions />

      <IndustryWhyChoose/>
    </>
  );
}