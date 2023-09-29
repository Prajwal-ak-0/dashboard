import React from 'react'
import { items } from '../sidebar/SideBarMenu'
import BottomItem from './BottomItem'

const BottomMenu = () => {
  return (
    <div className='w-full bottom-0 left-0 z-30 max-sm:block sm:hidden fixed h-[10%]  shadow-sm bg-white rounded-md'>
        <div className="flex flex-row items-center justify-between overflow-x-auto mx-2">
            {
                items.map((item)=>(
                    <BottomItem
                        key={item.name}
                        label={item.name}
                        icon={item.icon}
                        selected={false}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default BottomMenu