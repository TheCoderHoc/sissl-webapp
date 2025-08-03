import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { UserProfileResponse } from "../models/auth";

const useGetUserProfile = ({ enabled = true } = {}) => {
    return useQuery<UserProfileResponse, AxiosError>({
        queryKey: ["user-profile"],
        queryFn: async () => {
            const response = await AxiosWithToken.get("/accounts/profile");
            return response.data as UserProfileResponse;
        },
        enabled,
    });
};

export default useGetUserProfile;
