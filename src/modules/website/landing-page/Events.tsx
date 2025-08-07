import React from "react";
import EventCard from "./EventsCard"; // Adjust the import path if needed

const events = [
  { title: "Tech Submit 2025", link: "#" },
  { title: "FigmaConfig 2025", link: "#" },
  { title: "Google Submit 2025", link: "#" },
  { title: "Github Submit 2025", link: "#" },
];

function chunkEvents<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function Events() {
  const pairedEvents = chunkEvents(events, 2);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white px-8 md:px-16 py-40">
      {/* Header */}
      <div className="text-center mb-[78px]">
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
          Discover Upcoming <br />& Past Public{" "}
          <span className="text-si_yellow">Events</span>
        </h1>
        <p className="text-base text-gray-700 dark:text-gray-400 mt-3 max-w-xl mx-auto">
          Stay informed about events hosted through SISSI—
          <br className="hidden lg:inline-block" />
          explore what’s coming up or revisit past highlights
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto overflow-hidden">
        {/* Left: Create Event */}
        <div className="p-[69px]">
          <h2 className="text-black dark:text-white text-2xl font-medium mb-6">
            Create Upcoming <br /> Event
          </h2>
          <button className="bg-primary text-black px-6 py-2 mt-20 rounded-sm font-medium">
            Create event
          </button>
        </div>

        {/* Right: Event Cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[21px]">
            {pairedEvents.map(([topEvent, bottomEvent], index) => (
              <EventCard
                key={index}
                topEvent={topEvent}
                bottomEvent={bottomEvent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
