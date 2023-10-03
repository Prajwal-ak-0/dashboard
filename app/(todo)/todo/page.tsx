"use client";

import { Heading } from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useModal } from "@/hooks/useModalStore";
import useSideBar from "@/hooks/useSideBar";
import useSideMenu from "@/hooks/useSideMenu";
import { CheckSquare, Plus, Search } from "lucide-react";
import React from "react";

const TodoPage = () => {
  const sidebar = useSideBar();
  const sidemenu = useSideMenu();
  const modal = useModal();

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  

  return (
    <>
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
          <div className="flex pt-2  mb-auto">
            <div className="max-md:-ml-10   ">
              <Heading
                icon={CheckSquare}
                title="Manage your tasks"
                description={getCurrentDate()}
              />
            </div>
            <div className="flex px-2 md:px-4 cursor-pointer transform hover:scale-110 transition-transform duration-300 my-auto">
              <Input
                className="max-sm:hidden mr-1"
                type="email"
                placeholder="Searc"
              />
              <Search
                className="my-auto text-gray-600 hover:text-blue-500"
                size={25}
              />
            </div>
            <div className="my-auto max-md:-mr-4">
              <Button onClick={modal.onOpen} className="" size={"btn"} variant={"btn"}>
                <Plus className="rounded-full bg-neutral-100" size={18} />
                Task
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
