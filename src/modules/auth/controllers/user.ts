import useApiManager from "@/constants/controllers/mainController";
import { IUser } from "../models/auth";
import { TProfileFormValues } from "@/modules/admin/types/profile";

export const useModifyUser = () => {
    const { callApi, isLoading, isSuccess, error, data } = useApiManager<
        IUser,
        Error,
        TProfileFormValues
    >({
        endpoint: "/users/profile",
        method: "PATCH",
        isAuth: true,
        showSuccessToast: false,
        queryKey: ["User"],
    });

    const modifyUser = async (payload: TProfileFormValues) => {
        const response = await callApi(payload);
        return response;
    };

    return {
        modifyUser,
        data,
        isLoading,
        isSuccess,
        error,
    };
};
