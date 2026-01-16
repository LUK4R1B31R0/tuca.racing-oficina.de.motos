
import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants.tsx';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen md:h-screen flex items-center overflow-hidden bg-neutral-950">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
          alt="Alta Cilindrada de Alta Performance - Tuca Racing"
          className="w-full h-full object-cover opacity-50 object-[70%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black md:bg-gradient-to-r md:from-black md:via-black/80 md:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-20 md:pb-0">
        <div className="max-w-2xl text-left">
          <span className="inline-block py-1 px-3 mb-6 bg-red-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg">
            Especialista em Alta Cilindrada
          </span>
          <h1 className="text-4xl md:text-7xl font-oswald font-bold text-white leading-[1.1] uppercase mb-6 tracking-tighter">
            TECNOLOGIA E <br />
            <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">PRECISÃO TÉCNICA</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed font-light max-w-lg">
            Especialistas em manutenção de motos de alta performance. Cuidado técnico, transparente e a confiança de quem realmente vive sobre duas rodas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-red-900/20 text-sm md:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Agende seu serviço
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all text-sm md:text-base"
            >
              Nossos Serviços
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-12 flex flex-row flex-wrap items-start gap-x-8 gap-y-6 border-t border-white/10 pt-8 text-left">
            <div className="flex-1 min-w-[140px]">
              <p className="text-white font-oswald text-2xl md:text-3xl font-bold leading-none">25+ ANOS</p>
              <p className="text-neutral-400 text-[9px] md:text-[10px] uppercase tracking-wider font-bold mt-2">Experiência Real</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <div className="flex-1 min-w-[140px]">
              <p className="text-white font-oswald text-2xl md:text-3xl font-bold leading-none">100%</p>
              <p className="text-neutral-400 text-[9px] md:text-[10px] uppercase tracking-wider font-bold mt-2">Transparência Técnica</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
