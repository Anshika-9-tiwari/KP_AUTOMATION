"use client";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

import ProductCard from "./ProductsCard";

import { products } from "@/data/products";

export default function Products() {
  return (
    <section className="bg-base-200 py-20">
      <Container>

        <SectionHeader
          badge="Our Products"
          title="Industrial Automation"
          highlight="Products"
          description="We supply genuine industrial automation products from leading global brands, backed by expert technical support and integration services."
        />

        <div className="mt-15 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
            />
          ))}
        </div>

        {/* Bottom Banner */}

        <div className="mt-16 rounded-3xl bg-primary px-8 py-8 text-white">

          <div className="grid gap-6 text-center md:grid-cols-2 lg:grid-cols-4">

            <div>
              <h4 className="font-semibold">
                Genuine Products
              </h4>

              <p className="mt-1 text-sm text-white/80">
                Trusted global brands
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Technical Support
              </h4>

              <p className="mt-1 text-sm text-white/80">
                Expert assistance
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Installation Support
              </h4>

              <p className="mt-1 text-sm text-white/80">
                End-to-end deployment
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                PAN India Delivery
              </h4>

              <p className="mt-1 text-sm text-white/80">
                Fast & reliable shipping
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}