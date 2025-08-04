import {
    DASHBOARD_ROUTES,
    DOCUMENT_VERIFICATION_ROUTES,
    EVENT_MANAGEMENT_ROUTES,
    IDENTITY_VERIFICATION_ROUTES,
    KYB_KYC_ROUTES,
    REFEREE_GUARANTOR_ROUTES,
    STAFF_VERIFICATION_ROUTES,
} from "@/constants/routes";
import DashboardGetStartedIcon from "../../../../public/icons/DashboardGetStarted";
import DashboardVerificationIcon from "../../../../public/icons/DashboardVerification";
import DashboardRefereeIcon from "../../../../public/icons/DashboardReferee";
import DashboardStaffVerificationIcon from "../../../../public/icons/DashboardStaffVerification";
import DashboardEventIcon from "../../../../public/icons/DashboardEvent";
import DashboardDocumentIcon from "../../../../public/icons/DashboardDocument";
import DashboardComplianceIcon from "../../../../public/icons/DashboardCompliance";

export const dashboardNavCards = [
    {
        key: 1,
        title: "Get Started",
        mobileTitle: "Get Started",
        description:
            "You're in a test mode environment. Please verify your account to get started. Click to verify",
        icon: DashboardGetStartedIcon,
        href: "/",
    },

    {
        key: 2,
        title: "Identification Verification",
        mobileTitle: "Identity Verification",
        description:
            "Validate user identity through biometric checks and document verification",
        icon: DashboardVerificationIcon,
        href: "/",
    },

    {
        key: 3,
        title: "Referee & Guarantor verification",
        mobileTitle: "Referee Verification",
        description:
            "Ensure trust and reliability with thorough verification of referees and guarantors",
        icon: DashboardRefereeIcon,
        href: "/",
    },

    {
        key: 4,
        title: "Staff & Employment Verification",
        mobileTitle: "Staff Verification",
        description:
            "Verify the authenticity of staff identities and supporting documents with confidence",
        icon: DashboardStaffVerificationIcon,
        href: "/",
    },

    {
        key: 5,
        title: "Event & Guest Check",
        mobileTitle: "Event & Guest Check",
        description:
            "Ensure smooth and secure event management by verifying guests from registration to entry",
        icon: DashboardEventIcon,
        href: "/",
    },

    {
        key: 6,
        title: "Document Verification",
        mobileTitle: "Document Verification",
        description:
            "Check utility bills, ID scans, and other documents for signs of fraud",
        icon: DashboardDocumentIcon,
        href: "/",
    },

    {
        key: 7,
        title: "KYC/KYB Compliance",
        mobileTitle: "KYC/KYB Compliance",
        description:
            "Ensure both individuals and businesses meet regulatory requirements",
        icon: DashboardComplianceIcon,
        href: "/",
    },
];
