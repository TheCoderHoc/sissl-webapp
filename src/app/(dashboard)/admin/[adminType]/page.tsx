import { DataTable } from "@/components/shared/DataTable";
import GreetUser from "@/components/shared/GreetUser";
import { Button } from "@/components/ui/button";
import ChartLineLinear from "@/components/widgets/LineChart";
import { userColumns } from "@/modules/admin/columns/user-column";
import AnalyticCard from "@/modules/admin/components/AnalyticCard";
import { Bell } from "lucide-react";
import Image from "next/image";

const users = [
    {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        type: "Company",
        date: "2025-07-25",
        status: "Active",
    },
    {
        name: "Brian Smith",
        email: "brian.smith@example.com",
        type: "Individual",
        date: "2025-06-18",
        status: "Inactive",
    },
    {
        name: "Chloe Williams",
        email: "chloe.williams@example.com",
        type: "Company",
        date: "2025-08-01",
        status: "Pending",
    },
    {
        name: "Daniel Osei",
        email: "daniel.osei@example.com",
        type: "Individual",
        date: "2025-05-10",
        status: "Suspended",
    },
    {
        name: "Emily Zhang",
        email: "emily.zhang@example.com",
        type: "Company",
        date: "2025-04-30",
        status: "Active",
    },
];

export default function WriterAdminHomePage() {
    return (
        <section className="space-y-10">
            <GreetUser />

            <p>
                Welcome to SISSL Dashboard, Get familiar with the dashboard,
                here are things you can do
            </p>

            <div className="grid grid-cols-[2fr_1fr] gap-10">
                <div className="space-y-5">
                    <div className="flex items-center justify-between">
                        <h2>No Of Users</h2>

                        <Button
                            className="bg-[#F5E9001A] text-primary"
                            size="lg"
                        >
                            Last 7 Months
                        </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <AnalyticCard
                            label="Total Registered Users"
                            value={345}
                            icon="/icons/success-chiseled.svg"
                        />

                        <AnalyticCard
                            label="Pending Reviews"
                            value={34}
                            icon="/icons/warning-glow.svg"
                        />

                        <AnalyticCard
                            label="Rejected Users"
                            value={27}
                            icon="/icons/rejected-glow.svg"
                        />
                    </div>

                    <ChartLineLinear />
                </div>

                <div className="space-y-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2>Recent Activity Feed</h2>
                            <p>Notifications</p>
                        </div>
                        <Button>See More</Button>
                    </div>

                    <hr className="border-gray-700" />

                    <Image
                        src="/images/activity-feed.svg"
                        alt="Activity Feed"
                        width={143}
                        height={143}
                        className="block mx-auto"
                    />

                    <ul className="space-y-7">
                        {[1, 2, 3].map((key) => (
                            <li key={key} className="flex items-center gap-5">
                                <Button
                                    size="icon"
                                    className="bg-blue-500 rounded-full size-[48px]"
                                >
                                    <Bell />
                                </Button>

                                <div>
                                    <h3>New User Onboarded</h3>
                                    <p>Click to view user</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <DataTable columns={userColumns} data={users} />
        </section>
    );
}
