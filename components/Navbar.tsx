import React from 'react'
import { ModeToggle } from './ModeToggle'
import { CopyPlus, Heart, Search } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='md:my-6 my-4 md:mx-6 mx-2 flex flex-row'>
        <div className="flex items-center space-x-2">
            <Image
            className="w-10 h-10 rounded-full"
            src="/logo.png"
            width={40}
            height={40} // Replace with the correct path to your logo image
            alt="Logo"
            />
            <h1 className="text-xl font-semibold dark:text-white dark:bg-slate-900  text-gray-800 bg-white">
            Dashboard
            </h1>
        </div>

        <div className="ml-auto flex flex-row">
            <div className="px-2 md:px-4 transform hover:scale-110 transition-transform duration-300">
                <Search className="text-gray-600 hover:text-blue-500" size={25} />
            </div>
        

            <div className="px-2 md:px-4 transform hover:scale-110 transition-transform duration-300">
            <Heart className="text-red-500 hover:text-pink-500" size={25} />
            </div>

            <div className="px-2 md:px-4 transform hover:scale-110 transition-transform duration-300">
            <CopyPlus className="text-gray-600 hover:text-green-500" size={25} />
            </div>

            <div className='pl-2 pr-4'>
                <ModeToggle/>
            </div>
        </div>
    </div>
  )
}

export default Navbar