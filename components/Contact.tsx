import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Contato</h2>
          <h3 className="text-4xl font-oswald font-bold text-neutral-900 mb-8 uppercase tracking-tighter">Agende sua Visita Técnica</h3>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="bg-red-600/10 p-3 rounded-full h-fit">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-1">Localização</h4>
                <p className="text-neutral-600 font-light">Av. Brasil, 372 - Santa Rosa<br />Vinhedo - SP, 13284-044</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-red-600/10 p-3 rounded-full h-fit">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-1">Contato Direto</h4>
                <p className="text-neutral-600 font-light text-lg font-bold">(19) 99660-2060</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-red-600/10 p-3 rounded-full h-fit">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-1">Atendimento</h4>
                <p className="text-neutral-600 font-light text-sm">
                  Segunda a Sexta: 08:30 - 18:00<br />
                  Sábado: 08:30 - 12:00<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-neutral-200">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-4">Acompanhe nossa oficina</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/tucaracing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-neutral-100 rounded-full text-neutral-700 hover:bg-red-600 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-neutral-100 rounded-full text-neutral-700 hover:bg-red-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
           <div className="bg-neutral-100 rounded-3xl overflow-hidden shadow-inner flex-grow relative min-h-[300px]">
              <iframe
                title="Localização Tuca Racing Vinhedo"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.031591147551!2d-46.98595772468537!3d-23.02251337917392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2e9d29837a6b%3A0xc619f5e7f226b8e8!2sAv.%20Brasil%2C%20372%20-%20Santa%20Rosa%2C%20Vinhedo%20-%20SP%2C%2013284-044!5e0!3m2!1spt-BR!2sbr!4v1716381234567"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>
           
           <div className="bg-red-600 p-8 rounded-3xl text-white">
              <h4 className="text-2xl font-oswald font-bold uppercase mb-4 tracking-tighter">Confiança de quem vive motos</h4>
              <p className="mb-6 text-red-100 text-sm font-light">Agende seu atendimento técnico agora e garanta a melhor performance para sua alta cilindrada.</p>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-red-600 py-4 rounded-2xl font-bold uppercase tracking-wider text-center block hover:bg-neutral-50 transition-colors shadow-xl"
              >
                Falar com a Tuca Racing
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};