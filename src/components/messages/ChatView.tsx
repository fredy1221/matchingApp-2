import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { MessageInput } from './MessageInput';
import { ChatMessages } from './ChatMessages';
import { useChat } from '../../hooks/useChat';
import type { Conversation } from '../../types';

interface ChatViewProps {
  conversation: Conversation;
  onBack: () => void;
}

export function ChatView({ conversation, onBack }: ChatViewProps) {
  const { messages, sendMessage } = useChat(conversation.id);
  
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col animate-slide-in">
      <header className="bg-white shadow-sm p-4 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-3">
          <img
            src={conversation.partner.profileImage}
            alt={conversation.partner.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{conversation.partner.name}</h2>
            <p className="text-sm text-gray-500">{conversation.hobby}</p>
          </div>
        </div>
      </header>

      <ChatMessages messages={messages} partnerId={conversation.partner.id} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
}