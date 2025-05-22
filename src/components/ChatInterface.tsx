
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI real estate assistant. How can I help you today? I can answer questions about properties, schedule viewings, or provide market information.",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  
  const [input, setInput] = useState('');
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input.trim(),
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I'd be happy to help you find properties that match your criteria. Could you tell me your preferred location, budget, and the number of bedrooms you're looking for?",
        "That's a great question about the property market. Based on recent data, prices in this area have increased by 5% in the last quarter, making it a good time to invest.",
        "I can schedule a viewing for you at this property. What day and time works best for you?",
        "This property at 123 Maple Lane has 3 bedrooms, 2 bathrooms, and is priced at $450,000. It was built in 2015 and has been recently renovated.",
        "Let me check the agent's availability for you. Sarah is free this Saturday between 10am and 2pm for property viewings."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const assistantMessage: Message = {
        id: messages.length + 2,
        content: randomResponse,
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg overflow-hidden border">
      <div className="bg-estate-primary p-4 text-white">
        <h2 className="text-xl font-semibold">PropertyPro AI Assistant</h2>
        <p className="text-sm opacity-80">Ask me anything about real estate</p>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} chat-message`}
            >
              <div 
                className={`
                  max-w-[80%] p-3 rounded-lg 
                  ${message.sender === 'user' 
                    ? 'bg-estate-primary text-white rounded-tr-none' 
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }
                `}
              >
                <div className="flex items-center gap-2 mb-1">
                  {message.sender === 'assistant' && (
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/placeholder.svg" alt="AI" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <span className="text-xs opacity-70">
                    {message.sender === 'user' ? 'You' : 'PropertyPro AI'} • {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="resize-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <Button onClick={handleSend} className="bg-estate-primary hover:bg-blue-700">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
