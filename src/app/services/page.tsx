
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import ServicesHero from "@/components/services/ServiceHero";
import ServicesProcess from "@/components/services/ServicesProcess";
import WhyServices from "@/components/services/WhyServices";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services/>
      <WhyServices />
      <ServicesProcess/>
    </>
  );
}