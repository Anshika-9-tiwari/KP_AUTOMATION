"use client";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";


export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary to-[#E12727] py-14">
      {/* Background Pattern */}
       <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0  opacity-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white blur-3xl" />
      </div>

      <Container className="relative z-10">

        <div className="mx-auto max-w-4xl text-center text-white">

          <div className="badge badge-outline border border-white/40 bg-white/10 px-5 py-4 text-white">
            Ready to Get Started?
          </div>

          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight lg:text-[54px]">
            Let's Build Smarter Automation
            <br />
             Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            From PLC programming and SCADA development to
            Industry 4.0 solutions, our experts are ready
            to help transform your manufacturing process.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <PrimaryButton
              href="/contact"
              className="bg-white text-primary hover:bg-base-200"
            >
              Get Free Consultation

            </PrimaryButton>

            <SecondaryButton
              href="/services"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Explore Services
            </SecondaryButton>

          </div>

          {/* <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur">

            <PhoneCall size={18} />

            <span className="font-medium">
              <a href="tel:+916397206850" className="text-white "> Need Immediate Assistance? Call Us Today</a>
            </span>

          </div> */}

        </div>

      </Container>
    </section>
  );
}