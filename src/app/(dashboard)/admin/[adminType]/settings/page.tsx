"use client";

import Tabs, { TabProps } from "@/components/shared/Tabs";
import AdminAccountSettingTab from "@/modules/admin/components/AccountSettingTab";
import AdminProfileTab from "@/modules/admin/components/ProfileTab";

const tabItems: TabProps[] = [
    {
        key: "1",
        label: "Profile",
        children: <AdminProfileTab />,
    },

    {
        key: "2",
        label: "Account Settings",
        children: <AdminAccountSettingTab />,
    },
];

export default function AdminSettingPage() {
    return (
        <div className="space-y-10">
            <Tabs tabs={tabItems} wrapperClassName="justify-start" />
        </div>
    );
}
