"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/shared/FormInput";
import FormSelect from "@/components/shared/FormSelect";
import { guarantorVerificationSchema } from "@/modules/staff-verification/lib/validators";
import useStaffVerificationController from "@/modules/staff-verification/controllers/staffVerificationController";
import { toast } from "sonner";
import { StaffVerificationPayload } from "@/modules/staff-verification/models/types";
import { companyDashBlack } from "../../../../../public/images";
import Image from "next/image";

export default function RGForm() {
    const form = useForm({
        resolver: zodResolver(guarantorVerificationSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            phone_number: "",
            email: "",
            id_type: "",
            id_number: "",
            date_of_birth: "",
            verification_method: [],
            guarantors: [
                {
                    name: "",
                    phone_number: "",
                    email: "",
                    id_type: "",
                    id_number: "",
                    verification_method: [],
                },
            ],
        },
    });

    const router = useRouter();
    const { verifyIdentity, isLoading } = useStaffVerificationController();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const values = form.getValues();
        console.log(values);

        const isValid = await form.trigger();
        if (!isValid) {
            toast.error("Please complete all required fields.");
            return;
        }

        if (
            !values.verification_method ||
            values.verification_method.length === 0
        ) {
            toast.error("Select at least one staff verification method.");
            return;
        }

        if (
            !values.guarantors ||
            values.guarantors.length === 0 ||
            values.guarantors[0].verification_method.length === 0
        ) {
            toast.error("Select at least one guarantor verification method.");
            return;
        }

        const payload: StaffVerificationPayload = {
            first_name: values.first_name,
            last_name: values.last_name,
            phone_number: values.phone_number,
            email: values.email,
            id_type: values.id_type,
            id_number: values.id_number,
            date_of_birth: values.date_of_birth,
            verification_method: values.verification_method,
            guarantors: values.guarantors,
        };

        try {
            const response = await verifyIdentity(payload);
            router.push(`/referee-guarantor/${response.id}`);
        } catch (err) {
            console.error("Verification failed", err);
            toast.error("Verification failed. Please try again.");
        }
    };

    return (
        <FormProvider {...form}>
            <div className="text-white px-6 py-12 mx-auto rounded-xl">
                <form
                    id="hook-form"
                    onSubmit={onSubmit}
                    className="w-full flex justify-between"
                >
                    <div className="w-[40%] flex flex-col gap-6 px-16">
                        <h1 className="text-2xl font-semibold mb-2">
                            Staff Details
                        </h1>

                        <FormInput
                            label="Staff First Name"
                            name="first_name"
                            placeholder="first name"
                            required
                        />
                        <FormInput
                            label="Staff Last Name"
                            name="last_name"
                            placeholder="last name"
                            required
                        />
                        <FormInput
                            label="Staff Phone Number"
                            name="phone_number"
                            placeholder="phone number"
                            type="tel"
                            required
                        />
                        <FormInput
                            label="Staff Email"
                            name="email"
                            placeholder="email"
                            type="email"
                            required
                        />
                        <FormSelect
                            label="ID Type"
                            name="id_type"
                            placeholder="Select ID type"
                            required
                            options={[
                                { label: "BVN", value: "BVN" },
                                { label: "NIN", value: "NIN" },
                                { label: "NIN Phone", value: "NIN_PHONE" },
                                { label: "Phone", value: "PHONE" },
                                { label: "Passport", value: "PASSPORT" },
                                {
                                    label: "Driver’s License",
                                    value: "DRIVER_LICENSE",
                                },
                            ]}
                        />
                        <FormInput
                            label="ID Number"
                            name="id_number"
                            placeholder="ID number"
                            required
                        />
                        <FormInput
                            label="Date of Birth"
                            name="date_of_birth"
                            type="date"
                            required
                        />

                        {/* Staff Verification Method */}
                        <div className="flex flex-col gap-4 w-full rounded-lg p-4 opacity-80">
                            <label className="font-medium">
                                Verification Type
                            </label>
                            {[
                                { label: "BVN", value: "BVN" },
                                { label: "ID Number", value: "ID_NUMBER" },
                                {
                                    label: "Phone Number",
                                    value: "PHONE_NUMBER",
                                },
                            ].map(({ label, value }) => (
                                <label
                                    key={value}
                                    className="flex items-center gap-4"
                                >
                                    <input
                                        type="checkbox"
                                        value={value}
                                        onChange={(e) => {
                                            const current =
                                                form.getValues(
                                                    "verification_method"
                                                ) || [];
                                            const updated = e.target.checked
                                                ? [...current, value]
                                                : current.filter(
                                                      (item) => item !== value
                                                  );

                                            form.setValue(
                                                "verification_method",
                                                updated as [string, ...string[]]
                                            );
                                        }}
                                    />
                                    <span className="text-left">{label}</span>
                                </label>
                            ))}
                        </div>

                        <h1 className="text-2xl font-semibold mt-8">
                            Guarantor Details
                        </h1>

                        <FormInput
                            label="Guarantor Name"
                            name="guarantors.0.name"
                            placeholder="full name"
                            required
                        />
                        <FormInput
                            label="Guarantor Phone Number"
                            name="guarantors.0.phone_number"
                            placeholder="phone number"
                            required
                        />
                        <FormInput
                            label="Guarantor Email"
                            name="guarantors.0.email"
                            placeholder="email"
                            required
                        />
                        <FormSelect
                            label="Guarantor ID Type"
                            name="guarantors.0.id_type"
                            placeholder="Select ID type"
                            required
                            options={[
                                { label: "BVN", value: "BVN" },
                                { label: "NIN", value: "NIN" },
                                { label: "NIN Phone", value: "NIN_PHONE" },
                                { label: "Phone", value: "PHONE" },
                                { label: "Passport", value: "PASSPORT" },
                                {
                                    label: "Driver’s License",
                                    value: "DRIVER_LICENSE",
                                },
                            ]}
                        />
                        <FormInput
                            label="Guarantor ID Number"
                            name="guarantors.0.id_number"
                            placeholder="ID number"
                            required
                        />

                        {/* Guarantor Verification Method */}
                        <div className="flex flex-col gap-4 w-full rounded-lg p-4 opacity-80">
                            <label className="font-medium">
                                Guarantor Verification Type
                            </label>
                            {[
                                { label: "ID Number", value: "ID_NUMBER" },
                                {
                                    label: "Phone Number",
                                    value: "PHONE_NUMBER",
                                },
                            ].map(({ label, value }) => (
                                <label
                                    key={value}
                                    className="flex items-center gap-4"
                                >
                                    <input
                                        type="checkbox"
                                        value={value}
                                        onChange={(e) => {
                                            const current =
                                                form.getValues(
                                                    "guarantors.0.verification_method"
                                                ) || [];
                                            const updated = e.target.checked
                                                ? [...current, value]
                                                : current.filter(
                                                      (item) => item !== value
                                                  );

                                            form.setValue(
                                                "guarantors.0.verification_method",
                                                updated as [string, ...string[]]
                                            );
                                        }}
                                    />
                                    <span className="text-left">{label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center w-[57%] h-full pt-12">
                        <Image
                            src={companyDashBlack.src}
                            alt="illustration"
                            className="w-[55%]"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </form>

                {/* Buttons */}
                <div className="flex justify-between gap-12 mt-12 px-16 w-[80%]">
                    <button
                        onClick={() => router.back()}
                        type="button"
                        className="w-[50%] border-[0.5px] px-8 py-3 rounded-lg"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        onClick={(e) => onSubmit(e)}
                        disabled={isLoading}
                        className="w-[50%] bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-3 rounded-lg shadow-md"
                    >
                        {isLoading ? "Verifying..." : "Verify Staff"}
                    </button>
                </div>
            </div>
        </FormProvider>
    );
}
