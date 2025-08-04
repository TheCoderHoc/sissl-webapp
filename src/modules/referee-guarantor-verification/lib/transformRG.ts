import { StaffVerificationResponse } from "@/modules/company/staff-verification/models/types";
type RGVerificationRow = {
    id?: string;
    staff_name: string;
    guarantor_name: string;
    status: string;
};

export function transformRGVerificationData(
    data: StaffVerificationResponse[]
): RGVerificationRow[] {
    return data.map((item) => {
        const staffName = `${item.first_name} ${item.last_name}`;
        const guarantorName =
            item.guarantors && item.guarantors.length > 0
                ? item.guarantors.map((g) => g.name).join(", ")
                : "No guarantor";

        return {
            id: item.id,
            staff_name: staffName,
            guarantor_name: guarantorName,
            status: item.status?.toUpperCase() || "UNKNOWN",
        };
    });
}
