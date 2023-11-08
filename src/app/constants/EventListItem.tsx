"use client";

import React, { useState } from "react";
import FavoritesLogo from "./FavoritesLogo";

const EventListItem = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="bg-primary-white flex min-w-fit items-center justify-between rounded-2xl border border-[#F3F3F3] px-5 py-4 xl:max-w-[850px]">
      <h3 className="min-w-[40px] font-extrabold">01</h3>
      <p className="min-w-[180px] font-medium">Web Development</p>
      <p className="min-w-[80px] text-sm font-bold">12:00AM</p>
      <p className="min-w-[120px] text-sm font-bold">Thu 2 Nov</p>
      <p className="min-w-[200px] text-sm font-medium">
        Bahria Intellectual Village
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
