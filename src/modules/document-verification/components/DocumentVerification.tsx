"use client";

import { useState } from "react";
import { X, Upload } from "lucide-react";
import Image from "next/image";
import { verifyTop } from "../../../../public/icons";

interface Props {
    setShowModal: (value: boolean) => void;
}

const LABEL_MAP: Record<string, string> = {
    utilityBill: "Utility Bill",
    cacCertificate: "CAC Certificate",
    tin: "TIN",
    bankStatement: "Bank Statement",
    payslip: "Payslip",
};

export default function VerifyUserForm({ setShowModal }: Props) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        files: {} as Record<string, File | null>,
        services: {
            utilityBill: false,
            cacCertificate: false,
            tin: false,
            bankStatement: false,
            payslip: false,
        },
    });

    const [step, setStep] = useState<"form" | "upload">("form");

    const handleCheckboxChange = (key: keyof typeof formData.services) => {
        setFormData((prev) => ({
            ...prev,
            services: {
                ...prev.services,
                [key]: !prev.services[key],
            },
        }));
    };

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: string
    ) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({
            ...prev,
            files: {
                ...prev.files,
                [key]: file,
            },
        }));
    };

    const selectedServices = Object.entries(formData.services)
        .filter(([, value]) => value)
        .map(([key]) => key);

    const canContinue = selectedServices.length > 0;

    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="relative bg-white w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] h-[90%] px-6 lg:px-16 xl:px-20 py-20 rounded-xl overflow-y-auto scrollbar-hide">
                <Image
                    className="absolute left-10 top-[50px]"
                    src={verifyTop.src}
                    alt="pop"
                    width={1000}
                    height={1000}
                />
                <h1 className="absolute left-18 top-7 text-[24px] font-medium mb-6">
                    Verify Document
                </h1>
                <p className="absolute left-18 top-[60px] opacity-50 text-[14px]">
                    Plan your next secure event
                </p>

                <button
                    onClick={() => setShowModal(false)}
                    className="absolute right-10 top-10 text-gray-400 hover:text-gray-600"
                >
                    <X />
                </button>
                <hr className="absolute left-0 top-[92px] w-full border-t border-gray-200" />

                {step === "form" ? (
                    <form className="space-y-6 text-gray-700 mt-16">
                        <div>
                            <label className="block text-sm mb-1">
                                Full name
                            </label>
                            <input
                                className="w-full border rounded px-3 py-2 text-sm"
                                placeholder="Eg. Security Summit"
                                value={formData.fullName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        fullName: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="w-full border rounded px-3 py-2 text-sm"
                                placeholder="Eg. example@email.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">
                                Phone number
                            </label>
                            <input
                                type="tel"
                                className="w-full border rounded px-3 py-2 text-sm"
                                placeholder="Eg. 08012345678"
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        phone: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                ID Type
                            </label>
                            <div className="bg-gray-50 border rounded-md divide-y">
                                {(
                                    [
                                        {
                                            label: "Utility Bill",
                                            key: "utilityBill",
                                        },
                                        {
                                            label: "CAC Certificate",
                                            key: "cacCertificate",
                                        },
                                        { label: "TIN", key: "tin" },
                                        {
                                            label: "Bank Statement",
                                            key: "bankStatement",
                                        },
                                        { label: "Payslip", key: "payslip" },
                                    ] as const
                                ).map((item) => (
                                    <div
                                        key={item.key}
                                        className="flex items-center justify-between px-4 py-3"
                                    >
                                        <span className="text-sm">
                                            {item.label}
                                        </span>
                                        <input
                                            type="checkbox"
                                            checked={
                                                formData.services[item.key]
                                            }
                                            onChange={() =>
                                                handleCheckboxChange(item.key)
                                            }
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between pt-6">
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                                Save as draft
                            </button>
                            <div className="space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep("upload")}
                                    disabled={!canContinue}
                                    className={`px-6 py-2 text-white rounded-md text-sm ${
                                        canContinue
                                            ? "bg-blue-600 hover:bg-blue-700"
                                            : "bg-gray-300 cursor-not-allowed"
                                    }`}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </form>
                ) : (
                    <div className="mt-24 space-y-8">
                        {selectedServices.map((key) => (
                            <div key={key} className="space-y-2">
                                <p className="text-sm text-gray-600 font-medium">
                                    <strong>{LABEL_MAP[key]}</strong>
                                </p>
                                <div className="flex justify-center items-center">
                                    <label
                                        htmlFor={`file-upload-${key}`}
                                        className="w-[90%] min-h-[180px] border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-center p-8 cursor-pointer"
                                    >
                                        <Upload className="text-gray-400 mb-2" />
                                        <>
                                            <p className="cursor-pointer">
                                                <span className="text-blue-600 font-medium">
                                                    Click to upload{" "}
                                                </span>{" "}
                                                or Drag & Drop
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                xls, csv files less than 5MB.{" "}
                                                <br /> Please ensure your
                                                document contains important
                                                information
                                            </p>
                                        </>
                                        <input
                                            id={`file-upload-${key}`}
                                            type="file"
                                            onChange={(e) =>
                                                handleFileChange(e, key)
                                            }
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-end">
                            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                                Submit Document
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
