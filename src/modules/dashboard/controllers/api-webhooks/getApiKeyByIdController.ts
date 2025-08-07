import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { GetAPIKeyResponseWithID} from "../../models/apiKeys"; // Adjust the path based on your project structure
import { IResponse } from "@/types";

const useApiKeysByIdController = (id: string, { enabled = true } = {}) => {
    return useQuery<IResponse<GetAPIKeyResponseWithID>, AxiosError>({
        queryKey: ["api-keys", id],
        queryFn: async () => {
            const response = await AxiosWithToken.get(
                `/api-keys/${id}`
            );
            console.log("response-apikeys", response.data);
            return response.data;
        },
        enabled,
    });
};

export default useApiKeysByIdController;
