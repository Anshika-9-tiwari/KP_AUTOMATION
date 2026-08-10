import CorporateTraining from "@/components/home/CorporateTraining";
import Hero from "@/components/home/Hero";
import HomeCTA from "@/components/home/HomeCTA";
import Industries from "@/components/home/Industries";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import TrustedCompanies from "@/components/home/TrustedCompanies";
import WhyChoose from "@/components/home/WhyChoose";
import HeaderTop from "@/components/layouts/headertop";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeaderTop/>
      <TrustedCompanies />
      <CorporateTraining/>
      <Services/>
      <Products/>
      <Industries/>
      <WhyChoose/>
      <Testimonials/>
      <HomeCTA/>
    </main>
  );
}