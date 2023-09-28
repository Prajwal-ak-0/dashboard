import Image from 'next/image'
import React from 'react'
import SideBarItem from './SideBarItem'
import { Separator } from './ui/separator'
import { ScrollArea } from './ui/scroll-area'
import { Bot, CalendarDays, File, LayoutGrid, ListTodo, Mail, MessageSquare } from 'lucide-react'
import SideBarIcon from './SideBarIcon'

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
    name: 'Tofo',
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
  return (
    <div>
        <Image
        src='/logo.png'
        alt='Logo'
        width={24}
        height={24}
        className="w-12 ml-1 h-12 mt-6 rounded-full transition-transform transform hover:scale-125 hover:shadow-lg cursor-pointer"
      />
        
        <div className='space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-slate-900 bg-white py-3'>
        <Separator
        className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
        /> 
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