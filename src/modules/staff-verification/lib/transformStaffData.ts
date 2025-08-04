import { StaffVerificationResponse, VerificationRow } from "../models/types";

export function transformStaffVerificationData(
  data: StaffVerificationResponse[]
): VerificationRow[] {
  return data.map((item) => {
    const methods = item.verification_method || [];
    const status = item.status?.toUpperCase() || "";
    const phoneStatus = item.phone_status?.toUpperCase() || "";

    return {
      id: item.id,
      staff_name: `${item.first_name} ${item.last_name}`,
      phone_number: item.phone_number,
      verification_type: methods.join(", "),
      bvn: status === "VERIFIED" || status === "PASSED" ? "✓" : "",
      phone: phoneStatus === "VERIFIED" || phoneStatus === "PASSED" ? "✓" : "",
      ID: methods.includes("ID_NUMBER") ? "✓" : "",
      status: item.status,
    };
  });
}
