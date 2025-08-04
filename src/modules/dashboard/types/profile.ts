import z from "zod";
import { ProfileSchema } from "../../company/dashboard/lib/validators";

export type TProfileFormValues = z.infer<typeof ProfileSchema>;
