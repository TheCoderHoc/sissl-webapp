"use client";

import { Form } from "@/components/ui/form";
import Modal from "@/components/shared/Modal";
import { useForm } from "react-hook-form";
import FormInput from "@/components/shared/FormInput";

export default function TicketSetup({
    onClose,
    onTicketCreate,
}: {
    onClose: () => void;
    onTicketCreate: (ticket: any) => void;
}) {
    const form = useForm();

    const onSubmit = (values: any) => {
        onTicketCreate(values);
    };

    return (
        <Modal isOpen={true} onClose={onClose} title="Ticket Setup" width="lg">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid grid-cols-1 gap-4"
                >
                    <FormInput
                        label="Ticket Name"
                        name="ticket_name"
                        placeholder="type"
                        required
                    />
                    <FormInput
                        label="Ticket price"
                        name="ticket_price"
                        placeholder="price"
                        type="number"
                        required
                    />
                    <FormInput
                        label="Ticket quantity"
                        name="ticket_quantity"
                        placeholder="quantity"
                        type="number"
                        required
                    />
                    <div className="grid lg:grid-cols-2 col-span-1 gap-4 ">
                        <div className="flex flex-col">
                            <FormInput
                                className="w-full flex-1"
                                label="Start date"
                                name="start_date"
                                type="date"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <FormInput
                                className="w-full flex-1"
                                label="End date"
                                name="end_date"
                                type="date"
                                required
                            />
                        </div>
                    </div>

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
                            Create Ticket
                        </button>
                    </div>
                </form>
            </Form>
        </Modal>
    );
}
