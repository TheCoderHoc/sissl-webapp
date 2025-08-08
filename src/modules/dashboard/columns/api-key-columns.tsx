import Dropdown, { IDropdownMenu } from "@/components/shared/Dropdown";
import { useModalStore } from "@/stores/useModalStore";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import LiveRequestIcon from "../../../../public/icons/LiveRequest";
import PencilIcon from "../../../../public/icons/Pencil";
import { ApiLogsIcon } from "../../../../public/icons";
import TrashIcon from "../../../../public/icons/Trash";
import HorizontalDotsIcon from "../../../../public/icons/HorizontalDots";

// export interface IAPIKey {
//     name: string;
//     description: string;
//     environment: string;
//     key: string;
//     services: string;
//     created_at: string;
// }
export interface IAPIKey {
    id: string; // ✅
    name: string;
    description: string;
    environment: string;
    key: string;
    services: string;
    created_at: string;
}
interface TableActionMenuProps {
    apiKey: IAPIKey;
}


export const apiKeyColumns: ColumnDef<IAPIKey>[] = [
    {
        header: "Name",
        accessorKey: "name",
    },

    {
        header: "Description",
        accessorKey: "description",
    },

    {
        header: "Environment",
        accessorKey: "environment",
    },

    {
        header: "Key",
        accessorKey: "key",
    },

    {
        header: "Services",
        accessorKey: "services",
    },

    {
        header: "Created At",
        accessorKey: "created_at",
    },

    {
        header: "Action",
        id: "action",
        cell: ({ row }) => <TableActionMenu apiKey={row.original as IAPIKey} />,
    },
];
interface TableActionMenuProps {
    apiKey: IAPIKey;
}

const TableActionMenu = ({ apiKey }: TableActionMenuProps) => {
    const router = useRouter();

    const menuItems: IDropdownMenu[] = [
        {
            key: "1",
            label: <span className="text-green-500">Go Live Request</span>,
            icon: <LiveRequestIcon />,
            onClick: () => {
                useModalStore.getState().openModal("goLive", apiKey);
            }
        },
        {
            key: "2",
            label: "Edit Key",
            icon: <PencilIcon />,
            onClick: () => {
                router.push(`/dashboard/profile/create-apikey-form?id=${encodeURIComponent(apiKey.id)}`);
            }
        },

        {
            key: "3",
            label: "ApiLogs",
            icon: <ApiLogsIcon />,
            onClick: () => {
                router.push(`/dashboard/profile/api-logs-history?id=${encodeURIComponent(apiKey.id)}`);
            }
        },

        {
            key: "4",
            label: <span className="text-red-500">Delete Key</span>,
            icon: <TrashIcon />,
            onClick: () => {
                useModalStore.getState().openModal("delete", apiKey);
            }

        },
    ];

    return (
        <Dropdown menuItems={menuItems}>
            <HorizontalDotsIcon />
        </Dropdown>
    );
};
