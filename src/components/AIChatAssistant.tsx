import React, { useState } from 'react';
import { MessageSquare, Send, X, Loader2, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: "Hello, I'm your Skyward AI Assistant. How can I help you scale your workforce today?" }
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
    <div className="fixed bottom-8 right-8 z-60">
      {isOpen ? (
        <div className="w-80 sm:w-100 h-150 bg-background border border-border rounded-4xl shadow-2xl flex flex-col overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="p-6 bg-text-primary text-background flex justify-between items-center relative overflow-hidden">
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-sm tracking-tight text-white">Skyward AI</div>
                <div className="text-[10px] font-bold text-primary-400 uppercase tracking-widest">Active Now</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-all relative z-10 text-white">
              <X size={20} />
            </button>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary-600/20 blur-2xl rounded-full pointer-events-none" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-none shadow-premium' 
                    : 'bg-background border border-border text-text-primary rounded-tl-none shadow-premium'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-background border border-border p-4 rounded-2xl rounded-tl-none shadow-premium">
                  <Loader2 size={18} className="animate-spin text-primary-600" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-background border-t border-border">
            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="Ask our AI..."
                className="flex-1 bg-surface border border-border rounded-xl px-5 py-3 text-sm font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600 transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button 
                onClick={handleSend}
                isLoading={loading}
                size="icon"
                className="h-12 w-12 min-w-12 rounded-xl"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary-600 text-white rounded-4xl shadow-lifted hover:shadow-glow transition-all flex items-center justify-center transform hover:scale-110 group relative"
        >
          <Sparkles className="group-hover:rotate-12 transition-transform" size={28} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-danger border-4 border-background rounded-full"></span>
        </button>
      )}
    </div>
  );
}
