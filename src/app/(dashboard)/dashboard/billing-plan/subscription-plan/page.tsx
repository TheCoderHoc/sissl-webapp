"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubscriptionPlanCard from "@/modules/company/dashboard/components/SubscriptionPlanCard";
import useGetBillingPlans from "@/modules/company/dashboard/controllers/billing-plans/getBillingPlans";

export default function ChooseSubscriptionPlanPage() {
    const { data: billingPlans } = useGetBillingPlans({ enabled: true });

    return (
        <div className="space-y-10">
            <h1 className="text-center text-4xl">
                Choose a Plan <br /> That Fits Your Team
            </h1>

            <Tabs defaultValue="monthly-plan">
                <TabsList className="py-9 bg-[#1F2A37] rounded-full w-[350px] ">
                    <TabsTrigger
                        value="monthly-plan"
                        className="py-4 rounded-full w-[150px]"
                    >
                        Monthly Plan
                    </TabsTrigger>
                    <TabsTrigger
                        value="yearly-plan"
                        className="py-4 rounded-full w-[150px]"
                    >
                        Yearly Plan
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="monthly-plan">
                    <div className="grid grid-cols-3 gap-5 mt-16">
                        {billingPlans?.data?.results.map((plan, i) => (
                            <SubscriptionPlanCard key={i} {...plan} />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="yearly-plan">
                    <div className="grid grid-cols-3 gap-5 mt-16">
                        {billingPlans?.data?.results.map((plan, i) => (
                            <SubscriptionPlanCard key={i} {...plan} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
