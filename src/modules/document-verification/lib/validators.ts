import { z } from "zod";

export const documentVerificationSchema = z.object({
  document_type: z.string().min(1, "Document type is required"),
  issuance_date: z.string().min(1, "Issuance date is required"),
  document_number: z.string().min(1, "Document number is required"),
  document_file: z.string(),
});
