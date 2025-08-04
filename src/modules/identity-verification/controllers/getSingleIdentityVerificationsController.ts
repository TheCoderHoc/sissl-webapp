import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { SingleIdentityVerificationItem } from "../models/types";

function useGetSingleIdentityVerification(id: string) {
  return useQuery<SingleIdentityVerificationItem, AxiosError>({
    queryKey: ["identity-verification", id],
    queryFn: async () => {
      const { data } = await AxiosWithToken.get(
        `/verifications/identity-verification/${id}`
      );
      return data;
    },
    enabled: !!id,
  });
}
export default useGetSingleIdentityVerification;
