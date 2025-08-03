import { z } from "zod";

const accountTypeEnum = z.enum(["INDIVIDUAL", "COMPANY"]);

export const RegisterSchema = z
    .object({
        first_name: z.string().min(1, "Please enter your first name"),
        last_name: z.string().min(1, "Please enter your last name"),
        email: z
            .email("Invalid email address")
            .min(1, "Please enter your email"),
        password: z.string().min(1, "Please enter your password"),
        account_type: accountTypeEnum,
        company_name: z.string().optional().nullable(),
    })
    .refine(
        (data) => {
            if (data.account_type === "COMPANY") {
                return data.company_name && data.company_name.trim().length > 0;
            }
            return true;
        },
        {
            path: ["company_name"],
            message: "Company name is required for company accounts",
        }
    );

export const LoginSchema = z.object({
    email: z
        .email("Please enter a valid email")
        .min(1, "Please enter your email"),
    password: z.string().min(1, "Please enter your password"),
});

export const ForgotPasswordSchema = z.object({
    email: z
        .email("Please enter a valid email address")
        .min(1, "Please enter your email address"),
    service: z.string().min(1, "Please select a service"),
});

export const VerifyEmailSchema = z.object({
    otp: z.string().min(1, "Please enter the otp code"),
    email: z
        .email("Please enter a valid email")
        .min(1, "Please provide an email"),
    service: z.string().min(1, "Please provide a service"),
});

export const ResetPasswordSchema = z
    .object({
        otp: z.string().min(1, "Please enter the otp code"),
        email: z
            .email("Please enter a valid email")
            .min(1, "Please provide an email"),
        password: z.string().min(1, "Please enter a password"),
        confirm_password: z
            .string()
            .min(1, "Please enter a confirmation password"),
    })
    .check((ctx) => {
        const { password, confirm_password } = ctx.value;
        if (password !== confirm_password) {
            ctx.issues.push({
                code: "custom",
                message: "Passwords do not match",
                path: ["password"],
                input: password,
            });
            ctx.issues.push({
                code: "custom",
                message: "Passwords do not match",
                path: ["confirm_password"],
                input: confirm_password,
            });
        }
    });
