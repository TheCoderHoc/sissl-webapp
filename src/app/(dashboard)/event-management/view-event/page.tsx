"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import EventOverview from "@/modules/event-management/components/EventOverview";
import ManageGuests from "@/modules/event-management/components/ManageGuests";
import EventHeader from "@/modules/event-management/components/EventHeader";
export default function EventDetailsPage() {
  const [tab, setTab] = useState("overview");

  const isOverview = tab === "overview";

  return (
    <div className="py-10">
      {/* HEADER */}
      <EventHeader />
      {/* TAB SWITCHER */}
      <div className="border-b border-white/10 mt-4">
        <div className="flex gap-8">
          <button
            onClick={() => setTab("overview")}
            className={cn(
              "pb-2 text-sm font-medium",
              isOverview
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-white/60"
            )}
          >
            Overview
          </button>
          <button
            onClick={() => setTab("guests")}
            className={cn(
              "pb-2 text-sm font-medium",
              !isOverview
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-white/60"
            )}
          >
            Manage Guests
          </button>
        </div>
      </div>

      {/* OVERVIEW SECTION */}
      {isOverview && <EventOverview />}

      {/* GUEST TAB  */}
      {!isOverview && <ManageGuests />}
    </div>
  );
}
