"use client";
import Link from "next/link";
import AuthCard from "@/modules/auth/components/AuthWrapper";
import FormInput from "@/components/shared/FormInput";
import { Form } from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginFormValues } from "@/modules/auth/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/modules/auth/lib/validators";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AUTH_ROUTES } from "@/constants/routes/auth";
import useResendOtpController from "@/modules/auth/controllers/useResendOtpController";
import { toast } from "sonner";
import { DASHBOARD_ROUTES } from "@/constants/routes";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const form = useForm<TLoginFormValues>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { resendOtp, isLoading: isResendOtpLoading } =
        useResendOtpController();

    const onSubmit: SubmitHandler<TLoginFormValues> = async ({
        email,
        password,
    }) => {
        setIsLoading(true);

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        setIsLoading(false);

        const error = JSON.parse(res?.error as string);

        if (error?.errors) {
            return toast.error(error?.errors?.[0]?.message);
        }

        if (error && !error?.data?.error?.is_email_verified) {
            await resendOtp({
                email,
                service: "EMAIL_VERIFICATION",
            });

            router.push(
                `${AUTH_ROUTES.VERIFY_OTP}?email=${email}&service=EMAIL_VERIFICATION`
            );

            return;
        }

        if (res?.ok) {
            const sessionRes = await fetch("/api/auth/session");
            const session = await sessionRes.json();

            router.push(DASHBOARD_ROUTES.HOME);
        }
    };

    return (
        <AuthCard
            actionLabel="Create Account"
            question="Not A User?"
            to="/auth/account-type"
            label="Login"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4 space-y-5"
                >
                    <FormInput
                        label="Email Address"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />

                    <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />

                    <Button
                        size="lg"
                        className="w-full"
                        isLoading={isLoading || isResendOtpLoading}
                    >
                        Login
                    </Button>

                    <div className="text-left mt-2">
                        <span>Forgot Password &nbsp;</span>
                        <Link
                            className="text-primary hover:underline"
                            href={AUTH_ROUTES.FORGOT_PASSWORD}
                        >
                            Reset Password?
                        </Link>
                    </div>
                </form>
            </Form>
        </AuthCard>
    );
}
