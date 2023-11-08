"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-primary-white flex w-full items-center justify-start gap-4 px-6 py-4">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={35}
          height={35}
          className="xl:h-12 xl:w-12"
        />
        <div className="bg-primary-background flex w-full max-w-xl items-center justify-start rounded-full px-5 py-1.5 xl:py-3">
          <Image
            src="/search_logo.svg"
            alt="search logo"
            width={24}
            height={24}
          />
          <input
            type="text"
            placeholder="Search events..."
            className="bg-primary-background rounded-full pl-2 outline-none"
          />
        </div>
        <Image
          src="/hamburger.svg"
          alt="search logo"
          width={27}
          height={18}
          className="ml-auto xl:hidden"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      {toggle && (
        <div className="fixed left-0 top-0 z-10 h-screen w-screen space-y-7 bg-[#5041BC]">
          <div className="flex w-full items-center justify-between gap-4 px-6 py-4">
            <Image
              src="/logo_white.svg"
              alt="search logo"
              width={35}
              height={35}
            />
            <Image
              src="/close_logo.svg"
              alt="search logo"
              width={20}
              height={20}
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
          <ul className="flex w-full flex-col items-center justify-start space-y-3 px-4 text-center text-3xl font-semibold text-white">
            <li className="w-full border-b border-b-white pb-3">
              <h2 className="">Dashboard</h2>
            </li>
            <li className="w-full border-b border-b-white pb-3">
              <h2>Favorite Events</h2>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
