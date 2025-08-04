"use client";

import { useState } from "react";
import { X } from "lucide-react";

type TabKey = "user" | "documents" | "status";

type Props = {
  setShowModal: (value: boolean) => void;
};

const DocumentDetailsTabs = ({ setShowModal }: Props) => {
  const [tab, setTab] = useState<TabKey>("user");

  const user = {
    name: "Adebayo David",
    status: "Under review",
    phoneNumber: "0706810912",
    department: "Finance",
    email: "Olavid3@gmail.com",
    submittedBy: "Admin",
    submissionType: "manual",
    submittedDate: "29 May 2025",
    documents: [
      { label: "Utility Bill", path: "/path-to-utility-bill.png" },
      { label: "CAC Certificate", path: "/path-to-cac-certificate.png" },
      { label: "TIN", path: "/path-to-tin.png" },
    ],
    verification: {
      verifiedBy: "SISSL system",
      timestamp: "May 30, 2025 — 2:44PM",
      validity: "Valid",
      matchScore: "80%",
      comment: "Address verified via NEPA database. Matches user profile.",
    },
    biometric: {
      faceMatchScore: "98.4%",
      comparedAgainst: "NIN Card",
    },
  };

  const tabs: { label: string; key: TabKey }[] = [
    { label: "User Information", key: "user" },
    { label: "Document Preview", key: "documents" },
    { label: "Verification Status Breakdown", key: "status" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] bg-white rounded-xl py-12 px-6 lg:px-12 max-h-[90vh] overflow-y-auto scrollbar-hide">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
        >
          <X />
        </button>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-gray-800">{user.name}</h1>
          <span className="bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full text-sm">
            {user.status}
          </span>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-6 text-sm font-medium">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`pb-2 border-b-2 transition-all duration-200 ${
                  tab === t.key
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {tab === "user" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border rounded-lg p-4">
              <div>
                <p className="text-sm text-gray-400">Full Name</p>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone Number</p>
                <p className="font-medium">{user.phoneNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Department</p>
                <p className="font-medium">{user.department}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border rounded-lg p-4">
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Submitted by</p>
                <p>{user.submittedBy}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Submission Type</p>
                <p>{user.submissionType}</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-400">Submitted on</p>
              <p>{user.submittedDate}</p>
            </div>
          </div>
        )}

        {tab === "documents" && (
          <div className="space-y-6">
            {user.documents.map((doc, i) => (
              <div key={i} className="border rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-2">{doc.label}</p>
                <div className="w-full h-[120px] bg-gray-100 flex items-center justify-center text-blue-600 text-sm rounded-md cursor-pointer">
                  Click to preview
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "status" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-lg p-4">
              <div>
                <p className="text-sm text-gray-400">Verified By</p>
                <p className="font-medium">{user.verification.verifiedBy}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Verification Timestamp</p>
                <p className="font-medium">{user.verification.timestamp}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-lg p-4">
              <div>
                <p className="text-sm text-gray-400">Document Validity:</p>
                <p className="font-medium">{user.verification.validity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Match Confidence Score</p>
                <p className="font-medium">{user.verification.matchScore}</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Comment</p>
              <p className="text-sm font-medium">
                “{user.verification.comment}”
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentDetailsTabs;
