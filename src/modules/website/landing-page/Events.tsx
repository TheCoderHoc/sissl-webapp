import React from "react";
import EventCard from "./EventsCard";

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
    <section className="bg-black text-white px-6 md:px-16 py-24">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
          Discover Upcoming <br />
          & Past Public <span className="text-[#FFE500]">Events</span>
        </h1>
        <p className="text-sm md:text-base text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
          Stay informed about events hosted through SISSL—<br className="hidden md:inline-block" />
          explore what’s coming up or revisit past highlights.
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left: Create Event */}
        <div className="lg:w-1/3 flex flex-col justify-between px-6 py-10 bg-transparent">
          <h2 className="text-white text-2xl font-medium leading-snug mb-10">
            Create Upcoming <br /> Event
          </h2>
          <button className="bg-[#FFE500] text-black px-6 py-3 rounded-md font-medium w-fit">
            Create event
          </button>
        </div>

        {/* Right: Event Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pairedEvents.map(([topEvent, bottomEvent], index) => (
            <EventCard
              key={index}
              topEvent={topEvent}
              bottomEvent={bottomEvent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
