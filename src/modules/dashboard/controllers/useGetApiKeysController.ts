import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { GetApiKeysResponse } from "../models/apiKeys"; // Adjust the path based on your project structure
import { IResponse } from "@/types";

const useGetApiKeysController = ({ enabled = true } = {}) => {
    return useQuery<IResponse<GetApiKeysResponse>, AxiosError>({
        queryKey: ["GetApiKeys"],
        queryFn: async () => {
            const response = await AxiosWithToken.get(
                "/verifications/api-key?environment=LiveMode"
            );
            console.log("response-apikeys", response.data);
            return response.data;
        },
        enabled,
    });
};

export default useGetApiKeysController;
