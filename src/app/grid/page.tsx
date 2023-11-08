import React from "react";

const Grid = () => {
  return (
    <div className="h-screen grid-cols-3 grid-rows-[12] md:grid">
      <div className="row-start-1 row-end-[10] h-full w-full border bg-gray-300">
        1
      </div>
      <div className="order-first col-span-2 row-start-1 row-end-[11] h-full w-full border bg-gray-400">
        2
      </div>
      <div className="col-span-2 row-span-2 h-full w-full border bg-gray-500">
        3
      </div>
      <div className="row-span-3 row-start-[10] h-full w-full border bg-gray-600">
        4
      </div>
    </div>
  );
};

export default Grid;
