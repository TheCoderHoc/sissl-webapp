import useApiManager from "@/constants/controllers/mainController";
import { IPaymentInitiationResponseData } from "../../../../dashboard/types/billing";

export const useVerifyPayment = () => {
    const { callApi, isLoading, isSuccess, error, data } = useApiManager<
        IPaymentInitiationResponseData,
        Error,
        { plan_id: string }
    >({
        endpoint: "/billing/subscription/complete-subscription",
        method: "POST",
        isAuth: true,
        showSuccessToast: true,
        queryKey: ["billing-plan"],
    });

    const verifyPayment = async (details: {
        plan_id: string;
        tx_ref: string;
    }) => {
        const response = await callApi(details);

        return response.data;
    };

    return {
        verifyPayment,
        data,
        isLoading,
        isSuccess,
        error,
    };
};
