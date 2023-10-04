"use client";

import React, { ReactNode, use } from "react";
import SideBarMenu from "./SideBarMenu";
import SideBar from "./SideBar";
import useSideBar from "@/hooks/useSideBar";
import useSideMenu from "@/hooks/useSideMenu";
import { cn } from "@/lib/utils";
import BottomMenu from "../bottombar/BottomMenu";
import Logo from "../navbar/Logo";
import { LogOut } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { signOut } from "next-auth/react";

const Menu = () => {
  const sidebar = useSideBar();
  const sidemenu = useSideMenu();

  const logout = () => {
    signOut();
  };

  if (sidebar.isOpen) {
    return (
      <div>
        <div className="h-full">
          <div className="md:flex z-30 max-sm:hidden h-full w-fit flex-col fixed inset-y-0">
            <SideBar />
          </div>
          <div className="bottom-0 p-2 rounded-md bg-red-100  hover:shadow-md hover:scale-110 hover:bg-rose-400 cursor-pointer border-black left-0 fixed z-50 mb-4 ml-2">
            <div onClick={logout} className="flex gap-2">
              <LogOut />
              Sign Out
            </div>
          </div>
          <div>
            <BottomMenu />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="h-full">
        <div className=" md:flex z-30 max-sm:hidden h-full w-fit flex-col fixed inset-y-0 ">
          <SideBarMenu />
        </div>
        <div className="bottom-0 p-2 rounded-md bg-red-100  hover:shadow-md hover:scale-110 hover:bg-rose-400 cursor-pointer border-black left-0 fixed z-50 mb-4 ml-2">
          <div onClick={logout} className="flex gap-2">
            <LogOut />
          </div>
        </div>
        <div>
          <BottomMenu />
        </div>
      </div>
    </div>
  );
};

export default Menu;
