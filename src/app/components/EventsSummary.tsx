import React from "react";
import EventsSummaryBox from "../constants/EventsSummaryBox";

const EventsSummary = () => {
  return (
    <div className="flex items-center justify-between space-x-2 md:space-x-10">
      <EventsSummaryBox />
      <EventsSummaryBox />
      <EventsSummaryBox />
    </div>
  );
};

export default EventsSummary;
