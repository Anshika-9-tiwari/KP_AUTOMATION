"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  User,
  Phone,
  BriefcaseBusiness,
} from "lucide-react";

import PrimaryButton from "@/components/common/PrimaryButton";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/ContactSchema";

interface Props {
  service: string;
}

const services = [
  "All Courses",
  "Industrial Automation Training",
  "PLC Training & Networking",
  "SCADA & HMI Training",
  "Drives & Motors",
  "Process Instrumentation",
];

export default function TrainingEnquiryForm({
  service,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service,
      message: "",
    },
  });

  const onSubmit = async (
    data: ContactFormData
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          message:
            data.message ||
            `Enquiry submitted for ${service}.`,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to submit enquiry."
        );
      }

      reset({
        name: "",
        phone: "",
        email: "",
        service,
        message: "",
      });

      alert(
        "Your enquiry has been submitted successfully."
      );
    } catch (error) {
      console.error(
        "Training enquiry error:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Unable to submit enquiry. Please try again."
      );
    }
  };

  return (
    <div className="rounded-3xl border border-base-300 bg-white p-7 shadow-xl lg:p-8">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-[var(--heading)]">
          Enquire About Training
        </h3>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <label className="input input-bordered flex items-center gap-3 rounded-xl border border-slate-200">
            <User
              size={18}
              className="text-primary"
            />

            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="grow"
            />
          </label>

          {errors.name && (
            <p className="mt-1 text-xs text-error">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="input input-bordered flex items-center gap-3 rounded-xl border border-slate-200">
            <Phone
              size={18}
              className="text-primary"
            />

            <input
              {...register("phone")}
              type="tel"
              inputMode="numeric"
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

        <div>
          <label className="select select-bordered flex items-center gap-3 rounded-xl border border-slate-200">
            <BriefcaseBusiness
              size={18}
              className="text-primary"
            />

            <select
              {...register("service")}
              className="grow bg-transparent outline-none"
            >
              {services.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
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

        <PrimaryButton
          type="submit"
          icon={false}
          className="w-full justify-center"
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