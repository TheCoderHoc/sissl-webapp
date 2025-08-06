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
import useFileUploadController from "@/constants/controllers/fileUploadController";
import { toast } from "react-toastify";
import { CompanyComplianceContext } from "@/modules/dashboard/context/company-compliance";
import { TUploadDocumentFormValues } from "@/modules/dashboard/types/company-compliance";
import { UploadDocumentSchema } from "@/modules/dashboard/lib/validators";
import { useCompanyComplianceController } from "@/modules/dashboard/controllers/companyComplianceController";
import { ComplianceVerificationRequest } from "@/modules/dashboard/models/companyComplianceVerification";

export default function UploadDocumentPage() {
    const context = useContext(CompanyComplianceContext);
    if (!context) throw new Error("CompanyComplianceContext is undefined");
    const { data } = context;

    const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);

    const { complianceVerification, isLoading } =
        useCompanyComplianceController();

    const form = useForm<TUploadDocumentFormValues>({
        resolver: zodResolver(UploadDocumentSchema),
        defaultValues: {
            cac_certificate: "",
            proof_of_address: "",
            government_id: "",
        },
    });

    const {
        uploadFile: uploadCertificate,
        isLoading: isUploadCertificateLoading,
    } = useFileUploadController();

    const { uploadFile: uploadAddress, isLoading: isUploadAddressLoading } =
        useFileUploadController();

    const {
        uploadFile: uploadGovernmentId,
        isLoading: isUploadGovernmentIdLoading,
    } = useFileUploadController();

    const handleDocumentUpload = async (
        e: React.ChangeEvent<HTMLInputElement>,
        type: "certificate" | "proof_of_address" | "government_id"
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        const uploadMap = {
            certificate: {
                uploadFn: uploadCertificate,
                formKey: "cac_certificate",
            },
            proof_of_address: {
                uploadFn: uploadAddress,
                formKey: "proof_of_address",
            },
            government_id: {
                uploadFn: uploadGovernmentId,
                formKey: "government_id",
            },
        };

        try {
            const { uploadFn, formKey } = uploadMap[type];
            const response = await uploadFn(formData);
            form.setValue(formKey as any, response.url);
        } catch (error: any) {
            toast.error(
                error?.message || "Something went wrong while uploading."
            );
        }
    };

    const onSubmit: SubmitHandler<TUploadDocumentFormValues> = async ({
        cac_certificate,
        proof_of_address,
        government_id,
    }) => {
        const payload: ComplianceVerificationRequest = {
            company_name: data.company_name,
            reg_number: data.reg_number,
            date_of_establishment: data.date_of_establishment,
            company_address: data.company_address,

            nin: data.nin,
            country: data.country,
            state: data.state,
            street: data.street,

            proof_of_address,
            cac_document: cac_certificate,
            id_card: government_id,
        };

        await complianceVerification(payload);

        setIsFeedbackDialogOpen(true);
    };
    return (
        <section>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-10"
                >
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-5">
                            Compliance Verification
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
                            Upload Document
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 w-[50%] mb-5">
                            Ensure every detail provided is the same as the
                            information on the means of identification being
                            provided.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <UploadArea
                            label="CAC Document"
                            id="cac-document"
                            isLoading={isUploadCertificateLoading}
                            onChange={(e) =>
                                handleDocumentUpload(e, "certificate")
                            }
                        />

                        <UploadArea
                            label="Proof of Address"
                            id="proof-of-address"
                            isLoading={isUploadAddressLoading}
                            onChange={(e) =>
                                handleDocumentUpload(e, "proof_of_address")
                            }
                        />

                        <UploadArea
                            label="Government Issued ID Card"
                            className="col-span-2"
                            isLoading={isUploadGovernmentIdLoading}
                            id="goverment-id"
                            onChange={(e) =>
                                handleDocumentUpload(e, "government_id")
                            }
                        />

                        <Link
                            href={DASHBOARD_ROUTES.COMPANY_COMPLIANCE_CONTACT}
                        >
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

// destroy the context after form submission
// if the user has already created a compliance,
