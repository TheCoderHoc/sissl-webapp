"use client";

import { ColumnDef } from "@tanstack/react-table";
import Avatar from "@/components/shared/Avatar";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export interface IUser {
    name: string;
    email: string;
    type: string;
    date: string;
    status: string;
}

export const userColumns: ColumnDef<IUser>[] = [
    {
        header: "Name",
        accessorKey: "name",
        cell: () => (
            <div className="bg-white rounded-full size-[40px] text-black">
                <Avatar fallbackText="Dave Wilson" />
            </div>
        ),
    },

    {
        header: "Email",
        accessorKey: "email",
        cell: ({ row }) => {
            const email = row.getValue("email");
            return (
                <span className="space-x-7">
                    <span>{email as string}</span>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full bg-white"
                    >
                        <Copy className="stroke-gray-500" />
                    </Button>
                </span>
            );
        },
    },

    {
        header: "Type",
        accessorKey: "type",
    },

    {
        header: "Date",
        accessorKey: "date",
    },

    {
        header: "Status",
        accessorKey: "status",
    },
    // {
    //     header: "Action",
    //     id: "action",
    //     cell: ({ row }) => {
    //         const userData = row.original;
    //         return <TableActionMenu user={userData} />;
    //     },
    // },
];
