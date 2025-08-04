import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { IResponse } from "@/types";
import { GetServicesResponse } from "../models/services";

const useGetServices = ({ enabled = true } = {}) => {
    return useQuery<IResponse<GetServicesResponse>, AxiosError>({
        queryKey: ["api-services"],
        queryFn: async () => {
            const response = await AxiosWithToken.get("/billing/services");
            console.log("api-service", response.data);
            return response.data;
        },
        enabled,
    });
};

export default useGetServices;
