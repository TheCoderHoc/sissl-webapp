import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { IWalletBalanceResponseData } from "../../../../dashboard/types/billing";

const useGetWalletBalanceController = ({
    enabled = true,
}: {
    enabled?: boolean;
}) => {
    return useQuery<IWalletBalanceResponseData, AxiosError>({
        queryKey: ["billing-plans"],
        queryFn: async () => {
            const response = await AxiosWithToken.get(
                "/billing/billing/balance"
            );
            return response.data as IWalletBalanceResponseData;
        },
        enabled,
    });
};

export default useGetWalletBalanceController;
