import { ColumnDef } from "@tanstack/react-table";

interface IActivity {
    activity: string;
    date: string;
}

export const activityColumns: ColumnDef<IActivity>[] = [
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
