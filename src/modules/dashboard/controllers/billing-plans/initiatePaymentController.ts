import useApiManager from "@/constants/controllers/mainController";
import { IPaymentInitiationResponseData } from "../../types/billing";

export const useInitiatePaymentController = () => {
    const { callApi, isLoading, isSuccess, error, data } = useApiManager<
        IPaymentInitiationResponseData,
        Error,
        { plan_id: string }
    >({
        endpoint: "/billing/subscription/initiate",
        method: "POST",
        isAuth: true,
        showSuccessToast: true,
        queryKey: ["billing-plan"],
    });

    const initiatePayment = async (details: { plan_id: string }) => {
        const response = await callApi(details);

        return response.data;
    };

    return {
        initiatePayment,
        data,
        isLoading,
        isSuccess,
        error,
    };
};
