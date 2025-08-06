import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { GetApiResponse } from "@/modules/auth/models/apiResponse";
import { APIKeyType } from "@/modules/dashboard/components/WebHookTab";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useGetApiKeysController = ({
    enabled = true,
    filterType,
}: {
    enabled: boolean;
    filterType?: APIKeyType;
}) => {
    return useQuery<GetApiResponse, AxiosError<GetApiResponse>>({
        queryKey: ["api-key", filterType],
        queryFn: async () => {
            const response = await AxiosWithToken.get(
                `/verifications/api-key?type=${filterType}`
            );
            console.log(response);
            return response.data as GetApiResponse;
        },
        enabled,
        refetchOnWindowFocus: false,
        staleTime: 50 * 60 * 1000,
    });
};

export default useGetApiKeysController;
