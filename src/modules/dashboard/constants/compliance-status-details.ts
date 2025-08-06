import { DASHBOARD_ROUTES } from "@/constants/routes";

export const companyComplianceStatusInfo = {
    Pending: {
        message:
            "We're currently processing your compliance. \n We'll reach out to you shortly.",
        btnClassName: "bg-dash_blue",
        imageSrc: "",
        btnLabel: "",
        btnHref: "",
    },
    Rejected: {
        message:
            "Your compliance was rejected due to an invalid \n ID card. Please reapply.",
        btnClassName: "bg-red-500",
        imageSrc: "/images/rejected-compliance.svg",
        btnLabel: "Reapply",
        btnHref: DASHBOARD_ROUTES.COMPANY_COMPLIANCE_INFORMATION,
    },

    Accepted: {
        message:
            "Great news! Your compliance has been \n approved — now choose a billing plan to \n continue.",
        btnClassName: "bg-green-500",
        imageSrc: "/images/accepted-compliance.svg",
        btnLabel: "Choose a Plan",
        btnHref: DASHBOARD_ROUTES.BILLING_PLAN,
    },
};
