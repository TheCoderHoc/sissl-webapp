import z from "zod";
import { ProfileSchema } from "../lib/validators";

export type TProfileFormValues = z.infer<typeof ProfileSchema>;
