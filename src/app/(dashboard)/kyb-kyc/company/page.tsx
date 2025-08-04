"use client";
import Tabs from "@/components/shared/Tabs";
import FormInput from "@/components/shared/FormInput";
import FormSelect from "@/components/shared/FormSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { KYB_KYC_ROUTES } from "@/constants/routes";
import { TCompanyCheckFormData } from "@/modules/kyb-kyc/lib/types";
import { CompanyCheckSchema } from "@/modules/kyb-kyc/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import useVerifyCompanyController from "@/modules/kyb-kyc/controllers/verifyCompanyController";
import { companyCheckTabs } from "@/modules/kyb-kyc/constants/company-check-tabs";
import useCountryOptions from "@/hooks/useCountryOptions";


export default function CompanyCheckPage() {
    const form = useForm<TCompanyCheckFormData>({
        resolver: zodResolver(CompanyCheckSchema),
        defaultValues: {
            registration_number: "",
            registration_name: "",
            country_code: "",
        },
    });

    const countryOptions = useCountryOptions();

    const router = useRouter();

    const { verifyCompany } = useVerifyCompanyController();

    const onSubmit: SubmitHandler<TCompanyCheckFormData> = async (data) => {
        const response = await verifyCompany(data);
        console.log(response);

        // router.push(KYB_KYC_ROUTES.COMPANY_RESULT);
    };

    return (
        <section className="space-y-10">
            <h1 className="text-lg font-medium">Check Company</h1>

            <Tabs
                tabs={companyCheckTabs}
                wrapperClassName="justify-start"
                onChange={(value) => router.replace(`?tab=${value}`)}
            />

            <section>
                <Form {...form}>
                    <form
                        className="grid grid-cols-2 gap-5"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormInput
                            label="Registration Number"
                            name="registration_number"
                            placeholder="Enter registration number"
                            required
                        />

                        <FormInput
                            label="Business Name"
                            name="registration_name"
                            placeholder="Enter business name"
                            required
                        />

                        <FormSelect
                            label="Country"
                            name="country_code"
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
