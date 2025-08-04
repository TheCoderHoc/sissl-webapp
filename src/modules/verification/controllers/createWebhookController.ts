import useApiManager from "@/constants/controllers/mainController";
import { WebhookResponse } from "../../../auth/models/apiResponse";

export interface CreateWebhookPayload {
    name: string;
    events: string[];
    url: string;
}

export const useCreateWebhook = () => {
    const { callApi, isLoading, isSuccess, error, data } = useApiManager<
        WebhookResponse,
        Error,
        CreateWebhookPayload
    >({
        endpoint: "/verifications/webhook/",
        method: "POST",
        isAuth: true,
        showSuccessToast: false,
        queryKey: ["webhooks"],
    });

    const webhook = async (payload: CreateWebhookPayload) => {
        const response = await callApi(payload);
        return response;
    };

    return {
        webhook,
        data,
        isLoading,
        isSuccess,
        error,
    };
};
