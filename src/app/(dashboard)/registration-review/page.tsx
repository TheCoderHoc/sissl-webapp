"use client";
import { DataTable } from "@/components/shared/DataTable";
import GreetUser from "@/components/shared/GreetUser";
import TableHeader from "@/components/shared/TableHeader";
import { userColumns } from "@/modules/admin/columns/user-column";
import AnalyticCardAlt from "@/modules/admin/components/AnalyticCardAlt";

const users = [
    {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        type: "Company",
        date: "2025-07-25",
        status: "Active",
    },
    {
        name: "Brian Smith",
        email: "brian.smith@example.com",
        type: "Individual",
        date: "2025-06-18",
        status: "Inactive",
    },
    {
        name: "Chloe Williams",
        email: "chloe.williams@example.com",
        type: "Company",
        date: "2025-08-01",
        status: "Pending",
    },
    {
        name: "Daniel Osei",
        email: "daniel.osei@example.com",
        type: "Individual",
        date: "2025-05-10",
        status: "Suspended",
    },
    {
        name: "Emily Zhang",
        email: "emily.zhang@example.com",
        type: "Company",
        date: "2025-04-30",
        status: "Active",
    },
];

export default function PendingList() {
    return (
        <section className="space-y-10">
            <GreetUser />

            <p>
                Quickly monitor and manage all onboarded users across companies,
                and individuals.
            </p>

            <div className="space-y-10">
                <h2 className="font-bold text-2xl">User Overview</h2>

                <div className="grid grid-cols-[2fr_1fr] gap-10">
                    <div className="grid grid-cols-2 gap-5">
                        <AnalyticCardAlt
                            label="Companies"
                            value="1283"
                            trend="upwards"
                        />
                        <AnalyticCardAlt
                            label="Individuals"
                            value="2350"
                            trend="upwards"
                        />
                    </div>
                </div>

                <div className="space-y-10">
                    <h2 className="font-bold text-2xl">User List</h2>
                    <TableHeader />
                    <DataTable columns={userColumns} data={users} />
                </div>
            </div>
        </section>
    );
}
