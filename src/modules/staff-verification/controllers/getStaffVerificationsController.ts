import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { StaffVerificationPaginatedResponse } from "../models/types";

const useGetStaffVerifications = ({ enabled = true } = {}) =>
  useQuery<StaffVerificationPaginatedResponse, AxiosError>({
    queryKey: ["staffs"],
    queryFn: async () => {
      const response = await AxiosWithToken.get("/staffs");
      return response.data;
    },
    enabled,
  });

export default useGetStaffVerifications;
