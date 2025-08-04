import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { IResponse } from "@/types";
import { GetLivenessSettingResponse } from "../models/getlivenessSetting";

const useGetLivenessSetting = ({ enabled = true } = {}) => {
    return useQuery<IResponse<GetLivenessSettingResponse>, AxiosError>({
        queryKey: ["liveness-setting"],
        queryFn: async () => {
            const response = await AxiosWithToken.get(
                "/users/liveness-setting"
            );
            return response.data;
        },
        enabled,
    });
};

export default useGetLivenessSetting;
