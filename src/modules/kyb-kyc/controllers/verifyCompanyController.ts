import useApiManager from "@/constants/controllers/mainController";

export default function useVerifyCompanyController() {
    const { callApi, data, isLoading, isSuccess, isError, error, response } =
        useApiManager<any, Error, any>({
            endpoint: "/verifications/kyb/business-verification",
            method: "POST",
            queryKey: ["company-verification"],
            isAuth: true,
            showSuccessToast: true,
        });

    const verifyCompany = async (details: any) => {
        const response = await callApi(details);
        return response.data;
    };

    return {
        verifyCompany,
        data,
        isLoading,
        isSuccess,
        isError,
        error,
        response,
    };
}
