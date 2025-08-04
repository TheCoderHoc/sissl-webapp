"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/shared/FormInput";
import FormSelect from "@/components/shared/FormSelect";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIdentityFormContext } from "@/modules/identity-verification/context/identityVerificationContext";
import { identityFormSchema } from "@/modules/identity-verification/lib/validators";
import { toast } from "sonner";
import IdentityUploadModal from "@/modules/document-verification/components/IdentityUploadModal";

export default function VerifyUserForm() {
    const [showUploadModal, setShowUploadModal] = useState(false);
    const { setFormData } = useIdentityFormContext()!;

    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(identityFormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            country_id: "",
            date_of_birth: "",
        },
    });

    const onContinue = async () => {
        const isValid = await form.trigger();
        if (!isValid) {
            toast.error("Please fill in all required fields.");
            return;
        }
        const values = form.getValues();
        setFormData((prev) => ({
            ...prev,
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            country_id: values.country_id,
            date_of_birth: values.date_of_birth,
        }));
        setShowUploadModal(true);
    };

    return (
        <>
            <div className=" text-white px-6 py-12 mx-auto rounded-xl">
                {/* Header */}
                <div className="mb-10 px-16">
                    <p className="text-sm text-gray-400 mb-2">User details</p>
                    <h1 className="text-2xl font-semibold mb-3">
                        ID verification
                    </h1>
                    <p className="text-gray-400 text-sm max-w-md">
                        Ensure every detail provided is the same as the
                        information on the means of identification being
                        provided.
                    </p>
                </div>

                {/* Form Fields */}
                <Form {...form}>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 px-16">
                        <div className="flex flex-col">
                            <FormInput
                                label="First Name"
                                name="first_name"
                                placeholder="Enter your first name"
                                required
                                wrapperClassName="col-span-2"
                            />
                        </div>

                        <div className="flex flex-col">
                            <FormInput
                                label="Last Name"
                                name="last_name"
                                placeholder="Enter your last name (surname)"
                                required
                                wrapperClassName="col-span-2"
                            />
                        </div>

                        <div className="flex flex-col">
                            <FormInput
                                label="Email"
                                name="email"
                                placeholder="Email address"
                                type="email"
                                required
                                wrapperClassName="col-span-2"
                            />
                        </div>

                        <div className="flex flex-col">
                            <FormSelect
                                label="Country of ID"
                                name="country_id"
                                placeholder="Select Country of ID"
                                options={[
                                    { label: "Nigeria", value: "nigeria" },
                                    { label: "Ghana", value: "ghana" },
                                    { label: "Kenya", value: "kenya" },
                                    { label: "Cameroon", value: "cameroon" },
                                ]}
                                required
                                className="col-span-2"
                            />
                        </div>

                        <div className="flex flex-col">
                            <FormInput
                                label="Date of birth"
                                name="date_of_birth"
                                type="date"
                                required
                                // className="col-span-2"
                            />
                        </div>
                    </form>
                </Form>

                {/* Buttons */}
                <div className="flex justify-between gap-12 mt-12 px-16">
                    <button
                        onClick={() => router.back()}
                        className="w-[50%] border-[0.5px]  px-8 py-3 rounded-lg"
                    >
                        Back
                    </button>
                    <button
                        onClick={onContinue}
                        className="w-[50%] bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-3 rounded-lg shadow-md"
                    >
                        Continue
                    </button>
                </div>
            </div>

            {showUploadModal && (
                <IdentityUploadModal
                    setShowModal={() => setShowUploadModal(!showUploadModal)}
                />
            )}
        </>
    );
}
