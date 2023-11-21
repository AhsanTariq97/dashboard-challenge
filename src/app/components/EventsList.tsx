"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import EventListItem from "../constants/EventListItem";

const EventsList = () => {
  const [events, setEvents] = useState([]);

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
      [...prevEvents].sort((a, b) => a.title.localeCompare(b.title)),
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
        <div className="space-y-4">
          {events.map((event, index) => (
            <EventListItem event={event} index={index + 1} />
          ))}
          {/* <EventListItem /> */}
        </div>
      </div>
    </div>
  );
};

export default EventsList;
