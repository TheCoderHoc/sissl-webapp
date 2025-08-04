import Pill from "@/components/shared/Pill";
import DashboardItem, { DashboardItemProps } from "./DashboardItem";

const items: DashboardItemProps[] = [
    {
        title: "2FA Authentication",
        description: "Enable two factor authentication for login",
        middleContent: <Pill>Inactive</Pill>,
        actionText: "Setup",
    },

    {
        title: "Force 2FA for all users",
        middleContent: "No",
        actionType: "switch",
        actionText: "Setup",
    },

    {
        title: "Password change frequency",
        middleContent: "No",
        actionType: "button",
    },

    {
        title: "Inactive session timeout",
        middleContent: "10 Minutes",
        actionType: "button",
    },

    {
        title: "Enable data verification",
        middleContent: "No",
        actionType: "switch",
    },
];

export default function AccountSettingTab() {
    return (
        <div className="space-y-10">
            <h2 className="text-lg font-medium">API Keys</h2>

            <div className="space-y-20">
                {items.slice(0, 3).map(({ ...restProps }, i) => (
                    <DashboardItem key={i} {...restProps} />
                ))}
            </div>

            <h2 className="text-lg font-medium">
                Identity Verification Setting
            </h2>

            <DashboardItem {...items[4]} />
        </div>
    );
}
