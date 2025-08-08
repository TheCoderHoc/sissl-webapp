import useApiManager from "@/constants/controllers/mainController";
import { APIKeyReponse } from "../../models/apiKeys";

export const useDeleteAPIKeyController = (id: string) => {
  const { callApi, isLoading, isSuccess, error, isError, data } = useApiManager<
    APIKeyReponse,
    Error,
    void
  >({
    endpoint: `/api-keys/${id}/delete`,
    method: "DELETE",
    isAuth: true,
    showSuccessToast: true,
    queryKey: ["api-keys", id],
  });

  const deleteAPIKey = async () => {
    const response = await callApi();
    return response.data;
  };

  return {
    deleteAPIKey,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};
