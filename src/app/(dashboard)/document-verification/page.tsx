"use client";

import { useState } from "react";
import DashboardHeading from "@/components/shared/DashboardHeading";
import IdentityCenterIntro from "@/components/shared/VerificationsOptions";
import { DataTable } from "@/components/shared/DataTable";
import { useRouter } from "next/navigation";
import { DOCUMENT_VERIFICATION_ROUTES } from "@/constants/routes";
import Loading from "@/app/loading";
import useGetDocumentVerifications from "@/modules/document-verification/controllers/getDocumentVerificationsController";
import { transformDocumentData } from "@/modules/document-verification/lib/transformDocumentData";
import TableHeaderWithSearch from "@/components/shared/TableSearch";
import { documentColumns } from "@/modules/document-verification/columns/DocumentTable";
import DocumentUploadModal from "@/modules/document-verification/components/DocumentUploadModal";

export default function DocumentVerification() {
    const { data, isLoading } = useGetDocumentVerifications();

    const router = useRouter();

    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const transformedData = data?.data?.results
        ? transformDocumentData(data.data.results)
        : [];

    const filteredData = transformedData.filter(
        (item) =>
            item.document_type.toLowerCase().includes(search.toLowerCase()) ||
            item.submittedBy.toLowerCase().includes(search.toLowerCase()) ||
            item.id.toLowerCase().includes(search.toLowerCase())
    );

    const handleActionClick = (id?: string) => {
        if (id) {
            router.push(`/document-verification/${id}`);
        }
    };

    return (
        <>
            <div className="max-w-7xl mx-auto p-6 ">
                <DashboardHeading text="Welcome to SISSL Identity Verification Service. We provide tools to verify document  either manually or through bulk upload" />

                <IdentityCenterIntro
                    title="Document Verification Center"
                    description="Validate user document cards, including Utility Bill, CAC Certificate etc"
                    primaryButtonText="Add new Document"
                    onPrimaryClick={() => setShowModal(true)}
                    onSecondaryClick={() =>
                        router.push(DOCUMENT_VERIFICATION_ROUTES.BULK_VERIFY)
                    }
                />

                {/* Table Section */}
                <div>
                    <TableHeaderWithSearch
                        title="Verification table"
                        search={search}
                        setSearch={setSearch}
                    />
                    <div className="overflow-x-auto border rounded-md">
                        {/* {isLoading ? (
                            <Loading />
                        ) : (
                            <DataTable
                                columns={documentColumns(handleActionClick)}
                                data={filteredData}
                            />
                        )} */}

                        <DataTable
                            columns={documentColumns(handleActionClick)}
                            data={filteredData}
                        />
                    </div>
                </div>

                {showModal && (
                    <DocumentUploadModal
                        setShowModal={() => setShowModal(!showModal)}
                    />
                )}
            </div>
        </>
    );
}
