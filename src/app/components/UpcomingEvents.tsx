import React from "react";
import UpcomingEventCard from "../constants/UpcomingEventCard";

const UpcomingEvents = () => {
  return (
    <div className="bg-primary-white relative col-span-1 flex w-full flex-col items-start justify-start space-y-4 rounded-[20px] px-4 pt-4 xl:px-6">
      <h3>Upcoming Events</h3>
      <div className="grid w-full grid-cols-2 gap-3 xl:grid-cols-1">
        <UpcomingEventCard />
        <UpcomingEventCard />
        <UpcomingEventCard />
        <UpcomingEventCard />
        <UpcomingEventCard />
        <UpcomingEventCard />
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-white opacity-50 xl:hidden"></div>
    </div>
  );
};

export default UpcomingEvents;
