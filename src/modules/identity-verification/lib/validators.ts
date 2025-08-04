import { z } from "zod";

export const identityFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email").nonempty("Email is Required"),
  country_id: z.string().min(1, "Select a country"),
  date_of_birth: z.string().nonempty("Date of birth is required"),
});

export const idVerificationSchema = z.object({
  id_type: z.string().min(1, "ID type is required"),
  id_number: z.string().min(1, "ID number is required"),
  id_image: z.string(),
});
