import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";

import { TResetPasswordFormValues } from "../lib/types";

export const useResetPasswordController = () => {
    const { callApi, isLoading, isSuccess, error, data } = useApiManager<
        any,
        AxiosError,
        TResetPasswordFormValues
    >({
        endpoint: "/accounts/password-reset",
        method: "POST",
        isAuth: false,
        showSuccessToast: true,
        queryKey: ["User"],
    });

    const resetPassword = async (payload: TResetPasswordFormValues) => {
        return await callApi(payload);
    };

    return {
        resetPassword,
        data,
        isLoading,
        isSuccess,
        error,
    };
};
