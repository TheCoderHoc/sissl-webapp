"use client";

import UploadArea from "@/components/shared/UploadArea";
import { useScreeningFormStore } from "@/stores/useScreeningFormStore";
import { useRouter } from "next/navigation";

export default function UploadIDForm() {
  const { data, updateField } = useScreeningFormStore();
  const router = useRouter();

  const handleSubmit = () => {
    const payload = {
      idUpload: data.idUpload?.[0]?.name || "No file",
      selfieUpload: data.selfieUpload?.[0]?.name || "No file",
      ninUpload: data.ninUpload?.[0]?.name || "No file",
      idNumber: data.idNumber,
    };
    console.log("Submitting full form payload:", payload);
  };

  return (
    <div className="space-y-10">
      <div>
        <p className="text-sm mb-2">Upload Government ID</p>
        <UploadArea
          name="idUpload"
          onChange={(e) => updateField("idUpload", e.target.files)}
        />
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={() => router.back()} className="bg-transparent text-white border border-white/20 rounded-lg px-6 py-2">
          Back
        </button>
        <button
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-medium rounded-lg px-8 py-2"
          onClick={handleSubmit}
        >
          Screen ID
        </button>
      </div>
    </div>
  );
}
