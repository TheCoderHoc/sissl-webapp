"use client";

import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/shared/FormInput";
import FormSelect from "@/components/shared/FormSelect";
import UploadArea from "@/components/shared/UploadArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingModal } from "@/components/shared/LoadingModal";
import { documentVerificationSchema } from "../lib/validators";
import useDocumentVerificationController from "../controllers/documentVerificationController";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
  setShowModal: (val: boolean) => void;
};

export default function DocumentUploadModal({ setShowModal }: Props) {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(documentVerificationSchema),
    defaultValues: {
      document_type: "",
      issuance_date: "",
      document_number: "",
      document_file: "",
    },
  });
  const [documentUrl, setDocumentUrl] = useState("");
  const { verifyDocument, isLoading } = useDocumentVerificationController();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = await form.trigger();
    if (!isValid) {
      toast.error("Please complete all fields correctly.");
      return;
    }

    const values = form.getValues();

    const payload = {
      ...values,
      document_file: documentUrl,
    };

    try {
      const response = await verifyDocument(payload);
      router.push(`/document-verification/${response.id}`);
      setShowModal(false);
    } catch (error) {
      console.error("Document verification failed:", error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
        <div className="relative w-[90%] md:w-[70%] lg:w-[40%] xl:w-[30%] bg-black text-white rounded-xl py-4 px-6 lg:px-10 max-h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          <h1 className="absolute top-6 left-6 text-xl font-semibold">
            Document type
          </h1>
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-6 right-6 text-gray-400 bg-white rounded-full hover:text-white dark:hover:text-black"
          >
            <X />
          </button>

          <Form {...form}>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-3 mt-16"
            >
              <FormSelect
                label="Document type"
                name="document_type"
                placeholder="Select document type"
                required
                options={[
                  {
                    label: "Utility Bill",
                    value: "UTILITY_BILL",
                  },
                  {
                    label: "Bank Statement",
                    value: "BANK_STATEMENT",
                  },
                  {
                    label: "Business Registration",
                    value: "BUSINESS_REGISTRATION",
                  },
                  { label: "Tax Form", value: "TAX_FORM" },
                  {
                    label: "Lease Agreement",
                    value: "LEASE_AGREEMENT",
                  },
                ]}
              />
              <FormInput
                label="Document number"
                name="document_number"
                placeholder="1234567890"
                required
              />
              <FormInput
                label="Issuance date"
                name="issuance_date"
                type="date"
                required
              />

              <UploadArea
                label="Upload document"
                shouldUploadFile
                onSetUploadUrl={(url) => setDocumentUrl(url)}
              />

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="w-[140px] h-[44px] border border-white text-white rounded hover:bg-white hover:text-black transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-[140px] h-[44px] bg-yellow-400 text-black rounded shadow hover:bg-yellow-300 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      {isLoading && (
        <LoadingModal text1="Verifying ID..." text2="Please wait a moment..." />
      )}
    </>
  );
}
