

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UploadIDForm from "@/modules/fraud-risk-intelligence/components/UploadIdForm";
import UploadSelfieForm from "@/modules/fraud-risk-intelligence/components/UploadSelfieForm";
import NinForm from "@/modules/fraud-risk-intelligence/components/NinForm";
const tabs = ["Upload ID", "Upload Selfie", "NIN"];
export default function RunNewCheckPage() {
  const [activeTab, setActiveTab] = useState("Upload ID");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Upload ID":
        return <UploadIDForm />;
      case "Upload Selfie":
        return <UploadSelfieForm />;
      case "NIN":
        return <NinForm onFinalSubmit={handleFinalSubmit} />;
      default:
        return null;
    }
  };

  const handleFinalSubmit = (payload: any) => {
    console.log("Sending data to API", payload);
    // optional: redirect or reset store
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-xl font-bold mb-6">Run New Fraud Check</h1>

      <div className="flex space-x-4 mb-8 border-b border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-2 border-b-2 transition-all duration-200 ease-in-out ${
              activeTab === tab ? "border-yellow-400 text-white" : "border-transparent text-white/60 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
