import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { IPaginatedResponse } from "@/types";
import { ITransactionResponseData } from "../../../../dashboard/types/billing";

const useGetTransactionsController = ({
    enabled = true,
}: {
    enabled?: boolean;
}) => {
    return useQuery<IPaginatedResponse<ITransactionResponseData>, AxiosError>({
        queryKey: ["transactions"],
        queryFn: async () => {
            const response = await AxiosWithToken.get("/billing/transaction");
            return response.data as IPaginatedResponse<ITransactionResponseData>;
        },
        enabled,
    });
};

export default useGetTransactionsController;
