import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";

const useGetIdentityVerificationTemplate = (options = {}) =>
  useQuery<Blob, AxiosError>({
    queryKey: ["identity-verification-template"],
    queryFn: async () => {
      const response = await AxiosWithToken.get(
        "/verifications/identity-verification/upload/template",
        {
          responseType: "blob",
        }
      );
      return response.data;
    },
    ...options,
  });

export default useGetIdentityVerificationTemplate;
