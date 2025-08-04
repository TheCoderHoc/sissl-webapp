import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";
import {
  StaffVerificationPayload,
  StaffVerificationResponse,
} from "../models/types";

const useStaffVerificationController = () => {
  const { callApi, data, isLoading, isSuccess, isError, error } = useApiManager<
    StaffVerificationResponse,
    AxiosError,
    StaffVerificationPayload
  >({
    endpoint: "/staffs",
    method: "POST",
    isAuth: true,
    showSuccessToast: true,
    queryKey: ["staffs"],
  });

  const verifyIdentity = async (formData: StaffVerificationPayload) => {
    const response = await callApi(formData);
    return response.data;
  };

  return {
    verifyIdentity,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};

export default useStaffVerificationController;
