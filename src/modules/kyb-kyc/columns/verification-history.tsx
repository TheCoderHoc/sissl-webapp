import Pill from "@/components/shared/Pill";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import HorizontalDotsIcon from "../../../../public/icons/HorizontalDots";

export interface IVerificationHistory {
    type: string;
    created_by: string;
    created_at: string;
    status: string;
    score: string;
}

export const verificationHistoryColumns: ColumnDef<IVerificationHistory>[] = [
    {
        header: "S/No",
        cell: ({ row }) => row.index + 1,
    },

    {
        header: "Type",
        accessorKey: "type",
    },

    {
        header: "Submitted By",
        accessorKey: "created_by",
    },

    {
        header: "Submission Date",
        accessorKey: "created_at",
    },

    {
        header: "Status",
        accessorKey: "status",
        cell: ({ row }) => {
            const value = row.getValue("status");
            return <Pill>{value as string}</Pill>;
        },
    },

    {
        header: "Score",
        accessorKey: "score",
    },

    {
        header: "Action",
        id: "action",
        cell: () => <TableActionMenu />,
    },
];

const TableActionMenu = () => {
    return (
        <Button variant="ghost">
            <HorizontalDotsIcon />
        </Button>
    );
};
