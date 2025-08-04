import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";

const useGetStaffTemplate = (options = {}) =>
  useQuery<Blob, AxiosError>({
    queryKey: ["staff-upload-template"],
    queryFn: async () => {
      const response = await AxiosWithToken.get("/staffs/upload/template", {
        responseType: "blob",
      });
      return response.data;
    },
    ...options,
  });

export default useGetStaffTemplate;
