import { useState } from 'react';
import { Paperclip, SendHorizonal, Sparkles } from 'lucide-react';
import Card from '../components/Card';
import { mockMessages, quickPrompts } from '../data/mockData';
import { ChatMessage } from '../types';

export default function AIPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [text, setText] = useState('');

  const sendMessage = (prompt?: string) => {
    const current = prompt || text;
    if (!current.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: current }]);
    setMessages((prev) => [...prev, { id: Date.now() + 1, role: 'assistant', text: `Here is a helpful answer for: ${current}. Focus on the fundamentals, practice with examples, and review with short active recall sessions.` }]);
    setText('');
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
      <Card title="AI Study Assistant">
        <div className="mb-4 max-h-[440px] space-y-3 overflow-y-auto rounded-2xl bg-slate-50 p-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${message.role === 'user' ? 'bg-brand-600 text-white' : 'bg-white text-slate-700 ring-1 ring-slate-200'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          <input value={text} onChange={(e) => setText(e.target.value)} className="input" placeholder="Ask StudySync AI..." />
          <button className="btn-primary" onClick={() => sendMessage()}>
            <SendHorizonal size={16} />
          </button>
        </div>
      </Card>

      <Card title="Quick actions">
        <div className="space-y-2">
          {quickPrompts.map((item) => (
            <button key={item} onClick={() => sendMessage(item)} className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">
              <span>{item}</span>
              <Sparkles size={14} className="text-brand-500" />
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
