import z from "zod";

export const CompanyInformationFormSchema = z.object({
  name: z.string().min(2, "Please enter company name"),
  registration_number: z.string().min(1, "Please enter registration number"),
  date_of_establishment: z.string().min(1, "Please select establishment date"),
  address: z.string().min(1, "Please enter company address"),
});

export const ContactInformationFormSchema = z.object({
  nin: z
    .string()
    .min(1, "Please enter NIN number")
    .refine((val) => /^\d{11}$/.test(String(val)), {
      message: "NIN must be exactly 11 digits",
    }),
  country: z.string().min(1, "Please select country"),
  state: z.string().min(1, "Please enter state"),
  street: z.string().min(1, "Please enter street"),
});

export const ProfileSchema = z.object({
  first_name: z.string().min(1, "Field Required").nullable(),
  last_name: z.string().min(1, "Field Required").nullable(),
  email: z.string().min(1, "Field Required").email("Invalid Email").nullable(),
  phone_number: z.string().min(1, "Field Required").nullable(),
});

// === Individual Schemas (new section) ===

export const IndividualBasicInformationSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  phone_number: z.string().min(1, "Phone number is required"),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  address: z.string().min(1, "Address is required"),
});

export const IndividualContactInformationSchema = z.object({
  nin: z.coerce
    .string()
    .min(1, "Please enter NIN number")
    .refine((val) => /^\d{11}$/.test(String(val)), {
      message: "NIN must be exactly 11 digits",
    }),
  country: z.string().nonempty("Please select country"),
  state: z.string().min(1, "Please enter state"),
  street: z.string().min(1, "Please enter street address"),
});

export const IndividualUploadDocumentSchema = z.object({
  government_id: z
    .string()
    .url("Government ID must be a valid URL")
    .nonempty("Government ID is required"),

  utility_bill: z
    .string()
    .url("Utility bill must be a valid URL")
    .nonempty("Utility bill is required"),
});

export const UploadDocumentSchema = z.object({
  cac_certificate: z.instanceof(File, {
    message: "CAC certificate file is required",
  }),
  proof_of_address: z.instanceof(File, {
    message: "Proof of address file is required",
  }),
  government_issued_id: z.instanceof(File, {
    message: "Government issued ID file is required",
  }),
});

export type TUploadDocumentFormValues = z.infer<typeof UploadDocumentSchema>;
