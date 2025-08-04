import { z } from "zod";

export const staffVerificationSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone_number: z.string().min(10, "Phone number is too short"),
  email: z.string().email("Invalid email address"),
  id_type: z.string().min(1, "ID type is required"),
  id_number: z.string().min(1, "ID number is required"),
  date_of_birth: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date format"),
  verification_method: z
    .array(z.string().min(1))
    .min(1, "At least one verification method is required"),
});

export const guarantorVerificationSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone_number: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  id_type: z.string().min(1, "ID type is required"),
  id_number: z.string().min(1, "ID number is required"),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  verification_method: z
    .array(z.string())
    .min(1, "At least one verification method is required"),

  guarantors: z
    .array(
      z.object({
        name: z.string().min(1, "Guarantor name is required"),
        phone_number: z.string().min(1, "Guarantor phone number is required"),
        email: z.string().email("Invalid guarantor email"),
        id_type: z.string().min(1, "Guarantor ID type is required"),
        id_number: z.string().min(1, "Guarantor ID number is required"),
        verification_method: z
          .array(z.string())
          .min(1, "At least one verification method is required"),
      })
    )
    .optional(),
});

export const addGuarantorSchema = z.object({
  name: z.string().min(1, "Guarantor name is required"),
  phone_number: z.string().min(1, "Guarantor phone number is required"),
  email: z.string().email("Invalid guarantor email"),
  id_type: z.string().min(1, "Guarantor ID type is required"),
  id_number: z.string().min(1, "Guarantor ID number is required"),
  verification_method: z
    .array(z.string())
    .min(1, "At least one verification method is required"),
});
