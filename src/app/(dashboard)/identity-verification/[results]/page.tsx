"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { formatDate } from "@/utils/formatDate";
import Loading from "@/app/loading";
import { cn } from "@/lib/utils";
import { SingleIdentityVerificationItem } from "@/modules/identity-verification/models/types";
import useGetSingleIdentityVerification from "@/modules/identity-verification/controllers/getSingleIdentityVerificationsController";
import PreviewCard from "@/modules/document-verification/components/PreviewCard";

type Result = SingleIdentityVerificationItem["data"];

const statusColorMap = {
    Passed: "bg-green-700 text-white",
    Valid: "bg-green-700 text-white",
    Failed: "bg-red-700 text-white",
    Pending: "bg-yellow-400 text-black",
};

export default function ResultPage() {
    const pathname = usePathname();
    const id = pathname.split("/").pop() || "";
    const [verificationData, setVerificationData] = useState<Result | null>(
        null
    );

    const { data, isLoading, isError } = useGetSingleIdentityVerification(id);

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
        status: rawStatus,
        first_name,
        last_name,
        creator,
        country_id,
        date_of_birth,
        id_type,
        id_image,
        created_datetime,
    } = verificationData;

    const fullName = `${first_name || ""} ${last_name || ""}`.trim() || "N/A";
    const status = rawStatus === "VERIFIED" ? "Passed" : "Failed";

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 text-white">
            {/* Header */}
            <div className="bg-black rounded-md py-5 px-6 mb-6">
                <p className="text-sm opacity-60 mb-1">Account owner</p>
                <h1 className="text-2xl font-medium">{fullName}</h1>
            </div>

            {/* Content Rows */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Column */}
                <div className="w-full max-w-md lg:max-w-[500px] mx-auto">
                    <h2 className="text-white text-base font-medium mb-12">
                        Provided data
                    </h2>

                    <PreviewCard
                        src={id_image}
                        fallbackText="Document Uploaded"
                        className="mx-auto mb-14"
                    />

                    <hr className="mb-8" />

                    <div className="grid grid-cols-1 gap-y-5 w-[90%] mx-auto text-sm text-white">
                        {[
                            ["Full name", fullName],
                            ["Email address", creator?.email || "N/A"],
                            ["Country ID", country_id || "N/A"],
                            [
                                "Date of Birth",
                                date_of_birth
                                    ? formatDate(date_of_birth)
                                    : "N/A",
                            ],
                            ["ID type", id_type || "N/A"],
                            [
                                "Issuance Date",
                                created_datetime
                                    ? formatDate(created_datetime)
                                    : "N/A",
                            ],
                        ].map(([label, value]) => (
                            <div key={label} className="grid grid-cols-2 gap-4">
                                <p className="text-gray-400 mb-1">{label}</p>
                                <p>{value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full max-w-md lg:max-w-[500px] mx-auto">
                    <h2 className="text-green-500 text-base font-medium mb-4">
                        Result displayed
                    </h2>

                    <div className="w-[90%] bg-black rounded-2xl flex flex-col justify-center py-8">
                        <div className="mb-8 flex w-[58%] px-8 justify-between items-center">
                            <p className="text-sm text-gray-400 mb-1">Status</p>
                            <span
                                className={cn(
                                    "px-4 py-1 rounded-full text-sm font-medium w-[104px] h-[30px] text-center opacity-80",
                                    statusColorMap[status]
                                )}
                            >
                                {status}
                            </span>
                        </div>

                        <hr />

                        {/* Match Score — optional */}
                        <div className="w-[90%] mb-5 px-8 py-8 flex items-center gap-6">
                            <p className="text-sm text-gray-400 mb-0">
                                Match score
                            </p>
                            <span className="bg-[#1f2937] w-[104px] h-[30px] flex items-center justify-center rounded-full text-sm font-semibold text-white opacity-80">
                                N/A
                            </span>
                            <span className="text-sm text-white">N/A</span>
                        </div>

                        {/* Verified Fields */}
                        <div className="mb-5 px-8 flex justify-between w-[80%]">
                            <p className="text-sm text-white mb-1 opacity-70">
                                Verified fields:
                            </p>
                            <p className="text-sm text-gray-400">N/A</p>
                        </div>

                        <PreviewCard
                            src={id_image}
                            className="mx-auto mb-14"
                            fallbackText="Document Uploaded"
                            preview
                        />

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 px-0 mx-auto mb-8">
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
