import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { SingleDocumentVerificationItem } from "../models/types";

function useGetSingleDocumentVerification(id: string) {
  return useQuery<SingleDocumentVerificationItem, AxiosError>({
    queryKey: ["document-verification", id],
    queryFn: async () => {
      const { data } = await AxiosWithToken.get(
        `/verifications/document-verification/${id}`
      );
      return data;
    },
    enabled: !!id,
  });
}
export default useGetSingleDocumentVerification;
