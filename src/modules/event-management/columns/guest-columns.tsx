"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import CelebrationEventDetails from "../components/CelebrationEventDetail";
import { useState } from "react";
import Badge from "@/components/shared/Pill";

interface IGuest {
    name: string;
    created_at: string;
    type: string;
    date: string;
    status: string;
}

export const guestColumns: ColumnDef<IGuest>[] = [
    {
        header: "Guest Name",
        accessorKey: "name",
    },
    {
        header: "Date Registered",
        accessorKey: "created_at",
    },
    {
        header: "Event Type",
        accessorKey: "type",
    },

    {
        header: "Event Date",
        accessorKey: "date",
    },

    {
        header: "Access Status",
        accessorKey: "status",
        cell: ({ row }) => {
            const value = row.getValue("status");
            return <Badge>{value as string}</Badge>;
        },
    },

    {
        header: "",
        id: "action",
        cell: () => <TableAction />,
    },
];

const TableAction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Button
                size="sm"
                variant="outline"
                className="border-[1px] border-solid border-dash_blue text-dash_blue"
                onClick={() => setIsModalOpen(true)}
            >
                View Details
            </Button>

            <CelebrationEventDetails
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};
