'use client';

import { DataTable } from '@/components/shared/DataTable';
import { Button } from '@/components/ui/button';

import { ColumnDef } from "@tanstack/react-table";

export interface IApiLog {
    requestId: string;
    apiKeyName: string;
    endpoint: string;
    method: string;
    ipAddress: string;
    time: string;
    by: string;
}

export const apiLogColumns: ColumnDef<IApiLog>[] = [
    {
        header: "Request ID",
        accessorKey: "requestId",
    },
    {
        header: "API key name",
        accessorKey: "apiKeyName",
    },
    {
        header: "Endpoint",
        accessorKey: "endpoint",
    },
    {
        header: "Method",
        accessorKey: "method",
    },
    {
        header: "Ip Address",
        accessorKey: "ipAddress",
    },
    {
        header: "Time",
        accessorKey: "time",
    },
    {
        header: "BY",
        accessorKey: "by",
    },
];

export default function ApiKeyLogHistoryPage() {
    const apiLogData: IApiLog[] = [
        {
            requestId: "REQ–00981",
            apiKeyName: "PTADS_Project",
            endpoint: "/v1/verify-id",
            method: "Post",
            ipAddress: "197.210.56.21",
            time: "2025–07–02 12:24 PM",
            by: "David",
        },
    ];
    return (
        <div className="min-h-screen px-6 py-8 bg-black text-white">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-semibold">API Key log History</h1>
                <Button
                    variant="outline"
                    className="border border-white/20 text-white hover:bg-white/10"
                >
                    Filter by Date
                </Button>
            </div>

            <div className="bg-[#0d0d0d] rounded-lg p-4">
                <DataTable
                    columns={apiLogColumns}
                    data={apiLogData}
                    tableHeaderClassName="text-white font-medium text-sm"
                    className="text-sm"
                />
            </div>
        </div>
    );
}
