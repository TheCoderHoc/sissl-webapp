import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { IResponse } from "@/types";
import { GetWebHookResponse } from "../models/webook";

const useGetWebHookController = ({ enabled = true } = {}) => {
  return useQuery<IResponse<GetWebHookResponse>, AxiosError>({
    queryKey: ["get-team"],
    queryFn: async () => {
      const response = await AxiosWithToken.get("/verifications/webhook");
      console.log("webhook", response.data)
      return response.data.data;
    },
    enabled,
  });
};

export default useGetWebHookController;
