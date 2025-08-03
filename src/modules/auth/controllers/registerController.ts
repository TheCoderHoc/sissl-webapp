import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";
import { TRegisterFormValues } from "../lib/types";

const useRegisterController = () => {
    const { callApi, data, isLoading, isSuccess, isError, error } =
        useApiManager<any, AxiosError, TRegisterFormValues>({
            endpoint: "/accounts/signup",
            method: "POST",
            isAuth: false,
            showSuccessToast: true,
            queryKey: ["User"],
        });

    const register = async (formData: TRegisterFormValues) => {
        return await callApi(formData);
    };

    return {
        register,
        data,
        isLoading,
        isSuccess,
        isError,
        error,
    };
};

export default useRegisterController;
