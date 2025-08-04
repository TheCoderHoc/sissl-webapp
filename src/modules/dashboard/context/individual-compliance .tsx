import { createContext, useContext } from "react";

export interface IndividualComplianceContextInterface {
  full_name: string;
  phone_number: string;
  date_of_birth: Date;
  address: string;
  nin: string;
  country: string;
  state: string;
  street: string;
  government_id: string;
  utility_bill: string;
}

interface IndividualComplianceContextType {
  data: IndividualComplianceContextInterface;
  setData: React.Dispatch<React.SetStateAction<IndividualComplianceContextInterface>>;
}

export const IndividualComplianceContext = createContext<
  IndividualComplianceContextType | undefined
>(undefined);

export function useIndividualComplianceData() {
  const context = useContext(IndividualComplianceContext);

  if (!context) {
    throw new Error("IndividualComplianceContext is undefined");
  }

  return context;
}
