import useApiManager from "@/constants/controllers/mainController";
import { APIKeyReponse, APIKeyRequest } from "../../models/apiKeys";

export const useUpdateAPIKeyController = (id: string) => {
  const { callApi, isLoading, isSuccess, error, isError, data } = useApiManager<
    APIKeyReponse,
    Error,
    APIKeyRequest
  >({
    endpoint: `/api-keys/${id}/update`,
    method: "PATCH",
    isAuth: true,
    showSuccessToast: true,
    queryKey: ["api-keys", id],
  });

  const updateAPIKey = async (formData: APIKeyRequest) => {
    const response = await callApi(formData);
    return response.data;
  };

  return {
    updateAPIKey,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};
