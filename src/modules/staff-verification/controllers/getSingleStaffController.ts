import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { StaffVerificationResponse } from "../models/types";

function useGetSingleStaffVerification(id: string) {
  return useQuery<StaffVerificationResponse, AxiosError>({
    queryKey: ["staffs", id],
    queryFn: async () => {
      const { data } = await AxiosWithToken.get(`/staffs/${id}`);
      return data.data;
    },
    enabled: !!id,
  });
}

export default useGetSingleStaffVerification;
