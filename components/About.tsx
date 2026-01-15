
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    "25+ anos de vivência com alta cilindrada",
    "Atendimento técnico direto e especializado",
    "Transparência absoluta em diagnósticos",
    "Especialistas em Big Bikes e Super Esportivas",
    "Peças e fluidos de alto desempenho",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Lado Esquerdo: Composição de Imagem Técnica */}
        <div className="relative">
          {/* Elemento de Profundidade: Ajustado para ser um detalhe intencional de design */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600/10 -z-0 rounded-full blur-2xl hidden md:block"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-600 -z-0 rounded-2xl opacity-90 hidden md:block shadow-lg"></div>
          
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800">
            <img
              src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=2070&auto=format&fit=crop"
              alt="Ducati Panigale V4 - Especialidade Tuca Racing"
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Lado Direito: Conteúdo e Alinhamentos */}
        <div className="flex flex-col items-start">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-3">Sobre a Tuca Racing</h2>
          <h3 className="text-4xl md:text-5xl font-oswald font-bold text-neutral-900 mb-6 uppercase leading-tight tracking-tighter">
            AUTORIDADE TÉCNICA E <br />
            <span className="text-red-600">VIVÊNCIA REAL</span>
          </h3>
          
          <div className="space-y-6 mb-8 text-left">
            <p className="text-neutral-700 text-lg leading-relaxed font-semibold">
              Nossa história é pautada por mais de 25 anos de vivência e perícia técnica no universo das motocicletas de alta performance.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Na Tuca Racing, a manutenção vai além do básico. Atuamos com diagnósticos precisos e processos rigorosos em Big Bikes e Super Esportivas, oferecendo a segurança de quem conhece profundamente a engenharia e o comportamento dessas máquinas na estrada e na pista.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 mb-10 w-full">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-neutral-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-sm uppercase tracking-tight">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="pt-2 w-full">
            <a 
              href="#servicos" 
              className="inline-flex items-center gap-4 text-red-600 font-bold uppercase tracking-widest text-xs group hover:text-red-700 transition-colors"
            >
              Veja nossos serviços técnicos
              <span className="block w-12 h-0.5 bg-red-600 group-hover:w-20 transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
