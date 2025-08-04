"use client";

import { useState } from "react";
import Pill from "@/components/shared/Pill";
import Dropdown, { IDropdownMenu } from "@/components/shared/Dropdown";
import { ColumnDef } from "@tanstack/react-table";
import { RefreshIcon } from "../../../../public/icons";
import PencilIcon from "../../../../public/icons/Pencil";
import TrashIcon from "../../../../public/icons/Trash";
import HorizontalDotsIcon from "../../../../public/icons/HorizontalDots";
import { ActionModal } from "../components/ActionModal";

export interface IUser {
    name: string;
    status: string;
    role: string;
    phone_number: string;
    email: string;
    date: string;
}

export const userColumns = (
    onEditUser: (user: IUser) => void
): ColumnDef<IUser>[] => [
    {
        header: "S/No",
        cell: ({ row }) => row.index + 1,
    },
    {
        header: "Name",
        accessorKey: "name",
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
        header: "Role",
        accessorKey: "role",
    },
    {
        header: "Phone Number",
        accessorKey: "phone_number",
    },
    {
        header: "Email",
        accessorKey: "email",
    },
    {
        header: "Date",
        accessorKey: "date",
    },
    {
        header: "Action",
        id: "action",
        cell: ({ row }) => {
            const userData = row.original;
            return (
                <TableActionMenu
                    user={userData}
                    onEdit={() => onEditUser(userData)}
                />
            );
        },
    },
];

interface TableActionMenuProps {
    user: IUser;
    onEdit: () => void;
}

const TableActionMenu = ({ user, onEdit }: TableActionMenuProps) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showResendModal, setShowResendModal] = useState(false);

    const menuItems: IDropdownMenu[] = [
        {
            key: "1",
            label: <span className="text-green-500">Resend invitation</span>,
            icon: <RefreshIcon />,
            onClick: () => setShowResendModal(true),
        },
        {
            key: "2",
            label: "Edit User",
            icon: <PencilIcon />,
            onClick: onEdit,
        },
        {
            key: "3",
            label: <span className="text-red-500">Delete User</span>,
            icon: <TrashIcon />,
            onClick: () => setShowDeleteModal(true),
        },
    ];

    return (
        <>
            <Dropdown menuItems={menuItems}>
                <HorizontalDotsIcon />
            </Dropdown>

            {/* Delete Modal */}
            <ActionModal
                type="delete"
                open={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={() => {
                    console.log("Deleting:", user.email);
                    setShowDeleteModal(false);
                }}
            />

            {/* Resend Invitation Modal */}
            <ActionModal
                type="resend"
                open={showResendModal}
                onClose={() => setShowResendModal(false)}
            />
        </>
    );
};
