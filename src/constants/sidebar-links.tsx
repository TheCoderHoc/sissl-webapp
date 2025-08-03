import {
    DASHBOARD_ROUTES,
    DOCUMENT_VERIFICATION_ROUTES,
    IDENTITY_VERIFICATION_ROUTES,
    STAFF_VERIFICATION_ROUTES,
    REFEREE_GUARANTOR_ROUTES,
    FRAUD_RISK_INTELLIGENCE_ROUTES,
    KYB_KYC_ROUTES,
} from "@/constants/routes";
import HomeIcon from "../../public/icons/HomeIcon";
import UserVerificationIcon from "../../public/icons/UserVerification";
import DocumentVerificationIcon from "../../public/icons/DocumentVerification";
import KybIcon from "../../public/icons/Kyb";
import StaffVerification from "../../public/icons/StaffVerification";
import GuarantorVerification from "../../public/icons/GuarantorVerification";
import EventIcon from "../../public/icons/Event";
import FraudIcon from "../../public/icons/Fraud";


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
                disabled: !isCompanyVerified,
            },

            {
                label: "Document Verification",
                href: DOCUMENT_VERIFICATION_ROUTES.HOME,
                Icon: DocumentVerificationIcon,
                disabled: !isCompanyVerified,
            },

            {
                label: "KYBKYC",
                href: KYB_KYC_ROUTES.HOME,
                Icon: KybIcon,
                disabled: !isCompanyVerified,
            },

            {
                label: "Staff Verification",
                href: STAFF_VERIFICATION_ROUTES.HOME,
                Icon: StaffVerification,
                disabled: !isCompanyVerified,
            },

            {
                label: "Referee & Guarantor",
                href: REFEREE_GUARANTOR_ROUTES.HOME,
                Icon: GuarantorVerification,
                disabled: !isCompanyVerified,
            },

            {
                label: "Event Management",
                href: "/dld",
                Icon: EventIcon,
                disabled: !isCompanyVerified,
            },

            {
                label: "Fraud & Risk Intelligence",
                href: FRAUD_RISK_INTELLIGENCE_ROUTES.HOME,
                Icon: FraudIcon,
                disabled: !isCompanyVerified,
            },
        ],

        Individual: [
            {
                label: "Dashboard",
                href: "/",
                Icon: HomeIcon,
            },

            {
                label: "Identity Verification",
                href: "/",
                Icon: HomeIcon,
            },

            {
                label: "Document Verification",
                href: "/",
                Icon: HomeIcon,
            },

            {
                label: "Event Management",
                href: "/",
                Icon: HomeIcon,
            },
        ],
    };
};
