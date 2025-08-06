import { DataTable } from "@/components/shared/DataTable";
import { activityColumns } from "@/modules/dashboard/columns/activities";

export default function ActivityList() {
    return (
        <div>
            <p>Showing all activities for Dave Wilson</p>

            <DataTable columns={activityColumns} data={[]} pagination={false} />
        </div>
    );
}
