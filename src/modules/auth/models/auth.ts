export interface IRegister {
  first_name: string;
  company_name: string;
  last_name: string;
  email: string;
  password: string;
  account_type: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  is_first_login: boolean;
  is_verified: boolean;
  is_onboarding_completed: boolean;
}

export interface SignupResponse {
  status: boolean;
  message: string;
}

export interface IVerifyOtp {
  email: string;
  otp: string;
}

export interface VerifyResponse {
  status: boolean;
  message: string;
}
export interface ResetVerifyResponse {
  token: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ForgotPasswordResponse {
  status: boolean;
  message: string;
}

export interface ResetPasswordPayload {
  email: string;
  token: string;
  password: string;
}

export interface ResetPasswordResponse {
  status: boolean;
  message: string;
}

export interface ILoginResponseData {
  access_token: string;
  is_verified: boolean;
  is_onboarding_completed: boolean;
  is_company: boolean;
}

export interface IUser {
  id: string;
  role: IRole;
  profile: IProfile;
  is_onboarding_completed: boolean;
  first_name: string;
  last_name: string;
  is_active: boolean;
  created_datetime: string;
  updated_datetime: string;
  name: string | null;
  email: string;
  type: "COMPANY" | "INDIVIDUAL";
  company: ICompany;
  otp_counter: number;
  verification_datetime: string;
  last_login_datetime: string;
  groups: number[];
  user_permissions: [];
  phone_number: string;
}
interface ICompany {
  name: string;
  reg_number: string | null;
  date_of_establishment: string | null;
  company_address: string | null;
  proof_of_address: string | null;
  cac_document: string | null;
}

interface IRole {
  id: string;
  name: string;
  permissions: [];
}

export interface IProfile {
  company_name: null;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  reg_number: string;
  date_of_establishment: string;
  company_address: string;
  proof_of_address: string;
  profile_picture: string;
  cac_document: string;
  id_card: string;
  nin: string;
  street: string;
  country: string;
  state: string;
}
export interface UserDataProps {
  userData: IUser | null;
  to: string;
}

export interface ApiResponse {
  status: boolean;
  message: string;
  data: ILoginResponseData;
}

export interface Role {
  id: number;
  name: string;
  permissions: ModulePermission[];
}

export interface ModulePermission {
  module: string;
  permissions: Permission[];
}

export interface Permission {
  id: number;
  name: string;
  codename: string;
}

export interface UserProfileResponse {
  status: boolean;
  message: string;
  data: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    account_type: "INDIVIDUAL" | "COMPANY";
    company_name: string;
    company: {
      name: string;
      reg_number: string;
      date_of_establishment: string;
      company_address: string;
      proof_of_address: string;
      cac_document: string;
    };
    profile: {
      phone_number: string;
      profile_picture: string;
      nin: string;
      street: string;
      country: string;
      state: string;
    };
  };
}

export interface UserProfile {
  name: string;
  email: string;
  phone_number: string;
  country: string;
  state: string;
  city: string;
  address: string;
  profile_picture: string;
  id_type:
    | "NATIONAL_ID_CARD"
    | "DRIVER_LICENSE"
    | "INTERNATIONAL_PASSPORT"
    | "VOTER_CARD"; // Add other possible values as needed
  id_number: string;
  gender: "MALE" | "FEMALE" | "OTHER"; // Adjust to reflect full gender options
  date_of_birth: string;
}

export interface UserProfileRequest {
  name: string;
  email: string;
  phone_number: string;
  country: string;
  state: string;
  city: string;
  address: string;
  profile_picture: string;
  id_type: "NATIONAL_ID_CARD" | "DRIVER_LICENSE" | "PASSPORT"; // Add more as needed
  id_number: string;
  gender: "MALE" | "FEMALE" | "OTHER"; // Extend if needed
  date_of_birth: string; // ISO 8601 format: YYYY-MM-DD
}

export interface UserItem {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  account_type: "INDIVIDUAL" | "COMPANY";
  is_onboarding_completed: boolean;
  is_company: boolean;
  company_name?: string;
}

export interface UserPaginator {
  count: number;
  page: number;
  page_size: number;
  total_pages: number;
  next_page_number: number | null;
  next: string | null;
  previous: string | null;
  previous_page_number: number | null;
}

export interface UserPaginatedResponse {
  status: boolean;
  message: string;
  data: {
    paginator: UserPaginator;
    results: UserItem[];
  };
}
