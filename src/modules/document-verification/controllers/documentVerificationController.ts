import useApiManager from "@/constants/controllers/mainController";
import {
    DocumentVerificationRequest,
    DocumentVerificationItem,
} from "../models/types";

export default function useDocumentVerificationController() {
    const { callApi, data, isLoading, isSuccess, isError, error, response } =
        useApiManager<
            DocumentVerificationItem,
            Error,
            DocumentVerificationRequest
        >({
            endpoint: "/verifications/document-verification",
            method: "POST",
            queryKey: ["document-verifications"],
            isAuth: true,
            showSuccessToast: true,
        });

    const verifyDocument = async (details: DocumentVerificationRequest) => {
        const response = await callApi(details);
        return response.data;
    };

    return {
        verifyDocument,
        data,
        isLoading,
        isSuccess,
        isError,
        error,
        response,
    };
}
