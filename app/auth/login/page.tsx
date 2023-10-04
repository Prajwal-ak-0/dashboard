import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LoginModal from '@/components/modals/LoginModal'
import { getServerSession } from 'next-auth'
import React from 'react'

const page =async () => {
    
  return (
    <div>
        <LoginModal/>
    </div>
  )
}

export default page