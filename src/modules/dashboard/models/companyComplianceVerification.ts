export interface ComplianceVerificationRequest {
    company_name?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone_number?: string;
    reg_number?: string;
    date_of_establishment?: Date;
    company_address?: string;
    proof_of_address?: string;
    profile_picture?: string;
    cac_document?: string;
    id_card?: string;
    nin?: string;
    street?: string;
    country?: string;
    state?: string;
}



// response body interface below

export interface ComplianceVerificationResponse {
    status?: boolean;
    message?: string;
    data?: Data;
}

export interface Data {
    id?: string;
    role?: Role;
    profile?: Profile;
    is_onboarding_completed?: boolean;
    first_name?: string;
    last_name?: string;
    is_active?: boolean;
    created_datetime?: Date;
    updated_datetime?: Date;
    name?: string;
    email?: string;
    type?: string;
    otp_counter?: number;
    verification_datetime?: Date;
    last_login_datetime?: Date;
    groups?: number[];
    user_permissions?: number[];
}

export interface Profile {
    company_name?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone_number?: string;
    reg_number?: string;
    date_of_establishment?: Date;
    company_address?: string;
    proof_of_address?: string;
    profile_picture?: string;
    cac_document?: string;
    id_card?: string;
    nin?: string;
    street?: string;
    country?: string;
    state?: string;
}

export interface Role {
    id?: number;
    name?: string;
    permissions?: RolePermission[];
}

export interface RolePermission {
    module?: string;
    permissions?: PermissionPermission[];
}

export interface PermissionPermission {
    id?: number;
    name?: string;
    codename?: string;
}
