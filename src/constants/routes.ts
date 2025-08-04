export enum DASHBOARD_ROUTES {
    HOME = "/dashboard",
    PROFILE_SETTINGS = "/dashboard/profile",
    BILLING = "/dashboard/billing-and-usage",
    BILLING_TOP_WALLET = "/dashboard/billing-and-usage/top-up-wallet",
    TEAM = "/dashboard/team",
    AUDIT_LOGS = "/dashboard/audit-logs",

    INDIVIDUAL_BASIC_INFORMATION = "/dashboard/individual-compliance/basic-information",
    INDIVIDUAL_CONTACT_INFORMATION = "/dashboard/individual-compliance/company-information",
    INDIVIDUAL_UPLOAD_DOCUMENT = "/dashboard/individual-compliance/upload-document",
    INDIVIDUAL_COMPLIANCE_STATUS = "/dashboard/individual-compliance/compliance-status",

    COMPANY_COMPLIANCE_INFORMATION = "/dashboard/company-compliance/company-information",
    COMPANY_COMPLIANCE_CONTACT = "/dashboard/company-compliance/contact-information",
    COMPANY_COMPLIANCE_UPLOAD_DOCUMENTS = "/dashboard/company-compliance/upload-documents",
    COMPANY_COMPLIANCE_STATUS = "/dashboard/company-compliance/compliance-status",

    BILLING_PLAN = "/dashboard/billing-plan",
    BILLING_PLAN_SUBSCRIPTION = "/dashboard/billing-plan/subscription-plan",
    BILLING_PLAN_PAYG = "/dashboard/billing-plan/payg",
}

export enum IDENTITY_VERIFICATION_ROUTES {
    HOME = "/identity-verification",
    VERIFY_USER = "/identity-verification/verify-user-form",
    BULK_VERIFY = "/identity-verification/bulk-verify",
}

export enum DOCUMENT_VERIFICATION_ROUTES {
    HOME = "/document-verification",
    BULK_VERIFY = "/document-verification/bulk-verify",
}

export enum KYB_KYC_ROUTES {
    HOME = "/kyb-kyc",
    COMPANY_CHECK = "/kyb-kyc/company",
    COMPANY_RESULT = "/kyb-kyc/company/result",
    INDIVIDUAL_CHECK = "/kyb-kyc/individual",
    INDIVIDUAL_RESULT = "/kyb-kyc/individual/result",
}

export enum STAFF_VERIFICATION_ROUTES {
    HOME = "/staff-verification",
    VERIFY_STAFF = "/staff-verification/verify-staff-form",
    BULK_VERIFY = "/staff-verification/bulk-verify",
}

export enum REFEREE_GUARANTOR_ROUTES {
    HOME = "/referee-guarantor",
    VERIFY_RG = "/referee-guarantor/verify-rg-form",
    BULK_VERIFY = "/referee-guarantor/bulk-verify",
}

export enum FRAUD_RISK_INTELLIGENCE_ROUTES {
    HOME = "/fraud-risk-intelligence",
}

export enum EVENT_MANAGEMENT_ROUTES {
    HOME = "/event-management",
    CREATE_EVENT = "/event-management/create-event",
    EVENT_MANAGEMENT_OVERVIEW = "/event-management/overview",
    SELECT_EVENT_TYPE = "/event-management/overview/create-event/event-type",
    CREATE_CELEBRATION_EVENT_DETAILS = "/event-management/overview/create-event/celebration-event",
    CREATE_CELEBRATION_EVENT_CUSTOMIZATION = "/event-management/overview/create-event/celebration-event/customization",
    CREATE_EVENT_INVITATION_DETAILS = "/event-management/overview/create-event/event-invitation/",
    CREATE_HEAD_COUNT_EVENT = "/event-management/overview/create-event/headcount-event/",
    CREATE_HIGH_PROFILE_EVENT_DETAILS = "/event-management/overview/create-event/high-profile-event/",
    CREATE_HIGH_PROFILE_EVENT_CUSTOMIZATION = "/event-management/overview/create-event/high-profile-event/customization",
    EVENT_MANAGEMENT = "/event-management/event-management",
    EVENT_ANALYTICS = "/event-management/analytics",
}

// ADMIN ROUTES
export enum ADMIN_DASHBOARD_ROUTES {
    HOME = "/user-management",
    REGISTRATION_REVIEW = "/registration-review",
    USER_BILLING = "/user-billing",
    VERIFICATION = "/verification",
    ID_VERIFICATION = "/verification/id-verification",
}
