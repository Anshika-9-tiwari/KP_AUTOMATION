export const metadata = {
  title: "Industrial Automation Training | Learn PLC, SCADA & Robotics Skills | KP Automation",
  description:
    "Boost your career with expert Industrial Automation Training. Learn PLC, SCADA, robotics, and automation systems with hands-on projects. Enroll today for industry-ready skills.",
  keywords: "Industrial Automation Training, PLC, SCADA, Robotics, KP Automation",
};

import IndustrialAutomation from "./industrialClient";

export default function Page() {
  return (
    <>
     <IndustrialAutomation/>

      {/*JSON-LD Structured Data (for Google FAQs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Industrial Automation Training?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Industrial Automation Training teaches PLC, SCADA, Robotics, and process control systems through practical and hands-on sessions.",
                },
              },
              {
                "@type": "Question",
                name: "What is the duration of the Industrial Automation course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The course duration typically ranges from 1 to 3 months depending on the modules selected.",
                },
              },
              {
                "@type": "Question",
                name: "Does KP Automation provide placement support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, KP Automation provides placement support through its industrial connections and hands-on projects.",
                },
              },
            ],
          }),
        }}
      />

     
    </>
  );
}

