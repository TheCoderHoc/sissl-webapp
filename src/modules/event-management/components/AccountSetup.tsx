"use client";

import { Form } from "@/components/ui/form";
import Modal from "@/components/shared/Modal";
import { useForm } from "react-hook-form";
import FormInput from "@/components/shared/FormInput";
import { NIGERIAN_BANKS } from "@/constants/banks";
import FormSelect from "@/components/shared/FormSelect";

export default function AccountSetup({
    onClose,
    onSave,
}: {
    onClose: () => void;
    onSave: (data: {
        account_name: string;
        account_number: string;
        bank: string;
    }) => void;
}) {
    const form = useForm();

    const onSubmit = (values: any) => {
        onSave(values);
    };

    return (
        <Modal isOpen={true} onClose={onClose} title="Account Setup" width="lg">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid grid-cols-1 gap-4"
                >
                    <FormInput
                        label="Account Name"
                        name="account_name"
                        placeholder="Account holder's name"
                        required
                    />
                    <FormInput
                        label="Account Number"
                        name="account_number"
                        placeholder="account number"
                        type="number"
                        required
                    />
                    <FormSelect
                        label="Bank"
                        name="bank"
                        placeholder="Select bank"
                        required
                        options={NIGERIAN_BANKS}
                    />

                    <div className="flex justify-end gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-[140px] h-[44px] border-[0.5px] text-white rounded hover:bg-white hover:text-black transition"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="w-[140px] h-[44px] bg-yellow-400 text-black rounded shadow hover:bg-yellow-300 transition"
                        >
                            Add account
                        </button>
                    </div>
                </form>
            </Form>
        </Modal>
    );
}
