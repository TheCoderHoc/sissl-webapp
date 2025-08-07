import useApiManager from "@/constants/controllers/mainController";
import {
  ComplianceVerificationRequest,
  ComplianceVerificationResponse,
} from "../models/companyComplianceVerification";
export const useCompanyComplianceController = () => {
  const { callApi, isLoading, isSuccess, error, isError, data } = useApiManager<
    ComplianceVerificationResponse,
    Error,
    ComplianceVerificationRequest
  >({
    endpoint: "/company/compliance",
    method: "PUT",
    isAuth: true,
    showSuccessToast: true,
    contentType: "multipart/form-data",
    queryKey: ["User"],
  });

  const complianceVerification = async (
    formData: ComplianceVerificationRequest
  ) => {
    const response = await callApi(formData);
    return response;
  };

  return {
    complianceVerification,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};
