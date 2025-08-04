"use client";
import { DataTable } from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import { billingHistoryColumns } from "@/modules/dashboard/columns/billing-history";
import DashboardCard from "@/modules/dashboard/components/DashboardCard";
import useGetTransactionsController from "@/modules/dashboard/controllers/billing-plans/getTransactionsController";
import useGetUserActivePlanController from "@/modules/dashboard/controllers/billing-plans/getUserActivePlanController";
import useGetWalletBalanceController from "@/modules/dashboard/controllers/billing-plans/getWalletBalanceController";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

export default function Billing() {
    const { data: activePlan } = useGetUserActivePlanController({});

    const { data: wallet } = useGetWalletBalanceController({});

    const { data: transactions } = useGetTransactionsController({});

    const balance = wallet?.balance;
    const total_transactions = wallet?.total_transactions;

    const userTransactions = transactions?.data?.results;

    const activeUserPlan = activePlan?.data?.plan?.title;

    return (
        <div className="space-y-10">
            <h1 className="text-lg font-bold">Billing and Usage</h1>

            <Card className="flex items-center justify-between w-1/2 px-6 py-4">
                <div className="space-y-4">
                    {activeUserPlan ? (
                        <p>You are on {activeUserPlan}</p>
                    ) : (
                        <p>You are not on any plan</p>
                    )}

                    <Link href={DASHBOARD_ROUTES.BILLING_PLAN}>
                        <Button
                            variant="ghost"
                            className="text-main p-0 font-normal hover:bg-transparent"
                        >
                            {activePlan ? "Change your plan" : "Choose a plan"}
                        </Button>
                    </Link>
                </div>

                <Button size="icon" className="rounded-full hover:bg-main">
                    <FaTimes />
                </Button>
            </Card>

            <div className="grid grid-cols-3 gap-5">
                <DashboardCard
                    title="Current Balance"
                    value={`NGN ${balance || 0}`}
                />
                <DashboardCard
                    title="Total Usage"
                    value={`NGN ${total_transactions || 0}`}
                />
            </div>

            <Link className="block" href={DASHBOARD_ROUTES.BILLING_TOP_WALLET}>
                <Button size="lg">Top up wallet</Button>
            </Link>

            <div className="flex items-center justify-between">
                <h2 className="font-bold text-lg">History</h2>

                <Button
                    variant="outline"
                    className="border-gray-500 text-gray-500"
                >
                    Filter by debit
                </Button>
            </div>

            <DataTable
                columns={billingHistoryColumns}
                data={userTransactions ?? []}
            />
        </div>
    );
}
