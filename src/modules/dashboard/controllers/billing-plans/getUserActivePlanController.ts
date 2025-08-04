import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { IBillingPlanResponseData } from "../../../../dashboard/types/billing";
import { IResponse } from "@/types";

const useGetUserActivePlanController = ({
    enabled = true,
}: {
    enabled?: boolean;
}) => {
    return useQuery<
        IResponse<{ id: number; plan: IBillingPlanResponseData }>,
        AxiosError
    >({
        queryKey: ["active-subscription"],
        queryFn: async () => {
            const response = await AxiosWithToken.get(
                "/billing/subscription/active"
            );
            return response.data as IResponse<any>;
        },
        enabled,
    });
};

export default useGetUserActivePlanController;
