"use client";

import React, { useEffect, useState } from "react";
import FavoritesLogo from "./FavoritesLogo";
import { formatTime12Hour } from "../helper/timeFn";
import { formatDateAndDay } from "../helper/dateFn";

const EventListItem = ({ event, index }: EventListItemProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    event.entities.map((entity) =>
      entity.type === "venue"
        ? setLocation(entity.formatted_address)
        : setLocation(entity.formatted_address),
    );
  }, [event.entities]);

  return (
    <div className="flex min-w-fit items-center justify-between rounded-2xl border border-[#F3F3F3] bg-primary-white px-5 py-4 xl:max-w-[850px]">
      <h3 className="min-w-[40px] max-w-[40px] font-extrabold">
        {index.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
      </h3>
      <p className="min-w-[180px] max-w-[180px] font-medium">{event.title}</p>
      <p className="min-w-[80px] max-w-[80px] text-sm font-bold">
        {formatTime12Hour(event.start)}
      </p>
      <p className="min-w-[120px] max-w-[120px] text-sm font-bold">
        {formatDateAndDay(event.start)}
      </p>
      <p className="min-w-[200px] max-w-[200px] text-sm font-medium">
        {location}
      </p>
      <div className="flex min-w-[40px] cursor-pointer items-center justify-center">
        <FavoritesLogo
          fill={isFavorite ? "#ED5656" : "transparent"}
          color={isFavorite ? "#ED5656" : "#5041BC"}
          width={20}
          height={18}
          onClick={() => setIsFavorite((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default EventListItem;

export type EventListItemProps = {
  index: number;
  event: {
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
};
