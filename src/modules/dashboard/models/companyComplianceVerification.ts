export interface ComplianceVerificationRequest {
  name: string;
  registration_number: string;
  date_of_establishment: Date;
  address: string;
  nin: string;
  country: string;
  state: string;
}

// response body interface below

export interface ComplianceVerificationResponse {
  status?: boolean;
  message?: string;
  data?: Data;
}

export interface Data {
  name: string;
  environment: "LIVE" | "TEST";
  registration_number: string;
  date_of_establishment: string;
  address: string;
  // File fields:
  cac_certificate: File;
  proof_of_address: File;
  government_issued_id: File;
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
