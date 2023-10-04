"use client";

import React, { useEffect } from "react";
import { ModeToggle } from "../ModeToggle";
import { CopyPlus, Heart, Search } from "lucide-react";

import Image from "next/image";
import { UserButton, currentUser } from "@clerk/nextjs";
import { SafeUser } from "@/types";
import UserMenu from "./UserMenu";
import Logo from "./Logo";
import { signIn, signOut } from "next-auth/react";

interface NavbarProps {
  user: SafeUser | null;
}

const Navbar = ({ user }: NavbarProps) => {
  return (
    <>
      <div className="md:my-6  sm:my-4  md:mx-6 sm:mx-2 sm:flex sm:flex-row">

        {/* Center search bar */}
        {/* <div className=" md:w-[500px]  md:block hidden md:ml-[550px] md:mr-4 ">
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-2 bg-white border rounded-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
            placeholder="Search..."
          />
          <svg
            className="absolute top-1/2 transform -translate-y-1/2 right-4 w-6 h-6 text-gray-400 transition duration-300 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <Search className="text-gray-600 hover:text-blue-500" size={25} />
          </svg>
        </div>
      </div> */}

        <div className="ml-auto hidden sm:flex flex-row">
          <div className="px-2 md:px-4 transform hover:scale-110 transition-transform duration-300 pt-2">
            <Search className="text-gray-600 hover:text-blue-500" size={25} />
          </div>

          <div className="px-2 md:px-4 transform hover:scale-110 transition-transform duration-300 pt-2">
            <Heart className="text-red-500 hover:text-pink-500" size={25} />
          </div>

          <div className="px-2 md:px-4 transform hover:scale-110 transition-transform duration-300 pt-2">
            <CopyPlus
              className="text-gray-600 hover:text-green-500"
              size={25}
            />
          </div>

          <div className="pl-2 pr-2 pt-2">
            <ModeToggle />
          </div>

          <div className="pl-2 pr-4 pt-2" onClick={()=>{signOut()}}>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>

      <div className="max-sm:mt-2 hidden max-sm:flex max-sm:flex-row max-sm:shadow-md">
        <div className="ml-3 hover:scale-110 flex w-fit">
          <Logo />
          <h1 className="font-semibold mx-2 my-auto text-xl text-gray-800 dark:text-white mb-4 cursor-pointer transition-colors transform hover:glow ">
            KIBITZIN
          </h1>
        </div>

        <div className="ml-auto mr-2 w-fit">
          <UserMenu currentUser={user} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
