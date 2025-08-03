"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import AuthCard from "@/modules/auth/components/AuthWrapper";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "@/components/shared/FormInput";
import { TRegisterFormValues } from "@/modules/auth/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/modules/auth/lib/validators";
import useRegisterController from "@/modules/auth/controllers/registerController";
import { AUTH_ROUTES } from "@/constants/routes/auth";
import Modal from "@/components/shared/Modal";
import { MailOpen } from "lucide-react";
import Link from "next/link";

export default function RegistrationPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const account_type = searchParams.get("account_type");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const form = useForm<TRegisterFormValues>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            account_type: account_type?.toUpperCase() ?? ("COMPANY" as any),
            company_name: null,
        },
    });

    useEffect(() => {
        if (!account_type) router.push("/auth/account-type");
    }, [account_type, router]);

    const { register, isLoading } = useRegisterController();

    const onSubmit: SubmitHandler<TRegisterFormValues> = async ({
        account_type,
        ...rest
    }) => {
        await register({
            ...rest,
            account_type: account_type.toUpperCase() as any,
        });
        setIsModalOpen(true);
    };

    if (!account_type) return null;

    return (
        <AuthCard
            actionLabel="Login"
            question="Already Have an Account?"
            to="/auth/login"
            label="Create Account"
        >
            <Form {...form}>
                <form
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4 space-y-5"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormInput
                        label="First Name"
                        name="first_name"
                        placeholder="Enter your first name"
                        required
                    />

                    <FormInput
                        label="Last Name"
                        name="last_name"
                        placeholder="Enter your last name"
                        required
                    />

                    {account_type === "company" && (
                        <FormInput
                            label="Company Name"
                            name="company_name"
                            placeholder="Enter your company name"
                            required
                        />
                    )}

                    <FormInput
                        label="Email Address"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />

                    <FormInput
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />

                    <Button size="lg" className="w-full" isLoading={isLoading}>
                        Create Account
                    </Button>
                </form>
            </Form>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                width="sm"
                className="h-fit space-y-5"
            >
                <div className="size-[100px] bg-[#D1D5DB26] rounded-full flex flex-col items-center justify-center gap-1.5 mx-auto">
                    <MailOpen className="stroke-[#3F83F8]" />
                    <p className="text-sm">Email Sent</p>
                </div>

                <p className="text-gray-200 text-sm text-center">
                    Verification code has been sent to your email. Kindly check
                    your inbox to verify your account.
                </p>

                <Link
                    href={`${AUTH_ROUTES.VERIFY_OTP}?email=${form.watch(
                        "email"
                    )}&service=email_verification`}
                >
                    <Button className="w-full">Verify Email</Button>
                </Link>
            </Modal>
        </AuthCard>
    );
}
