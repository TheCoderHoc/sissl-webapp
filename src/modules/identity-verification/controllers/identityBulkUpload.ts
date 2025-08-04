import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";

export interface Guarantor {
  id: string;
  name: string;
  phone_number: string;
  email: string;
  id_type: string;
  id_number: string;
  verification_method: string[];
}

export interface IdentityUploadData {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  id_type: string;
  id_number: string;
  date_of_birth: string;
  guarantors: Guarantor[];
  verification_method: string[];
  phone_status: string;
  sissl_code: string;
  status: string;
}

export interface IdentityBulkUploadResponse {
  status: number;
  success: boolean;
  message: string;
  data: IdentityUploadData;
}

type IdentityBulkUploadPayload = FormData;

const useIdentityBulkUploadController = () => {
  const { callApi, data, isLoading, isSuccess, isError, error } = useApiManager<
    IdentityBulkUploadResponse,
    AxiosError,
    IdentityBulkUploadPayload
  >({
    endpoint: "/verifications/identity-verification/upload",
    method: "POST",
    isAuth: true,
    showSuccessToast: true,
    contentType: "multipart/form-data",
    queryKey: ["IdentityBulkUpload"],
  });

  const uploadIdentityBulk = async (
    formData: FormData
  ): Promise<IdentityBulkUploadResponse> => {
    const response = await callApi(formData);
    return response.data;
  };

  return {
    uploadIdentityBulk,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};

export default useIdentityBulkUploadController;
