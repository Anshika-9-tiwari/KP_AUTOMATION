"use client";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

import ServiceCard from "./ServicesCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-base-100 py-20">
      <Container>
        <SectionHeader
          badge="Our Services"
          title="Industrial Automation"
          highlight="Solutions"
          description="From PLC programming and SCADA systems to Industry 4.0 implementation, we deliver complete industrial automation solutions for modern manufacturing."
        />

        <div className="mt-15 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              featured={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}