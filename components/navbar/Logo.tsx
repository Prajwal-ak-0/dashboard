import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image
            src="/logo.png"
            alt="logo"
            className="rounded-full cursor-pointer"
            height="50"
            width="50"
        />
    </div>
  )
}

export default Logo