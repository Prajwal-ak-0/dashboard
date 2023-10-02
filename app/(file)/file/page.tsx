"use client";

import useSideBar from "@/hooks/useSideBar";
import useSideMenu from "@/hooks/useSideMenu";
import React from "react";

const FilePage = () => {
  const sidebar = useSideBar();
  const sidemenu = useSideMenu();
  return (
    <div
      className={` 
            ${
              sidebar.isOpen
                ? "sm:ml-[175px] md:w-[78%] sm:w-[70%] "
                : "sm:ml-[70px] md:w-[90%] sm:w-[85%]"
            } 
            ${
              sidemenu.isOpen
                ? "sm:ml-[70px] md:w-[90%] sm:w-[85%]"
                : "sm:ml-[170px] md:w-[78%] sm:w-[70%] "
            } 
        `}
    >
      <div
        className={`overflow-auto mt-4
          flex flex-col border-2 border-neutral-200 fixed sm:h-[80%] rounded-md max-sm:w-full items-center justify-center shadow-md 
          ${
            sidebar.isOpen ? " md:w-[78%] sm:w-[70%] " : "md:w-[90%] sm:w-[85%]"
          } 
          ${
            sidemenu.isOpen
              ? " md:w-[90%] sm:w-[85%]"
              : "md:w-[78%] sm:w-[70%] "
          } 
       `}
      >
        kjb k meenakshi prajwal preetham 
      </div>
    </div>
  );
};

export default FilePage;
