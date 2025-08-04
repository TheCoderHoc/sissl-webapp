import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
import {../models/team
    CreateTeamRequest,
    CreateTeamResponse,
} from "../../../dashboard/models/team";

const useCreateTeamController = () => {
    const queryClient = useQueryClient();

    const { callApi, data, isLoading, isSuccess, isError, error } =
        useApiManager<CreateTeamResponse, AxiosError, CreateTeamRequest>({
            endpoint: "/team",
            method: "POST",
            isAuth: true,
            showSuccessToast: true,
            queryKey: ["create-team"],
        });

    const createTeam = async (formData: CreateTeamRequest) => {
        const response = await callApi(formData);

        // Refresh the team list after successful creation
        await queryClient.invalidateQueries({ queryKey: ["get-team"] });

        return response.data;
    };

    return {
        createTeam,
        data,
        isLoading,
        isSuccess,
        isError,
        error,
    };
};

export default useCreateTeamController;
