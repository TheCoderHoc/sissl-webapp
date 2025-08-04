import z from "zod";

export const CompanyCheckSchema = z.object({
    registration_number: z.string().min(1, "Please enter registration number"),
    registration_name: z.string().min(1, "Please enter business name"),
    country_code: z.string().min(1, "Please select country"),
});

