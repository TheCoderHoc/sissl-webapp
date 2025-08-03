"use client";

import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import AuthCard from "@/modules/auth/components/AuthWrapper";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AUTH_ROUTES } from "@/constants/routes/auth";
import useVerifyOtpController from "@/modules/auth/controllers/verifyOtpController";
import { toast } from "sonner";
import useResendOtpController from "@/modules/auth/controllers/useResendOtpController";

export default function VerifyOtp() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email") ?? "";
    const service = searchParams.get("service") ?? "";

    const [timer, setTimer] = useState(300);
    const [otp, setOtp] = useState("");

    const router = useRouter();

    useEffect(() => {
        const countdown = setInterval(() => {
            if (timer > 0) {
                setTimer((prevTime) => prevTime - 1);
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [timer]);

    const { verifyOtp, isLoading } = useVerifyOtpController();

    const { resendOtp, isLoading: isResendOtpLoading } =
        useResendOtpController();

    const handleResendOtp = async () => {
        await resendOtp({
            email: email ?? "",
            service: service.toUpperCase(),
        });

        setTimer(300);
        toast.success("We've sent another OTP to your inbox");
    };

    const handleSubmit = async () => {
        if (!otp) {
            return toast.error("Please input your OTP");
        }

        await verifyOtp({
            otp,
            email,
            service: service.toUpperCase() as any,
        });

        if (service === "email_verification") {
            return router.push(AUTH_ROUTES.LOGIN);
        }

        router.push(
            `${AUTH_ROUTES.RESET_PASSWORD}?email=${email}&service=${service}&otp=${otp}`
        );
    };

    if (!email) return null;

    return (
        <AuthCard
            label="Email verification"
            question={`Enter the verification code sent to ${email}`}
            to=""
        >
            <OtpInput
                containerStyle="w-full items-center justify-center mt-2 flex mb-10"
                inputStyle={{
                    backgroundColor: "#000",
                    width: 48,
                    height: 48,
                    borderRadius: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: 1,
                    borderColor: "#FFFFFF1A",
                    borderStyle: "solid",
                    color: "#f9fafb",
                }}
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className="mr-3"></span>}
                renderInput={(props) => <input {...props} />}
            />

            {timer === 0 && (
                <div className="text-sm">
                    <span className="text-foreground">Not received?&nbsp;</span>
                    <Button
                        type="button"
                        variant="ghost"
                        className="text-primary hover:underline px-1"
                        onClick={handleResendOtp}
                        isLoading={isResendOtpLoading}
                    >
                        Resend
                    </Button>
                </div>
            )}

            <Button
                size="lg"
                className="mt-10"
                isLoading={isLoading}
                onClick={handleSubmit}
            >
                Verify Email
            </Button>

            <p className="text-gray text-base text-foreground mt-10 text-center">
                Reset code in{" "}
                <span className="font-bold">
                    {String(Math.floor(timer / 60)).padStart(2, "0")}:
                    {String(timer % 60).padStart(2, "0")}
                </span>
            </p>
        </AuthCard>
    );
}
