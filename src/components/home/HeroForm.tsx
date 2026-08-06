"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  User,
  Mail,
  Phone,
  BriefcaseBusiness,
} from "lucide-react";

import PrimaryButton from "@/components/common/PrimaryButton";

const heroFormSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(10, "Enter valid mobile number")
    .max(10, "Enter valid mobile number"),
  service: z.string().min(1, "Please select a service"),
});

type HeroFormValues = z.infer<typeof heroFormSchema>;

const services = [
  "PLC Programming",
  "SCADA & HMI",
  "Industrial Automation",
  "Machine Vision",
  "IIOT Solutions",
  "Automation Consultancy",
  "Corporate Training",
];

export default function HeroForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<HeroFormValues>({
    resolver: zodResolver(heroFormSchema),
  });

  const onSubmit = async (data: HeroFormValues) => {
    console.log(data);

    // TODO:
    // Call your API here
    // await fetch("/api/enquiry",{...})

    reset();
  };

  return (
    <div className="rounded-3xl border border-base-300 bg-white p-7 shadow-xl lg:p-8">

      <div className="mb-6">

        <h3 className="text-2xl font-bold text-[var(--heading)] text-center">
          Get Free Consultation
        </h3>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 px-5 py-2"
      >
        {/* Name */}

        <div >

          <label className="input input-bordered border border-slate-200 flex items-center  gap-3 rounded-xl">

            <User size={18} className="text-primary" />

            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="grow "
            />

          </label>

          {errors.name && (
            <p className="mt-1 text-xs text-error">
              {errors.name.message}
            </p>
          )}

        </div>

        {/* Email */}

        <div>

          <label className="input input-bordered border border-slate-200 flex items-center gap-3 rounded-xl">

            <Mail size={18} className="text-primary" />

            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="grow"
            />

          </label>

          {errors.email && (
            <p className="mt-1 text-xs text-error">
              {errors.email.message}
            </p>
          )}

        </div>

        {/* Phone */}

        <div>

          <label className="input input-bordered border border-slate-200 flex items-center gap-3 rounded-xl">

            <Phone size={18} className="text-primary" />

            <input
              {...register("phone")}
              type="tel"
              maxLength={10}
              placeholder="Mobile Number"
              className="grow"
            />

          </label>

          {errors.phone && (
            <p className="mt-1 text-xs text-error">
              {errors.phone.message}
            </p>
          )}

        </div>

        {/* Service */}

        <div>

          <label className="select select-bordered border border-slate-200 flex items-center gap-3 rounded-xl">

            <BriefcaseBusiness
              size={18}
              className="text-primary"
            />

            <select
              {...register("service")}
              className="grow bg-transparent outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Service
              </option>

              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

          </label>

          {errors.service && (
            <p className="mt-1 text-xs text-error">
              {errors.service.message}
            </p>
          )}

        </div>

        {/* Submit */}

        <PrimaryButton
          type="submit"
          icon={false}
          className="w-full justify-center mt-3"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Submitting..."
            : "Submit Enquiry"}
        </PrimaryButton>

      </form>
    </div>
  );
}