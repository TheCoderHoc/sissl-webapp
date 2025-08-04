import { formatDate } from "@/utils/formatDate";
import { DocumentRecord } from "../columns/DocumentTable";
import { DocumentVerificationItem } from "../models/types";

export function transformDocumentData(
  data: DocumentVerificationItem[]
): DocumentRecord[] {
  return data.map((item) => ({
    id: item.id,
    document_type: item.document_type,
    issuance_date: formatDate(item.issuance_date),
    submittedBy:
      `${item.creator?.first_name} ${item.creator?.last_name}` || "N/A",
    created_date: formatDate(item.created_datetime),
    status: item.status === "PASSED" ? "Passed" : "Failed",
  }));
}
