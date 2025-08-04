"use client";

import { ColumnDef } from "@tanstack/react-table";
import Pill from "@/components/shared/Pill";

export interface IUsageHistory {
    date: string;
    service_type: string;
    subtype: string;
    quantity: string;
    unit_price: string;
    total: string;
    status: string;
}

export const usageHistoryColumns: ColumnDef<IUsageHistory>[] = [
    {
        header: "Date",
        accessorKey: "date",
    },
    {
        header: "Service Type",
        accessorKey: "service_type",
        cell: ({ row }) => {
            const type = row.getValue("service_type");
            return <Pill variant="success">{type as string}</Pill>;
        },
    },

    {
        header: "Service Sub-Type",
        accessorKey: "subtype",
    },

    {
        header: "Quantity",
        accessorKey: "quantity",
    },

    {
        header: "Unit Price",
        accessorKey: "unit_price",
    },

    {
        header: "Total",
        accessorKey: "total",
    },

    {
        header: "Status",
        accessorKey: "status",
    },
];
