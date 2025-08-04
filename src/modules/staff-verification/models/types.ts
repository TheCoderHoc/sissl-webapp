export interface StaffVerificationPayload {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  id_type: string;
  id_number: string;
  date_of_birth: string;
  verification_method: string[];
  guarantors?: {
    name: string;
    phone_number: string;
    email: string;
    id_type: string;
    id_number: string;
    verification_method: string[];
  }[];
}

export interface StaffVerificationResponse {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  id_type: string;
  id_number: string;
  date_of_birth: string;
  verification_method: string[];
  phone_status: string;
  sissl_code: string;
  status: string;
  guarantors: {
    id: string;
    name: string;
    phone_number: string;
    email: string;
    id_type: string;
    id_number: string;
    verification_method: string[];
  }[];
}

//////

export interface StaffVerificationPaginatedResponse {
  status: boolean;
  message: string;
  data: {
    paginator: StaffVerificationPaginator;
    results: StaffVerificationItem[];
  };
}

export interface StaffVerificationPaginator {
  count: number;
  page: number;
  page_size: number;
  total_pages: number;
  next_page_number: number | null;
  next: string | null;
  previous: string | null;
  previous_page_number: number | null;
}

export interface StaffVerificationItem {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  id_type: string;
  id_number: string;
  date_of_birth: string;
  guarantors: Guarantor[];
  verification_method: string[];
  phone_status: string;
  sissl_code: string;
  status: string;
}

export interface Guarantor {
  id: string;
  name: string;
  phone_number: string;
  email: string;
  id_type: string;
  id_number: string;
  verification_method: string[];
}

export type StaffVerificationRow = {
  staff_name: string;
  id_type: string;
  id_number: string;
  submitted_by: string;
  created_date: string;
  status: string;
};

export type VerificationRow = {
  id?: string;
  staff_name: string;
  phone_number: string;
  verification_type: string;
  bvn: string;
  phone: string;
  ID: string;
  status: string;
};
