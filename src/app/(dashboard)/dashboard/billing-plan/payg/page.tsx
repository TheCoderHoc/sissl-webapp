"use client";
import { DataTable } from "@/components/shared/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

const columns: ColumnDef<{ name: string; description: string }>[] = [
    {
        header: "Service Plan",
        accessorKey: "name",
    },

    {
        header: "Price Example",
        accessorKey: "description",
        cell: ({ row }) => (
            <Badge className="bg-green-500 text-white p-2">
                {row.getValue("description")}
            </Badge>
        ),
    },
];

const data = [
    { name: "KYC Check", description: "20NGN per verification" },
    { name: "KYB Report", description: "40NGN per business" },
    { name: "ID/Document Verification", description: "20NGN per item" },
    { name: "Referee/Gurantor Check", description: "20NGN per submission" },
    { name: "Event Management", description: "20NGN per guest" },
];

export default function PayAsYouGoPlanPage() {
    return (
        <section className="space-y-10">
            <h2 className="text-3xl text-center">
                Pay-as-you-go <br /> Pricing Plan Structure
            </h2>

            <p className="text-center text-sm">
                Whether you are verifying identities, hosting events,
                <br /> choose a plan that fits your workflow — with the <br />{" "}
                freedom to pay only when you need it
            </p>

            <div className="w-1/2 mx-auto">
                <DataTable
                    columns={columns}
                    data={data}
                    tableHeaderClassName="text-center"
                    className="text-center"
                />
            </div>

            <div className="flex items-center justify-end gap-5">
                <Button variant="outline" size="lg">
                    Back
                </Button>
                <Link href={DASHBOARD_ROUTES.BILLING}>
                    <Button size="lg">Continue</Button>
                </Link>
            </div>
        </section>
    );
}
