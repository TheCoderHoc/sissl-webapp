"use client";

import { useState } from "react";
import UploadIdForm from "./UploadIdForm";
import UploadSelfieForm from "./UploadSelfieForm";
import NinForm from "./NinForm";

const TABS = ["Upload ID", "Upload Selfie", "NIN"];

export default function CheckTabs() {
  const [activeTab, setActiveTab] = useState("Upload ID");

  return (
    <div className="text-white">
      <h2 className="text-lg font-medium mb-4">Run New Fraud Check</h2>
      <div className="flex gap-4 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200
              ${
                activeTab === tab
                  ? "bg-[#FFF9C4] text-black shadow-md"
                  : "bg-white text-black/60"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Upload ID" && <UploadIdForm />}
      {activeTab === "Upload Selfie" && <UploadSelfieForm />}
      {activeTab === "NIN" && <NinForm />}
    </div>
  );
}
