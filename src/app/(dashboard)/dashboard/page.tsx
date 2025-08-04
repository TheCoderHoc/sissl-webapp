"use client";

import DashboardNavCard from "@/modules/dashboard/components/DashboardNavCard";
import { dashboardNavCards } from "@/modules/dashboard/constants/dashboard-cards";

export default function DashboardHome() {
    return (
        <div className="space-y-10">
            <h2 className="text-lg">
                <span className="text-gray-500">
                    Welcome back,
                    <br />
                </span>
                <span>Dave Wilson👋</span>
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
