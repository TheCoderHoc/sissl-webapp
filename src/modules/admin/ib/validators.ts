import z from "zod";

export const AdminProfileSchema = z.object({
    first_name: z.string().min(1, "Field Required").nullable(),
    last_name: z.string().min(1, "Field Required").nullable(),
    email: z.email().min(1, "Field Required").nullable(),
    phone_number: z.string().min(1, "Field Required").nullable(),
});
