"use client";
import { Card } from "@/components/ui/card";
import useGetSingleBillingPlan from "@/modules/dashboard/controllers/billing-plans/getSingleBillingPlan";
import { useParams } from "next/navigation";
import { IoIosCheckmarkCircle } from "react-icons/io";
import BillingPlanIcon from "../../../../../../../public/icons/BillingPlan";

export default function SubscriptionPlanPayment() {
    const { planId } = useParams();

    const { data: billingPlan } = useGetSingleBillingPlan({
        enabled: true,
        id: planId as string,
    });

    if (!billingPlan) return;

    const { title, price, currency, description, features } = billingPlan.data;

    return (
        <section className="grid grid-cols-2 gap-5">
            <Card className="bg-gray-700 p-6 space-y-8">
                <div className="flex items-center gap-5">
                    <BillingPlanIcon />
                    <h1 className="text-xl">{title}</h1>
                </div>

                <p className="font-semibold text-2xl">
                    {price}{" "}
                    <span className="text-gray-500 font-normal ml-2">
                        {currency}
                    </span>
                </p>

                <p className="text-gray-400 font-light ">{description}</p>

                <ul className="space-y-3">
                    {features?.map((feature) => (
                        <li key={feature} className=" flex items-center gap-2">
                            <IoIosCheckmarkCircle
                                size={20}
                                className="fill-white"
                            />
                            {feature}
                        </li>
                    ))}
                </ul>
            </Card>
        </section>
    );
}
