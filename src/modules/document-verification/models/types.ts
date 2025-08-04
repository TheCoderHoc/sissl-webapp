export interface DocumentVerificationRequest {
  document_type: string;
  issuance_date: string;
  document_number: string;
  document_file: string;
}

export interface DocumentVerificationItem {
  id: string;
  document_type: string;
  issuance_date: string;
  document_number: string;
  document_file: string;
  status: "FAILED" | "PASSED";
  created_datetime: string;

  creator: {
    id: string;
    first_name?: string;
    last_name?: string;
    email: string;
    type: string;
  };
}
export interface SingleDocumentVerificationItem {
  status: boolean;
  message: string;
  data: DocumentVerificationItem;
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
    results: DocumentVerificationItem[];
  };
}
