"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import Pill from "@/components/shared/Pill";

export interface ISubscriber {
    id: string;
    type: string;
    name: string;
    wallet_balance: string;
    usage_cost: string;
}

export const subscriberColumns: ColumnDef<ISubscriber>[] = [
    {
        header: "User ID",
        accessorKey: "id",
    },
    {
        header: "Type",
        accessorKey: "type",
        cell: ({ row }) => {
            const type = row.getValue("type");
            return <Pill variant="success">{type as string}</Pill>;
        },
    },

    {
        header: "Name",
        accessorKey: "name",
    },

    {
        header: "Wallet",
        accessorKey: "wallet_balance",
    },

    {
        header: "Usage Cost",
        accessorKey: "usage_cost",
    },

    {
        header: "Actions",
        id: "actions",
        cell: ({ row }) => {
            return (
                <div className="space-x-2">
                    <Button size="sm" className="bg-[#F5E9001A] text-primary">
                        View Usage
                    </Button>
                    <Button size="sm" className="bg-[#F5E9001A] text-primary">
                        Suspend
                    </Button>
                </div>
            );
        },
    },
];
