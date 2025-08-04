import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { IBillingPlanResponseData } from "../../../../dashboard/types/billing";
import { IResponse } from "@/types";

const useGetSingleBillingPlan = ({
    enabled = true,
    id,
}: {
    enabled: boolean;
    id: string;
}) => {
    return useQuery<IResponse<IBillingPlanResponseData>, AxiosError>({
        queryKey: ["billing-plans", id],
        queryFn: async () => {
            const response = await AxiosWithToken.get(
                `/billing/subscription-plan/${id}`
            );
            return response.data as IResponse<IBillingPlanResponseData>;
        },
        enabled,
    });
};

export default useGetSingleBillingPlan;
