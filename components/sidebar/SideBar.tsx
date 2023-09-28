"use client"

import Image from "next/image";
import React, { useCallback } from "react";
import SideItem from "./SideItem";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import {
  Bot,
  CalendarDays,
  ChevronLeft,
  File,
  LayoutGrid,
  ListTodo,
  Mail,
  MessageSquare,
} from "lucide-react";
import useSideBar from "@/hooks/useSideBar";
import useSideMenu from "@/hooks/useSideMenu";

export const items = [
  {
    id: "1",
    name: "Dashboard",
    url: "/dashboard",
    icon: LayoutGrid,
  },
  {
    id: "2",
    name: "Chat",
    url: "/chat",
    icon: MessageSquare,
  },
  {
    id: "3",
    name: "Calender",
    url: "/calender",
    icon: CalendarDays,
  },
  {
    id: "4",
    name: "Todo",
    url: "/todo",
    icon: ListTodo,
  },
  {
    id: "5",
    name: "Chat-bot",
    url: "/chatbot",
    icon: Bot,
  },
  {
    id: "6",
    name: "Mail",
    url: "/mail",
    icon: Mail,
  },
  {
    id: "7",
    name: "File-manager",
    url: "/file",
    icon: File,
  },
];

const SideBarMenu = () => {
  const sidebar=useSideBar();
  const sidemenu=useSideMenu();

  const toggle = useCallback(() => {
    if (sidebar.isOpen) {
      sidebar.onClose(); // Close the sidebar
      sidemenu.onOpen(); // Open the sidemenu
    } else {
      sidebar.onOpen(); // Open the sidebar
      sidemenu.onClose(); // Close the sidemenu
    }
  }, [sidebar, sidemenu]);

  return (
    <>
    <div>
      <div className="flex mt-6 hover:scale-110">
        <Image
          src="/logo.png"
          alt="Logo"
          width={24}
          height={24}
          className="w-12 ml-1 h-12 rounded-full transition-transform transform  hover:shadow-lg cursor-pointer"
        />
        <h1 className="text-2xl ml-2 mt-2 font-bold text-center text-gray-800 dark:text-white mb-4 cursor-pointer transition-colors transform hover:glow">
          KIBITZIN
        </h1>
      </div>

      <div className="flex flex-row">
        <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-[144px] relative ml-1  mt-2 " />
        <ChevronLeft size={20} onClick={toggle} className='dark:text-slate-900 font-semibold bg-slate-200 ml-auto hover:scale-125 rounded-full cursor-pointer'/>
      </div>
      <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-slate-900 bg-white py-3">
        <ScrollArea className="flex-1 w-full">
          {items.map((item) => (
            <div key={item.name} className="mb-4">
              <SideItem
                name={item.name}
                icon={item.icon}
                id={item.id}
                url={item.url}
              />
            </div>
          ))}
        </ScrollArea >
      </div>
    </div>
    </>
  );
};

export default SideBarMenu;
