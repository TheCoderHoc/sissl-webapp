import { Button } from "@/components/ui/button";
import BankIcon from "@/public/icons/Bank";
import CreditCardIcon from "@/public/icons/CreditCard";
import { useState } from "react";
import FormInput from "@/components/shared/FormInput";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useInitiatePaymentController } from "../controllers/billing-plans/initiatePaymentController";
import { useParams } from "next/navigation";

interface IPaymentProps {
    paymentType: "topup" | "subscription";
    onInitiatePayment: () => void;
}

export default function PaymentInterface({ paymentType }: IPaymentProps) {
    const { initiatePayment } = useInitiatePaymentController();

    const { planId } = useParams();

    const handleInitiatePayment = async () => {
        try {
            const data = await initiatePayment({
                plan_id: planId as string,
            });

            window.location.href = data.authorization_url;
            sessionStorage.setItem("plan_id", planId as string);
        } catch (error: any) {
            console.log(error);
        }
    };

    const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");

    return (
        <div className="p-6 space-y-8">
            <div>
                <h2 className="text-lg">Payment Details</h2>
                <p className="text-sm font-thin text-gray-400">
                    Please provide your payment details
                </p>
            </div>

            <div className="flex items-center gap-4">
                <Button
                    size="lg"
                    className={` font-thin ${
                        paymentMethod === "card"
                            ? "bg-white text-black"
                            : "text-white bg-transparent"
                    }`}
                    onClick={() => setPaymentMethod("card")}
                >
                    <CreditCardIcon />
                    Card Method
                </Button>

                <Button
                    size="lg"
                    className={`font-thin ${
                        paymentMethod === "bank"
                            ? "bg-white text-black"
                            : "bg-transparent text-white"
                    }`}
                    onClick={() => setPaymentMethod("bank")}
                >
                    <BankIcon
                        filter={paymentMethod === "bank" ? "#000" : "#fff"}
                    />
                    Bank Transfer
                </Button>
            </div>

            {paymentMethod === "card" ? (
                <PaymentCardForm
                    paymentType={paymentType}
                    onInitiatePayment={handleInitiatePayment}
                />
            ) : (
                <BankTransferForm />
            )}
        </div>
    );
}

function PaymentCardForm({ paymentType, onInitiatePayment }: IPaymentProps) {
    const form = useForm();

    const isPaymentTypeTopUp = paymentType === "topup";
    // const isPaymentTypeSubscription = paymentType === "subscription";

    const onSubmit = () => {
        onInitiatePayment();
    };

    return (
        <Form {...form}>
            <form
                className="grid grid-cols-2 gap-5"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                {isPaymentTypeTopUp && (
                    <FormInput
                        label="Top up amount"
                        name="amount"
                        placeholder="Enter Amount"
                        wrapperClassName="col-span-2"
                    />
                )}
                <FormInput
                    label="Card Holder Name"
                    name="card_holder_name"
                    placeholder="Enter card holder name"
                    wrapperClassName="col-span-2"
                />

                <FormInput
                    label="Card Number"
                    name="card_number"
                    placeholder="Enter card number"
                    wrapperClassName="col-span-2"
                />

                <FormInput
                    label="Expiry Date"
                    type="date"
                    name="expiry_date"
                    className="col-start-1 col-span-1"
                />

                <FormInput
                    label="CCV"
                    type="date"
                    name="expiry_date"
                    placeholder="Enter ccv number"
                    className="col-start-2 col-span-1"
                />

                <Button variant="outline" size="lg">
                    Back
                </Button>
                <Button size="lg">
                    {isPaymentTypeTopUp ? "Top up wallet" : "Make Payment"}
                </Button>
            </form>
        </Form>
    );
}

function BankTransferForm() {
    return (
        <div className="space-y-5">
            <p>You will pay</p>
            <p className="bg-white py-2 px-4 rounded-md text-black">
                NGN25,000
            </p>
            <p>Transfer to</p>

            {/* <CreditCard /> */}

            <div className="grid grid-cols-2 gap-5 mt-10">
                <Button variant="outline" size="lg">
                    Back
                </Button>
                <Link href={DASHBOARD_ROUTES.BILLING}>
                    <Button size="lg">I have paid</Button>
                </Link>
            </div>
        </div>
    );
}
