"use client";
import { DataTable } from "@/components/shared/DataTable";
import {
    ISubscriber,
    subscriberColumns,
} from "@/modules/admin/columns/subscribers-columns";
import AnalyticCardAlt from "@/modules/admin/components/AnalyticCardAlt";

const subscribers: ISubscriber[] = [
    {
        id: "sub_001",
        type: "individual",
        name: "Alice Johnson",
        wallet_balance: "₦5,200.00",
        usage_cost: "₦1,300.00",
    },
    {
        id: "sub_002",
        type: "company",
        name: "Zenith Energy Ltd.",
        wallet_balance: "₦120,000.00",
        usage_cost: "₦45,500.00",
    },
    {
        id: "sub_003",
        type: "individual",
        name: "Emeka Okafor",
        wallet_balance: "₦2,750.00",
        usage_cost: "₦980.00",
    },
];

export default function PendingList() {
    return (
        <section className="space-y-10">
            <h1 className="font-bold text-2xl">Staff Verification Overview</h1>

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
                <DataTable columns={subscriberColumns} data={subscribers} />
            </div>
        </section>
    );
}
