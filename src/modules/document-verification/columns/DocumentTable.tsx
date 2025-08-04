import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type DocumentRecord = {
    id: string;
    document_type: string;
    issuance_date: string;
    submittedBy: string;
    created_date: string;
    status: string;
};

export const documentColumns = (
    onActionClick: (id?: string) => void
): ColumnDef<DocumentRecord>[] => [
    {
        accessorKey: "id",
        header: "Document ID",
    },
    {
        accessorKey: "document_type",
        header: "Document Type",
    },
    {
        accessorKey: "issuance_date",
        header: "Issuance Date",
    },
    {
        accessorKey: "submittedBy",
        header: "Submitted By",
    },
    {
        accessorKey: "created_date",
        header: "Submitted Date",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const value = row.getValue("status") as string;
            const isPassed = value === "Passed";

            return (
                <Badge
                    className="w-[104px] h-[30px] flex items-center justify-center rounded-xl"
                    variant={isPassed ? "default" : "destructive"}
                >
                    {value}
                </Badge>
            );
        },
    },

    {
        id: "action",
        header: "Action",
        cell: ({ row }) => {
            const id = row.original.id;

            return (
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onActionClick(id)}
                >
                    Action
                </Button>
            );
        },
    },
];
