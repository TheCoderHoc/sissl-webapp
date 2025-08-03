"use client";

import DashboardHeader from "@/components/shared/DashboardHeader";
import { DashboardSidebar } from "@/components/shared/DashboardSidebar";
import React from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full">
            <DashboardSidebar />
            <div className="flex-1 flex flex-col h-full">
                <DashboardHeader />
                <main className="flex-1 overflow-y-auto bg-black px-10 py-10">
                    {children}
                </main>
            </div>
        </div>
    );
}
