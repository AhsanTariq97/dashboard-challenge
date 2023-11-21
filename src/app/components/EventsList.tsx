"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import EventListItem from "../constants/EventListItem";

const EventsList = () => {
  const [events, setEvents] = useState<EventProp[] | []>([]);

  useEffect(() => {
    // Store in env
    const apiKey = "kBJqVciva_Ba7jfTjzvfGVwzkyiPE3PyToAbfKU1";

    const apiUrl = `https://api.predicthq.com/v1/events/?country=PK&limit=20&sort=start`;

    // Make the API request
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setEvents(data.results))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  console.log("events", events);

  const sortByName = () => {
    setEvents((prevEvents) =>
      [...prevEvents].sort((a: EventProp, b: EventProp) =>
        a.title.localeCompare(b.title),
      ),
    );
  };

  return (
    <div className="col-span-2 w-full space-y-4 xl:max-w-[850px]">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-xl font-semibold">Events List</h3>
        <div className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#E2DFF8] bg-primary-white">
          <Image src="/filter_logo.svg" alt="Filter" width={22} height={14} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex min-w-fit items-center justify-between border-b border-[#6A6A6A] px-5 pb-2 font-semibold xl:max-w-[850px]">
          <h4 className="min-w-[40px]">#</h4>
          <h4 className="min-w-[180px]" onClick={sortByName}>
            NAME
          </h4>
          <h4 className="min-w-[80px]">TIME</h4>
          <h4 className="min-w-[120px]">DATE</h4>
          <h4 className="min-w-[200px]">LOCATION</h4>
          <div className="flex min-w-[40px] items-center justify-center"></div>
        </div>
        <div className="max-h-96 space-y-4 overflow-y-scroll">
          {events.map((event, index) => (
            <EventListItem event={event} key={event.id} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsList;

type EventProp = {
  relevance: number;
  id: string;
  title: string;
  description: string;
  category: string;
  labels: string[];
  rank: number;
  local_rank: number | null;
  phq_attendance: number | null;
  entities: {
    entity_id: string;
    name: string;
    type: string;
    category: string;
    labels: string[];
    description: string;
    formatted_address: string;
  }[];
  duration: number;
  start: string;
  end: string;
  updated: string;
  first_seen: string;
  timezone: string | null;
  location: [number, number];
  geo: {
    geometry: {
      coordinates: [number, number];
      type: string;
    };
  };
  scope: string;
  country: string;
  place_hierarchies: string[][];
  state: string;
  brand_safe: boolean;
  private: boolean;
};
