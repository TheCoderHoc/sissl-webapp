"use client";

import UploadArea from "@/components/shared/UploadArea";
import TextInput from "@/components/ui/FormInput2";
import { useScreeningFormStore } from "@/stores/useScreeningFormStore";
import { useRouter } from "next/navigation";
export default function NinForm(props: { onFinalSubmit?: (payload: any) => void }) {
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
    props.onFinalSubmit?.(payload);
  };

  return (
    <div className="space-y-10">
      <div>
        <TextInput
          type="text"
          name="idNumber"
          label="ID Number"
          placeholder="ID Number"
          value={data.idNumber || ""}
          change={(e) => updateField("idNumber", e.target.value)}
           inputClassName="bg-[#000] border border-[#1F2937] text-sm text-gray-300 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4B5563]"
            labelClassName="text-sm text-[#fff] mb-1"
        />
      </div>

      <div>
        <p className="text-sm mb-2">NIN ID</p>
        <UploadArea
          name="ninUpload"
          onChange={(e) => updateField("ninUpload", e.target.files)}
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



