import * as Popover from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, UserPlus } from "lucide-react";
import { CheckMark } from "../../../../public/icons";

type VerificationRow = {
  id?: string;
  staff_name: string;
  phone_number: string;
  verification_type: string;
  bvn: string;
  phone: string;
  ID: string;
  status: string;
};

export const StaffVerificationColumns = (
  onAddGuarantor: (id?: string) => void,
  onViewResult: (id?: string) => void
): ColumnDef<VerificationRow>[] => [
  {
    accessorKey: "staff_name",
    header: "Staff Name",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
  {
    accessorKey: "verification_type",
    header: "Verification type",
  },
  {
    accessorKey: "bvn",
    header: "BVN",
    cell: ({ row }) => (row.original.bvn ? <CheckMark /> : "-"),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (row.original.phone ? <CheckMark /> : "-"),
  },
  // {
  //   accessorKey: "ID",
  //   header: "ID",
  //   cell: ({ row }) => (row.original.ID ? <CheckMark /> : "-"),
  // },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button variant="outline" size="sm">
              Action
            </Button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              sideOffset={5}
              className="bg-black text-white p-2 rounded-md shadow-lg flex flex-col gap-2 w-40"
            >
              <button
                className="flex items-center gap-2 hover:bg-white/10 p-2 rounded"
                onClick={() => onAddGuarantor(id)}
              >
                <UserPlus className="w-4 h-4" />
                Add guarantor
              </button>
              <button
                className="flex items-center gap-2 hover:bg-white/10 p-2 rounded"
                onClick={() => onViewResult(id)}
              >
                <Eye className="w-4 h-4" />
                View result
              </button>
              <Popover.Arrow className="fill-black" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      );
    },
  },
];
