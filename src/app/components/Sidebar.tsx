"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`${
        isSmallScreen ? "hidden" : "block"
      } bg-primary-white flex h-[calc(100vh-80px)] w-20 flex-col items-center justify-start space-y-8 rounded-[40px] py-7`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ECEAFF]">
        <Image
          src="/events_logo_colored.svg"
          alt="Events logo"
          width={24}
          height={24}
        />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F9FB]">
        <Image
          src="/favorites_logo.svg"
          alt="Favorites logo"
          width={28}
          height={25}
        />
      </div>
    </div>
  );
};

export default Sidebar;
