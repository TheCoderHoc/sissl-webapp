import { IdentityVerificationItem, VerificationRow } from "../models/types";

export function transformVerificationData(
  data: IdentityVerificationItem[]
): VerificationRow[] {
  return data.map((item) => ({
    id: item.id,
    customer_name: `${item.first_name} ${item.last_name}`,
    id_type: item.id_type,
    id_number: item.id_number,
    submittedBy:
      `${item.creator?.first_name} ${item.creator?.last_name}` || "N/A",
    created_date: new Date(item.created_datetime).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    status: item.status === "VERIFIED" ? "Passed" : "Failed",
  }));
}
