import useApiManager from "@/constants/controllers/mainController";
import { AxiosError } from "axios";
import type { Guarantor } from "../models/types";

type StaffGuarantorPayload = Omit<Guarantor, "id">;

const useAddGuarantorController = (staffId: string) => {
  const { callApi, data, isLoading, isSuccess, isError, error } = useApiManager<
    Guarantor,
    AxiosError,
    StaffGuarantorPayload
  >({
    endpoint: `/staffs/${staffId}/guarantors`,
    method: "POST",
    isAuth: true,
    showSuccessToast: true,
    queryKey: ["staffs"],
  });

  const addGuarantor = async (formData: StaffGuarantorPayload) => {
    const response = await callApi(formData);
    return response.data;
  };

  return {
    addGuarantor,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};

export default useAddGuarantorController;
