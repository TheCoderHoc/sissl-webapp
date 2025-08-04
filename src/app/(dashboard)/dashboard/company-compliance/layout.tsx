"use client";
import GreetUser from "@/components/shared/GreetUser";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import {
    CompanyComplianceContext,
    CompanyComplianceContextInterface,
} from "@/modules/dashboard/context/company-compliance";
import { usePathname } from "next/navigation";
import { useState } from "react";

const defaultComplianceData: CompanyComplianceContextInterface = {
    company_name: "",
    reg_number: "",
    date_of_establishment: new Date(),
    company_address: "",
    nin: "",
    country: "",
    state: "",
    street: "",
    cac_certificate: "",
    proof_of_address: "",
    government_id: "",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<CompanyComplianceContextInterface>(
        defaultComplianceData
    );

    const pathname = usePathname();

    const showMessage = pathname === DASHBOARD_ROUTES.COMPANY_COMPLIANCE_STATUS;

    return (
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
                <GreetUser />

                {!showMessage && (
                    <h3>
                        Get started by verifying your company to enjoy the full
                        services of SISSL.
                    </h3>
                )}

                <CompanyComplianceContext.Provider value={{ data, setData }}>
                    <div className="max-w-5xl w-full  px-4 sm:px-6 lg:px-8 pt-16 pl-12 ">
                        {children}
                    </div>
                </CompanyComplianceContext.Provider>
            </div>
        </div>
    );
}
