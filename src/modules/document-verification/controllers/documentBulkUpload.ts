import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";

export interface DocumentUploadData {
  id: string;
  file_url: string;
  status: string;
  created_at: string;
}

export interface DocumentBulkUploadResponse {
  status: number;
  success: boolean;
  message: string;
  data: DocumentUploadData;
}

type DocumentBulkUploadPayload = FormData;

const useDocumentBulkUploadController = () => {
  const { callApi, data, isLoading, isSuccess, isError, error } = useApiManager<
    DocumentBulkUploadResponse,
    AxiosError,
    DocumentBulkUploadPayload
  >({
    endpoint: "/verifications/document-verification/upload",
    method: "POST",
    isAuth: true,
    showSuccessToast: true,
    contentType: "multipart/form-data",
    queryKey: ["DocumentBulkUpload"],
  });

  const uploadDocumentBulk = async (
    formData: FormData
  ): Promise<DocumentBulkUploadResponse> => {
    const response = await callApi(formData);
    return response.data;
  };

  return {
    uploadDocumentBulk,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};

export default useDocumentBulkUploadController;
