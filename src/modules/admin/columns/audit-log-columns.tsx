import { ColumnDef } from "@tanstack/react-table";

interface IAuditLog {
    activity: string;
    date: string;
}

export const auditLogColumns: ColumnDef<IAuditLog>[] = [
    {
        header: "S/No",
        cell: ({ row }) => row.index + 1,
    },

    {
        header: "Activity",
        accessorKey: "activity",
    },

    {
        header: "Date",
        accessorKey: "date",
    },
];
