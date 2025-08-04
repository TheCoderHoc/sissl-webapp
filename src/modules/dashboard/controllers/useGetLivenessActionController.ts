import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { LivenessActionResponse } from "../models/livenessAction";
import { IResponse } from "@/types";

const useGetLivenessAction = ({ enabled = true } = {}) => {
    return useQuery<IResponse<LivenessActionResponse>, AxiosError>({
        queryKey: ["liveness-action"],
        queryFn: async () => {
            const response = await AxiosWithToken.get("/base/action-types");
            return response.data.data.results;
        },
        enabled,
    });
};

export default useGetLivenessAction;
