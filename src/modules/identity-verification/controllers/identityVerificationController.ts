import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";
import {
  IdentityVerificationPayload,
  IdentityVerificationResponse,
} from "../models/types";

const useIdentityVerificationController = () => {
    const { callApi, data, isLoading, isSuccess, isError, error } =
        useApiManager<
            IdentityVerificationResponse,
            AxiosError,
            IdentityVerificationPayload
        >({
            endpoint: "/verifications/identity-verification",
            method: "POST",
            isAuth: true,
            showSuccessToast: true,
            queryKey: ["identity-verifications"],
        });

    const verifyIdentity = async (formData: IdentityVerificationPayload) => {
        const response = await callApi(formData);
        return response.data;
    };

    return {
        verifyIdentity,
        data,
        isLoading,
        isSuccess,
        isError,
        error,
    };
};

export default useIdentityVerificationController;
