import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";
import { IVerifyOtpFormValues } from "../lib/types";

const useVerifyOtpController = () => {
    const {
        callApi: callVerifyAccountOtp,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useApiManager<any, AxiosError, IVerifyOtpFormValues>({
        endpoint: "/accounts/otp-verification",
        method: "POST",
        isAuth: false,
        showSuccessToast: true,
        queryKey: ["User"],
    });

    const verifyOtp = async (data: IVerifyOtpFormValues) => {
        return await callVerifyAccountOtp(data);
    };

    return {
        verifyOtp,
        isLoading,
        isSuccess,
        isError,
        error,
    };
};

export default useVerifyOtpController;
