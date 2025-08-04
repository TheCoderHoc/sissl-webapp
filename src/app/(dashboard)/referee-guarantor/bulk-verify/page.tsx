"use client";

import { useState } from "react";
import { DownloadArea } from "@/components/shared/DownloadUploadArea";
import { useRouter } from "next/navigation";
import UploadArea from "@/components/shared/UploadArea";
import useStaffDocumentBulkUploadController from "@/modules/staff-verification/controllers/staffDocumentBulkUpload";
import useGetStaffTemplate from "@/modules/staff-verification/controllers/useGetStaffTemplate";

export default function VerifyUserForm() {
    const [showUploadSection, setShowUploadSection] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const { uploadStaffDocumentBulk, isLoading } =
        useStaffDocumentBulkUploadController();
    const router = useRouter();

    const downloadTemplateQuery = useGetStaffTemplate({ enabled: false });

    const handleContinue = () => {
        setShowUploadSection(true);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log("yes");

            setSelectedFile(file);
        }
    };

    const handleSubmit = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            await uploadStaffDocumentBulk(formData);
            // add redirect or toast here
        } catch (error) {
            console.error("Upload failed:", error);
        }
    };

    return (
        <div className="bg-black text-white px-6 py-12 mt-8 mx-auto rounded-xl">
            {/* Header */}
            <div className="mb-10 px-16">
                <p className="text-sm text-gray-400 mb-2">User details</p>
                <h1 className="text-2xl font-semibold mb-3">
                    Download template
                </h1>
                <p className="text-gray-400 text-sm max-w-md">
                    Ensure every detail provided is the same as the information
                    on the means of identification being provided
                </p>
            </div>

            {/* Conditionally render Download or Upload */}
            <div className="px-16">
                {!showUploadSection ? (
                    <DownloadArea
                        className="w-[50%]"
                        downloadQuery={downloadTemplateQuery}
                        filename="Staff_template.csv"
                    />
                ) : (
                    <UploadArea
                        label="Upload document"
                        shouldUploadFile={false}
                        className="w-[50%]"
                        onChange={handleFileChange}
                    />
                )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between gap-12 mt-12 px-16">
                <button
                    onClick={() => router.back()}
                    className="w-[50%] border-[0.5px] px-8 py-3 rounded-lg"
                >
                    Back
                </button>

                {!showUploadSection ? (
                    <button
                        onClick={handleContinue}
                        className="w-[50%] bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-3 rounded-lg shadow-md"
                    >
                        Continue
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        className="w-[50%] bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-3 rounded-lg shadow-md"
                        disabled={isLoading}
                    >
                        {isLoading ? "Uploading..." : "Submit"}
                    </button>
                )}
            </div>
        </div>
    );
}
