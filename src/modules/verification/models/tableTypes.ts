// export interface DocumentVerification {
//   id: string;
//   creator: string;
//   document_type: string;
//   issuance_date: string;
//   document_number: string;
//   document_file: string;
// }
export interface DocumentVerification {
  id: string;
  document_type: string;
  issuance_date: string;
  document_number: string;
  document_file: string;
  status: "FAILED" | "PASSED";
  created_datetime: string;

  creator: {
    id: string;
    name?: string;
    email: string;
    type: string;
  };
}

export interface DocumentVerificationPaginator {
  count: number;
  page: number;
  page_size: number;
  total_pages: number;
  next_page_number: number | null;
  next: string | null;
  previous: string | null;
  previous_page_number: number | null;
}

export interface DocumentVerificationResponse {
  status: boolean;
  message: string;
  data: {
    paginator: DocumentVerificationPaginator;
    results: DocumentVerification[];
  };
}

// export interface IdentityVerificationItem {
//   id: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   id_type: string;
//   id_number: string;
//   id_image: string;
//   date_of_birth: string;
//   country_id: string;
//   status: "VERIFIED" | "FAILED";
// }
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
    name: string | null;
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
