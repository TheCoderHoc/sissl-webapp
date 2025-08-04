"use client";

import DashboardHeading from "@/components/shared/DashboardHeading";
import IdentityCenterIntro from "@/components/shared/VerificationsOptions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DataTable } from "@/components/shared/DataTable";
import { eventColumns } from "@/modules/event-management/columns/event-columns";
import { EVENT_MANAGEMENT_ROUTES } from "@/constants/routes";
import { event_overview2 } from "../../../../public/images";
import TableHeaderWithSearch from "@/components/shared/TableSearch";

const EventManagementHome = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-6">
      <DashboardHeading text="Welcome to SISSL Event management. We provide tools to help you host and manage event" />
      <IdentityCenterIntro
        title="Host Event"
        description="Host your next event here"
        primaryButtonText="Create Event"
        onPrimaryClick={() => router.push(EVENT_MANAGEMENT_ROUTES.CREATE_EVENT)}
        image={event_overview2.src}
        largeImage
      />

      <TableHeaderWithSearch
        title="My Events"
        search={search}
        setSearch={setSearch}
        searchPlaceholder="Search for event"
        filterText="filter event type"
      />

      <DataTable columns={eventColumns} data={[]} />
    </div>
  );
};
export default EventManagementHome;
