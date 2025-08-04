"use client";
import FormInput from "@/components/shared/FormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import { useCompanyComplianceData } from "@/modules/dashboard/context/company-compliance";
import { CompanyInformationFormSchema } from "@/modules/dashboard/lib/validators";
import { TCompanyInformationFormValues } from "@/modules/dashboard/types/company-compliance";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function CompanyInformationPage() {
    const { setData } = useCompanyComplianceData();

    const form = useForm<TCompanyInformationFormValues>({
        resolver: zodResolver(CompanyInformationFormSchema),
        defaultValues: {
            company_name: "",
            reg_number: "",
            establishment_date: "",
            company_address: "",
        },
    });

    const router = useRouter();

    const onSubmit = (values: TCompanyInformationFormValues) => {
        setData((prev) => ({
            ...prev,
            company_name: values.company_name,
            reg_number: values.reg_number,
            date_of_establishment: new Date(values.establishment_date),
            company_address: values.company_address,
        }));

        router.push(DASHBOARD_ROUTES.COMPANY_COMPLIANCE_CONTACT);
    };

    return (
        <Form {...form}>
            <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-5">
                        Compliance Verification
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
                        Company Information
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 w-[50%]">
                        Ensure every detail provided is the same as the
                        information on the means of identification being
                        provided.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormInput
                        label="Company Name"
                        name="company_name"
                        placeholder="Enter company name"
                    />

                    <FormInput
                        label="Reg Number"
                        name="reg_number"
                        placeholder="Enter reg number"
                    />

                    <FormInput
                        label="Date of Establishment"
                        type="date"
                        name="establishment_date"
                    />

                    <FormInput
                        label="Company Address"
                        name="company_address"
                        placeholder="Enter company address"
                    />

                    <Link href={DASHBOARD_ROUTES.HOME}>
                        <Button
                            variant="outline"
                            className="mt-10 w-full"
                            size="lg"
                        >
                            Cancel
                        </Button>
                    </Link>

                    <Button
                        type="submit"
                        onClick={form.handleSubmit(onSubmit)}
                        className="mt-10"
                        size="lg"
                    >
                        Continue
                    </Button>
                </div>
            </form>
        </Form>
    );
}
