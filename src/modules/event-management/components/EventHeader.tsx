"use client";

import { CalendarDays, Copy, Link2, MapPin, UploadIcon } from "lucide-react";

import { view_event, view_event_bg } from "@/public/images";

const EventHeader = () => {
  return (
    <div>
      <div className="relative rounded-lg bg-[#0C0406] pl-14  gap-7 text-white  flex justify-between items-center">
        <img
          src={view_event_bg.src}
          className="absolute bottom-0 left-0 w-full"
          alt="wave"
        />
        <div className="flex items-center gap-12 w-[50%] justify-between">
          <h1 className="text-[42px] font-semibold">JOSH Birthday</h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70 w-[]">
            <span className="flex items-center gap-1 bg-black px-6 py-4 rounded-lg">
              <CalendarDays className="h-4 w-4" /> Saturday, April 12, 2025 at
              7:30pm
            </span>
            <span className="flex items-center gap-1 bg-black px-6 py-4 rounded-lg">
              <MapPin className="h-4 w-4" /> Lagos state
            </span>
          </div>
        </div>
        <div className="img w-[40%]">
          <img src={view_event.src} alt="illustration" className="w-[]" />
        </div>
      </div>

      <div className="flex  items-center justify-between gap-2 bg-black my-4 py-6 px-8 rounded-lg">
        <div className="flex items-center gap-6 w-[65%]">
          <p className="flex items-center gap-3 ">
            <Link2 className="-rotate-45" />
            Event Link
          </p>

          <span className="bg-yellow-400 h-2 w-8 rounded-full" />
          <span className="text-base">joshbirthday.sissl</span>
          <span className=" ml-8 bg-[#00CB581A]/10 w-[104px] h-[30px] text-center  text-base px-2 py-1 rounded-full text-[#00CB58]">
            Approved
          </span>
        </div>
        <div className="flex justify-between items-center gap-3 text-yellow-400 text-sm w-[20%]">
          <button className="flex gap-2">
            <Copy />
            Copy Link
          </button>
          <button className="flex gap-2">
            <UploadIcon />
            Share barcode
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventHeader;
