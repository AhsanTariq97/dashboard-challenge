import Image from "next/image";
import React from "react";

const EventOfMonthCard = () => {
  return (
    <div className="bg-primary-white flex w-full items-start justify-between space-x-4 rounded-xl p-2.5">
      <div className="flex flex-col items-start justify-center">
        <h3 className="font-bold text-[#5041BC]">Web Development</h3>
        <p className="text-xs">
          Category: <span className="font-semibold">AI</span>
        </p>
        <div className="flex items-center justify-start space-x-2">
          <Image src="/location.svg" alt="" width={13} height={16} />
          <p className="text-xs">Bahria Intellectual Village</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center text-right">
        <Image src="/people.svg" alt="" width={74} height={28} />
        <p className="text-xs">Thu 2 Nov 2023 12:00am</p>
      </div>
    </div>
  );
};

export default EventOfMonthCard;
