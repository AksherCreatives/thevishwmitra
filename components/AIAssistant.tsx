import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hey! I'm Vishwmitra's AI workflow assistant. Thinking about streamlining your agency? Ask me anything!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] glass rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
          <div className="p-5 border-b border-white/10 bg-sky-600/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-bold text-sm">Workflow Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 text-sm scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl ${
                  m.role === 'user' ? 'bg-sky-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about team speed..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center hover:bg-sky-500 transition-colors disabled:opacity-50"
              >
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-sky-600 flex items-center justify-center shadow-xl shadow-sky-900/40 hover:scale-110 transition-transform group"
        >
          <i className="fa-solid fa-comment-dots text-2xl group-hover:rotate-12 transition-transform"></i>
          <span className="absolute right-16 top-1/2 -translate-y-1/2 glass px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Ask me anything!
          </span>
        </button>
      )}
    </div>
  );
};