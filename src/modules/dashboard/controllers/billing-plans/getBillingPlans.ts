import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { IBillingPlanResponseData } from "../../../../dashboard/types/billing";
import { IPaginatedResponse } from "@/types";

const useGetBillingPlans = ({ enabled = true }) => {
    return useQuery<IPaginatedResponse<IBillingPlanResponseData>, AxiosError>({
        queryKey: ["billing-plans"],
        queryFn: async () => {
            const response = await AxiosWithToken.get(
                "/billing/subscription-plan"
            );
            return response.data as IPaginatedResponse<IBillingPlanResponseData>;
        },
        enabled,
    });
};

export default useGetBillingPlans;
