import { DASHBOARD_ROUTES } from "@/constants/routes";
import AccountProfileIcon from "../../public/icons/AccountProfile";
import BillingUsageIcon from "../../public/icons/BillingUsage";
import TeamIcon from "../../public/icons/Team";
import AuditLogIcon from "../../public/icons/AuditLog";
import AccountSettingIcon from "../../public/icons/AccountSetting";
import LogOutIcon from "../../public/icons/LogOut";

export const profileDropdownLinks = [
    {
        key: 1,
        label: "Account Profile",
        href: DASHBOARD_ROUTES.PROFILE_SETTINGS,
        icon: AccountProfileIcon,
    },

    {
        key: 2,
        label: "Billing and Usage",
        href: DASHBOARD_ROUTES.BILLING,
        icon: BillingUsageIcon,
    },

    {
        key: 3,
        label: "Team",
        href: DASHBOARD_ROUTES.TEAM,
        icon: TeamIcon,
    },

    {
        key: 4,
        label: "Audit Logs",
        href: DASHBOARD_ROUTES.AUDIT_LOGS,
        icon: AuditLogIcon,
    },

    {
        key: 5,
        label: "Account Settings",
        href: "",
        icon: AccountSettingIcon,
    },

    {
        key: 6,
        label: "Log Out",
        href: "",
        icon: LogOutIcon,
    },
];
