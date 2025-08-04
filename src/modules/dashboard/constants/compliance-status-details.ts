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

export const individualComplianceStatusInfo = {
  Pending: {
    message:
      "We're currently reviewing your identity documents. \n We'll reach out to you shortly.",
    btnClassName: "bg-dash_blue",
    imageSrc: "",
    btnLabel: "",
    btnHref: "",
  },
  Rejected: {
    message:
      "Your compliance was rejected due to invalid or unclear documents. \n Please reapply with valid ID and utility bill.",
    btnClassName: "bg-red-500",
    imageSrc: "/images/rejected-compliance.svg",
    btnLabel: "Reapply",
    btnHref: DASHBOARD_ROUTES.INDIVIDUAL_COMPLIANCE_INFORMATION,
  },
  Accepted: {
    message:
      "Great news! Your identity has been verified. \n You can now access all features on SISSL.",
    btnClassName: "bg-green-500",
    imageSrc: "/images/accepted-compliance.svg",
    btnLabel: "Go to Dashboard",
    btnHref: DASHBOARD_ROUTES.BILLING_PLAN,
  },
};