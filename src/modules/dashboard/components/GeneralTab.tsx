import useGetUserProfile from "@/modules/auth/controllers/getUserProfileController";
import DashboardItem from "./DashboardItem";

export default function GeneralTab() {
    const { data } = useGetUserProfile();

    if (!data) return null;

    const {
        company: {
            name,
            reg_number,
            date_of_establishment,
            company_address,
            proof_of_address,
            cac_document,
        },
    } = data.data;

    return (
        <div className="space-y-10">
            <h2 className="text-lg font-medium">General</h2>

            <div className="space-y-20">
                <DashboardItem title="Business Name" description={name} />

                <DashboardItem
                    title="Registration Number"
                    description={reg_number}
                />

                <DashboardItem
                    title="Date of Establishment"
                    description={date_of_establishment}
                />

                <DashboardItem
                    title="Company Address"
                    description={company_address}
                />

                <DashboardItem
                    title="Proof of Address"
                    description={proof_of_address}
                />

                <DashboardItem
                    title="CAC Document"
                    description={cac_document}
                />
            </div>
        </div>
    );
}
