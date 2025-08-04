"use client";

import { ColumnDef } from "@tanstack/react-table";
import Avatar from "@/components/shared/Avatar";
import { Button } from "@/components/ui/button";
import { Copy, Eye } from "lucide-react";
import Pill from "@/components/shared/Pill";
import HorizontalDotsIcon from "../../../../public/icons/HorizontalDots";
import { useMemo } from "react";
import Dropdown, { IDropdownMenu } from "@/components/shared/Dropdown";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ADMIN_DASHBOARD_ROUTES } from "@/constants/routes";

export interface IUser {
    name: string;
    email: string;
    type: string;
    date: string;
    status: string;
}

export const userColumns: ColumnDef<IUser>[] = [
    {
        header: "Name",
        accessorKey: "name",
        cell: () => (
            <div className="rounded-full size-[40px] text-black">
                <Avatar fallbackText="Dave Wilson" className="bg-white" />
            </div>
        ),
    },

    {
        header: "Email",
        accessorKey: "email",
        cell: ({ row }) => {
            const email = row.getValue("email");
            return (
                <span className="space-x-7">
                    <span>{email as string}</span>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full bg-white"
                    >
                        <Copy className="stroke-gray-500" />
                    </Button>
                </span>
            );
        },
    },

    {
        header: "Type",
        accessorKey: "type",
        cell: ({ row }) => {
            const type = row.getValue("type");
            return <Pill variant="success">{type as string}</Pill>;
        },
    },

    {
        header: "Date",
        accessorKey: "date",
    },

    {
        header: "Status",
        accessorKey: "status",
        cell: ({ row }) => {
            const status = row.getValue("status");
            return <Pill variant="inactive">{status as string}</Pill>;
        },
    },

    {
        header: "Action",
        id: "action",
        cell: ({ row }) => {
            const userData = row.original;
            return <TableActionMenu />;
        },
    },
];

function TableActionMenu() {
    const menuItems: IDropdownMenu[] = useMemo(
        () => [
            {
                key: "1",
                label: (
                    <Link
                        href={`${ADMIN_DASHBOARD_ROUTES.REGISTRATION_REVIEW}/1`}
                    >
                        View User
                    </Link>
                ),
                icon: <Eye />,
            },
        ],
        []
    );

    return (
        <Dropdown menuItems={menuItems}>
            <HorizontalDotsIcon />
        </Dropdown>
    );
}
