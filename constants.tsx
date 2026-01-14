import React from 'react';
import { Settings, Wrench, ShieldCheck, Zap, Gauge, MapPin } from 'lucide-react';
import { ServiceItem, NavItem } from './types.ts';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#home', id: 'home' },
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Serviços', href: '#servicos', id: 'servicos' },
  { label: 'Contato', href: '#contato', id: 'contato' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Revisão de Alta Cilindrada',
    description: 'Diagnóstico técnico avançado com checklist rigoroso de segurança e performance para Big Bikes.',
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
  },
  {
    id: '2',
    title: 'Mecânica de Precisão',
    description: 'Manutenção técnica de motores multi-cilíndricos, ajustes de válvulas e componentes internos de alta performance.',
    icon: <Settings className="w-8 h-8 text-red-600" />,
  },
  {
    id: '3',
    title: 'Sistemas Eletrônicos',
    description: 'Diagnóstico via scanner especializado, calibração de sensores e manutenção de injeção eletrônica avançada.',
    icon: <Zap className="w-8 h-8 text-red-600" />,
  },
  {
    id: '4',
    title: 'Transmissão e Rodagem',
    description: 'Substituição técnica de kits de relação, inspeção de transmissão, montagem e troca de pneus, alinhamento e verificação de desgaste para alta performance.',
    icon: <Gauge className="w-8 h-8 text-red-600" />,
  },
  {
    id: '5',
    title: 'Suspensão Hidráulica',
    description: 'Revisão completa de bengalas e amortecedores, com ajuste de pré-carga e troca de fluidos específicos.',
    icon: <Wrench className="w-8 h-8 text-red-600" />,
  },
  {
    id: '6',
    title: 'Fluidologia Técnica',
    description: 'Substituição de lubrificantes e fluidos de arrefecimento seguindo estritamente as normas técnicas dos fabricantes.',
    icon: <MapPin className="w-8 h-8 text-red-600" />,
  },
];

export const WHATSAPP_LINK = "https://wa.me/5519996602060";