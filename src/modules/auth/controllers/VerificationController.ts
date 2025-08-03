import useApiManager from "@/constants/controllers/mainController";
import { IdentityData, IVerification } from "../models/verification";

interface Props{
    type:string
}
export const useKYCController = ({type}:Props) => {
  const { callApi, isLoading, isSuccess, error, data } = useApiManager<
    IdentityData,
    Error,
    IVerification
  >({
    endpoint: `/verifications/kyc/${type}/`,
    method: "POST",
    isAuth: true,
    showSuccessToast: true,
    queryKey: ["Verification", type],
  });

  const VerifyIdentity = async (details: IVerification) => {
    const response = await callApi(details);
    return response;
  };

  return {
    VerifyIdentity,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
