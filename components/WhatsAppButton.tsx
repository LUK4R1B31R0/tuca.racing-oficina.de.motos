import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants.tsx';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white/20"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-white/20" />
      <span className="absolute -top-1 -right-1 bg-red-600 w-4 h-4 rounded-full border-2 border-white"></span>
    </a>
  );
};