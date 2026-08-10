"use client"

import { ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";

import Container from "@/components/common/Container";

const mapUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Indra+Park,+Village+Salimar+Bagh,+New+Delhi,+Delhi+110088";

export default function ContactMap() {
  return (
    <section className="bg-base-100 py-22">
      <Container>
        <div className="grid overflow-hidden rounded-3xl border border-base-300 bg-base-200 lg:grid-cols-2">

          {/* Location Info */}

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <MapPin size={16} />
              Visit Our Office
            </span>

            <h2 className="mt-5 font-serif text-4xl font-bold text-[var(--heading)]">
              Find Us in
              <span className="text-primary"> New Delhi</span>
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[var(--text)]">
              Have a project to discuss or want to meet our team?
              Visit our office and let's discuss your industrial
              automation requirements.
            </p>

            <div className="mt-8 rounded-2xl border border-base-300 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-semibold text-[var(--heading)]">
                    KP Automation
                  </p>

                  <p className="mt-2 leading-7 text-[var(--text)]">
                    Block-C, Village Salimar,
                    <br />
                    Near Indra Park,
                    <br />
                    New Delhi – 110088, India
                  </p>
                </div>
              </div>
            </div>

            <Link
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:bg-[var(--primary-hover)]"
            >
              Get Directions
              <ExternalLink size={17} />
            </Link>
          </div>

          {/* Map */}

          <div className="min-h-[420px] lg:min-h-full">
            <iframe
              title="KP Automation Location"
              src="https://www.google.com/maps?q=Indra+Park,+Village+Salimar+Bagh,+New+Delhi,+Delhi+110088&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}