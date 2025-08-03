import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";

const useResendOtpController = () => {
    const { callApi, data, isLoading, isSuccess, isError, error } =
        useApiManager<any, AxiosError, any>({
            endpoint: "/accounts/otp-request",
            method: "POST",
            isAuth: false,
            showSuccessToast: true,
            queryKey: ["User"],
        });

    const resendOtp = async (formData: any) => {
        return await callApi(formData);
    };

    return {
        resendOtp,
        data,
        isLoading,
        isSuccess,
        isError,
        error,
    };
};

export default useResendOtpController;
