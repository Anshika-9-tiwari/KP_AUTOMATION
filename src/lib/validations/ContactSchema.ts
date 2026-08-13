import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),

  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  service: z
    .string()
    .min(1, "Please select a service"),

   message: z
    .string()
    .optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;