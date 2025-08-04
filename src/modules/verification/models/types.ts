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

export interface DocumentVerificationRequest {
  document_type: string;
  issuance_date: string;
  document_number: string;
  document_file: string;
}

export interface DocumentVerificationResponse {
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
