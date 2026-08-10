"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  ContactFormData,
} from "@/lib/validations/ContactSchema";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

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
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setSuccess(true);
      reset();
    } catch (error) {
      console.error(error);
      alert("Unable to send your enquiry. Please try again.");
    }
  };

  return (
    <div
      id="contact-form"
      className="rounded-3xl border border-base-300 bg-white p-7 shadow-xl lg:p-9"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">
        Send An Enquiry
      </span>

      <h2 className="mt-2 text-3xl font-bold text-[var(--heading)]">
        Tell Us About Your Requirement
      </h2>

      <p className="mt-3 text-sm leading-6 text-[var(--text)]">
        Fill out the form and our team will get back to you shortly.
      </p>

      {success && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-success/20 bg-success/10 p-4 text-sm text-success">
          <CheckCircle2 size={20} className="mt-0.5 shrink-0" />

          <div>
            <p className="font-semibold">
              Enquiry sent successfully!
            </p>

            <p className="mt-1">
              Our team will contact you shortly.
            </p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        {/* Name + Phone */}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--heading)]">
              Full Name
            </label>

            <input
              {...register("name")}
              type="text"
              placeholder="Your name"
              className={`input input-bordered w-full bg-white focus:outline-none ${
                errors.name
                  ? "border-error"
                  : "focus:border-primary"
              }`}
            />

            {errors.name && (
              <p className="mt-1 text-xs text-error">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--heading)]">
              Phone Number
            </label>

            <input
              {...register("phone")}
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className={`input input-bordered w-full bg-white focus:outline-none ${
                errors.phone
                  ? "border-error"
                  : "focus:border-primary"
              }`}
            />

            {errors.phone && (
              <p className="mt-1 text-xs text-error">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--heading)]">
            Email Address
          </label>

          <input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            className={`input input-bordered w-full bg-white focus:outline-none ${
              errors.email
                ? "border-error"
                : "focus:border-primary"
            }`}
          />

          {errors.email && (
            <p className="mt-1 text-xs text-error">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Service */}

        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--heading)]">
            Service Required
          </label>

          <select
            {...register("service")}
            className={`select select-bordered w-full bg-white focus:outline-none ${
              errors.service
                ? "border-error"
                : "focus:border-primary"
            }`}
          >
            <option value="">Select a service</option>
            <option value="Corporate Training">
              Corporate Training
            </option>
            <option value="PLC Programming">
              PLC Programming
            </option>
            <option value="SCADA & HMI">
              SCADA & HMI
            </option>
            <option value="Industrial Automation">
              Industrial Automation
            </option>
            <option value="Control Panels">
              Control Panels
            </option>
            <option value="Machine Vision">
              Machine Vision
            </option>
            <option value="IIoT Solutions">
              IIoT Solutions
            </option>
            <option value="Automation Consultancy">
              Automation Consultancy
            </option>
            <option value="Product Enquiry">
              Product Enquiry
            </option>
            <option value="Other">
              Other
            </option>
          </select>

          {errors.service && (
            <p className="mt-1 text-xs text-error">
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Message */}

        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--heading)]">
            Message
          </label>

          <textarea
            {...register("message")}
            rows={3}
            placeholder="Tell us about your project or requirement..."
            className={`textarea textarea-bordered w-full resize-none bg-white focus:outline-none ${
              errors.message
                ? "border-error"
                : "focus:border-primary"
            }`}
          />

          {errors.message && (
            <p className="mt-1 text-xs text-error">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn w-full border-0 bg-primary text-white hover:bg-[var(--primary-hover)] disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner loading-sm" />
              Sending...
            </>
          ) : (
            <>
              Send Enquiry
              <Send size={17} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}