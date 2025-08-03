"use client";

import AuthCard from "@/modules/auth/components/AuthWrapper";
import { useRouter } from "next/navigation";
import FormInput from "@/components/shared/FormInput";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { TForgotPasswordFormValues } from "@/modules/auth/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema } from "@/modules/auth/lib/validators";
import useResendOtpController from "@/modules/auth/controllers/useResendOtpController";
import { toast } from "sonner";
import { AUTH_ROUTES } from "@/constants/routes/auth";

export default function ForgotPassword() {
    const router = useRouter();

    const form = useForm<TForgotPasswordFormValues>({
        resolver: zodResolver(ForgotPasswordSchema),
        defaultValues: {
            email: "",
            service: "PASSWORD_RESET",
        },
    });

    const { resendOtp, isLoading: isResendOtpLoading } =
        useResendOtpController();

    const onSubmit: SubmitHandler<TForgotPasswordFormValues> = async ({
        email,
        service,
    }) => {
        await resendOtp({ email, service: service.toUpperCase() });
        toast.success("We've sent an otp code to your email. Check your inbox");

        router.push(
            `${AUTH_ROUTES.VERIFY_OTP}?email=${email}&service=password_reset`
        );
    };

    return (
        <AuthCard
            actionLabel=""
            question="Reset your password"
            to="#"
            label="Password reset"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4 space-y-5"
                >
                    <FormInput
                        label="Email Address"
                        name="email"
                        placeholder="Please enter email address"
                    />

                    <Button className="w-full" isLoading={isResendOtpLoading}>
                        Reset Password
                    </Button>
                </form>
            </Form>
        </AuthCard>
    );
}
