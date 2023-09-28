"use client";

import React, { ReactNode } from 'react'
import SideBarMenu from './sidebar/SideBarMenu'
import SideBar from './sidebar/SideBar'
import useSideBar from '@/hooks/useSideBar'
import useSideMenu from '@/hooks/useSideMenu'
import { cn } from '@/lib/utils';

const Menu = ({children}:{children:ReactNode}) => {
    const sidebar=useSideBar();
    const sidemenu=useSideMenu();

  if(sidebar.isOpen){
    return (
        <div>
            <div className="h-full">
            <div className="md:flex z-30 max-md:hidden h-full w-[170px] flex-col fixed inset-y-0">
              <SideBar/>
            </div>
            <main className="md:pl-[172px] h-full">
              {children}
            </main>
          </div>
        </div>
      )
  }
  return (
    <div>
        <div className="h-full">
        <div className=" md:flex z-30 max-md:hidden h-full w-[170px] flex-col fixed inset-y-0 ">
          <SideBarMenu/>
        </div>
        <main className="md:pl-[172px] h-full">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Menu