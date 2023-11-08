import React from "react";

const EventListHeader = () => {
  return (
    <div className="flex min-w-fit items-center justify-between border-b border-[#6A6A6A] px-5 pb-2 font-semibold xl:max-w-[850px]">
      <h4 className="min-w-[40px]">#</h4>
      <h4 className="min-w-[180px]">NAME</h4>
      <h4 className="min-w-[80px]">TIME</h4>
      <h4 className="min-w-[120px]">DATE</h4>
      <h4 className="min-w-[200px]">LOCATION</h4>
      <div className="flex min-w-[40px] items-center justify-center"></div>
    </div>
  );
};

export default EventListHeader;
