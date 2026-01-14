
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/logo-tuca.png" 
                alt="Tuca Racing Logo" 
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <p className="text-neutral-400 max-w-sm mb-6 leading-relaxed">
              Especialistas em manutenção de motocicletas com foco em qualidade, transparência e confiança. Sua moto cuidada por quem entende de verdade.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-oswald font-bold uppercase mb-6 tracking-widest text-red-600">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-neutral-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-neutral-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-neutral-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contato" className="text-neutral-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-oswald font-bold uppercase mb-6 tracking-widest text-red-600">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Tuca Racing Oficina de Motos. Todos os direitos reservados.</p>
          <p>Desenvolvido com foco em alta performance.</p>
        </div>
      </div>
    </footer>
  );
};