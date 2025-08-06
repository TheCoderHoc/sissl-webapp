"use client";
import FormInput from "@/components/shared/FormInput";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import FormSelect from "@/components/shared/FormSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { staffVerificationSchema } from "@/modules/staff-verification/lib/validators";
import useStaffVerificationController from "@/modules/staff-verification/controllers/staffVerificationController";
import { toast } from "sonner";
import { StaffVerificationPayload } from "@/modules/staff-verification/models/types";
import { companyDashBlack } from "../../../../../public/images";
import Image from "next/image";

export default function VerifyStaffForm() {
    const form = useForm({
        resolver: zodResolver(staffVerificationSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            phone_number: "",
            email: "",
            id_type: "",
            id_number: "",
            date_of_birth: "",
            verification_method: [],
        },
    });
    const router = useRouter();

    const { verifyIdentity, isLoading } = useStaffVerificationController();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = await form.trigger();
        if (!isValid) {
            toast.error("Please complete all fields correctly.");
            return;
        }

        const values = form.getValues();

        const payload: StaffVerificationPayload = {
            first_name: values.first_name,
            last_name: values.last_name,
            phone_number: values.phone_number,
            email: values.email,
            id_type: values.id_type,
            id_number: values.id_number,
            date_of_birth: values.date_of_birth,
            verification_method: values.verification_method,
        };

        try {
            const response = await verifyIdentity(payload);
            router.push(`/staff-verification/${response.id}`);
        } catch (err) {
            console.error("Verification failed", err);
        }
    };

    return (
        <div className=" text-white px-6 py-12 mx-auto rounded-xl">
            <div className="mb-10 px-16">
                <h1 className="text-2xl font-semibold mb-3">Staff Details</h1>
            </div>
            <div className="w-full flex  justify-between">
                <Form {...form}>
                    <form
                        onSubmit={onSubmit}
                        className=" w-[40%] flex flex-col gap-6 px-16"
                    >
                        <div className="flex flex-col">
                            <FormInput
                                label="Staff First Name"
                                name="first_name"
                                placeholder="first name"
                                required
                                wrapperClassName="col-span-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <FormInput
                                label="Staff Last Name"
                                name="last_name"
                                placeholder=" last name"
                                required
                                wrapperClassName="col-span-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <FormInput
                                label="Staff Phone Number"
                                name="phone_number"
                                placeholder="phone number"
                                type="tel"
                                required
                                wrapperClassName="col-span-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <FormInput
                                label="Staff Email"
                                name="email"
                                placeholder="Staff email"
                                type="email"
                                required
                                wrapperClassName="col-span-2"
                            />
                        </div>

                        <div className="flex flex-col">
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
                        </div>

                        <div className="flex flex-col">
                            <FormInput
                                label="ID Number"
                                name="id_number"
                                placeholder="ID number"
                                required
                                wrapperClassName="col-span-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <FormInput
                                label="Date of birth"
                                name="date_of_birth"
                                type="date"
                                required
                                wrapperClassName="col-span-2"
                            />
                        </div>
                        <div className="flex flex-col gap-4 w-[50%] rounded-lg p-4 opacity-80">
                            <label className="flex items-center gap-4">
                                <span className="text-left">
                                    Verification Type
                                </span>
                            </label>
                            <div className="flex flex-col gap-2 pl-7">
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
                                                          (item) =>
                                                              item !== value
                                                      );

                                                form.setValue(
                                                    "verification_method",
                                                    updated as [
                                                        string,
                                                        ...string[]
                                                    ]
                                                );
                                            }}
                                        />
                                        <span className="text-left">
                                            {label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </form>
                </Form>
                <div className="flex justify-center w-[57%] h-full pt-12">
                    <Image
                        src={companyDashBlack.src}
                        alt="illustration"
                        className="w-[55%]"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
            {/* Buttons */}
            <div className="flex justify-between gap-12 mt-12 px-16 w-[80%]">
                <button
                    onClick={() => router.back()}
                    className="w-[50%] border-[0.5px]  px-8 py-3 rounded-lg"
                >
                    Back
                </button>
                <button
                    type="submit"
                    // onSubmit={onSubmit}
                    onClick={(e) => onSubmit(e)}
                    disabled={isLoading}
                    className="w-[50%] bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-3 rounded-lg shadow-md"
                >
                    {isLoading ? "Verifying..." : "Verify Staff"}
                </button>
            </div>
        </div>
    );
}
