"use client";
import Avatar from "@/components/shared/Avatar";
import { DataTable } from "@/components/shared/DataTable";
import Pill from "@/components/shared/Pill";
import TableHeaderWithSearch from "@/components/shared/TableSearch";
import { Button } from "@/components/ui/button";
import {
    IUsageHistory,
    usageHistoryColumns,
} from "@/modules/admin/columns/usage-history-columns";

export const usageHistoryData: IUsageHistory[] = [
    {
        date: "2025-07-25",
        service_type: "Data",
        subtype: "Internet Bundle",
        quantity: "5",
        unit_price: "200.00",
        total: "1000.00",
        status: "completed",
    },
    {
        date: "2025-07-28",
        service_type: "Airtime",
        subtype: "MTN Recharge",
        quantity: "1",
        unit_price: "500.00",
        total: "500.00",
        status: "pending",
    },
    {
        date: "2025-08-01",
        service_type: "Utility",
        subtype: "Electricity Payment",
        quantity: "1",
        unit_price: "7500.00",
        total: "7500.00",
        status: "failed",
    },
];

export default function AdminUserListDetailPage() {
    return (
        <section className="space-y-10">
            <div className="grid grid-cols-[1fr_2fr] gap-10">
                <div className="space-y-5">
                    <div className="flex flex-col gap-5 items-center">
                        <Avatar
                            size="3xl"
                            fallbackText="Dave Wilson"
                            className="bg-gray-700"
                        />
                        <div className="md:text-center">
                            <h3>Dave Wilson</h3>
                            <p>ubakawilson@gmail.com</p>
                            <Pill variant="pending" className="mt-3">
                                Pending
                            </Pill>
                        </div>
                    </div>

                    <hr />

                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500">Wallet Balance</h3>
                            <p className="text-gray-500">N20, 000</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500">Plan:</h3>
                            <p className="text-green-500">Pay-as-you-go</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500">Duration</h3>
                            <p className="text-gray-500">
                                23rd July - 1st Aug 2025
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-end">
                    <div className="space-x-2">
                        <Button
                            size="lg"
                            className="bg-[#F5E9001A] text-primary"
                        >
                            Suspend account
                        </Button>
                        <Button
                            size="lg"
                            className="bg-[#F5E9001A] text-primary"
                        >
                            Send renewal message
                        </Button>
                    </div>
                </div>
            </div>

            <div>
                <TableHeaderWithSearch
                    title="Usage History"
                    search=""
                    setSearch={() => {}}
                />
                <DataTable
                    columns={usageHistoryColumns}
                    data={usageHistoryData}
                />
            </div>
        </section>
    );
}
