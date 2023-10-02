import React from 'react'
import { ChatInput } from '../components/ChatInput'
import { db } from '@/lib/db'

const ChatLayout =async () => {
    
  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatInput
          name='Prajwal'
          type="conversation"
          apiUrl="/api/socket/direct-messages"
          query={{ recipientId: 'Prajwal' }}
        />
    </div>
  )
}

export default ChatLayout