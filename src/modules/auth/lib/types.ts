import z from "zod";
import {
    ForgotPasswordSchema,
    LoginSchema,
    RegisterSchema,
    ResetPasswordSchema,
} from "./validators";

export type TLoginFormValues = z.infer<typeof LoginSchema>;

export type TRegisterFormValues = z.infer<typeof RegisterSchema>;

export type TForgotPasswordFormValues = z.infer<typeof ForgotPasswordSchema>;

export type TResetPasswordFormValues = z.infer<typeof ResetPasswordSchema>;

export interface IVerifyOtpFormValues {
    otp: string;
    email: string;
    service: "EMAIL_VERIFICATION" | "";
}

export interface ILoginResponseData {
    access: string | null;
    is_email_verified: boolean;
    role: string;
    account_type: "COMPANY" | "INDIVIDUAL";
}
