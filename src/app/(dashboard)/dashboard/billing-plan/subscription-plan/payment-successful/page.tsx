"use client";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import { useVerifyPayment } from "@/modules/dashboard/controllers/billing-plans/verifyPaymentController";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SuccessIcon from "../../../../../../../public/icons/Success";

export default function PaymentSuccessfulPage() {
    const [planId, setPlanId] = useState("");
    const params = useSearchParams();
    const trxref = params.get("trxref");

    const router = useRouter();

    const { verifyPayment, isLoading, isSuccess } = useVerifyPayment();

    useEffect(() => {
        const planIdStorage = sessionStorage.getItem("plan_id");
        if (planIdStorage) {
            setPlanId(planIdStorage);
        }
    }, []);

    useEffect(() => {
        if (planId && trxref) {
            const verifyPaymentEffect = async () => {
                await verifyPayment({ plan_id: planId, tx_ref: trxref });
            };

            verifyPaymentEffect();
        }
    }, [planId, trxref]);

    const handleRedirect = () => {
        sessionStorage.removeItem("plan_id");

        router.push(DASHBOARD_ROUTES.HOME);
    };

    return (
        <section className="flex flex-col items-center justify-center text-center gap-2">
            {isLoading && <LoadingSpinner />}

            {isSuccess && (
                <>
                    <SuccessIcon />
                    <h1 className="font-bold text-2xl">
                        Your payment was successful
                    </h1>
                    <Button size="lg" onClick={handleRedirect}>
                        Go to Dashboard
                    </Button>
                </>
            )}
        </section>
    );
}
