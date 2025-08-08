import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { APIKeyReponse, APIKeyRequest } from "../../models/apiKeys";

const useCreateAPIKeyController = () => {
  const queryClient = useQueryClient();

  const { callApi, data, isLoading, isSuccess, isError, error } = useApiManager<
    APIKeyReponse,
    AxiosError,
    APIKeyRequest
  >({
    endpoint: "/api-keys",
    method: "POST",
    isAuth: true,
    showSuccessToast: true,
    queryKey: ["api-keys"],
  });

  const createAPIKey = async (formData: APIKeyRequest) => {
    const response = await callApi(formData);

    // Refresh the API key list after successful creation
    await queryClient.invalidateQueries({ queryKey: ["api-keys"] });
    console.log("API Key created successfully", response.data);
    return response.data;
  };

  return {
    createAPIKey,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};


export default useCreateAPIKeyController;
