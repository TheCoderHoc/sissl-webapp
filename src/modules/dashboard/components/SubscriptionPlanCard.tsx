import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import Link from "next/link";
import { IBillingPlanResponseData } from "../../../dashboard/types/billing";

export default function SubscriptionPlanCard({
    id,
    title,
    price,
    description,
    features,
    currency,
}: IBillingPlanResponseData) {
    return (
        <Card className="bg-black py-14 px-4 space-y-10">
            <CardHeader className="space-y-3">
                <h3 className="text-xl">{title}</h3>
                <p className="font-semibold text-2xl">
                    {currency}&nbsp;
                    {price}
                </p>
                <p className="text-sm text-gray-400">{description}</p>
                <Link
                    className="block"
                    href={`${DASHBOARD_ROUTES.BILLING_PLAN_SUBSCRIPTION}/${id}`}
                >
                    <Button size="lg" className="w-full">
                        Get Started
                    </Button>
                </Link>
            </CardHeader>

            <CardContent className="space-y-3">
                <h3 className="text-xl">Featuring</h3>
                <ul className="space-y-2">
                    {features.map((feature) => (
                        <li key={feature} className="text-sm">
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
