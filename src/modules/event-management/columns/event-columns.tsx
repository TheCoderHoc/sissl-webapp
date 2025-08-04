import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import CelebrationEventDetails from "../components/CelebrationEventDetail";
import { useState } from "react";
import Pill from "@/components/shared/Pill";

interface IEvent {
  name: string;
  created_at: string;
  type: string;
  date: string;
  status: string;
}

export const eventColumns: ColumnDef<IEvent>[] = [
  {
    header: "Event Name",
    accessorKey: "name",
  },
  {
    header: "Date Created",
    accessorKey: "created_at",
  },
  {
    header: "Event Type",
    accessorKey: "type",
  },

  {
    header: "Event Date",
    accessorKey: "date",
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
    header: "",
    id: "action",
    cell: () => <TableAction />,
  },
];

const TableAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        size="sm"
        className="bg-dash_blue text-white"
        onClick={() => setIsModalOpen(true)}
      >
        View
      </Button>

      <CelebrationEventDetails
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
