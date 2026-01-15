import React from 'react';
import { SERVICES, WHATSAPP_LINK } from '../constants.tsx';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Engenharia e Manutenção</h2>
        <h3 className="text-4xl font-oswald font-bold text-neutral-900 uppercase tracking-tighter">Serviços Técnicos Especializados</h3>
        <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
          Soluções de alta precisão focadas na performance e longevidade de motocicletas de alta cilindrada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 hover:border-red-600/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-neutral-50 p-4 rounded-full inline-block mb-6 group-hover:bg-red-50 transition-colors">
              {service.icon}
            </div>
            <h4 className="text-xl font-oswald font-bold text-neutral-900 uppercase mb-4 tracking-tight">
              {service.title}
            </h4>
            <p className="text-neutral-600 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-neutral-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white text-left">
        <div>
          <h4 className="text-2xl md:text-3xl font-oswald font-bold uppercase mb-2 tracking-tighter">Atendimento Técnico Direto</h4>
          <p className="text-neutral-400 max-w-lg font-light">
            Dúvidas sobre sua motocicleta? Entre em contato e resolva seu problema com especialistas em alta cilindrada.
          </p>
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/10"
        >
          Falar com Especialista
        </a>
      </div>
    </div>
  );
};