"use client";

import { useMemo, useState } from "react";
import Slider from "react-slick";
import { Quote, Star } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

import { testimonials } from "@/data/testimonials";


const categories = [
  "Industrial Automation Services",
  "Corporate Training",
] as const;

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<
    (typeof categories)[number]
  >("Industrial Automation Services");

  const filteredTestimonials = useMemo(
    () =>
      testimonials.filter(
        (item) => item.category === activeTab
      ),
    [activeTab]
  );

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <section className="bg-base-100 py-20">
      <Container>
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          highlight=" About Us"
          description="Trusted by manufacturing industries and engineering teams for delivering reliable automation solutions and practical industrial training."
          className="mb-12"
        />

        {/* Tabs */}

        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 shadow">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeTab === category
                    ? "bg-primary text-white"
                    : "text-[var(--text)] hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <Slider {...settings}>
          {filteredTestimonials.map((item, index) => (
            <div key={index}>
              <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-10 shadow-xl lg:p-12">
                
                {/* Quote */}

                <div className="mb-8 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Quote
                      size={30}
                      className="text-primary"
                    />
                  </div>
                </div>

                {/* Rating */}

                <div className="mb-6 flex justify-center gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review */}

                <p className="mx-auto max-w-3xl text-center text-xl leading-9 text-[var(--text)]">
                  "{item.review}"
                </p>

                {/* Client */}

                <div className="mt-10 text-center">
                  <h3 className="text-2xl font-semibold text-[var(--heading)]">
                    {item.designation}
                  </h3>

                  <p className="mt-2 text-base font-medium text-primary">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}