"use client";

import Image from "next/image";
import Slider from "react-slick";

import SectionHeader from "@/components/common/SectionHeader";
import Container from "@/components/common/Container";

 const companies = [
  {
    name: "Kalpa Turu",
    logo: "/clients/kalpaturu.png",
  },
  {
    name: "MG Motors",
    logo: "/clients/mgmotor.png",
  },
  {
    name: "ABB",
    logo: "/aumation/image_1.png",
  },
  {
    name: "RKD Group",
    logo: "/clients/rkdgroup.png",
  },
  {
    name: "Siemens",
    logo: "/aumation/image_1.png",
  },
];

export default function TrustedCompanies() {

  const settings = {
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3500,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-base-100 py-20">
      <Container>
        <SectionHeader
          badge="Trusted Companies"
          title="Trusted by Leading"
          highlight="Industrial Brands"
          description="Delivering reliable industrial automation solutions and corporate training for leading manufacturing companies."
          className="mb-14"
        />

        <Slider {...settings}>
          {companies.map((company) => (
            <div key={company.name} className="px-4">
              <div className="flex h-26 items-center justify-center rounded-2xl border border-base-300 bg-white p-6 transition-all duration-300 hover:shadow-lg">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={140}
                  height={60}
                  className="h-12 w-auto object-contain grayscale-0 opacity-100   transition-all duration-300 hover:grayscale hover:opacity-80"
                />
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}