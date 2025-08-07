import React from "react";

interface Event {
  title: string;
  link: string;
}

interface EventCardProps {
  topEvent?: Event;
  bottomEvent?: Event;
}

export default function EventCard({ topEvent, bottomEvent }: EventCardProps) {
  return (
    <div className="bg-[#0F0F0F] p-[69px] shadow-lg rounded-sm md:w-full h-[423px] flex flex-col justify-between">
      {/* Top centered content */}
      {topEvent && (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h3 className="text-[#FFE500] text-[18px] font-medium">
            {topEvent.title}
          </h3>
          <a
            href={topEvent.link}
            className="text-[12px] text-[#B0B0B0] hover:underline mt-1"
          >
            View details
          </a>
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-gray-600 my-4" />

      {/* Bottom centered content */}
      {bottomEvent && (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h3 className="text-[#FFE500] text-[18px] font-medium">
            {bottomEvent.title}
          </h3>
          <a
            href={bottomEvent.link}
            className="text-[12px] text-[#B0B0B0] hover:underline mt-1"
          >
            View details
          </a>
        </div>
      )}
    </div>
  );
}
