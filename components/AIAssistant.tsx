
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getPathologyAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'سلام! من دستیار هوشمند پاتولوژی دکتر حبیبی هستم. چگونه می‌توانم در درک آسیب‌های ورزشی یا آنالیز بافت به شما کمک کنم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getPathologyAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse || "متأسفانه مشکلی پیش آمد." }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-blue-50 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl border border-blue-100 text-right">
          <div className="p-6 md:p-8 bg-blue-700 text-white flex items-center justify-between flex-row-reverse">
            <div className="flex items-center gap-4 flex-row-reverse">
              <div className="bg-white/20 p-2 rounded-xl">
                <Bot className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">دستیار آسیب‌های ورزشی</h3>
                <p className="text-blue-100 text-[10px] md:text-sm">قدرت گرفته از هوش مصنوعی جمینای</p>
              </div>
            </div>
            <Sparkles className="text-blue-300 w-5 h-5 md:w-6 md:h-6 animate-pulse" />
          </div>

          <div 
            ref={scrollRef}
            className="h-[400px] md:h-[500px] overflow-y-auto p-6 md:p-8 space-y-6 bg-white/50 backdrop-blur-sm scrollbar-thin scrollbar-thumb-blue-200"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`flex gap-3 max-w-[90%] md:max-w-[85%] ${msg.role === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`mt-1 p-2 rounded-full h-fit shrink-0 ${msg.role === 'user' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-700 text-white rounded-tl-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tr-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="flex gap-3 flex-row-reverse">
                  <div className="p-2 rounded-full bg-gray-100 text-gray-500 h-fit">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tr-none border border-gray-100 shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-700" />
                    <span className="text-[10px] md:text-xs text-gray-400 font-medium tracking-tight">در حال تحلیل یافته‌ها...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 md:p-6 bg-white border-t border-gray-100">
            <div className="flex gap-2 md:gap-4 flex-row-reverse">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="درباره آسیب‌های رایج ورزشی یا پاتولوژی بپرسید..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all text-right"
                dir="rtl"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-700 text-white p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-blue-800 disabled:opacity-50 transition-all shadow-lg hover:shadow-blue-200"
              >
                <Send className="w-5 h-5 md:w-6 md:h-6 rtl-flip" />
              </button>
            </div>
            <p className="mt-4 text-[9px] md:text-[10px] text-center text-gray-400 uppercase tracking-tight font-bold">
              سلب مسئولیت: این هوش مصنوعی فقط اطلاعات آموزشی ارائه می‌دهد و جایگزین تشخیص پزشکی نیست.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
