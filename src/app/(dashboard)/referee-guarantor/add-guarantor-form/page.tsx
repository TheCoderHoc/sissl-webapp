"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/shared/FormInput";
import FormSelect from "@/components/shared/FormSelect";
import { addGuarantorSchema } from "@/modules/staff-verification/lib/validators";
import useAddGuarantorController from "@/modules/staff-verification/controllers/addGuarantorController";
import { toast } from "sonner";
import { companyDashBlack } from "../../../../../public/images";

export default function AddGuarantorForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const staffId = searchParams.get("staff") || "";

    const form = useForm({
        resolver: zodResolver(addGuarantorSchema),
        defaultValues: {
            name: "",
            phone_number: "",
            email: "",
            id_type: "",
            id_number: "",
            verification_method: [],
        },
    });

    const { addGuarantor, isLoading } = useAddGuarantorController(staffId);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = await form.trigger();
        if (!isValid) {
            toast.error("Please complete all required fields.");
            return;
        }

        const values = form.getValues();

        if (
            !values.verification_method ||
            values.verification_method.length === 0
        ) {
            toast.error("Select at least one guarantor verification method.");
            return;
        }

        try {
            await addGuarantor(values);
            router.push(`/referee-guarantor/${staffId}`);
        } catch (err) {
            console.error("Add guarantor failed", err);
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
                        <h1 className="text-2xl font-semibold mt-8">
                            Guarantor Details
                        </h1>

                        <FormInput
                            label="Guarantor Name"
                            name="name"
                            placeholder="Full name"
                            required
                        />
                        <FormInput
                            label="Guarantor Phone Number"
                            name="phone_number"
                            placeholder="Phone number"
                            required
                        />
                        <FormInput
                            label="Guarantor Email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <FormSelect
                            label="Guarantor ID Type"
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
                            label="Guarantor ID Number"
                            name="id_number"
                            placeholder="ID number"
                            required
                        />

                        {/* Verification Methods */}
                        <div className="flex flex-col gap-4 w-full rounded-lg p-4 opacity-80">
                            <label className="font-medium">
                                Verification Type
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
                    </div>

                    <div className="flex justify-center w-[57%] h-full pt-12">
                        <img
                            src={companyDashBlack.src}
                            alt="illustration"
                            className="w-[55%]"
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
                        disabled={isLoading}
                        onClick={(e) => onSubmit(e)}
                        className="w-[50%] bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-3 rounded-lg shadow-md"
                    >
                        {isLoading ? "Verifying..." : "Verify Guarantor"}
                    </button>
                </div>
            </div>
        </FormProvider>
    );
}
