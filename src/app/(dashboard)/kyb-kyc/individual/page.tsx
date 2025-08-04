"use client";
import Tabs, { TabProps } from "@/components/shared/Tabs";
import FormInput from "@/components/shared/FormInput";
import FormSelect from "@/components/shared/FormSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { KYB_KYC_ROUTES } from "@/constants/routes";
import { useState } from "react";
import useCountryOptions from "@/hooks/useCountryOptions";

const tabItems: TabProps[] = [
    {
        key: "phone_number",
        label: "Phone Number",
    },

    {
        key: "bvn",
        label: "BVN",
    },
];

export default function IndividualCheckPage() {
    const [activeTab, setActiveTab] = useState("phone_number");
    const form = useForm();

    const countryOptions = useCountryOptions();

    const router = useRouter();

    const onSubmit = async () => {
        router.push(KYB_KYC_ROUTES.INDIVIDUAL_RESULT);
    };

    return (
        <section className="space-y-10">
            <h1 className="text-lg font-medium">Check Individual</h1>

            <Tabs
                tabs={tabItems}
                value={activeTab}
                onChange={(value) => setActiveTab(value)}
                wrapperClassName="justify-start"
            />

            <section>
                <Form {...form}>
                    <form
                        className="grid grid-cols-2 gap-5"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormInput
                            label="Full Name"
                            name="full_name"
                            placeholder="Enter full name"
                            required
                        />

                        {activeTab === "phone_number" ? (
                            <FormInput
                                label="Phone Number"
                                name="phone_number"
                                placeholder="Enter phone number"
                                required
                            />
                        ) : (
                            <FormInput
                                label="BVN"
                                name="bvn"
                                placeholder="Enter BVN"
                                required
                            />
                        )}

                        <FormSelect
                            label="Country"
                            name="country"
                            placeholder="Select country"
                            required
                            options={countryOptions}
                        />

                        <Link
                            href={KYB_KYC_ROUTES.HOME}
                            className="block mt-20 col-start-1 col-span-1"
                        >
                            <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                className="w-full"
                            >
                                Back
                            </Button>
                        </Link>

                        <Button size="lg" className="mt-20">
                            Search
                        </Button>
                    </form>
                </Form>
            </section>
        </section>
    );
}
