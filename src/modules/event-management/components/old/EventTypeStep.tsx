"use client";

import { useState } from "react";
import { eventTypes } from "../../constants/event-types";
import EventTypeCard from "./EventTypeCard";

export default function EventTypeStep() {
  const [selectedEventType, setSelectedEventType] = useState("");

  return (
    <div className="space-y-5">
      <h2 className="font-medium">Choose event type</h2>

      <div className="grid grid-cols-2 gap-5">
        {eventTypes.map(({ title, photo, url }, i) => (
          <EventTypeCard
            key={i}
            title={title}
            photo={photo}
            url={url}
            isSelected={selectedEventType === title}
            onChangeEventType={(value) => setSelectedEventType(value)}
          />
        ))}
      </div>
    </div>
  );
}
