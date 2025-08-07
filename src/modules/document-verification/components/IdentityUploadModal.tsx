"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import FormInput from "@/components/shared/FormInput";
import FormSelect from "@/components/shared/FormSelect";
import UploadArea from "@/components/shared/UploadArea";
import { LoadingModal } from "../../../components/shared/LoadingModal";
import useIdentityVerificationController from "@/modules/identity-verification/controllers/identityVerificationController";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { X } from "lucide-react";
import { idVerificationSchema } from "@/modules/identity-verification/lib/validators";
import { useIdentityFormContext } from "@/modules/identity-verification/context/identityVerificationContext";

export default function IdentityUploadModal({
  setShowModal,
}: {
  setShowModal: (val: boolean) => void;
}) {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(idVerificationSchema),
    defaultValues: {
      id_type: "",
      id_number: "",
      id_image: "",
    },
  });

  const { formData, setFormData } = useIdentityFormContext()!;
  // const [documentUrl, setDocumentUrl] = useState("");
  const { verifyIdentity, isLoading } = useIdentityVerificationController();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await form.trigger();
    if (!isValid) {
      toast.error("Please complete all fields correctly.");
      return;
    }

    const values = form.getValues();

    const updatedFormData = {
      ...formData,
      id_type: values.id_type,
      id_number: values.id_number,
      // id_image: documentUrl,
    };
    setFormData(updatedFormData);
    try {
      const response = await verifyIdentity(updatedFormData);
      router.push(`/identity-verification/${response.id}`);
      setShowModal(false);
    } catch (err) {
      console.error("Verification failed", err);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
        <div className="relative w-[90%] md:w-[70%] lg:w-[40%] xl:w-[30%] bg-black text-white rounded-xl py-4 px-6 lg:px-10 max-h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {/* Header */}
          <h1 className="absolute top-6 left-6 text-xl font-semibold">
            Document type
          </h1>
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-6 right-6 text-gray-400 bg-white rounded-[50%] hover:text-white dark:hover:text-black"
          >
            <X />
          </button>

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-3 mt-16"
            >
              {/* Document Type */}
              <FormSelect
                label="Document type"
                name="id_type"
                placeholder="Select document type"
                required
                options={[
                  { label: "BVN", value: "BVN" },
                  { label: "NIN", value: "NIN" },
                  { label: "NIN Phone", value: "NIN_PHONE" },
                  { label: "Phone", value: "PHONE" },
                  { label: "Passport", value: "PASSPORT" },
                  {
                    label: "Driver’s License",
                    value: "DRIVER_LICENSE",
                  },
                ]}
              />

              {/* Document Number */}
              <FormInput
                label="Document number"
                name="id_number"
                placeholder="1234567890"
                required
              />

              {/* Upload Area */}
              <UploadArea
                label="Upload document"
                // // name="id_image"
                // // isLoading
                // shouldUploadFile
                // onSetUploadUrl={(url) => setDocumentUrl(url)}
                // // onUploadComplete={setDocumentUrl}
                id="document"
                onChange={() => {
                  console.log("yes");
                }}
              />

              {/* Action Buttons */}
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
