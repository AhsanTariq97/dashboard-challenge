import React from "react";
import FavoritesLogo from "./FavoritesLogo";

const UpcomingEventCard = () => {
  return (
    <div className="flex min-w-[174px] items-center justify-between rounded-xl border border-[#F3F3F3] px-3 py-2 xl:max-w-[332px] xl:rounded-2xl">
      <div className="flex flex-col items-start justify-center space-y-1">
        <h4 className="text-xs text-[#3D4756]">Web Development</h4>
        <p className="text-[9px] text-[#797D8C]">Thu 2 Nov, 12:00AM</p>
      </div>
      <FavoritesLogo
        color="#5041BC"
        width={15}
        height={15}
        className="xl:h-5 xl:w-5"
      />
    </div>
  );
};

export default UpcomingEventCard;
