"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import { StaffVerificationResponse } from "@/modules/staff-verification/models/types";
import useGetSingleStaffVerification from "@/modules/staff-verification/controllers/getSingleStaffController";
import LabeledRow from "@/modules/document-verification/components/LabelRow";

export default function StaffVerificationResults() {
    const pathname = usePathname();
    const id = pathname.split("/").pop() || "";
    const [verificationData, setVerificationData] =
        useState<StaffVerificationResponse | null>(null);

    const { data, isLoading, isError } = useGetSingleStaffVerification(id);

    useEffect(() => {
        if (data) {
            setVerificationData(data);
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
        first_name,
        last_name,
        phone_number,
        date_of_birth,
        verification_method,
        status,
        guarantors,
    } = verificationData;

    const fullName = `${first_name} ${last_name}`;
    const verificationType = verification_method?.[0] ?? "N/A";

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 text-white">
            {/* Header */}
            <div className="bg-black rounded-md py-5 px-6 mb-6">
                <p className="text-sm opacity-60 mb-1">Staff name</p>
                <h1 className="text-2xl font-medium">{fullName}</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Provided Data Section */}
                <div className="w-full max-w-md lg:max-w-[500px] mx-auto">
                    <h2 className="text-white text-lg font-medium mb-12">
                        Provided data
                    </h2>

                    {/* Guarantor Details Section */}
                    <h1 className="relative left-14 w-[180px] h-[48px] text-center bg-white/60 rounded-3xl py-3 mb-8 mt-12">
                        Guarantor details
                    </h1>

                    <div className="grid grid-cols-1 gap-y-5 w-[90%] mx-auto text-sm text-white">
                        {guarantors?.length > 0 ? (
                            guarantors.map((guarantor, index) => (
                                <div
                                    key={index}
                                    className="grid gap-6 text-sm border-t border-b border-gray-700 py-6"
                                >
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <p className="text-gray-400">
                                                Guarantor name
                                            </p>
                                            <p>{guarantor.name}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <p className="text-gray-400">
                                                Guarantor phone
                                            </p>
                                            <p>{guarantor.phone_number}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <p className="text-gray-400">
                                                Guarantor ID Number
                                            </p>
                                            <p>{guarantor.id_number}</p>
                                        </div>
                                    </>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic text-center">
                                No guarantor provided
                            </p>
                        )}
                        {/* <div className="grid gap-6 text-sm border-t border-b border-gray-700 py-6">
              {guarantors?.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="text-gray-400">Guarantor name</p>
                    <p>{guarantors[0].name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="text-gray-400">Guarantor phone</p>
                    <p>{guarantors[0].phone_number}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="text-gray-400">Guarantor ID Number</p>
                    <p>{guarantors[0].id_number}</p>
                  </div>
                </>
              ) : (
                <p className="text-gray-500 italic text-center">
                  No guarantor provided
                </p>
              )}
            </div> */}
                    </div>
                </div>

                {/* Result Display Section */}
                <div className="w-full max-w-md lg:max-w-[500px] mx-auto">
                    <h2 className="text-green-500 text-base font-medium mb-4">
                        Result displayed
                    </h2>
                    <div className="w-[98%] bg-black rounded-2xl flex flex-col py-8">
                        <LabeledRow label="Status" className="border-y-[0px]">
                            <span
                                className={`px-4 py-1 rounded-full text-sm font-medium w-[104px] h-[30px] text-center opacity-80 text-white ${
                                    status === "VERIFIED"
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                }`}
                            >
                                {status}
                            </span>
                            <span className="bg-[#111928] px-4 py-1 rounded-full text-sm font-medium w-[130px] h-[30px] text-center opacity-80">
                                {verificationType}
                            </span>
                        </LabeledRow>

                        <LabeledRow label="Phone Number">
                            <span className="bg-white/20 px-2 py-1 rounded-full text-sm font-medium w-[130px] h-[30px] text-center opacity-80">
                                {phone_number}
                            </span>
                        </LabeledRow>

                        <LabeledRow label="Full Name" value={fullName} />
                        <LabeledRow
                            label="Date of Birth"
                            value={date_of_birth}
                        />
                        <LabeledRow label="Carrier" value="MTN" />
                        <LabeledRow label="Linked to BVN" value="Yes" />
                        <LabeledRow
                            label="Match with input"
                            value="Exact match"
                        />
                        <LabeledRow label="Score" value="90%" />

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 px-0 mx-auto mt-6 mb-4">
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
