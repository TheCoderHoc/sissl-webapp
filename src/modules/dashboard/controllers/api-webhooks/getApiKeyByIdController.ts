import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";


export interface ApiKeyDetail {
  id: string;
  name: string;
  description: string;
  scopes: string[];
  scopes_display: string[];
  environment: "LIVE" | "TEST";
  plaintext: string;
  is_active: boolean;
  revoked_at: string | null;
  expires_at: string | null;
  last_used_at: string | null;
  date_created: string;
}

const useGetApiKeyByIdController = (id: string, { enabled = true } = {}) => {
    return useQuery<ApiKeyDetail, AxiosError>({
        queryKey: ["api-keys", id],
        queryFn: async () => {
            const response = await AxiosWithToken.get(
                `/api-keys/${id}`
            );
            console.log("response-apikeys", response.data);
            return response.data.data;
        },
        enabled,
    });
};

export default useGetApiKeyByIdController;
