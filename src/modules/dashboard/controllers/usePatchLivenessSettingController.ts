import useApiManager from "@/constants/controllers/mainController";

import {
    LivenessSettingRequest,
    LivenessSettingResponse,
} from "../models/livenessSettings";
export const useLivenessSettings = () => {
    const { callApi, isLoading, isSuccess, error, isError, data } =
        useApiManager<LivenessSettingResponse, Error, LivenessSettingRequest>({
            endpoint: "/users/liveness-setting",
            method: "PATCH",
            isAuth: true,
            showSuccessToast: true,
            queryKey: ["liveness-setting"],
        });

    const livenessSettings = async (formData: LivenessSettingRequest) => {
        const response = await callApi(formData);
        return response;
    };

    return {
        livenessSettings,
        data,
        isLoading,
        isSuccess,
        isError,
        error,
    };
};
