export interface RequestedBy {
  firstName: string;
  lastName: string;
  middleName: string;
  id: string;
}

export interface IVerification {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  image: string;
}

export interface IdentityData {
  id: string;
  parentId: string | null;
  status: string;
  reason: string | null;
  dataValidation: boolean;
  selfieValidation: boolean;
  firstName: string;
  middleName: string | null;
  lastName: string;
  image: string;
  enrollmentBranch: string | null;
  enrollmentInstitution: string | null;
  mobile: string;
  dateOfBirth: string; // ISO string
  isConsent: boolean;
  idNumber: string;
  nin: string;
  shouldRetrivedNin: boolean;
  businessId: string;
  type: string;
  allValidationPassed: boolean;
  gender: string;
  requestedAt: string; // ISO string
  requestedById: string;
  country: string;
  createdAt: string; // ISO string
  lastModifiedAt: string; // ISO string
  adverseMediaReport: any; // You can replace `any` with a specific type if you know the structure
  amlReport: any; // Same here
  metadata: Record<string, any>;
  requestedBy: RequestedBy;
}
