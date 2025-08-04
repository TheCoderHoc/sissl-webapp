import { createContext, useContext } from "react";

export interface CompanyComplianceContextInterface {
    company_name: string;
    reg_number: string;
    date_of_establishment: Date;
    company_address: string;
    nin: string;
    country: string;
    state: string;
    street: string;
    cac_certificate: string;
    proof_of_address: string;
    government_id: string;
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
