import {
    DASHBOARD_ROUTES,
    DOCUMENT_VERIFICATION_ROUTES,
    IDENTITY_VERIFICATION_ROUTES,
    STAFF_VERIFICATION_ROUTES,
    REFEREE_GUARANTOR_ROUTES,
    FRAUD_RISK_INTELLIGENCE_ROUTES,
    KYB_KYC_ROUTES,
    EVENT_MANAGEMENT_ROUTES,
    ADMIN_DASHBOARD_ROUTES,
} from "@/constants/routes";
import HomeIcon from "../../../../public/icons/HomeIcon";
import UserVerificationIcon from "../../../../public/icons/UserVerification";
import KybIcon from "../../../../public/icons/Kyb";
import GuarantorVerification from "../../../../public/icons/GuarantorVerification";
import EventIcon from "../../../../public/icons/Event";
import FraudIcon from "../../../../public/icons/Fraud";
import DocumentVerificationIcon from "../../../../public/icons/DocumentVerification";
import StaffVerification from "../../../../public/icons/StaffVerification";
import BillingUsageIcon from "../../../../public/icons/BillingUsage";
import { RiShieldUserLine } from "react-icons/ri";
import { LuUserX } from "react-icons/lu";
import { LuUserMinus } from "react-icons/lu";
import { LuUserCheck } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaUserCheckSolid } from "react-icons/lia";

export const getSidebarNavLinks = (isCompanyVerified: boolean | undefined) => {
    return {
        company: [
            {
                label: "Dashboard",
                href: DASHBOARD_ROUTES.HOME,
                Icon: HomeIcon,
            },

            {
                label: "Identity Verification",
                href: IDENTITY_VERIFICATION_ROUTES.HOME,
                Icon: UserVerificationIcon,
                // disabled: !isCompanyVerified,
            },

            {
                label: "Document Verification",
                href: DOCUMENT_VERIFICATION_ROUTES.HOME,
                Icon: DocumentVerificationIcon,
                // disabled: !isCompanyVerified,
            },

            {
                label: "KYBKYC",
                href: KYB_KYC_ROUTES.HOME,
                Icon: KybIcon,
                // disabled: !isCompanyVerified,
            },

            {
                label: "Staff Verification",
                href: STAFF_VERIFICATION_ROUTES.HOME,
                Icon: StaffVerification,
                // disabled: !isCompanyVerified,
            },

            {
                label: "Referee & Guarantor",
                href: REFEREE_GUARANTOR_ROUTES.HOME,
                Icon: GuarantorVerification,
                // disabled: !isCompanyVerified,
            },

            {
                label: "Event Management",
                href: EVENT_MANAGEMENT_ROUTES.HOME,
                Icon: EventIcon,
                // disabled: !isCompanyVerified,
            },

            {
                label: "Fraud & Risk Intelligence",
                href: FRAUD_RISK_INTELLIGENCE_ROUTES.HOME,
                Icon: FraudIcon,
                // disabled: !isCompanyVerified,
            },
        ],

        individual: [
            {
                label: "Dashboard",
                href: DASHBOARD_ROUTES.HOME,
                Icon: HomeIcon,
            },

            {
                label: "Identity Verification",
                href: IDENTITY_VERIFICATION_ROUTES.HOME,
                Icon: UserVerificationIcon,
            },

            {
                label: "Document Verification",
                href: DOCUMENT_VERIFICATION_ROUTES.HOME,
                Icon: DocumentVerificationIcon,
            },

            {
                label: "Event Management",
                href: EVENT_MANAGEMENT_ROUTES.HOME,
                Icon: EventIcon,
            },
        ],

        subAdmin: [
            {
                label: "Overview",
                href: ADMIN_DASHBOARD_ROUTES.HOME,
                Icon: HomeIcon,
            },

            {
                label: "Registration Review",
                Icon: RiShieldUserLine,
                href: ADMIN_DASHBOARD_ROUTES.REGISTRATION_REVIEW,
                subHrefs: [
                    {
                        label: "Pending List",
                        href: `${ADMIN_DASHBOARD_ROUTES.REGISTRATION_REVIEW}?status=pending`,
                        Icon: FaRegCircleUser,
                        usePathHref: true,
                    },

                    {
                        label: "Approved List",
                        href: `${ADMIN_DASHBOARD_ROUTES.REGISTRATION_REVIEW}?status=approved`,

                        Icon: LuUserCheck,
                        usePathHref: true,
                    },

                    {
                        label: "Flagged List",
                        href: `${ADMIN_DASHBOARD_ROUTES.REGISTRATION_REVIEW}?status=flagged`,
                        Icon: LuUserX,
                        usePathHref: true,
                    },

                    {
                        label: "Declined List",
                        href: `${ADMIN_DASHBOARD_ROUTES.REGISTRATION_REVIEW}?status=declined`,
                        Icon: LuUserMinus,
                        usePathHref: true,
                    },
                ],
            },
        ],

        accountant: [
            {
                label: "Overview",
                href: ADMIN_DASHBOARD_ROUTES.HOME,
                Icon: HomeIcon,
            },

            {
                label: "User Billing",
                href: ADMIN_DASHBOARD_ROUTES.USER_BILLING,
                Icon: RiShieldUserLine,
                subHrefs: [
                    {
                        label: "Active Subscriber",
                        href: `${ADMIN_DASHBOARD_ROUTES.USER_BILLING}?status=active`,
                        Icon: LiaUserCheckSolid,
                        usePathHref: true,
                    },

                    {
                        label: "Pay-as-you-go User",
                        href: `${ADMIN_DASHBOARD_ROUTES.REGISTRATION_REVIEW}?status=payg`,
                        Icon: HomeIcon,
                        usePathHref: true,
                    },
                ],
            },
        ],

        superAdmin: [
            {
                label: "User Management",
                href: ADMIN_DASHBOARD_ROUTES.HOME,
                Icon: HomeIcon,
            },

            {
                label: "Verification",
                Icon: UserVerificationIcon,
                href: ADMIN_DASHBOARD_ROUTES.VERIFICATION,
                subHrefs: [
                    {
                        label: "ID  Verification",
                        href: ADMIN_DASHBOARD_ROUTES.ID_VERIFICATION,
                        Icon: UserVerificationIcon,
                        usePathHref: true,
                    },

                    {
                        label: "Document Verification",
                        href: "document-verification",
                        Icon: DocumentVerificationIcon,
                        usePathHref: true,
                    },

                    {
                        label: "KYB/KYC",
                        href: "payg",
                        Icon: KybIcon,
                        usePathHref: true,
                    },

                    {
                        label: "Staff Verification",
                        href: "payg",
                        Icon: StaffVerification,
                        usePathHref: true,
                    },

                    {
                        label: "Referee & Guarantor",
                        href: "payg",
                        Icon: GuarantorVerification,
                        usePathHref: true,
                    },

                    {
                        label: "Risk Intelligence",
                        href: "payg",
                        Icon: FraudIcon,
                        usePathHref: true,
                    },
                ],
            },

            {
                label: "Event Management",
                href: "/event-management",
                Icon: EventIcon,
            },

            {
                label: "API & Webhooks",
                href: "/api-hooks",
                Icon: EventIcon,
            },

            {
                label: "Billing and Usage",
                href: "/billing-and-usage",
                Icon: BillingUsageIcon,
            },
        ],
    };
};
