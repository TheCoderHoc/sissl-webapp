import { DataTable } from "@/components/shared/DataTable";
import { activityColumns } from "../columns/activities";
import useUserStore from "@/stores/userStore";

export default function ActivityList() {
    const {
        user: { first_name, last_name },
    } = useUserStore();

    return (
        <div>
            <p>
                Showing all activities for {first_name} {last_name}
            </p>

            <DataTable columns={activityColumns} data={[]} pagination={false} />
        </div>
    );
}
