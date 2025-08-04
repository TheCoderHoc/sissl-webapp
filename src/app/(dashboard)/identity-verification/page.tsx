"use client";
import { useState } from "react";
import DashboardHeading from "@/components/shared/DashboardHeading";
import IdentityCenterIntro from "@/components/shared/VerificationsOptions";
import { DataTable } from "@/components/shared/DataTable";
import { useRouter } from "next/navigation";
import { IDENTITY_VERIFICATION_ROUTES } from "@/constants/routes";
import Loading from "@/app/loading";
import useGetIdentityVerifications from "@/modules/identity-verification/controllers/getIdentityVerificationsController";
import { transformVerificationData } from "@/modules/identity-verification/lib/transformVerificationData";
import { identityVerificationColumns } from "@/modules/identity-verification/columns/IdentityTable";
import TableHeaderWithSearch from "@/components/shared/TableSearch";

export default function IdentityVerification() {
    const { data, isLoading } = useGetIdentityVerifications();

    const router = useRouter();

    const [search, setSearch] = useState("");
    const transformedData = data
        ? transformVerificationData(data.data.results)
        : [];
    const filteredData = transformedData.filter((item) =>
        item.customer_name.toLowerCase().includes(search.toLowerCase())
    );

    const handleActionClick = (id?: string) => {
        if (id) {
            router.push(`/identity-verification/${id}`);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6">
            <DashboardHeading text=" Welcome to SISSL Identity Verification Service. We provide tools to verify ID cards  either manually or through bulk upload" />

            <IdentityCenterIntro
                title="Identity Verification Center"
                description="Validate user identity cards, including NIN, PVC, and Driver’s License"
                primaryButtonText="Add new user"
                onPrimaryClick={() =>
                    router.push(IDENTITY_VERIFICATION_ROUTES.VERIFY_USER)
                }
                onSecondaryClick={() =>
                    router.push(IDENTITY_VERIFICATION_ROUTES.BULK_VERIFY)
                }
            />

            <TableHeaderWithSearch
                title="Verification table"
                search={search}
                setSearch={setSearch}
            />

            <div className="overflow-x-auto border rounded-md">
                {isLoading ? (
                    <Loading />
                ) : (
                    <DataTable
                        columns={identityVerificationColumns(handleActionClick)}
                        data={filteredData}
                    />
                )}
            </div>
        </div>
    );
}
