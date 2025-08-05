import { ColumnDef } from "@tanstack/react-table";
import Pill from "@/components/shared/Pill";
import { formatDate } from "@/utils/formatDate";
import { ITransactionResponseData } from "../types/billing";

export interface IBilling {
    reference: string;
    status: string;
    amount: string;
    transaction_type: string;
    date: string;
    service_type: string;
}

export const billingHistoryColumns: ColumnDef<ITransactionResponseData>[] = [
    {
        header: "S/No",
        cell: ({ row }) => row.index + 1,
    },
    {
        header: "Transaction Reference",
        accessorKey: "reference",
    },

    {
        header: "Status",
        accessorKey: "status",
        cell: ({ row }) => {
            const value = row.getValue("status");

            return <Pill variant="success">{value as string}</Pill>;
        },
    },

    {
        header: "Amount",
        accessorKey: "amount",
    },

    {
        header: "Transaction Type",
        accessorKey: "type",
    },

    {
        header: "Date",
        accessorKey: "date",
        accessorFn: ({ date }) => formatDate(date),
    },

    {
        header: "Service Type",
        accessorKey: "service_type",
    },
];
