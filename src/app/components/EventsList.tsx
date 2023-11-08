import Image from "next/image";
import React from "react";
import EventListItem from "../constants/EventListItem";
import FavoritesLogo from "../constants/FavoritesLogo";
import EventListHeader from "../constants/EventListHeader";

const EventsList = () => {
  return (
    <div className="col-span-2 w-full space-y-4 xl:max-w-[850px]">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-xl font-semibold">Events List</h3>
        <div className="bg-primary-white flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#E2DFF8]">
          <Image src="/filter_logo.svg" alt="Filter" width={22} height={14} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <EventListHeader />
        <div className="space-y-4">
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
        </div>
      </div>
    </div>
  );
};

export default EventsList;
