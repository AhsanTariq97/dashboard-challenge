import Image from "next/image";
import React from "react";
import EventOfMonthCard from "../constants/EventOfMonthCard";

const EventOfMonth = () => {
  return (
    <div className="relative flex flex-col items-start justify-center space-y-2 rounded-2xl bg-[#4533C9] p-3">
      <h1 className="text-2xl font-bold text-white">
        Event of <br />
        the month
      </h1>
      <Image
        src="/event_of_month.svg"
        alt=""
        width={70}
        height={70}
        className="absolute right-4 top-0"
      />
      <EventOfMonthCard />
    </div>
  );
};

export default EventOfMonth;
