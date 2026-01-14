
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';
import { Bot, X, Send, Loader2, Bike } from 'lucide-react';

export const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatInstance = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isLoading]);

  const initChat = () => {
    if (!chatInstance.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatInstance.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `Você é o 'Consultor Técnico Tuca Racing', especialista em mecânica de motos de alta cilindrada com 25+ anos de experiência real.
          Seu objetivo é auxiliar clientes a entenderem possíveis causas de sintomas em suas Big Bikes.
          Diretrizes:
          1. Linguagem profissional, altamente técnica e direta.
          2. SEMPRE oriente o agendamento de uma inspeção física na Tuca Racing.
          3. Não faça marketing agressivo, foque em autoridade técnica.
          4. Máximo de 70 palavras por resposta.`,
          temperature: 0.7,
        },
      });
    }
  };

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const userMessage = prompt;
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setPrompt('');
    setIsLoading(true);

    try {
      initChat();
      const response: GenerateContentResponse = await chatInstance.current!.sendMessage({ 
        message: userMessage 
      });
      
      const modelText = response.text || "Poderia reformular sua dúvida técnica? Para um diagnóstico preciso em motos de alta performance, recomendo trazer sua máquina até nossa oficina.";
      setChatHistory(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'model', text: "Instabilidade técnica. Por favor, utilize o WhatsApp para falar direto com nossa equipe técnica." }]);
      chatInstance.current = null;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-50 bg-neutral-900 text-white p-3 rounded-full shadow-xl border border-neutral-700 hover:bg-neutral-800 transition-all flex items-center gap-2 group"
        >
          <Bot className="w-6 h-6 text-red-600" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-bold uppercase tracking-tight">
            Consultor Técnico IA
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[60] w-full max-w-[350px] bg-white rounded-3xl shadow-2xl border border-neutral-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-neutral-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 p-1.5 rounded-full">
                <Bike className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-oswald font-bold uppercase tracking-wider leading-none">Tuca Racing</p>
                <p className="text-[9px] text-red-400 font-bold uppercase tracking-widest mt-1">Especialista em Alta Cilindrada</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-grow h-[350px] overflow-y-auto p-4 bg-neutral-50 flex flex-col gap-4">
            {chatHistory.length === 0 && (
              <div className="text-center py-6">
                <p className="text-neutral-500 text-xs font-medium px-4">Qual comportamento sua alta cilindrada está apresentando?</p>
              </div>
            )}
            {chatHistory.map((chat, idx) => (
              <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] leading-relaxed ${
                  chat.role === 'user' 
                    ? 'bg-red-600 text-white rounded-br-none' 
                    : 'bg-white border border-neutral-200 text-neutral-800 rounded-bl-none shadow-sm'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-neutral-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-red-600 animate-spin" />
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Analisando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleAsk} className="p-4 bg-white border-t border-neutral-100 flex gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Descreva o sintoma técnico..."
              className="flex-grow bg-neutral-100 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:ring-red-600 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              className="bg-red-600 text-white p-2.5 rounded-xl hover:bg-red-700 disabled:opacity-50 transition-colors shadow-lg shadow-red-600/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
