import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { GetTeam } from "../models/team";
import { IResponse } from "@/types";

const useGetTeamController = ({ enabled = true } = {}) => {
    return useQuery<IResponse<GetTeam>, AxiosError>({
        queryKey: ["get-team"],
        queryFn: async () => {
            const response = await AxiosWithToken.get("/team");
            console.log("my-team", response.data);
            return response.data.data;
        },
        enabled,
    });
};

export default useGetTeamController;
