"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FeedbackDialog from "@/components/shared/FeedbackDialog";
import UploadArea from "@/components/shared/UploadArea";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { DASHBOARD_ROUTES } from "@/constants/routes";
import { CompanyComplianceContext } from "@/modules/dashboard/context/company-compliance";
import {
  TUploadDocumentFormValues,
  UploadDocumentSchema,
} from "@/modules/dashboard/lib/validators";
import { useCompanyComplianceController } from "@/modules/dashboard/controllers/companyComplianceController";
import { ComplianceVerificationRequest } from "@/modules/dashboard/models/companyComplianceVerification";

export default function UploadDocumentPage() {
  const context = useContext(CompanyComplianceContext);
  if (!context) throw new Error("CompanyComplianceContext is undefined");
  const { data, setData } = context;

  const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);

  const { complianceVerification, isLoading } =
    useCompanyComplianceController();

  const form = useForm<TUploadDocumentFormValues>({
    resolver: zodResolver(UploadDocumentSchema),
    defaultValues: {
      cac_certificate: undefined,
      proof_of_address: undefined,
      government_issued_id: undefined,
    },
  });

  const onSubmit: SubmitHandler<TUploadDocumentFormValues> = async ({
    cac_certificate,
    proof_of_address,
    government_issued_id,
  }) => {
    if (!cac_certificate || !proof_of_address || !government_issued_id) {
      return;
    }

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("registration_number", data.registration_number);
    formData.append(
      "date_of_establishment",
      data.date_of_establishment.toISOString().split("T")[0]
    );

    formData.append("address", data.address + " " + data.street);
    formData.append("nin", data.nin);
    formData.append("country", data.country);
    formData.append("state", data.state);
    formData.append("cac_certificate", cac_certificate);
    formData.append("proof_of_address", proof_of_address);
    formData.append("government_issued_id", government_issued_id);

    await complianceVerification(
      formData as unknown as ComplianceVerificationRequest
    );

    setIsFeedbackDialogOpen(true);

    // Reset context (excluding files)
    setData({
      name: "",
      registration_number: "",
      date_of_establishment: new Date(),
      address: "",
      nin: "",
      country: "",
      state: "",
      street: "",
    });
  };

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-5">
              Compliance Verification
            </p>
            <h2 className="text-2xl font-bold mb-5">Upload Document</h2>
            <p className="text-sm text-gray-600 w-[50%] mb-5">
              Ensure every detail provided is the same as the information on the
              means of identification being provided.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <UploadArea
              label="CAC Document"
              id="cac_certificate"
              value={form.watch("cac_certificate")}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) form.setValue("cac_certificate", file);
              }}
            />

            <UploadArea
              label="Proof of Address"
              id="proof_of_address"
              value={form.watch("proof_of_address")}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) form.setValue("proof_of_address", file);
              }}
            />

            <UploadArea
              label="Government Issued ID Card"
              id="government_issued_id"
              className="col-span-2"
              value={form.watch("government_issued_id")}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) form.setValue("government_issued_id", file);
              }}
            />

            <Link href={DASHBOARD_ROUTES.COMPANY_COMPLIANCE_CONTACT}>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="mt-10 w-full"
              >
                Back
              </Button>
            </Link>

            <Button
              type="submit"
              size="lg"
              className="mt-10"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>

      <FeedbackDialog
        isOpen={isFeedbackDialogOpen}
        title="Compliance Completed"
        description="Thanks! Your submission was successful. We will be in touch soon."
        onClose={() => setIsFeedbackDialogOpen(false)}
        variant="success"
        footer={
          <Link
            className="block"
            href={DASHBOARD_ROUTES.COMPANY_COMPLIANCE_STATUS}
          >
            <Button size="lg" className="w-full">
              Check Status
            </Button>
          </Link>
        }
      />
    </section>
  );
}
