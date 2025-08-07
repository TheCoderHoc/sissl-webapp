import { createContext, useContext } from "react";

export interface CompanyComplianceContextInterface {
  name: string;
  registration_number: string;
  date_of_establishment: Date;
  address: string;
  nin: string;
  country: string;
  state: string;
  street: string;
}

interface CompanyComplianceContextType {
  data: CompanyComplianceContextInterface;
  setData: React.Dispatch<
    React.SetStateAction<CompanyComplianceContextInterface>
  >;
}

export const CompanyComplianceContext = createContext<
  CompanyComplianceContextType | undefined
>(undefined);

export function useCompanyComplianceData() {
  const context = useContext(CompanyComplianceContext);

  if (!context) {
    throw new Error("CompanyComplianceContext is undefined");
  }

  return context;
}
