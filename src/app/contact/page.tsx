import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-base-200 py-18">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMap />
    </>
  );
}