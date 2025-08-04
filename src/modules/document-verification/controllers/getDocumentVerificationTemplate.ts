import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";

const useGetDocumentVerificationTemplate = (options = {}) =>
  useQuery<Blob, AxiosError>({
    queryKey: ["document-verification-template"],
    queryFn: async () => {
      const response = await AxiosWithToken.get(
        "/verifications/document-verification/upload/template",
        {
          responseType: "blob",
        }
      );
      return response.data;
    },
    ...options,
  });

export default useGetDocumentVerificationTemplate;
