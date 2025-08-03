// components/EventCard.js
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
  <div className="bg-gray-500 dark:bg-bg_card-hover p-[69px] shadow-lg rounded-sm md:w-full h-[423px] flex flex-col justify-between">
  {/* Top centered content */}
  {topEvent && (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <h3 className="text-si_yellow text-2xl font-medium">
        {topEvent.title}
      </h3>
      <a
        href={topEvent.link}
        className="text-[14px] text-gray-800 dark:text-white hover:underline mt-1"
      >
        View details
      </a>
    </div>
  )}

  {/* Divider */}
  <div className="border-t border-gray-300 dark:border-gray-600 my-4" />

  {/* Bottom centered content */}
  {bottomEvent && (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <h3 className="text-si_yellow text-2xl font-medium">
        {bottomEvent.title}
      </h3>
      <a
        href={bottomEvent.link}
        className="text-[14px] text-gray-800 dark:text-white hover:underline mt-1"
      >
        View details
      </a>
    </div>
  )}
</div>

  );
}
