import z from "zod";
import {
    CompanyInformationFormSchema,
    ContactInformationFormSchema,
    UploadDocumentSchema,
} from "../lib/validators";

export type TCompanyInformationFormValues = z.infer<
    typeof CompanyInformationFormSchema
>;

export type TContactInformationFormValues = z.infer<
    typeof ContactInformationFormSchema
>;

export type TUploadDocumentFormValues = z.infer<typeof UploadDocumentSchema>;
