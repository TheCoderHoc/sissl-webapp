"use client ";
import { event_details } from "@/public/images";
import EventTableHeaderWithSearch from "./EventTableSearch";
import { useState } from "react";
import { DataTable } from "@/components/shared/DataTable";
import { guestColumns } from "../columns/guest-columns";
const ManageGuests = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 px-4 text-white w-[60%] mb-8">
        {/* Total No of Guests Card */}
        <div className="bg-black rounded-lg px-6 py-8 shadow-md">
          <p className="text-white text-base mb-6">Total No of Guest</p>
          <div className="flex justify-between items-center bg-[#1D1D1D] px-6 py-6 rounded-lg">
            <div>
              <p className="text-xl font-semibold">500</p>
              <p className="text-sm text-white/60">Guest</p>
            </div>
            <img
              src={event_details.src} // Replace with your actual icon if different
              alt="Guest Icon"
              className="w-10 h-10"
            />
          </div>
        </div>

        {/* Approve Guest Card */}
        <div className="bg-black rounded-lg px-6 py-8 shadow-md">
          <p className="text-white text-base mb-6">Approve Guest</p>
          <div className="flex justify-between items-center bg-[#1D1D1D] px-6 py-6 rounded-lg">
            <div>
              <p className="text-xl font-semibold">100</p>
              <p className="text-sm text-white/60">Approve Guest</p>
            </div>
            <img
              src={event_details.src} // Reuse same icon or update as needed
              alt="Guest Icon"
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
      <EventTableHeaderWithSearch
        title="Guest List"
        search={search}
        setSearch={setSearch}
      />

      <DataTable columns={guestColumns} data={[]} />
    </div>
  );
};
export default ManageGuests;
