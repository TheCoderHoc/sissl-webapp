import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import {GetAPIKeyListResponse} from "../../models/apiKeys";
import { IResponse } from "@/types";

const useGetApiKeysListController = ({ enabled = true } = {}) => {
    return useQuery<IResponse<GetAPIKeyListResponse>, AxiosError>({
        queryKey: ["api-keys"],
        queryFn: async () => {
            const response = await AxiosWithToken.get(
                `/api-keys/list`
            );
            console.log("response-list apikeys", response.data);
            return response.data;
        },
        enabled,
    });
};

export default useGetApiKeysListController;
