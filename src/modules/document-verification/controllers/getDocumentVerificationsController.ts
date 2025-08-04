import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AxiosWithToken from "@/constants/api_management/MyHttpHelperWithToken";
import { DocumentVerificationResponse } from "../models/types";

const useGetDocumentVerifications = ({ enabled = true } = {}) => {
    return useQuery<DocumentVerificationResponse, AxiosError>({
        queryKey: ["document-verifications"],
        queryFn: async () => {
            const response = await AxiosWithToken.get(
                "/verifications/document-verification"
            );
            return response.data as DocumentVerificationResponse;
        },
        enabled,
    });
};

export default useGetDocumentVerifications;
