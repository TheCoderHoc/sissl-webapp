"use client";

import Tabs, { TabProps } from "@/components/shared/Tabs";
import { useSearchParams } from "next/navigation";
import CelebrationEvent from "./event_types/celebration-event/page";
import TicketBaseEvent from "./event_types/ticket-base/page";
import HeadCountEvent from "./event_types/head-count/page";
import HighProfileEvent from "./event_types/high-profile/page";
const tabItems: TabProps[] = [
  {
    key: "1",
    label: "Celebration event",
    children: <CelebrationEvent />,
  },

  {
    key: "2",
    label: "Ticket base",
    children: <TicketBaseEvent />,
  },

  {
    key: "3",
    label: "Head count event",
    children: <HeadCountEvent />,
  },

  {
    key: "4",
    label: "High profile event",
    children: <HighProfileEvent />,
  },
];

export default function ProfileSettingPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  return (
    <div className="space-y-10">
      <Tabs tabs={tabItems} value={tabParam || "1"} />
    </div>
  );
}
