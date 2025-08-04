import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { IdentityVerificationPaginatedResponse } from "../models/types";

const useGetIdentityVerifications = ({ enabled = true } = {}) =>
  useQuery<IdentityVerificationPaginatedResponse, AxiosError>({
    queryKey: ["identity-verifications"],
    queryFn: async () => {
      const response = await AxiosWithToken.get(
        "/verifications/identity-verification"
      );
      return response.data;
    },
    enabled,
  });

export default useGetIdentityVerifications;
