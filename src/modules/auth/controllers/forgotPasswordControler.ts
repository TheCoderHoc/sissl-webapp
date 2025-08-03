import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";

import {
  ForgotPasswordPayload,
  ForgotPasswordResponse,
} from "@/modules/auth/models/auth";

export const useForgotPasswordController = () => {
  const { callApi, isLoading, isSuccess, error, data } = useApiManager<
    ForgotPasswordResponse,
    AxiosError,
    ForgotPasswordPayload
  >({
    endpoint: "/auth/password-reset/initiate",
    method: "POST",
    isAuth: false,
    showSuccessToast: true,
    queryKey: ["User"],
  });

  const forgotPassword = async (payload: ForgotPasswordPayload) => {
    return await callApi(payload);
  };

  return {
    forgotPassword,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
