export type FormContext = {
  first_name: string;
  last_name: string;
  email: string;
  id_type: string;
  id_number: string;
  id_image: string;
  date_of_birth: string;
  country_id: string;
};

export interface IdentityVerificationResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  id_type: string;
  id_number: string;
  id_image: string;
  date_of_birth: string;
  country_id: string;
  status: "VERIFIED" | "FAILED";
  created_datetime: string;
  creator: {
    id: string;
    name: string | null;
    email: string;
    type: string;
  };
}
export interface IdentityVerificationPayload {
  first_name: string;
  last_name: string;
  email: string;
  id_type: string;
  id_number: string;
  id_image: string;
  date_of_birth: string;
  country_id: string;
}

export interface SingleIdentityVerificationItem {
  status: boolean;
  message: string;
  data: IdentityVerificationItem;
}

export interface IdentityVerificationItem {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  id_type: string;
  id_number: string;
  id_image: string;
  date_of_birth: string;
  country_id: string;
  status: "VERIFIED" | "FAILED";
  created_datetime: string;
  creator: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    email: string;
    type: string;
  };
}

export interface IdentityVerificationPaginator {
  count: number;
  page: number;
  page_size: number;
  total_pages: number;
  next_page_number: number;
  next: string | null;
  previous: string | null;
  previous_page_number: number;
}

export interface IdentityVerificationPaginatedResponse {
  status: boolean;
  message: string;
  data: {
    paginator: IdentityVerificationPaginator;
    results: IdentityVerificationItem[];
  };
}

export type VerificationRow = {
  customer_name: string;
  id_type: string;
  id_number: string;
  submittedBy: string;
  created_date: string;
  status: string;
};
