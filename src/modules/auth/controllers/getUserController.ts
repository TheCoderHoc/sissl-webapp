// controllers/useGetUsers.ts

import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { UserPaginatedResponse } from "../models/auth";

const useGetCurrentUser = ({ enabled = true } = {}) =>
  useQuery<UserPaginatedResponse, AxiosError>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await AxiosWithToken.get("/users");
      return response.data;
    },
    enabled,
  });

export default useGetCurrentUser;
