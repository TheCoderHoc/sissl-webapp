"use client";

import DashboardNavCard from "@/modules/dashboard/components/DashboardNavCard";
import { dashboardNavCards } from "@/modules/dashboard/constants/dashboard-cards";
import { useSession } from "next-auth/react";

export default function DashboardHome() {
    const { data: session } = useSession();

    if (!session) return null;

    const {
        user: { firstName, lastName },
    } = session;

    const fullName = `${firstName} ${lastName}`;

    return (
        <div className="space-y-10">
            <h2 className="text-lg">
                <span className="text-gray-500">
                    Welcome back,
                    <br />
                </span>
                <span>{fullName}👋</span>
            </h2>

            <p>
                Welcome to SISSL Dashboard. Get familiar with the dashboard,
                here are things you can do:
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-10">
                {dashboardNavCards.map(({ key, ...restProps }) => (
                    <DashboardNavCard key={key} {...restProps} />
                ))}
            </div>
        </div>
    );
}
