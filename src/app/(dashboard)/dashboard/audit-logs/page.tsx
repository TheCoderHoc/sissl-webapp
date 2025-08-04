"use client";

import { DataTable } from "@/components/shared/DataTable";
import { auditLogColumns } from "@/modules/company/dashboard/columns/audit-log";
import NoteCheckmarkIcon from "@/public/icons/NoteCheckmark";


export default function AuditLogs() {
    return (
        <div className="space-y-10">
            <h1 className="font-bold text-lg">Audit Logs</h1>

            <div className="grid grid-cols-[2fr_1fr] gap-20">
                <DataTable
                    columns={auditLogColumns}
                    data={[]}
                    pagination={false}
                />

                <div className="flex flex-col items-center gap-2 text-sm">
                    <NoteCheckmarkIcon />
                    <p>Select an entity to view details</p>
                </div>
            </div>
        </div>
    );
}
