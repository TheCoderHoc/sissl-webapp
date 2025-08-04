"use client";

import DashboardHeading from "@/components/shared/DashboardHeading";
import { DataTable } from "@/components/shared/DataTable";
import IdentityCenterIntro from "@/components/shared/VerificationsOptions";
import { REFEREE_GUARANTOR_ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "@/app/loading";
import useGetStaffVerifications from "@/modules/staff-verification/controllers/getStaffVerificationsController";
import { transformRGVerificationData } from "@/modules/referee-guarantor-verification/lib/transformRG";
import TableHeaderWithSearch from "@/components/shared/TableSearch";
import { RGVerificationColumns } from "@/modules/referee-guarantor-verification/columns/RGTable";

export default function RGVerification() {
    const { data, isLoading } = useGetStaffVerifications();

    const router = useRouter();
    const [search, setSearch] = useState("");

    const transformedData = data?.data
        ? transformRGVerificationData(data.data.results)
        : [];

    const filteredData = transformedData.filter((item) =>
        item.staff_name.toLowerCase().includes(search.toLowerCase())
    );
    const handleActionClick = (id?: string) => {
        if (id) {
            router.push(`/referee-guarantor/${id}`);
        }
    };

    const handleActionClick2 = (id?: string) => {
        if (id) {
            router.push(`/referee-guarantor/add-guarantor-form?staff=${id}`);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6 ">
            <DashboardHeading text="Welcome to SISSL Identity Verification Service. We provide tools to help you verify your staff referee" />

            <IdentityCenterIntro
                title="Referee Verification"
                description="Validate your staff referee"
                primaryButtonText="Add new staff"
                onPrimaryClick={() =>
                    router.push(REFEREE_GUARANTOR_ROUTES.VERIFY_RG)
                }
                onSecondaryClick={() =>
                    router.push(REFEREE_GUARANTOR_ROUTES.BULK_VERIFY)
                }
            />

            <TableHeaderWithSearch
                title="Verification history table"
                search={search}
                setSearch={setSearch}
            />

            {isLoading ? (
                <Loading />
            ) : (
                <DataTable
                    columns={RGVerificationColumns(
                        handleActionClick2,
                        handleActionClick
                    )}
                    data={filteredData}
                />
            )}
        </div>
    );
}
