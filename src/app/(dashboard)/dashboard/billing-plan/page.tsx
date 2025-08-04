"use client";
import SelectableCard from "@/components/shared/SelectableCard";
import { Button } from "@/components/ui/button";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import BillingPlanIcon from "@/public/icons/BillingPlan";
import PlanPayAsYouGoIcon from "@/public/icons/PlanPayAsYouGo";
import PlanSubscriptionIcon from "@/public/icons/PlanSubscription";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const plans = [
    {
        title: "Subscription Type",
        icon: <PlanSubscriptionIcon />,
        href: DASHBOARD_ROUTES.BILLING_PLAN_SUBSCRIPTION,
    },

    {
        title: "Pay-As-You-Go",
        icon: <PlanPayAsYouGoIcon />,
        href: DASHBOARD_ROUTES.BILLING_PLAN_PAYG,
    },
];

export default function BillingPlanPage() {
    const [selectedHref, setSelectedHref] = useState("");

    const router = useRouter();

    const onSubmit = () => {
        if (!selectedHref) return toast.error("Please select a plan");

        router.push(selectedHref);
    };

    return (
        <section className="space-y-10">
            <h1 className="text-2xl">Which plan would you like?</h1>

            <div className="grid grid-cols-[1fr_2fr] gap-20">
                <div className="flex flex-col gap-5">
                    {plans.map(({ title, icon, href }, i) => (
                        <SelectableCard
                            key={i}
                            title={title}
                            icon={icon}
                            href={href}
                            isSelected={href === selectedHref}
                            onChange={(href: string) => setSelectedHref(href)}
                        />
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center">
                    <BillingPlanIcon />
                    <h3 className="text-xl font-light">Billing Plan</h3>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <Button size="lg" variant="outline">
                    Cancel
                </Button>

                <Button size="lg" onClick={onSubmit}>
                    Continue
                </Button>
            </div>
        </section>
    );
}
