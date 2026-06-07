import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: 'Hello! I am the Skyward HR Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply.content }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-80 sm:w-96 h-[500px] bg-surface border border-surface/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 bg-primary text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-semibold text-sm">Skyward AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-surface border border-surface/50 text-text-main rounded-tl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-surface border border-surface/50 p-3 rounded-2xl rounded-tl-none">
                  <Loader2 size={16} className="animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-surface border-t border-surface/50">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Ask something..."
                className="flex-1 bg-background border border-surface/50 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="p-2 bg-primary text-white rounded-xl hover:bg-primary-hover transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-primary text-white rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center transform hover:scale-110"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
