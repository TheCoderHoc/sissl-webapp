"use client";

import { qr_code } from "@/public/images";

const EventOverview = () => {
  return (
    <div className="grid md:grid-cols-[65%_35%] gap-6 py-8 px-4">
      {/* SUMMARY CARD */}
      <div className="bg-black rounded-lg py-12 px-8 flex text-sm text-white/80">
        <div className="grid grid-cols-3 px-6 gap-y-16 gap-x-28 text-white/80 text-sm items-center justify-center">
          <div>
            <p className="font-semibold opacity-60">Event Name:</p>
            <p>Josh Birthday</p>
          </div>
          <div>
            <p className="font-semibold opacity-60">Created by:</p>
            <p>Inniverty Ltd</p>
          </div>
          <div>
            <p className="font-semibold opacity-60">Event type:</p>
            <p>Celebration event</p>
          </div>
          <div>
            <p className="font-semibold opacity-60">Event status:</p>
            <p>Approve</p>
          </div>
          <div>
            <p className="font-semibold opacity-60">Event date:</p>
            <p>10 – June – 2025</p>
          </div>
          <div>
            <p className="font-semibold opacity-60">Event time:</p>
            <p>10:00am</p>
          </div>
          <div>
            <p className="font-semibold opacity-60">Event location:</p>
            <p>Full address of the event</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold opacity-60">Country:</p>
            <p>Nigeria</p>
          </div>
          <div>
            <p className="font-semibold opacity-60">Event description:</p>
            <p>description about event here</p>
          </div>
          <div>
            <p className="font-semibold opacity-60">Event wishlist:</p>
            <p>
              <a className="text-yellow-400" href="#">
                View event Wishlist
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ADMIN REPORT + QR CODE */}
      <div className="h-full flex flex-col justify-between rounded-lg text-white/80 text-sm">
        {/* Top Section */}
        <div className="bg-black p-6 rounded-lg flex items-center justify-center text-center h-[52%]">
          <div>
            <p className="font-semibold">Admin report</p>
            <p className="mt-2 text-white/50">No report from the admin</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-6 rounded-lg h-[45%]">
          <p>Event Bar Code</p>
          <div className=" bg-black p-6 mt-2 flex items-center justify-center">
            <img src={qr_code.src} alt="QR Code" className="w-32 h-32 mt-4" />
          </div>
        </div>
      </div>

      {/* EVENT BANNER */}
      <div className="col-span-1 bg-black p-6 rounded-lg text-white/40 h-[232px] flex items-center justify-center text-center">
        <div>
          <p>Event Banner</p>
          <p className="mt-2">Event banner will appear here</p>
        </div>
      </div>
    </div>
  );
};
export default EventOverview;
