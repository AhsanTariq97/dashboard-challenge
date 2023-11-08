import React from "react";

const EventsSummaryBox = () => {
  return (
    <div className="bg-primary-white w-1/3 min-w-[120px] max-w-[260px] space-y-2.5 rounded-2xl border border-[#F3F3F3] px-4 pb-8 pt-6 text-center md:w-full md:px-6 md:py-6 md:text-left">
      <h4 className="text-sm font-semibold">All Events</h4>
      <p className="text-3xl font-bold">2.10k</p>
    </div>
  );
};

export default EventsSummaryBox;
