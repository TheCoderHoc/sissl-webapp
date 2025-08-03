"use client";

import AuthCard from "@/modules/auth/components/AuthWrapper";
import { useSearchParams, useRouter } from "next/navigation";
import FormInput from "@/components/shared/FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { TResetPasswordFormValues } from "@/modules/auth/lib/types";
import { ResetPasswordSchema } from "@/modules/auth/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { AUTH_ROUTES } from "@/constants/routes/auth";
import { Button } from "@/components/ui/button";
import { useResetPasswordController } from "@/modules/auth/controllers/resetPasswordController";

export default function ResetPassword() {
    const searchParams = useSearchParams();
    const otp = searchParams?.get("otp");
    const email = searchParams?.get("email");

    const router = useRouter();

    const form = useForm<TResetPasswordFormValues>({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            otp: otp ?? "",
            email: email ?? "",
            password: "",
            confirm_password: "",
        },
    });

    const { resetPassword, isLoading } = useResetPasswordController();

    const onSubmit: SubmitHandler<TResetPasswordFormValues> = async (data) => {
        await resetPassword(data);
        toast.success("Password was changed successfully");
        router.replace(AUTH_ROUTES.LOGIN);
    };

    return (
        <AuthCard
            actionLabel=""
            question="Reset your password"
            to="#"
            label="Password Reset"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4 space-y-5"
                >
                    <FormInput
                        type="password"
                        label="New Password"
                        name="password"
                        placeholder="********"
                    />

                    <FormInput
                        type="password"
                        label="Confirm Password"
                        name="confirm_password"
                        placeholder="********"
                    />
                    <Button
                        size="lg"
                        className="w-full h-12"
                        isLoading={isLoading}
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </AuthCard>
    );
}
