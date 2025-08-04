import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";

export interface StaffDocumentUploadData {
  id: string;
  name: string;
  email: string;
  status: string;
  uploaded_at: string;
}

export interface StaffDocumentBulkUploadResponse {
  status: number;
  success: boolean;
  message: string;
  data: StaffDocumentUploadData;
}

type StaffDocumentBulkUploadPayload = FormData;

const useStaffDocumentBulkUploadController = () => {
  const { callApi, data, isLoading, isSuccess, isError, error } = useApiManager<
    StaffDocumentBulkUploadResponse,
    AxiosError,
    StaffDocumentBulkUploadPayload
  >({
    endpoint: "/staffs/upload",
    method: "POST",
    isAuth: true,
    showSuccessToast: true,
    contentType: "multipart/form-data",
    queryKey: ["StaffDocumentBulkUpload"],
  });

  const uploadStaffDocumentBulk = async (
    formData: FormData
  ): Promise<StaffDocumentBulkUploadResponse> => {
    const response = await callApi(formData);
    return response.data;
  };

  return {
    uploadStaffDocumentBulk,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};

export default useStaffDocumentBulkUploadController;
