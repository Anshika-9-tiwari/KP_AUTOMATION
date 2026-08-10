"use client";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

import IndustryCard from "./IndustryCard";

import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <section className="bg-base-100 py-20" id="industries">

      <Container>

        <SectionHeader
          badge="Industries"
          title="Industries We Serve"
          highlight=""
          description="Delivering industrial automation solutions across diverse manufacturing and process industries."
        />

        <div className="mt-15 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {industries.map((industry) => (
            <IndustryCard
              href={""} key={industry.title}
              {...industry}/>
          ))}

        </div>

      </Container>

    </section>
  );
}