import useApiManager from "@/constants/controllers/mainController";
import { GetApiResponse } from "@/modules/auth/models/apiResponse";

interface ApiKeyPayload {
  title: string;
  type: "TEST" | "LIVE";
}

export const useGenerateApiKey = () => {
  const { callApi, isLoading, isSuccess, error, data } = useApiManager<
    GetApiResponse,
    Error,
    ApiKeyPayload
  >({
    endpoint: "/verifications/api-key/",
    method: "POST",
    isAuth: true,
    showSuccessToast: true,
    queryKey: ["api-key"],
  });

  const generateKey = async (payload: ApiKeyPayload) => {
    const response = await callApi(payload);
    return response;
  };

  return {
    generateKey,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
