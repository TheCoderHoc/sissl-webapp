import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type VerificationRow = {
  id?: string;
  customer_name: string;
  id_type: string;
  id_number: string;
  submittedBy: string;
  created_date: string;
  status: string;
};

export const identityVerificationColumns = (
  onActionClick: (id?: string) => void
): ColumnDef<VerificationRow>[] => [
  {
    accessorKey: "customer_name",
    header: "Customer Name",
  },
  {
    accessorKey: "id_type",
    header: "Document Type",
  },
  {
    accessorKey: "id_number",
    header: "Document Number",
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
        <Button variant="outline" size="sm" onClick={() => onActionClick(id)}>
          Action
        </Button>
      );
    },
  },
];
