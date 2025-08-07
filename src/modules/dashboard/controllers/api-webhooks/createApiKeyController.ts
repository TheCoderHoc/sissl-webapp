import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { CreateAPIKeyReponse, CreateAPIKeyRequest } from "../../models/apiKeys";

const useCreateAPIKeyController = () => {
    const queryClient = useQueryClient();

    const { callApi, data, isLoading, isSuccess, isError, error } =
        useApiManager<CreateAPIKeyReponse, AxiosError, CreateAPIKeyRequest>({
            endpoint: "/api-keys",
            method: "POST",
            isAuth: true,
            showSuccessToast: true,
            queryKey: ["api-keys"],
        });

    const createAPIKey = async (formData: CreateAPIKeyRequest) => {
        const response = await callApi(formData);

        // Refresh the API key list after successful creation
        await queryClient.invalidateQueries({ queryKey: ["api-keys"] });

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
