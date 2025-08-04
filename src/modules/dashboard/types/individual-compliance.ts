import z from "zod";
import {
  IndividualBasicInformationSchema,
  IndividualContactInformationSchema,
  IndividualUploadDocumentSchema,
} from "../lib/validators";

export type TIndividualBasicInformationFormValues = z.infer<
  typeof IndividualBasicInformationSchema
>;

export type TIndividualContactInformationFormValues = z.infer<
  typeof IndividualContactInformationSchema
>;

export type TIndividualUploadDocumentFormValues = z.infer<
  typeof IndividualUploadDocumentSchema
>;
