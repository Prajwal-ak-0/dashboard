"use client";

import React, { ReactNode } from 'react'
import SideBarMenu from './SideBarMenu'
import SideBar from './SideBar'
import useSideBar from '@/hooks/useSideBar'
import useSideMenu from '@/hooks/useSideMenu'
import { cn } from '@/lib/utils';
import BottomMenu from '../bottombar/BottomMenu';
import Logo from '../navbar/Logo';

const Menu = () => {
    const sidebar=useSideBar();
    const sidemenu=useSideMenu();

  if(sidebar.isOpen){
    return (
        <div>
            <div className="h-full">
            <div className="md:flex z-30 max-sm:hidden h-full w-fit flex-col fixed inset-y-0">
              <SideBar/>
            </div>
            <div>
              <BottomMenu/>
            </div>
          </div>
        </div>
      )
  }
  return (
    <div>
        <div className="h-full">
        <div className=" md:flex z-30 max-sm:hidden h-full w-fit flex-col fixed inset-y-0 ">
          <SideBarMenu/>
        </div>
        <div>
          <BottomMenu/>
        </div>
      </div>
    </div>
  )
}

export default Menu