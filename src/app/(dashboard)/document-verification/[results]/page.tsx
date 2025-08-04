"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { formatDate } from "@/utils/formatDate";
import Loading from "@/app/loading";
import { cn } from "@/utils/cn";
import { SingleDocumentVerificationItem } from "@/modules/document-verification/models/types";
import useGetSingleDocumentVerification from "@/modules/document-verification/controllers/getSingleDocumentVerificationController";
import PreviewCard from "@/modules/document-verification/components/PreviewCard";
import LabeledRow from "@/modules/document-verification/components/LabelRow";

const statusColorMap: Record<string, string> = {
    Passed: "bg-green-500 text-white",
    Failed: "bg-red-500 text-white",
    Review: "bg-yellow-500 text-black",
};

type Result = SingleDocumentVerificationItem["data"];

export default function DocumentResultPage() {
    const pathname = usePathname();
    const [verificationData, setVerificationData] = useState<Result | null>(
        null
    );
    const id = pathname.split("/").pop() || "";
    const { data, isLoading, isError } = useGetSingleDocumentVerification(id);

    useEffect(() => {
        if (data?.data) {
            setVerificationData(data.data);
        }
    }, [data]);

    if (isLoading) return <Loading />;
    if (isError || !verificationData) {
        return (
            <div className="p-6 text-red-500">
                Verification result not found.
            </div>
        );
    }

    const {
        status,
        document_file,
        document_type,
        issuance_date,
        creator,
        created_datetime,
    } = verificationData;

    const resultStatus = status === "PASSED" ? "Passed" : "Failed";

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 text-white">
            {/* Header */}
            <div className="bg-black rounded-md py-5 px-6 mb-6">
                <p className="text-sm opacity-60 mb-1">Account owner</p>
                <h1 className="text-2xl font-medium">
                    {creator
                        ? `${creator.first_name} ${creator.last_name}`
                        : "N/A"}
                </h1>{" "}
            </div>

            {/* Content Rows */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left: Provided Data */}
                <div className="w-full max-w-md lg:max-w-[500px] mx-auto">
                    <h2 className="text-white text-base font-medium mb-12">
                        Provided data
                    </h2>

                    <PreviewCard
                        src={document_file || ""}
                        fallbackText="Document Uploaded"
                        className="mx-auto mb-14"
                    />

                    <hr className="mb-8" />

                    <div className="grid grid-cols-1 gap-y-5 w-[90%] mx-auto text-sm text-white">
                        <div className="grid grid-cols-2 gap-4">
                            <p className="text-gray-400 mb-1">ID Type</p>
                            <p>{document_type || "N/A"}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <p className="text-gray-400 mb-1">Issuance Date</p>
                            <p>
                                {issuance_date
                                    ? formatDate(issuance_date)
                                    : "N/A"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Result Display */}
                <div className="w-full max-w-md lg:max-w-[500px] mx-auto">
                    <h2 className="text-green-500 text-base font-medium mb-4">
                        Result displayed
                    </h2>

                    <div className="w-[88%] bg-black rounded-2xl flex flex-col py-8">
                        <LabeledRow label="Status" className="border-y-[0px]">
                            <span
                                className={cn(
                                    "px-4 py-1 rounded-full text-sm font-medium w-[104px] h-[30px] text-center opacity-80",
                                    statusColorMap[resultStatus]
                                )}
                            >
                                {resultStatus}
                            </span>
                        </LabeledRow>

                        <LabeledRow label="Confidence score">
                            <span className="bg-[#1f2937] w-[104px] h-[30px] text-center px-4 py-1 rounded-full text-sm font-semibold text-white">
                                {98.2}%
                            </span>
                            <span className="text-sm text-white">N/A</span>
                        </LabeledRow>

                        <LabeledRow label="Issuing identity:" value="N/A" />
                        <LabeledRow
                            label="Date Extracted:"
                            value={
                                created_datetime
                                    ? formatDate(created_datetime)
                                    : "N/A"
                            }
                        />
                        <LabeledRow label="Address Extracted:" value="N/A" />

                        <PreviewCard
                            src={document_file || ""}
                            fallbackText="Document Uploaded"
                            className="mx-auto mb-14"
                            preview
                        />

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 px-0 mx-auto mb-4">
                            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-300">
                                Request document
                            </button>
                            <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-700">
                                Decline
                            </button>
                            <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700">
                                Approve
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
