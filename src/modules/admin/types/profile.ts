import z from "zod";
import { AdminProfileSchema } from "../ib/validators";

export type TProfileFormValues = z.infer<typeof AdminProfileSchema>;
