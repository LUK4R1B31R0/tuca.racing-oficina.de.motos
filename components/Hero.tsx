import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants.tsx';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-neutral-950">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop"
          alt="Oficina de Alta Cilindrada"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 mb-6 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-lg">
            Especialista em Alta Cilindrada
          </span>
          <h1 className="text-5xl md:text-7xl font-oswald font-bold text-white leading-tight uppercase mb-6 tracking-tighter">
            TECNOLOGIA E <br />
            <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">PRECISÃO TÉCNICA</span>
          </h1>
          <p className="text-xl text-neutral-300 mb-10 leading-relaxed font-light">
            Especialistas em manutenção de motos de alta cilindrada. Cuidado técnico, transparente e a confiança de quem realmente vive sobre duas rodas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
            >
              <MessageCircle className="w-5 h-5" />
              Agende seu serviço
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all"
            >
              Nossos Serviços
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-white font-oswald text-2xl font-bold">25+ ANOS</p>
              <p className="text-neutral-400 text-[10px] uppercase tracking-wider font-bold">Experiência com Alta Cilindrada</p>
            </div>
            <div className="hidden sm:block w-px h-