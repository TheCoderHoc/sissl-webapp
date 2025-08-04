import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { GetApiResponse } from "../../../auth/models/apiResponse";

const useGetWebHooksController = ({ enabled = true }) => {
    return useQuery<GetApiResponse, AxiosError<GetApiResponse>>({
        queryKey: ["web-hook"],
        queryFn: async () => {
            const response = await AxiosWithToken.get(`/verifications/webhook`);
            console.log(response);
            return response.data as GetApiResponse;
        },
        enabled,
        refetchOnWindowFocus: false,
        staleTime: 50 * 60 * 1000,
    });
};

export default useGetWebHooksController;
