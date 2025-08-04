import z from "zod";
import { CompanyCheckSchema } from "./validators";

export type TCompanyCheckFormData = z.infer<typeof CompanyCheckSchema>;
