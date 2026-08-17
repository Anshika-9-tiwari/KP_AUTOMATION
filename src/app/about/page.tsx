import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurExpertise from "@/components/about/OurExpertise";
import WhyKPAutomation from "@/components/about/WhyKPAutomation";
import OurApproach from "@/components/about/OurApproach";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <OurExpertise />
      <OurApproach />
      <WhyKPAutomation />
      <AboutCTA/>
    </>
  );
}