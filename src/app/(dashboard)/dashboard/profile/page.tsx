"use client";

import Tabs, { TabProps } from "@/components/shared/Tabs";
import AccountSettingTab from "@/modules/dashboard/components/AccountSettingTab";
import GeneralTab from "@/modules/dashboard/components/GeneralTab";
import LiveSettingTab from "@/modules/dashboard/components/LiveSettingTab";
import ProfileTab from "@/modules/dashboard/components/ProfileTab";
import WebHookTab from "@/modules/dashboard/components/WebHookTab";
import { useSearchParams } from "next/navigation";
const tabItems: TabProps[] = [
    {
        key: "1",
        label: "Profile",
        children: <ProfileTab />,
    },

    {
        key: "2",
        label: "General",
        children: <GeneralTab />,
    },

    {
        key: "3",
        label: "API/Webhooks",
        children: <WebHookTab />,
    },

    {
        key: "4",
        label: "Account Settings",
        children: <AccountSettingTab />,
    },

    {
        key: "5",
        label: "Liveness Settings",
        children: <LiveSettingTab />,
    },
];

export default function ProfileSettingPage() {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");

    return (
        <div className="space-y-10">
            <Tabs tabs={tabItems} value={tabParam || "1"} />
        </div>
    );
}
