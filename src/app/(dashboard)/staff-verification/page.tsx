"use client";

import DashboardHeading from "@/components/shared/DashboardHeading";
import { DataTable } from "@/components/shared/DataTable";
import IdentityCenterIntro from "@/components/shared/VerificationsOptions";
import { STAFF_VERIFICATION_ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "@/app/loading";
import useGetStaffVerifications from "@/modules/staff-verification/controllers/getStaffVerificationsController";
import { transformStaffVerificationData } from "@/modules/staff-verification/lib/transformStaffData";
import TableHeaderWithSearch from "@/components/shared/TableSearch";
import { StaffVerificationColumns } from "@/modules/staff-verification/columns/StaffTable";
export default function StaffVerification() {
    const { data, isLoading } = useGetStaffVerifications();
    const router = useRouter();
    const [search, setSearch] = useState("");

    const transformedData = data?.data
        ? transformStaffVerificationData(data.data.results)
        : [];

    const filteredData = transformedData.filter((item) =>
        item.staff_name.toLowerCase().includes(search.toLowerCase())
    );

    const handleActionClick = (id?: string) => {
        if (id) {
            router.push(`/staff-verification/${id}`);
        }
    };

    const handleActionClick2 = (id?: string) => {
        if (id) {
            router.push(`/referee-guarantor/add-guarantor-form?staff=${id}`);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6 ">
            <DashboardHeading text="Welcome to SISSL Identity Verification Service. We provide tools to help you verify your staff" />

            <IdentityCenterIntro
                title="Staff verification"
                description="Easily verify your staff."
                primaryButtonText="Add new staff"
                onPrimaryClick={() =>
                    router.push(STAFF_VERIFICATION_ROUTES.VERIFY_STAFF)
                }
                onSecondaryClick={() =>
                    router.push(STAFF_VERIFICATION_ROUTES.BULK_VERIFY)
                }
            />

            <TableHeaderWithSearch
                title="Verification history table"
                search={search}
                setSearch={setSearch}
            />
            <div className="overflow-x-auto border rounded-md">
                {isLoading ? (
                    <Loading />
                ) : (
                    <DataTable
                        columns={StaffVerificationColumns(
                            handleActionClick2,
                            handleActionClick
                        )}
                        data={filteredData}
                    />
                )}
            </div>
        </div>
    );
}
