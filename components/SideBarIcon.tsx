"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { items } from './SideBarMenu';
import SideBar from './SideBar';


const SideBarIcon = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleClick = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      <Image
        src='/logo.png'
        alt='Logo'
        width={24}
        height={24}
        className="w-12 ml-1 h-12 mt-6 rounded-full transition-transform transform hover:scale-125 hover:shadow-lg cursor-pointer"
      />
      {menuVisible && (
        <div className="absolute top-0 right-24 bg-white p-2 shadow-md rounded-md">
          <ul>
            {items.map((item:any) => (
              <SideBar
                key={item.id}
                icon={item.icon}
                id={item.id}
                name={item.name}
                url={item.url}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBarIcon;
