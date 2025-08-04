"use client";
import FormInput from "@/components/shared/FormInput";
import FormSelect from "@/components/shared/FormSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import useCountryOptions from "@/hooks/useCountryOptions";
import { useComplianceData } from "@/modules/company/dashboard/context/company-compliance";
import { ContactInformationFormSchema } from "@/modules/company/dashboard/lib/validators";
import { TContactInformationFormValues } from "@/modules/dashboard/types/company-compliance";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function ContactInformationPage() {
    const { setData } = useComplianceData();

    const form = useForm<TContactInformationFormValues>({
        resolver: zodResolver(ContactInformationFormSchema),
        defaultValues: {
            nin: "",
            country: "",
            state: "",
            street: "",
        },
    });

    const router = useRouter();

    const countryOptions = useCountryOptions();

    const onSubmit = (values: TContactInformationFormValues) => {
        setData((prev) => ({
            ...prev,
            nin: values.nin,
            country: values.country,
            state: values.state,
            street: values.street,
        }));
        router.push(DASHBOARD_ROUTES.COMPANY_COMPLIANCE_UPLOAD_DOCUMENTS);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="text-left">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-5">
                        Compliance Verification
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
                        Contact Information
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 w-[50%] mb-5">
                        Ensure every detail provided is the same as the
                        information on the means of identification being
                        provided.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                        <FormInput
                            label="NIN Number"
                            name="nin"
                            placeholder="Enter NIN Number"
                            description="Your 11-digit National Identification Number"
                        />

                        <FormSelect
                            label="Country"
                            name="country"
                            placeholder="Select Country"
                            description="Provide country of residence"
                            options={countryOptions}
                        />

                        <FormInput
                            label="State"
                            name="state"
                            placeholder="Enter State"
                        />

                        <FormInput
                            label="Street"
                            name="street"
                            placeholder="Enter Street"
                        />

                        <Link
                            href={
                                DASHBOARD_ROUTES.COMPANY_COMPLIANCE_INFORMATION
                            }
                        >
                            <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                className="mt-10 w-full"
                            >
                                Back
                            </Button>
                        </Link>

                        <Button type="submit" size="lg" className="mt-10">
                            Continue
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
}
