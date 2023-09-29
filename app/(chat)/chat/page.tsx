import React from 'react'
import { ChatInput } from '../components/ChatInput'

const ChatLayout = () => {
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