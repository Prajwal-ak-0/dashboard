"use client";

import Image from 'next/image'
import React, { useCallback } from 'react'
import SideBarItem from './SideBarItem'
import { Separator } from './ui/separator'
import { ScrollArea } from './ui/scroll-area'
import { Bot, CalendarDays, ChevronRight, File, LayoutGrid, ListTodo, Mail, MessageSquare } from 'lucide-react'
import SideBarIcon from './SideBarIcon'
import useSideMenu from '@/hooks/useSideMenu'
import useSideBar from '@/hooks/useSideBar';

export const items = [
  {
    id: '1',
    name: 'Dashboard',
    url: '/dashboard',
    icon:LayoutGrid
  },
  {
    id: '2',
    name: 'Chat',
    url: '/chat',
    icon:MessageSquare
  },
  {
    id: '3',
    name: 'Calender',
    url: '/calender',
    icon:CalendarDays
  },
  {
    id: '4',
    name: 'Todo',
    url: '/todo',
    icon:ListTodo
  },
  {
    id: '5',
    name: 'Chat-bot',
    url: '/chatbot',
    icon:Bot
  },
  {
    id: '6',
    name: 'Mail',
    url: '/mail',
    icon:Mail
  },
  {
    id: '7',
    name: 'File-manager',
    url: '/file',
    icon:File
  },
]

const SideBarMenu = () => {
  const sidemenu=useSideMenu();
  const sidebar=useSideBar();

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
    <div>
        <Image
        src='/logo.png'
        alt='Logo'
        width={24}
        height={24}
        className="w-12 ml-1 h-12 mt-6 rounded-full transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer"
      />
        <div className='w-full flex'>
          <Separator
          className="mr-1 h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-7 ml-2 mt-2"
          /> 
          <ChevronRight onClick={toggle} size={20} className='dark:text-slate-900 bg-slate-200 hover:scale-125 rounded-full cursor-pointer'/>
        </div>
        <div className='space-y-3 flex flex-col items-center h-full text-primary w-full dark:bg-slate-900 bg-white py-2'>
        
        <ScrollArea className="flex-1 w-full">
        {items.map((item) => (
          <div key={item.name} className="mb-4">
            <SideBarItem
              name={item.name}
              icon={item.icon}
              id={item.id}
              url={item.url}
            />
          </div>
        ))}
      </ScrollArea>
        </div>
    </div>
  )
}

export default SideBarMenu