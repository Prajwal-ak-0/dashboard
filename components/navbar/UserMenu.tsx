"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import MenuItem from "./MenuItem";
import { SafeUser } from "@/types";
import { CopyPlus, Heart, Menu, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className=" ">
      <div className="hover:scale-110 hover:text-pink-300">
        <div
          onClick={toggleOpen}
          className="
          p-2
          hover:shadow-md
          border-[1px] 
          border-neutral-200 
          rounded-full 
          dark:hover:border-pink-300
          hover:bg-pink-100
          cursor-pointer
          "
        >
          <Menu className="" />
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            ml-auto
            rounded-xl 
            shadow-md
            w-[40vw]
            bg-white 
            right-0
            mr-2
            mt-1
            overflow-hidden    
            text-sm
          "
        >
          <div className="flex flex-col text-black cursor-pointer">
            <MenuItem 
              label="Search" 
              onClick={() => {}} 
              icon={Search}
            />
            <MenuItem
              label="Notifications"
              onClick={() => {}}
              icon={Heart}
            />
            <MenuItem
              label="Add Employee"
              onClick={() => {}}
              icon={CopyPlus}
            />
            <div className="flex hover:bg-pink-100 hover:scale-105 ">
              <div className=" pb-1 px-2 py-2 ">
                <UserButton/>
              </div>
              <h1 className="transition font-semibold px-4 py-3">Manage </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
